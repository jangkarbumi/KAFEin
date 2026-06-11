import { Wifi, Plug, Volume2, Clock, MapPin, Users, Star } from "lucide-react";
import {
  type MockCafe,
  formatRupiah,
  getVibeLabel,
  getWifiLabel,
  getPlugsLabel,
  getSuitabilityLabel,
} from "@/lib/mock-data";

interface CafeDetailCardProps {
  cafe: MockCafe;
}

export default function CafeDetailCard({ cafe }: CafeDetailCardProps) {
  return (
    <div className="space-y-6">
      {/* Header Image / Placeholder */}
      <div className="relative h-48 sm:h-64 rounded-2xl bg-gradient-to-br from-kafein-dark-elevated to-kafein-dark-card flex items-center justify-center overflow-hidden glass-card">
        <div className="text-6xl opacity-20">☕</div>
        <div className="absolute bottom-4 left-4 right-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-kafein-text-primary">{cafe.name}</h1>
          <div className="flex items-center gap-1.5 mt-1 text-sm text-kafein-text-secondary">
            <MapPin className="w-3.5 h-3.5 text-kafein-primary" />
            {cafe.address}
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="glass-card rounded-2xl p-6">
        <p className="text-kafein-text-secondary leading-relaxed">{cafe.description}</p>
      </div>

      {/* Amenities Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {/* WiFi */}
        <div className="glass-card rounded-xl p-4 text-center">
          <Wifi className={`w-6 h-6 mx-auto mb-2 ${cafe.wifi.available ? "text-emerald-400" : "text-kafein-text-muted"}`} />
          <div className="text-xs text-kafein-text-muted mb-0.5">WiFi</div>
          <div className={`text-sm font-semibold ${cafe.wifi.available ? "text-emerald-400" : "text-kafein-text-muted"}`}>
            {cafe.wifi.available ? getWifiLabel(cafe.wifi.speed_rating) : "Tidak Ada"}
          </div>
        </div>

        {/* Plugs */}
        <div className="glass-card rounded-xl p-4 text-center">
          <Plug className={`w-6 h-6 mx-auto mb-2 ${cafe.plugs.available ? "text-blue-400" : "text-kafein-text-muted"}`} />
          <div className="text-xs text-kafein-text-muted mb-0.5">Colokan</div>
          <div className={`text-sm font-semibold ${cafe.plugs.available ? "text-blue-400" : "text-kafein-text-muted"}`}>
            {cafe.plugs.available ? getPlugsLabel(cafe.plugs.quantity) : "Tidak Ada"}
          </div>
        </div>

        {/* Vibe */}
        <div className="glass-card rounded-xl p-4 text-center">
          <Volume2 className="w-6 h-6 mx-auto mb-2 text-purple-400" />
          <div className="text-xs text-kafein-text-muted mb-0.5">Suasana</div>
          <div className="text-sm font-semibold text-purple-400">{getVibeLabel(cafe.vibe)}</div>
        </div>

        {/* Price */}
        <div className="glass-card rounded-xl p-4 text-center">
          <Star className="w-6 h-6 mx-auto mb-2 text-kafein-primary" />
          <div className="text-xs text-kafein-text-muted mb-0.5">Harga Maks</div>
          <div className="text-sm font-semibold text-kafein-primary">{formatRupiah(cafe.price_max)}</div>
        </div>
      </div>

      {/* Operating Hours */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="font-semibold text-kafein-text-primary flex items-center gap-2 mb-4">
          <Clock className="w-4 h-4 text-kafein-primary" />
          Jam Operasional
        </h3>
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-xl bg-kafein-primary/10 border border-kafein-primary/20">
            <span className="text-lg font-bold text-kafein-primary">
              {cafe.operating_hours.open}
            </span>
          </div>
          <span className="text-kafein-text-muted">—</span>
          <div className="px-4 py-2 rounded-xl bg-kafein-primary/10 border border-kafein-primary/20">
            <span className="text-lg font-bold text-kafein-primary">
              {cafe.operating_hours.close}
            </span>
          </div>
        </div>
      </div>

      {/* Suitability */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="font-semibold text-kafein-text-primary flex items-center gap-2 mb-4">
          <Users className="w-4 h-4 text-kafein-primary" />
          Cocok Untuk
        </h3>
        <div className="flex flex-wrap gap-2">
          {cafe.suitability.map((suit) => (
            <span
              key={suit}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-kafein-primary/10 text-kafein-primary border border-kafein-primary/20"
            >
              {getSuitabilityLabel(suit)}
            </span>
          ))}
        </div>
      </div>

      {/* Crowd Estimation */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="font-semibold text-kafein-text-primary flex items-center gap-2 mb-4">
          <Clock className="w-4 h-4 text-kafein-primary" />
          Estimasi Keramaian
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {cafe.crowd_estimation.map((ce) => (
            <div
              key={ce.day}
              className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-kafein-dark-elevated/50"
            >
              <span className="text-sm font-medium text-kafein-text-primary">{ce.day}</span>
              <div className="flex flex-wrap gap-1 justify-end">
                {ce.peak_hours.length > 0 ? (
                  ce.peak_hours.map((hour) => (
                    <span
                      key={hour}
                      className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-red-500/10 text-red-400 border border-red-500/20"
                    >
                      {hour}
                    </span>
                  ))
                ) : (
                  <span className="text-[10px] text-emerald-400">Sepi</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
