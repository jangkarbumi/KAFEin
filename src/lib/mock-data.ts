/**
 * KAFEin AI — Mock Data
 *
 * File ini berisi data contoh (mock) untuk keperluan pengembangan UI.
 * Data akan digantikan oleh data dari MongoDB pada Phase 2.
 */

// ─── Types ───────────────────────────────────────────────────────────────────

export interface MockCafe {
  _id: string;
  name: string;
  location_area: string;
  address: string;
  description: string;
  image_url: string;
  wifi: {
    available: boolean;
    speed_rating: "slow" | "stable" | "fast";
  };
  plugs: {
    available: boolean;
    quantity: "none" | "few" | "many";
  };
  vibe: "quiet" | "moderate" | "loud";
  price_max: number;
  operating_hours: {
    open: string;
    close: string;
  };
  suitability: string[];
  crowd_estimation: {
    day: string;
    peak_hours: string[];
  }[];
}

export interface MockUser {
  _id: string;
  name: string;
  email: string;
  avatar_url: string;
  preferences: {
    preferred_vibe: ("quiet" | "moderate" | "loud")[];
    max_budget: number;
    needs_wifi: boolean;
    needs_plugs: boolean;
  };
  search_history: {
    query: string;
    timestamp: string;
    results_count: number;
  }[];
}

export interface MockSearchResult extends MockCafe {
  match_score: number;
  ai_reasoning: string;
}

// ─── Mock Cafes ──────────────────────────────────────────────────────────────

export const MOCK_CAFES: MockCafe[] = [
  {
    _id: "cafe001",
    name: "Kopi Tuku Tembalang",
    location_area: "Tembalang",
    address: "Jl. Ngesrep Timur V No. 12, Tembalang, Semarang",
    description:
      "Kafe minimalis dengan suasana tenang, cocok untuk belajar sendiri atau mengerjakan tugas. WiFi stabil dan banyak colokan tersedia.",
    image_url: "",
    wifi: { available: true, speed_rating: "fast" },
    plugs: { available: true, quantity: "many" },
    vibe: "quiet",
    price_max: 25000,
    operating_hours: { open: "08:00", close: "23:00" },
    suitability: ["belajar-sendiri", "kerja-kelompok"],
    crowd_estimation: [
      { day: "Senin", peak_hours: ["10:00-12:00", "16:00-18:00"] },
      { day: "Selasa", peak_hours: ["10:00-12:00", "16:00-18:00"] },
      { day: "Rabu", peak_hours: ["10:00-12:00", "16:00-18:00"] },
      { day: "Kamis", peak_hours: ["10:00-12:00", "16:00-18:00"] },
      { day: "Jumat", peak_hours: ["13:00-15:00", "19:00-21:00"] },
      { day: "Sabtu", peak_hours: ["10:00-12:00", "14:00-17:00"] },
      { day: "Minggu", peak_hours: ["09:00-11:00", "15:00-17:00"] },
    ],
  },
  {
    _id: "cafe002",
    name: "Ruang Kopi & Kolaborasi",
    location_area: "Banyumanik",
    address: "Jl. Durian Raya No. 8, Banyumanik, Semarang",
    description:
      "Tempat nongkrong favorit mahasiswa untuk rapat kelompok. Ruangan luas dengan meja besar dan proyektor tersedia.",
    image_url: "",
    wifi: { available: true, speed_rating: "stable" },
    plugs: { available: true, quantity: "many" },
    vibe: "moderate",
    price_max: 30000,
    operating_hours: { open: "09:00", close: "22:00" },
    suitability: ["kerja-kelompok", "rapat"],
    crowd_estimation: [
      { day: "Senin", peak_hours: ["13:00-15:00"] },
      { day: "Selasa", peak_hours: ["13:00-15:00"] },
      { day: "Rabu", peak_hours: ["13:00-15:00", "19:00-21:00"] },
      { day: "Kamis", peak_hours: ["13:00-15:00"] },
      { day: "Jumat", peak_hours: ["14:00-17:00"] },
      { day: "Sabtu", peak_hours: ["10:00-14:00"] },
      { day: "Minggu", peak_hours: ["10:00-13:00"] },
    ],
  },
  {
    _id: "cafe003",
    name: "Kedai Literasi",
    location_area: "Tembalang",
    address: "Jl. Prof. Soedarto No. 45, Tembalang, Semarang",
    description:
      "Kafe bertema buku dengan koleksi bacaan gratis. Suasana sangat tenang, ideal untuk fokus belajar menjelang ujian.",
    image_url: "",
    wifi: { available: true, speed_rating: "fast" },
    plugs: { available: true, quantity: "few" },
    vibe: "quiet",
    price_max: 20000,
    operating_hours: { open: "07:00", close: "22:00" },
    suitability: ["belajar-sendiri"],
    crowd_estimation: [
      { day: "Senin", peak_hours: ["08:00-10:00", "14:00-16:00"] },
      { day: "Selasa", peak_hours: ["08:00-10:00", "14:00-16:00"] },
      { day: "Rabu", peak_hours: ["08:00-10:00"] },
      { day: "Kamis", peak_hours: ["14:00-16:00"] },
      { day: "Jumat", peak_hours: ["09:00-11:00"] },
      { day: "Sabtu", peak_hours: ["09:00-12:00"] },
      { day: "Minggu", peak_hours: ["10:00-12:00"] },
    ],
  },
  {
    _id: "cafe004",
    name: "Brewspace Coffee",
    location_area: "Pleburan",
    address: "Jl. Pleburan Timur No. 22, Pleburan, Semarang",
    description:
      "Kafe modern dengan interior industrial. Cocok untuk nongkrong santai sambil ngopi. Musik indie mengalun pelan.",
    image_url: "",
    wifi: { available: true, speed_rating: "stable" },
    plugs: { available: true, quantity: "few" },
    vibe: "moderate",
    price_max: 35000,
    operating_hours: { open: "10:00", close: "00:00" },
    suitability: ["kerja-kelompok", "rapat"],
    crowd_estimation: [
      { day: "Senin", peak_hours: ["18:00-21:00"] },
      { day: "Selasa", peak_hours: ["18:00-21:00"] },
      { day: "Rabu", peak_hours: ["18:00-21:00"] },
      { day: "Kamis", peak_hours: ["18:00-21:00"] },
      { day: "Jumat", peak_hours: ["17:00-22:00"] },
      { day: "Sabtu", peak_hours: ["14:00-22:00"] },
      { day: "Minggu", peak_hours: ["14:00-20:00"] },
    ],
  },
  {
    _id: "cafe005",
    name: "Warung Kopi Undip",
    location_area: "Tembalang",
    address: "Jl. Teknik Kimia No. 3, Tembalang, Semarang",
    description:
      "Warung kopi sederhana dan murah meriah tepat di depan kampus. Favorit mahasiswa yang budget-nya terbatas tapi butuh WiFi.",
    image_url: "",
    wifi: { available: true, speed_rating: "slow" },
    plugs: { available: true, quantity: "few" },
    vibe: "loud",
    price_max: 12000,
    operating_hours: { open: "07:00", close: "21:00" },
    suitability: ["belajar-sendiri", "kerja-kelompok"],
    crowd_estimation: [
      { day: "Senin", peak_hours: ["08:00-12:00", "13:00-16:00"] },
      { day: "Selasa", peak_hours: ["08:00-12:00", "13:00-16:00"] },
      { day: "Rabu", peak_hours: ["08:00-12:00", "13:00-16:00"] },
      { day: "Kamis", peak_hours: ["08:00-12:00", "13:00-16:00"] },
      { day: "Jumat", peak_hours: ["08:00-12:00"] },
      { day: "Sabtu", peak_hours: ["09:00-12:00"] },
      { day: "Minggu", peak_hours: [] },
    ],
  },
  {
    _id: "cafe006",
    name: "Nala Coffee House",
    location_area: "Banyumanik",
    address: "Jl. Setiabudi No. 88, Banyumanik, Semarang",
    description:
      "Kafe premium dengan desain Scandinavian. Latte art terbaik di Semarang. Tempat favorit untuk meeting profesional.",
    image_url: "",
    wifi: { available: true, speed_rating: "fast" },
    plugs: { available: true, quantity: "many" },
    vibe: "quiet",
    price_max: 45000,
    operating_hours: { open: "08:00", close: "23:00" },
    suitability: ["belajar-sendiri", "rapat"],
    crowd_estimation: [
      { day: "Senin", peak_hours: ["10:00-12:00"] },
      { day: "Selasa", peak_hours: ["10:00-12:00"] },
      { day: "Rabu", peak_hours: ["10:00-12:00", "15:00-17:00"] },
      { day: "Kamis", peak_hours: ["10:00-12:00"] },
      { day: "Jumat", peak_hours: ["15:00-18:00"] },
      { day: "Sabtu", peak_hours: ["11:00-15:00"] },
      { day: "Minggu", peak_hours: ["11:00-14:00"] },
    ],
  },
];

// ─── Mock Search Results ─────────────────────────────────────────────────────

export const MOCK_SEARCH_RESULTS: MockSearchResult[] = [
  {
    ...MOCK_CAFES[0],
    match_score: 95,
    ai_reasoning:
      "Kopi Tuku Tembalang cocok banget buat kamu yang mau nugas dengan tenang. WiFi-nya kencang, colokan banyak, dan lokasinya pas di area Tembalang. Harganya juga ramah kantong mahasiswa ☕",
  },
  {
    ...MOCK_CAFES[2],
    match_score: 88,
    ai_reasoning:
      "Kedai Literasi punya suasana paling tenang di daftar kami. WiFi cepat dan harga mulai dari Rp 12.000 aja. Cocok buat kamu yang butuh fokus maksimal menjelang ujian 📚",
  },
  {
    ...MOCK_CAFES[1],
    match_score: 72,
    ai_reasoning:
      "Ruang Kopi & Kolaborasi ideal kalau kamu butuh tempat rapat kelompok. Meja besar tersedia dan WiFi-nya stabil. Area Banyumanik juga masih dekat dari kampus.",
  },
  {
    ...MOCK_CAFES[5],
    match_score: 68,
    ai_reasoning:
      "Nala Coffee House menawarkan suasana premium dengan WiFi kencang. Memang harganya sedikit lebih tinggi, tapi fasilitasnya sepadan untuk sesi belajar marathon.",
  },
  {
    ...MOCK_CAFES[3],
    match_score: 55,
    ai_reasoning:
      "Brewspace Coffee punya vibe modern dan buka sampai tengah malam. Pas buat kamu yang suka kerja larut malam. WiFi stabil meski colokannya terbatas.",
  },
];

// ─── Mock User ───────────────────────────────────────────────────────────────

export const MOCK_USER: MockUser = {
  _id: "user001",
  name: "Andi Mahasiswa",
  email: "andi@students.undip.ac.id",
  avatar_url: "",
  preferences: {
    preferred_vibe: ["quiet", "moderate"],
    max_budget: 30000,
    needs_wifi: true,
    needs_plugs: true,
  },
  search_history: [
    {
      query: "Kafe tenang buat nugas dekat Tembalang",
      timestamp: "2026-06-11T14:30:00Z",
      results_count: 5,
    },
    {
      query: "Tempat rapat kelompok WiFi kencang budget 30rb",
      timestamp: "2026-06-10T09:15:00Z",
      results_count: 3,
    },
    {
      query: "Kafe buka sampai malam ada colokan",
      timestamp: "2026-06-09T20:00:00Z",
      results_count: 4,
    },
    {
      query: "Warung kopi murah dekat kampus",
      timestamp: "2026-06-08T11:00:00Z",
      results_count: 2,
    },
    {
      query: "Kafe aesthetic Banyumanik",
      timestamp: "2026-06-07T16:45:00Z",
      results_count: 3,
    },
  ],
};

// ─── Helper: Format Rupiah ───────────────────────────────────────────────────

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

// ─── Helper: Vibe Label ──────────────────────────────────────────────────────

export function getVibeLabel(vibe: string): string {
  const labels: Record<string, string> = {
    quiet: "Tenang",
    moderate: "Sedang",
    loud: "Ramai",
  };
  return labels[vibe] || vibe;
}

// ─── Helper: WiFi Label ──────────────────────────────────────────────────────

export function getWifiLabel(speed: string): string {
  const labels: Record<string, string> = {
    slow: "Lambat",
    stable: "Stabil",
    fast: "Kencang",
  };
  return labels[speed] || speed;
}

// ─── Helper: Plugs Label ────────────────────────────────────────────────────

export function getPlugsLabel(quantity: string): string {
  const labels: Record<string, string> = {
    none: "Tidak Ada",
    few: "Sedikit",
    many: "Banyak",
  };
  return labels[quantity] || quantity;
}

// ─── Helper: Suitability Label ───────────────────────────────────────────────

export function getSuitabilityLabel(suit: string): string {
  const labels: Record<string, string> = {
    "belajar-sendiri": "Belajar Sendiri",
    "kerja-kelompok": "Kerja Kelompok",
    rapat: "Rapat",
    nongkrong: "Nongkrong",
  };
  return labels[suit] || suit;
}
