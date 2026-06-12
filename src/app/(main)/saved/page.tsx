import Link from "next/link";
import Image from "next/image";
import { Heart, MapPin, Wifi, Plug, Volume2, Star, Sparkles } from "lucide-react";
import { MOCK_USER, MOCK_CAFES, getVibeLabel, getVibeDot } from "@/lib/mock-data";

export default function SavedPage() {
  const user = MOCK_USER;
  const savedCafes = MOCK_CAFES.filter((c) => user.saved_cafes.includes(c._id));
  const allCafes = MOCK_CAFES; // Show all for "discover more"

  return (
    <div className="pt-6 pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-kf-text">
          Saved Study Spots
        </h1>
        <p className="text-sm text-kf-text-secondary mt-1">
          {savedCafes.length} cafe tersimpan
        </p>
      </div>

      {/* Saved Cafes */}
      {savedCafes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {savedCafes.map((cafe, i) => (
            <Link key={cafe._id} href={`/cafe/${cafe._id}`} className="card overflow-hidden group">
              <div className="relative h-44">
                <Image src={cafe.image} alt={cafe.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm">
                  <Heart className="w-4 h-4 fill-kf-red text-kf-red" />
                </button>
                {i === 0 && (
                  <div className="absolute top-3 left-3">
                    <span className="badge bg-kf-teal text-white text-xs font-semibold">✦ Perfect Match</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-kf-text group-hover:text-kf-brown transition-colors">{cafe.name}</h3>
                  <span className="flex items-center gap-1 text-xs font-medium text-kf-text">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> {cafe.rating}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-1.5">
                  <p className="text-xs text-kf-text-muted flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {cafe.distance_km} km away
                  </p>
                  <span className={`badge ${cafe.vibe === "quiet" ? "badge-green" : cafe.vibe === "moderate" ? "badge-yellow" : "badge-red"} text-[10px]`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${getVibeDot(cafe.vibe)}`} />
                    {getVibeLabel(cafe.vibe)}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-2 text-kf-text-muted">
                  {cafe.wifi.available && <Wifi className="w-3.5 h-3.5" />}
                  {cafe.plugs.available && <Plug className="w-3.5 h-3.5" />}
                  <Volume2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-4xl mb-3">📌</div>
          <h2 className="font-bold text-kf-text mb-1">Belum ada cafe tersimpan</h2>
          <p className="text-sm text-kf-text-secondary">Simpan cafe favoritmu untuk akses cepat di sini</p>
        </div>
      )}

      {/* Discover More */}
      <div className="border-t border-kf-border-light pt-8">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-kf-brown" />
          <h2 className="text-xl font-bold text-kf-text">Discover More Cafes</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {allCafes.filter((c) => !user.saved_cafes.includes(c._id)).slice(0, 4).map((cafe) => (
            <Link key={cafe._id} href={`/cafe/${cafe._id}`} className="card overflow-hidden group">
              <div className="relative h-32">
                <Image src={cafe.image} alt={cafe.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <button className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center">
                  <Heart className="w-3.5 h-3.5 text-kf-text-muted" />
                </button>
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold text-kf-text group-hover:text-kf-brown transition-colors">{cafe.name}</h3>
                <p className="text-xs text-kf-text-muted mt-0.5">{cafe.distance_km} km • {cafe.location_area}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
