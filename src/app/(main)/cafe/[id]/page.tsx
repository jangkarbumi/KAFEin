import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Share2, Bookmark, Star, MapPin, Wifi, Plug, Volume2, Snowflake, Navigation, Clock, Sparkles } from "lucide-react";
import { MOCK_CAFES, MOCK_ALTERNATIVES, MOCK_SEARCH_RESULTS, formatRupiah, getVibeLabel, getVibeDot } from "@/lib/mock-data";

export default async function CafeDetailPage(props: PageProps<"/cafe/[id]">) {
  const params = await props.params;
  const { id } = params;
  const cafe = MOCK_CAFES.find((c) => c._id === id);

  if (!cafe) {
    return (
      <div className="pt-20 pb-12 px-4 max-w-3xl mx-auto min-h-screen flex flex-col items-center justify-center">
        <div className="text-5xl mb-4">🔍</div>
        <h1 className="text-xl font-bold text-kf-text mb-2">Kafe Tidak Ditemukan</h1>
        <Link href="/search" className="btn-primary mt-4">
          <ArrowLeft className="w-4 h-4" /> Kembali ke Pencarian
        </Link>
      </div>
    );
  }

  const searchResult = MOCK_SEARCH_RESULTS.find((r) => r._id === id);
  const isOpen = true; // Mock

  return (
    <div className="pt-4 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto min-h-screen">
      {/* Back + Actions */}
      <div className="flex items-center justify-between mb-4">
        <Link href="/search" className="flex items-center gap-1.5 text-sm text-kf-text-secondary hover:text-kf-brown transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full border border-kf-border hover:bg-kf-surface-hover transition-colors">
            <Share2 className="w-4 h-4 text-kf-text-secondary" />
          </button>
          <button className="p-2 rounded-full border border-kf-border hover:bg-kf-surface-hover transition-colors">
            <Bookmark className="w-4 h-4 text-kf-text-secondary" />
          </button>
        </div>
      </div>

      {/* Cafe Header */}
      <div className="mb-5">
        <h1 className="text-2xl sm:text-3xl font-bold text-kf-text">{cafe.name}</h1>
        <div className="flex flex-wrap items-center gap-3 mt-2">
          <span className="flex items-center gap-1 text-sm font-semibold text-kf-text">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            {cafe.rating} ({cafe.review_count} reviews)
          </span>
          <span className={`badge ${cafe.vibe === "quiet" ? "badge-green" : cafe.vibe === "moderate" ? "badge-yellow" : "badge-red"} text-xs`}>
            <span className={`w-1.5 h-1.5 rounded-full ${getVibeDot(cafe.vibe)}`} />
            {getVibeLabel(cafe.vibe)} ({cafe.capacity_percent}% Capacity)
          </span>
          <span className="flex items-center gap-1 text-sm text-kf-text-secondary">
            <MapPin className="w-3.5 h-3.5" /> {cafe.distance_km} km away
          </span>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Image + Crowd */}
        <div className="lg:col-span-2 space-y-6">
          {/* Hero Image */}
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden card">
            <Image src={cafe.image} alt={cafe.name} fill className="object-cover" />
            {searchResult && (
              <div className="absolute top-4 right-4">
                <span className="badge bg-kf-teal text-white font-semibold text-xs">
                  ✦ Top Study Spot
                </span>
              </div>
            )}
          </div>

          {/* Crowd Estimation */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-bold text-kf-text">Crowd Estimation</h3>
              <span className="badge badge-green text-xs">◉ Live</span>
            </div>
            <p className="text-sm text-kf-text-secondary mb-4">
              Usually quiet until 2 PM
            </p>
            {/* Chart Bars */}
            <div className="flex items-end gap-2 h-28">
              {cafe.crowd_estimation.map((ce, i) => (
                <div key={ce.hour} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t-md transition-all"
                    style={{
                      height: `${Math.max(ce.level, 5)}%`,
                      backgroundColor: ce.level > 70 ? "#5C4033" : "#E5DDD5",
                    }}
                  />
                  <span className="text-[10px] text-kf-text-muted">{ce.hour}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Facilities + Hours + Menu */}
        <div className="space-y-6">
          {/* Facilities */}
          <div className="card p-6">
            <h3 className="font-bold text-kf-text mb-4">Facilities</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-kf-bg-alt flex items-center justify-center shrink-0">
                  <Wifi className="w-5 h-5 text-kf-brown" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-kf-text">Fast WiFi</p>
                  <p className="text-xs text-kf-text-secondary">{cafe.wifi.speed_label}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-kf-bg-alt flex items-center justify-center shrink-0">
                  <Plug className="w-5 h-5 text-kf-brown" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-kf-text">Power Outlets</p>
                  <p className="text-xs text-kf-text-secondary">{cafe.plugs.coverage}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-kf-bg-alt flex items-center justify-center shrink-0">
                  <Volume2 className="w-5 h-5 text-kf-brown" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-kf-text">Noise Level</p>
                  <p className="text-xs text-kf-text-secondary">{cafe.noise_level}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-kf-bg-alt flex items-center justify-center shrink-0">
                  <Snowflake className="w-5 h-5 text-kf-brown" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-kf-text">Air Conditioning</p>
                  <p className="text-xs text-kf-text-secondary">{cafe.ac}</p>
                </div>
              </div>
            </div>

            {/* Get Directions */}
            <button className="btn-primary w-full mt-5 !rounded-xl">
              <Navigation className="w-4 h-4" /> Get Directions
            </button>
          </div>

          {/* Opening Hours */}
          <div className="card-flat flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-kf-bg-alt flex items-center justify-center">
                <Clock className="w-5 h-5 text-kf-brown" />
              </div>
              <div>
                <p className="text-sm font-semibold text-kf-text">Opening Hours</p>
                <p className="text-xs text-kf-text-secondary">Mon - Sun</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-kf-text">{cafe.operating_hours.open} - {cafe.operating_hours.close}</p>
              <p className={`text-xs font-medium ${isOpen ? "text-kf-green" : "text-kf-red"}`}>
                {isOpen ? "Open Now" : "Closed"}
              </p>
            </div>
          </div>

          {/* Menu Prices */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-kf-text">Menu Prices</h3>
              <button className="text-xs text-kf-brown hover:underline">View Full Menu</button>
            </div>
            <div className="space-y-3">
              {cafe.menu_prices.map((item) => (
                <div key={item.item} className="flex items-center justify-between">
                  <span className="text-sm text-kf-text">{item.item}</span>
                  <span className="text-sm font-medium text-kf-text">{formatRupiah(item.price)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Alternative Cafes */}
      <div className="mt-10 pt-8 border-t border-kf-border-light">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-kf-brown" />
          <h2 className="text-xl font-bold text-kf-text">Alternative Cafes Nearby</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {MOCK_ALTERNATIVES.map((alt) => (
            <Link key={alt._id} href={`/cafe/${alt._id}`} className="card p-4 flex items-start gap-4 group">
              <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                <Image src={alt.image} alt={alt.name} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-kf-text group-hover:text-kf-brown transition-colors">{alt.name}</h4>
                <p className="text-xs text-kf-text-muted">
                  <Navigation className="w-3 h-3 inline" /> {alt.distance} away
                </p>
                <div className="ai-note mt-2 !p-2 !text-xs">
                  &quot;{alt.quote}&quot;
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
