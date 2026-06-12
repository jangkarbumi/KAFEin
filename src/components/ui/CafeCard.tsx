import Link from "next/link";
import Image from "next/image";
import { Wifi, Plug, Volume2, Star, MapPin } from "lucide-react";
import { type MockSearchResult, getVibeLabel, getVibeDot, formatBudget } from "@/lib/mock-data";

interface CafeCardProps {
  cafe: MockSearchResult;
  rank?: number;
}

export default function CafeCard({ cafe, rank }: CafeCardProps) {
  const isTopMatch = rank === 1;

  return (
    <Link
      href={`/cafe/${cafe._id}`}
      id={`cafe-card-${cafe._id}`}
      className="card overflow-hidden group"
    >
      <div className="flex flex-col sm:flex-row">
        {/* Image */}
        <div className="relative w-full sm:w-72 h-48 sm:h-auto sm:min-h-[200px] shrink-0">
          <Image
            src={cafe.image}
            alt={cafe.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-kf-text group-hover:text-kf-brown transition-colors">
                {cafe.name}
              </h3>
              <div className="flex items-center gap-2 mt-1 text-sm text-kf-text-secondary">
                <MapPin className="w-3.5 h-3.5" />
                {cafe.distance_km} km dari Undip • {formatBudget(cafe.basic_spent)}
              </div>
            </div>

            {/* Top Match / Rating */}
            <div className="flex items-center gap-2 shrink-0">
              {isTopMatch && (
                <span className="badge badge-outline bg-white font-semibold text-kf-brown text-xs border-kf-brown/30">
                  ✦ Top AI Match
                </span>
              )}
              <span className="flex items-center gap-1 text-sm font-semibold text-kf-text">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                {cafe.rating}
              </span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            <span className={`badge ${cafe.vibe === "quiet" ? "badge-green" : cafe.vibe === "moderate" ? "badge-yellow" : "badge-red"} text-xs`}>
              <span className={`w-1.5 h-1.5 rounded-full ${getVibeDot(cafe.vibe)}`} />
              {getVibeLabel(cafe.vibe)}
            </span>
            {cafe.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="badge badge-outline text-xs">
                {tag}
              </span>
            ))}
          </div>

          {/* AI Note */}
          <div className="ai-note mt-3 text-xs">
            <span className="font-semibold">◉ {cafe.ai_reasoning.split(":")[0]}:</span>
            {cafe.ai_reasoning.split(":").slice(1).join(":")}
          </div>

          {/* Footer: Amenity Icons */}
          <div className="flex items-center gap-3 mt-4 text-kf-text-muted">
            {cafe.wifi.available && <Wifi className="w-4 h-4" />}
            {cafe.plugs.available && <Plug className="w-4 h-4" />}
            <Volume2 className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
