import { GoogleGenAI, Type } from '@google/genai';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY!;

if (!GEMINI_API_KEY) {
  throw new Error(
    'Please define the GEMINI_API_KEY environment variable inside .env.local'
  );
}

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

// ─── Types ───────────────────────────────────────────────────────────────────

export interface ParsedUserQuery {
  lokasi: string | null;
  budget_min: number | null;
  budget_max: number | null;
  suasana: ('quiet' | 'moderate' | 'loud')[];
  kualitas_wifi: ('slow' | 'stable' | 'fast')[];
  ketersediaan_colokan: boolean | null;
  tujuan: string[];
}

// ─── Structured Output Schema for Gemini ─────────────────────────────────────

const parsedQuerySchema = {
  type: Type.OBJECT,
  properties: {
    lokasi: {
      type: Type.STRING,
      description:
        'Area lokasi yang disebutkan pengguna (misal: Tembalang, Banyumanik, Pleburan). Null jika tidak disebutkan.',
      nullable: true,
    },
    budget_min: {
      type: Type.NUMBER,
      description:
        'Budget minimum dalam Rupiah. Null jika tidak disebutkan.',
      nullable: true,
    },
    budget_max: {
      type: Type.NUMBER,
      description:
        'Budget maksimum dalam Rupiah. Null jika tidak disebutkan.',
      nullable: true,
    },
    suasana: {
      type: Type.ARRAY,
      items: { type: Type.STRING, enum: ['quiet', 'moderate', 'loud'] },
      description:
        'Preferensi suasana kafe. Mapping: tenang/sepi → quiet, sedang/biasa → moderate, ramai/seru → loud.',
    },
    kualitas_wifi: {
      type: Type.ARRAY,
      items: { type: Type.STRING, enum: ['slow', 'stable', 'fast'] },
      description:
        'Preferensi kualitas WiFi. Mapping: lambat → slow, stabil → stable, cepat/kencang → fast.',
    },
    ketersediaan_colokan: {
      type: Type.BOOLEAN,
      description:
        'Apakah pengguna membutuhkan colokan/stop kontak. Null jika tidak disebutkan.',
      nullable: true,
    },
    tujuan: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description:
        'Tujuan mengunjungi kafe. Contoh: belajar-sendiri, kerja-kelompok, rapat, nongkrong.',
    },
  },
  required: [
    'lokasi',
    'budget_min',
    'budget_max',
    'suasana',
    'kualitas_wifi',
    'ketersediaan_colokan',
    'tujuan',
  ],
};

// ─── Function 1: Parse User Query ───────────────────────────────────────────

/**
 * Menganalisis input natural language pengguna dan mengekstrak preferensi
 * terstruktur menggunakan Gemini Structured Outputs.
 *
 * @param userInput - Teks bebas dari pengguna (misal: "Cari kafe tenang buat nugas dekat Tembalang")
 * @returns Objek JSON terstruktur berisi preferensi yang diekstrak
 */
export async function parseUserQuery(
  userInput: string
): Promise<ParsedUserQuery> {
  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash',
    contents: [
      {
        role: 'user',
        parts: [
          {
            text: `Kamu adalah asisten AI untuk sistem rekomendasi kafe bernama KAFEin AI. 
Tugasmu adalah menganalisis permintaan pengguna (mahasiswa) dan mengekstrak preferensi mereka.

Konteks:
- Lokasi fokus: area kampus Universitas Diponegoro / Tembalang, Semarang
- Target pengguna: mahasiswa yang mencari kafe untuk belajar/bekerja
- Budget dalam Rupiah (IDR)
- Jika pengguna menyebut "murah", asumsikan budget max sekitar Rp 20.000-25.000
- Jika pengguna menyebut "sedang", asumsikan budget max sekitar Rp 25.000-40.000

Analisis query berikut dan ekstrak preferensinya:
"${userInput}"`,
          },
        ],
      },
    ],
    config: {
      responseMimeType: 'application/json',
      responseSchema: parsedQuerySchema,
    },
  });

  const text = response.text;
  if (!text) {
    throw new Error('Gemini API returned empty response');
  }

  return JSON.parse(text) as ParsedUserQuery;
}

// ─── Function 2: Generate Cafe Reasoning ────────────────────────────────────

export interface CafeRecommendationInput {
  cafe: {
    name: string;
    location_area: string;
    wifi: { available: boolean; speed_rating: string };
    plugs: { available: boolean; quantity: string };
    vibe: string;
    price_max: number;
    operating_hours: { open: string; close: string };
    suitability: string[];
    crowd_estimation: { day: string; peak_hours: string[] }[];
  };
  userQuery: string;
  matchScore: number;
}

/**
 * Menggunakan Gemini API untuk menghasilkan alasan rekomendasi natural
 * berdasarkan data kafe dan input pengguna.
 *
 * @param input - Data kafe, query pengguna, dan skor kecocokan
 * @returns String berisi penjelasan natural mengapa kafe direkomendasikan
 */
export async function generateCafeReasoning(
  input: CafeRecommendationInput
): Promise<string> {
  const { cafe, userQuery, matchScore } = input;

  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash',
    contents: [
      {
        role: 'user',
        parts: [
          {
            text: `Kamu adalah asisten KAFEin AI yang membantu mahasiswa menemukan kafe ideal.
Berdasarkan data faktual dari database kami, buatkan penjelasan singkat dan menarik mengapa kafe ini direkomendasikan.

Permintaan Pengguna: "${userQuery}"

Data Kafe:
- Nama: ${cafe.name}
- Area: ${cafe.location_area}
- WiFi: ${cafe.wifi.available ? `Tersedia (${cafe.wifi.speed_rating})` : 'Tidak tersedia'}
- Colokan: ${cafe.plugs.available ? `Tersedia (${cafe.plugs.quantity})` : 'Tidak tersedia'}
- Suasana: ${cafe.vibe}
- Harga Maks: Rp ${cafe.price_max.toLocaleString('id-ID')}
- Jam Operasional: ${cafe.operating_hours.open} - ${cafe.operating_hours.close}
- Cocok untuk: ${cafe.suitability.join(', ')}
- Skor Kecocokan: ${matchScore}%

Instruksi:
1. Tulis dalam Bahasa Indonesia yang ramah dan kasual (seperti bicara ke teman mahasiswa).
2. Jelaskan MENGAPA kafe ini cocok berdasarkan FAKTA dari database, jangan mengarang.
3. Sebutkan 2-3 keunggulan utama yang relevan dengan kebutuhan pengguna.
4. Maksimal 2-3 kalimat saja, ringkas tapi informatif.
5. Jangan gunakan emoji berlebihan, maksimal 1-2 emoji.`,
          },
        ],
      },
    ],
    config: {
      temperature: 0.7,
      maxOutputTokens: 256,
    },
  });

  const text = response.text;
  if (!text) {
    throw new Error('Gemini API returned empty response for reasoning');
  }

  return text.trim();
}
