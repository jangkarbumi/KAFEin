import Link from "next/link";
import Image from "next/image";
import { Wifi, Plug, Volume2, Sparkles, ArrowRight } from "lucide-react";
import { MOCK_CAFES, formatRupiah, getVibeLabel, getVibeDot } from "@/lib/mock-data";

export default function SmartPicks() {
  // Pick 3 diverse cafes for the bento layout
  const featured = [MOCK_CAFES[8], MOCK_CAFES[5], MOCK_CAFES[9]]; // Ka.Ma, KOV, Matera

  return (
    <section className="py-16 px-4 sm:px-6 bg-kf-bg">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-kf-brown" />
              <span className="text-xs font-semibold text-kf-brown uppercase tracking-widest">
                Smart Picks
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-kf-text tracking-tight">
              Rekomendasi AI Terbaik
            </h2>
            <p className="text-kf-text-secondary text-sm mt-1 max-w-md">
              Disusun berdasarkan ulasan mahasiswa dan tingkat kepadatan real-time.
            </p>
          </div>
          <Link
            href="/search"
            className="hidden sm:flex items-center gap-1 text-sm text-kf-text-secondary hover:text-kf-brown transition-colors"
          >
            Lihat Semua <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Large Card (left, spans 2 rows) */}
          <SmartPickCardLarge cafe={featured[0]} />

          {/* Right column: 2 stacked cards */}
          <div className="flex flex-col gap-4">
            <SmartPickCardSmall cafe={featured[1]} />
            <SmartPickCardSmall cafe={featured[2]} />
          </div>
        </div>

        {/* Mobile: See All */}
        <Link
          href="/search"
          className="sm:hidden flex items-center justify-center gap-1 text-sm text-kf-text-secondary hover:text-kf-brown transition-colors mt-6"
        >
          Lihat Semua <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}

// ─── Large Card ──────────────────────────────────────────────────────────────

function SmartPickCardLarge({ cafe }: { cafe: (typeof MOCK_CAFES)[number] }) {
  return (
    <Link href={`/cafe/${cafe._id}`} className="card overflow-hidden md:col-span-2 group">
      <div className="flex flex-col sm:flex-row h-full">
        {/* Image */}
        <div className="relative w-full sm:w-1/2 h-48 sm:h-auto min-h-[220px]">
          <Image
            src={cafe.image}
            alt={cafe.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Capacity Badge */}
          <div className="absolute bottom-3 left-3">
            <span className={`badge ${cafe.vibe === "quiet" ? "badge-green" : cafe.vibe === "moderate" ? "badge-yellow" : "badge-red"}`}>
              <span className={`w-2 h-2 rounded-full ${getVibeDot(cafe.vibe)}`} />
              Kapasitas: {getVibeLabel(cafe.vibe)} ({cafe.capacity_percent}%)
            </span>
          </div>
          {/* Top Match Badge */}
          <div className="absolute top-3 right-3">
            <span className="badge badge-outline bg-white/90 backdrop-blur-sm text-kf-brown font-semibold text-xs">
              ✦ Top Match: Fokus
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 flex-1 flex flex-col">
          <h3 className="text-lg font-bold text-kf-text group-hover:text-kf-brown transition-colors">
            {cafe.name}
          </h3>
          <p className="text-sm text-kf-text-secondary mt-1 leading-relaxed line-clamp-2">
            {cafe.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {cafe.tags.map((tag) => (
              <span key={tag} className="badge badge-outline text-xs">
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-auto pt-4 flex items-center justify-between">
            <div className="flex items-center gap-3 text-kf-text-muted">
              {cafe.wifi.available && <Wifi className="w-4 h-4" />}
              {cafe.plugs.available && <Plug className="w-4 h-4" />}
              <Volume2 className="w-4 h-4" />
            </div>
            <span className="text-sm font-semibold text-kf-brown">
              {formatRupiah(cafe.basic_spent - 20000)} - {formatRupiah(cafe.basic_spent + 5000)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ─── Small Card ──────────────────────────────────────────────────────────────

function SmartPickCardSmall({ cafe }: { cafe: (typeof MOCK_CAFES)[number] }) {
  return (
    <Link href={`/cafe/${cafe._id}`} className="card overflow-hidden group flex-1">
      {/* Image */}
      <div className="relative h-36">
        <Image
          src={cafe.image}
          alt={cafe.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-3 left-3">
          <span className={`badge ${cafe.vibe === "quiet" ? "badge-green" : cafe.vibe === "moderate" ? "badge-yellow" : "badge-red"}`}>
            <span className={`w-2 h-2 rounded-full ${getVibeDot(cafe.vibe)}`} />
            Kapasitas: {getVibeLabel(cafe.vibe)} ({cafe.capacity_percent}%)
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-kf-text group-hover:text-kf-brown transition-colors">
          {cafe.name}
        </h3>
        <p className="text-xs text-kf-text-secondary mt-1 leading-relaxed line-clamp-2">
          {cafe.description}
        </p>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2 text-kf-text-muted">
            {cafe.wifi.available && <Wifi className="w-3.5 h-3.5" />}
            {cafe.plugs.available && <Plug className="w-3.5 h-3.5" />}
          </div>
          <span className="text-xs font-semibold text-kf-brown">
            &lt; {formatRupiah(cafe.basic_spent)}
          </span>
        </div>
      </div>
    </Link>
  );
}
