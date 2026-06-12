/**
 * KAFEin AI — Mock Data (Real Cafes Tembalang)
 *
 * Data kafe nyata dari area Tembalang, Semarang.
 * Hanya kafe yang memiliki foto yang dimasukkan.
 */

// ─── Types ───────────────────────────────────────────────────────────────────

export interface MockCafe {
  _id: string;
  name: string;
  location_area: string;
  address: string;
  description: string;
  image: string;
  rating: number;
  review_count: number;
  distance_km: number;
  wifi: {
    available: boolean;
    speed: "slow" | "stable" | "fast";
    speed_label: string;
  };
  plugs: {
    available: boolean;
    coverage: string;
  };
  noise_level: string;
  vibe: "quiet" | "moderate" | "loud";
  ac: string;
  basic_spent: number;
  operating_hours: { open: string; close: string };
  suitability: string[];
  tags: string[];
  menu_prices: { item: string; price: number }[];
  capacity_status: string;
  capacity_percent: number;
  crowd_estimation: { hour: string; level: number }[];
}

export interface MockUser {
  _id: string;
  name: string;
  email: string;
  avatar_url: string;
  verified_student: boolean;
  preferences: string[];
  saved_cafes: string[];
  search_history: {
    query: string;
    timestamp: string;
    results_count: number;
  }[];
}

export interface MockSearchResult extends MockCafe {
  match_score: number;
  ai_reasoning: string;
  match_label: string;
}

// ─── Mock Cafes ──────────────────────────────────────────────────────────────

export const MOCK_CAFES: MockCafe[] = [
  {
    _id: "hasari",
    name: "Hasari Cafe",
    location_area: "Tembalang",
    address: "Jl. Tirto Agung, Tembalang, Semarang",
    description:
      "Cafe modern dengan interior biru-teal yang aesthetic. Colokan tersedia di setiap meja dan WiFi kencang, cocok untuk nugas marathon.",
    image: "/hasari.jpg",
    rating: 4.5,
    review_count: 89,
    distance_km: 1.2,
    wifi: { available: true, speed: "fast", speed_label: "Kencang" },
    plugs: { available: true, coverage: "Setiap meja" },
    noise_level: "Moderate (ramai di jam tertentu)",
    vibe: "moderate",
    ac: "Sejuk (Full AC Indoor)",
    basic_spent: 70000,
    operating_hours: { open: "10:00", close: "23:00" },
    suitability: ["belajar-sendiri", "kerja-kelompok"],
    tags: ["Modern Interior", "Full AC"],
    menu_prices: [
      { item: "Lychee Mist Steamboat", price: 60000 },
      { item: "Snack", price: 25000 },
      { item: "Makanan Berat", price: 40000 },
      { item: "Minuman", price: 30000 },
    ],
    capacity_status: "Sedang",
    capacity_percent: 55,
    crowd_estimation: [
      { hour: "8 AM", level: 15 },
      { hour: "10 AM", level: 35 },
      { hour: "12 PM", level: 70 },
      { hour: "2 PM", level: 55 },
      { hour: "4 PM", level: 60 },
      { hour: "6 PM", level: 80 },
      { hour: "8 PM", level: 65 },
    ],
  },
  {
    _id: "klu",
    name: "Klu Cafe",
    location_area: "Tembalang",
    address: "Jl. Tembalang Raya, Tembalang, Semarang",
    description:
      "Cafe semi-outdoor dengan pohon besar di tengah area. Suasana tenang dan sepi, cocok buat yang suka nugas di alam terbuka.",
    image: "/klu.jpg",
    rating: 4.3,
    review_count: 52,
    distance_km: 1.8,
    wifi: { available: true, speed: "stable", speed_label: "Cukup Kencang" },
    plugs: { available: true, coverage: "Terbatas (semi-outdoor)" },
    noise_level: "Low (Suara alam)",
    vibe: "quiet",
    ac: "Alami (Semi-outdoor)",
    basic_spent: 70000,
    operating_hours: { open: "09:00", close: "22:00" },
    suitability: ["belajar-sendiri", "nongkrong"],
    tags: ["Semi-Outdoor", "Natural Vibe", "Quiet"],
    menu_prices: [
      { item: "Nasi Saikoro Wagyu", price: 42000 },
      { item: "Snack", price: 22000 },
      { item: "Makanan Berat", price: 35000 },
      { item: "Minuman", price: 25000 },
    ],
    capacity_status: "Sepi",
    capacity_percent: 20,
    crowd_estimation: [
      { hour: "8 AM", level: 5 },
      { hour: "10 AM", level: 15 },
      { hour: "12 PM", level: 30 },
      { hour: "2 PM", level: 25 },
      { hour: "4 PM", level: 35 },
      { hour: "6 PM", level: 30 },
      { hour: "8 PM", level: 20 },
    ],
  },
  {
    _id: "ambaru",
    name: "The Ambaru",
    location_area: "Tembalang",
    address: "Jl. Banjarsari, Tembalang, Semarang",
    description:
      "Cafe outdoor bergaya industrial dengan suasana malam yang keren. Colokan cukup banyak tapi hoki-hokian. Menu premium dengan harga agak mahal.",
    image: "/ambaru.jpg",
    rating: 4.4,
    review_count: 134,
    distance_km: 2.0,
    wifi: { available: true, speed: "stable", speed_label: "Cukup Kencang" },
    plugs: { available: true, coverage: "Cukup banyak (hoki-hokian)" },
    noise_level: "Moderate (Ramai malam minggu)",
    vibe: "moderate",
    ac: "Alami (Outdoor)",
    basic_spent: 75000,
    operating_hours: { open: "11:00", close: "23:00" },
    suitability: ["nongkrong", "kerja-kelompok"],
    tags: ["Industrial Style", "Outdoor", "Premium"],
    menu_prices: [
      { item: "Sop Iga", price: 65000 },
      { item: "Snack", price: 27000 },
      { item: "Makanan Berat", price: 45000 },
      { item: "Minuman", price: 30000 },
    ],
    capacity_status: "Sedang",
    capacity_percent: 50,
    crowd_estimation: [
      { hour: "8 AM", level: 0 },
      { hour: "10 AM", level: 10 },
      { hour: "12 PM", level: 40 },
      { hour: "2 PM", level: 35 },
      { hour: "4 PM", level: 45 },
      { hour: "6 PM", level: 70 },
      { hour: "8 PM", level: 90 },
    ],
  },
  {
    _id: "antarakata",
    name: "Antarakata Coffee",
    location_area: "Tembalang",
    address: "Jl. Sirojudin, Tembalang, Semarang",
    description:
      "Coffee shop dengan tampilan depan yang eye-catching. Colokan di setiap meja dan WiFi kencang. Menu premium mulai dari steak hingga kopi spesial.",
    image: "/antarakata.jpg",
    rating: 4.6,
    review_count: 201,
    distance_km: 1.5,
    wifi: { available: true, speed: "fast", speed_label: "Kencang" },
    plugs: { available: true, coverage: "Setiap meja" },
    noise_level: "Moderate (Lumayan ramai)",
    vibe: "moderate",
    ac: "Sejuk (Full AC Indoor)",
    basic_spent: 85000,
    operating_hours: { open: "10:00", close: "00:00" },
    suitability: ["kerja-kelompok", "rapat", "nongkrong"],
    tags: ["Night Vibes", "Premium Menu", "Spacious"],
    menu_prices: [
      { item: "Dry Sub Pepper Steak", price: 140000 },
      { item: "Snack", price: 32000 },
      { item: "Makanan Berat", price: 50000 },
      { item: "Minuman", price: 35000 },
    ],
    capacity_status: "Sedang",
    capacity_percent: 60,
    crowd_estimation: [
      { hour: "8 AM", level: 0 },
      { hour: "10 AM", level: 20 },
      { hour: "12 PM", level: 50 },
      { hour: "2 PM", level: 45 },
      { hour: "4 PM", level: 55 },
      { hour: "6 PM", level: 75 },
      { hour: "8 PM", level: 85 },
    ],
  },
  {
    _id: "ejaan",
    name: "Ejaan",
    location_area: "Tembalang",
    address: "Jl. Tirto Agung Raya, Tembalang, Semarang",
    description:
      "Cafe mungil bertema sandwich & pasta. Harga paling terjangkau di Tembalang! WiFi kencang dan beberapa meja ada colokan.",
    image: "/ejaan.jpg",
    rating: 4.2,
    review_count: 67,
    distance_km: 0.8,
    wifi: { available: true, speed: "fast", speed_label: "Kencang" },
    plugs: { available: true, coverage: "Beberapa meja" },
    noise_level: "Moderate (Ramai di outdoor)",
    vibe: "moderate",
    ac: "Sejuk (Indoor AC)",
    basic_spent: 47000,
    operating_hours: { open: "10:00", close: "22:00" },
    suitability: ["belajar-sendiri", "nongkrong"],
    tags: ["Budget Friendly", "Cozy", "Sandwich & Pasta"],
    menu_prices: [
      { item: "Beef Teriyaki", price: 28000 },
      { item: "Snack", price: 19000 },
      { item: "Makanan Berat", price: 26000 },
      { item: "Minuman", price: 21000 },
    ],
    capacity_status: "Sedang",
    capacity_percent: 55,
    crowd_estimation: [
      { hour: "8 AM", level: 10 },
      { hour: "10 AM", level: 30 },
      { hour: "12 PM", level: 65 },
      { hour: "2 PM", level: 50 },
      { hour: "4 PM", level: 55 },
      { hour: "6 PM", level: 60 },
      { hour: "8 PM", level: 40 },
    ],
  },
  {
    _id: "kov",
    name: "KOV Coffee",
    location_area: "Tembalang",
    address: "Jl. Ngesrep Timur, Tembalang, Semarang",
    description:
      "Cafe heritage dengan vibes klasik. Colokan per meja tersedia. RAME BANGET jadi prepare mental ya! Menu terjangkau untuk budget mahasiswa.",
    image: "/KOV.jpg",
    rating: 4.7,
    review_count: 312,
    distance_km: 1.0,
    wifi: { available: true, speed: "stable", speed_label: "Cukup" },
    plugs: { available: true, coverage: "Setiap meja" },
    noise_level: "High (Sangat ramai)",
    vibe: "loud",
    ac: "Sejuk (Indoor AC)",
    basic_spent: 55000,
    operating_hours: { open: "10:00", close: "23:00" },
    suitability: ["nongkrong", "kerja-kelompok"],
    tags: ["Heritage Vibes", "Affordable", "Popular"],
    menu_prices: [
      { item: "KOV Mix Platter", price: 30000 },
      { item: "Croissant Burger", price: 30000 },
      { item: "Makanan Berat", price: 26000 },
      { item: "Minuman", price: 18000 },
    ],
    capacity_status: "Ramai",
    capacity_percent: 85,
    crowd_estimation: [
      { hour: "8 AM", level: 20 },
      { hour: "10 AM", level: 50 },
      { hour: "12 PM", level: 85 },
      { hour: "2 PM", level: 80 },
      { hour: "4 PM", level: 90 },
      { hour: "6 PM", level: 95 },
      { hour: "8 PM", level: 85 },
    ],
  },
  {
    _id: "ataplangit",
    name: "Atap Langit",
    location_area: "Tembalang",
    address: "Jl. Prof. Soedarto, Tembalang, Semarang",
    description:
      "Cafe indoor dengan dinding putih bersih dan suasana sepi. Colokan per meja, WiFi cukup kencang. Hidden gem di Tembalang!",
    image: "/ataplangit.jpg",
    rating: 4.1,
    review_count: 43,
    distance_km: 1.3,
    wifi: { available: true, speed: "stable", speed_label: "Cukup Kencang" },
    plugs: { available: true, coverage: "Setiap meja" },
    noise_level: "Low (Sepi dan tenang)",
    vibe: "quiet",
    ac: "Sejuk (Indoor AC)",
    basic_spent: 55000,
    operating_hours: { open: "09:00", close: "22:00" },
    suitability: ["belajar-sendiri", "rapat"],
    tags: ["Hidden Gem", "Quiet", "Clean Interior"],
    menu_prices: [
      { item: "Mix Bucket Extra Large", price: 59000 },
      { item: "Snack", price: 20000 },
      { item: "Makanan Berat", price: 30000 },
      { item: "Minuman", price: 18000 },
    ],
    capacity_status: "Sepi",
    capacity_percent: 20,
    crowd_estimation: [
      { hour: "8 AM", level: 5 },
      { hour: "10 AM", level: 15 },
      { hour: "12 PM", level: 35 },
      { hour: "2 PM", level: 30 },
      { hour: "4 PM", level: 25 },
      { hour: "6 PM", level: 35 },
      { hour: "8 PM", level: 20 },
    ],
  },
  {
    _id: "embunsenja",
    name: "Embun Senja",
    location_area: "Tembalang",
    address: "Jl. Bukit Sari, Tembalang, Semarang",
    description:
      "Cafe semi-outdoor dengan view sunset yang cantik. Suasana sepi dan nyaman, cocok untuk nugas santai sambil menikmati senja.",
    image: "/embunsenja.jpg",
    rating: 4.4,
    review_count: 78,
    distance_km: 2.5,
    wifi: { available: true, speed: "stable", speed_label: "Cukup Kencang" },
    plugs: { available: true, coverage: "Terbatas (cukup sedikit)" },
    noise_level: "Low (Sepi dan tenang)",
    vibe: "quiet",
    ac: "Alami (Semi-outdoor, angin senja)",
    basic_spent: 55000,
    operating_hours: { open: "14:00", close: "22:00" },
    suitability: ["belajar-sendiri", "nongkrong"],
    tags: ["Sunset View", "Outdoor", "Peaceful"],
    menu_prices: [
      { item: "Platter", price: 55000 },
      { item: "Snack", price: 20000 },
      { item: "Makanan Berat", price: 28000 },
      { item: "Minuman", price: 22000 },
    ],
    capacity_status: "Sepi",
    capacity_percent: 15,
    crowd_estimation: [
      { hour: "8 AM", level: 0 },
      { hour: "10 AM", level: 0 },
      { hour: "12 PM", level: 0 },
      { hour: "2 PM", level: 15 },
      { hour: "4 PM", level: 35 },
      { hour: "6 PM", level: 50 },
      { hour: "8 PM", level: 30 },
    ],
  },
  {
    _id: "kama",
    name: "Ka.Ma",
    location_area: "Tembalang",
    address: "Jl. Tirto Agung, Tembalang, Semarang",
    description:
      "Cafe dengan interior kayu dan natural light berlimpah. WiFi kencang pol! Colokan per meja ada tapi beberapa titik nggak ada (agak hoki-hokian).",
    image: "/Ka.Ma.jpg",
    rating: 4.6,
    review_count: 156,
    distance_km: 1.0,
    wifi: { available: true, speed: "fast", speed_label: "Kencang Pol" },
    plugs: { available: true, coverage: "Sebagian besar meja (hoki-hokian)" },
    noise_level: "Moderate (Cukup ramai)",
    vibe: "moderate",
    ac: "Sejuk (AC + Natural Breeze)",
    basic_spent: 75000,
    operating_hours: { open: "08:00", close: "23:00" },
    suitability: ["belajar-sendiri", "kerja-kelompok", "rapat"],
    tags: ["Natural Light", "Wooden Interior", "V60 Specialty"],
    menu_prices: [
      { item: "V60 Seasonal Beans", price: 48000 },
      { item: "Snack", price: 32000 },
      { item: "Makanan Berat", price: 44000 },
      { item: "Minuman", price: 25000 },
    ],
    capacity_status: "Sedang",
    capacity_percent: 60,
    crowd_estimation: [
      { hour: "8 AM", level: 20 },
      { hour: "10 AM", level: 45 },
      { hour: "12 PM", level: 65 },
      { hour: "2 PM", level: 60 },
      { hour: "4 PM", level: 70 },
      { hour: "6 PM", level: 75 },
      { hour: "8 PM", level: 55 },
    ],
  },
  {
    _id: "matera",
    name: "Matera",
    location_area: "Tembalang",
    address: "Jl. Banjarsari Raya, Tembalang, Semarang",
    description:
      "Cafe semi-outdoor dengan dinding roster brick yang unik. Suasana warm dan cozy, colokan per meja tersedia. Menu terjangkau.",
    image: "/matera.jpg",
    rating: 4.3,
    review_count: 91,
    distance_km: 1.7,
    wifi: { available: true, speed: "stable", speed_label: "Cukup Kencang" },
    plugs: { available: true, coverage: "Setiap meja" },
    noise_level: "Moderate (Cukup ramai)",
    vibe: "moderate",
    ac: "Alami (Semi-outdoor, warm vibes)",
    basic_spent: 60000,
    operating_hours: { open: "10:00", close: "22:00" },
    suitability: ["belajar-sendiri", "nongkrong", "kerja-kelompok"],
    tags: ["Brick Aesthetic", "Warm Vibes", "Cozy"],
    menu_prices: [
      { item: "Menu Termahal", price: 35000 },
      { item: "Snack", price: 25000 },
      { item: "Makanan Berat", price: 28000 },
      { item: "Minuman", price: 22000 },
    ],
    capacity_status: "Sedang",
    capacity_percent: 55,
    crowd_estimation: [
      { hour: "8 AM", level: 10 },
      { hour: "10 AM", level: 30 },
      { hour: "12 PM", level: 55 },
      { hour: "2 PM", level: 50 },
      { hour: "4 PM", level: 60 },
      { hour: "6 PM", level: 70 },
      { hour: "8 PM", level: 50 },
    ],
  },
  {
    _id: "converso",
    name: "Converso Coffee",
    location_area: "Tembalang",
    address: "Jl. Prof. Soedarto, Tembalang, Semarang",
    description:
      "Cafe outdoor bergaya container industrial dengan area luas. Colokan per meja, WiFi cukup kencang. Ramai di jam-jam tertentu tapi banyak tempat duduk.",
    image: "/converso.jpg",
    rating: 4.5,
    review_count: 178,
    distance_km: 1.4,
    wifi: { available: true, speed: "stable", speed_label: "Cukup Kencang" },
    plugs: { available: true, coverage: "Setiap meja" },
    noise_level: "Moderate (Ramai di jam tertentu)",
    vibe: "moderate",
    ac: "Alami (Outdoor)",
    basic_spent: 70000,
    operating_hours: { open: "10:00", close: "23:00" },
    suitability: ["kerja-kelompok", "nongkrong", "rapat"],
    tags: ["Container Style", "Spacious", "Industrial"],
    menu_prices: [
      { item: "Grilled Wagyu Ribeye", price: 96000 },
      { item: "Snack", price: 22000 },
      { item: "Makanan Berat", price: 40000 },
      { item: "Minuman", price: 22000 },
    ],
    capacity_status: "Sedang",
    capacity_percent: 50,
    crowd_estimation: [
      { hour: "8 AM", level: 5 },
      { hour: "10 AM", level: 25 },
      { hour: "12 PM", level: 55 },
      { hour: "2 PM", level: 45 },
      { hour: "4 PM", level: 50 },
      { hour: "6 PM", level: 75 },
      { hour: "8 PM", level: 70 },
    ],
  },
];

// ─── Mock Search Results ─────────────────────────────────────────────────────

export const MOCK_SEARCH_RESULTS: MockSearchResult[] = [
  {
    ...MOCK_CAFES[1], // Klu Cafe - sepi
    match_score: 96,
    match_label: "Top AI Match",
    ai_reasoning:
      "Cocok karena: Saat ini sedang sepi, WiFi stabil, dan suasana alam yang tenang cocok untuk fokus belajar.",
  },
  {
    ...MOCK_CAFES[6], // Atap Langit - sepi
    match_score: 92,
    match_label: "Perfect for Focus",
    ai_reasoning:
      "Cocok karena: Suasana paling sepi di Tembalang. Indoor ber-AC dengan colokan di setiap meja. Ideal untuk nugas marathon.",
  },
  {
    ...MOCK_CAFES[7], // Embun Senja - sepi
    match_score: 88,
    match_label: "Sunset Study Spot",
    ai_reasoning:
      "Cocok karena: Sepi dan pemandangan sunset. WiFi cukup kencang meski colokan terbatas. Buka mulai jam 2 siang.",
  },
  {
    ...MOCK_CAFES[8], // Ka.Ma - moderate tapi wifi kencang
    match_score: 82,
    match_label: "Best WiFi",
    ai_reasoning:
      "Catatan AI: Cukup ramai saat ini, namun WiFi paling kencang di Tembalang dan natural light bikin betah lama-lama.",
  },
  {
    ...MOCK_CAFES[0], // Hasari - moderate
    match_score: 75,
    match_label: "Good Value",
    ai_reasoning:
      "Catatan AI: WiFi kencang dan colokan lengkap. Ramai di jam tertentu tapi masih dapet tempat duduk.",
  },
];

// ─── Alternative Cafes (for detail page) ────────────────────────────────────

export const MOCK_ALTERNATIVES = [
  {
    _id: "ejaan",
    name: "Ejaan",
    image: "/ejaan.jpg",
    distance: "0.8 km",
    rating: 4.2,
    quote: "Lebih murah dan cozy, cocok untuk nugas ringan.",
  },
  {
    _id: "matera",
    name: "Matera",
    image: "/matera.jpg",
    distance: "1.7 km",
    rating: 4.3,
    quote: "Suasana warm dengan roster brick. Harga terjangkau.",
  },
];

// ─── Mock User ───────────────────────────────────────────────────────────────

export const MOCK_USER: MockUser = {
  _id: "user001",
  name: "Alex Chen",
  email: "alex.c@university.edu",
  avatar_url: "",
  verified_student: true,
  preferences: ["Fast WiFi", "Power Outlets"],
  saved_cafes: ["klu", "kama"],
  search_history: [
    {
      query: "Cafes open past 10 PM",
      timestamp: "2026-06-11T14:30:00Z",
      results_count: 4,
    },
    {
      query: "Quiet spots near campus",
      timestamp: "2026-06-10T09:15:00Z",
      results_count: 3,
    },
    {
      query: "Group study tables",
      timestamp: "2026-06-09T10:00:00Z",
      results_count: 5,
    },
  ],
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getVibeLabel(vibe: string): string {
  const labels: Record<string, string> = {
    quiet: "Sepi",
    moderate: "Cukup Ramai",
    loud: "Ramai",
  };
  return labels[vibe] || vibe;
}

export function getVibeColor(vibe: string): string {
  const colors: Record<string, string> = {
    quiet: "text-green-700 bg-green-50 border-green-200",
    moderate: "text-amber-700 bg-amber-50 border-amber-200",
    loud: "text-red-700 bg-red-50 border-red-200",
  };
  return colors[vibe] || "";
}

export function getVibeDot(vibe: string): string {
  const dots: Record<string, string> = {
    quiet: "bg-green-500",
    moderate: "bg-amber-500",
    loud: "bg-red-500",
  };
  return dots[vibe] || "bg-gray-500";
}

export function formatBudget(spent: number): string {
  if (spent <= 50000) return "$$";
  if (spent <= 75000) return "$$$";
  return "$$$$";
}

export function getSuitabilityLabel(suit: string): string {
  const labels: Record<string, string> = {
    "belajar-sendiri": "Tugas Individu",
    "kerja-kelompok": "Kerja Kelompok",
    rapat: "Meeting Online",
    nongkrong: "Nongkrong Santai",
  };
  return labels[suit] || suit;
}
