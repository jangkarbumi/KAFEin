import Link from "next/link";
import { Wifi, Plug, MapPin, Volume2 } from "lucide-react";
import {
  type MockSearchResult,
  formatRupiah,
  getVibeLabel,
  getWifiLabel,
  getPlugsLabel,
} from "@/lib/mock-data";

interface CafeCardProps {
  cafe: MockSearchResult;
  rank?: number;
}

export default function CafeCard({ cafe, rank }: CafeCardProps) {
  return (
    <Link
      href={`/cafe/${cafe._id}`}
      id={`cafe-card-${cafe._id}`}
      className="group glass-card rounded-2xl overflow-hidden hover:border-kafein-primary/30 transition-all duration-300 flex flex-col"
    >
      {/* Image / Placeholder */}
      <div className="relative h-40 bg-gradient-to-br from-kafein-dark-elevated to-kafein-dark-card flex items-center justify-center overflow-hidden">
        <div className="text-4xl opacity-20">☕</div>
        {/* Score Badge */}
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-kafein-primary/90 text-kafein-dark text-xs font-bold">
          {cafe.match_score}% cocok
        </div>
        {/* Rank Badge */}
        {rank && (
          <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-kafein-dark/70 backdrop-blur-sm flex items-center justify-center text-sm font-bold text-kafein-primary border border-kafein-primary/20">
            #{rank}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Title & Location */}
        <h3 className="font-semibold text-kafein-text-primary group-hover:text-kafein-primary-light transition-colors mb-1">
          {cafe.name}
        </h3>
        <div className="flex items-center gap-1 text-xs text-kafein-text-muted mb-3">
          <MapPin className="w-3 h-3" />
          {cafe.location_area}
        </div>

        {/* Amenity Badges */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {cafe.wifi.available && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Wifi className="w-2.5 h-2.5" />
              {getWifiLabel(cafe.wifi.speed_rating)}
            </span>
          )}
          {cafe.plugs.available && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Plug className="w-2.5 h-2.5" />
              {getPlugsLabel(cafe.plugs.quantity)}
            </span>
          )}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <Volume2 className="w-2.5 h-2.5" />
            {getVibeLabel(cafe.vibe)}
          </span>
        </div>

        {/* AI Reasoning */}
        <p className="text-xs text-kafein-text-secondary leading-relaxed mb-4 flex-1 line-clamp-2">
          {cafe.ai_reasoning}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-kafein-border/20">
          <span className="text-sm font-semibold text-kafein-primary">
            Maks {formatRupiah(cafe.price_max)}
          </span>
          <span className="text-[10px] text-kafein-text-muted">
            {cafe.operating_hours.open} - {cafe.operating_hours.close}
          </span>
        </div>
      </div>
    </Link>
  );
}
