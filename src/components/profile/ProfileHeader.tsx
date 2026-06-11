import { User, Mail, Settings, Wifi, Plug, Volume2 } from "lucide-react";
import { type MockUser, formatRupiah, getVibeLabel } from "@/lib/mock-data";

interface ProfileHeaderProps {
  user: MockUser;
}

export default function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8">
      {/* User Info */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
        {/* Avatar */}
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-kafein-primary/20 to-kafein-primary/5 flex items-center justify-center border border-kafein-primary/20 shrink-0">
          <User className="w-10 h-10 text-kafein-primary" />
        </div>

        <div className="text-center sm:text-left flex-1">
          <h1 className="text-xl font-bold text-kafein-text-primary">{user.name}</h1>
          <div className="flex items-center justify-center sm:justify-start gap-1.5 mt-1 text-sm text-kafein-text-secondary">
            <Mail className="w-3.5 h-3.5" />
            {user.email}
          </div>
        </div>

        <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm text-kafein-text-secondary hover:text-kafein-text-primary bg-kafein-dark-elevated border border-kafein-border/30 hover:border-kafein-primary/30 transition-all">
          <Settings className="w-4 h-4" />
          Edit Profil
        </button>
      </div>

      {/* Preferences */}
      <div className="mt-6 pt-6 border-t border-kafein-border/20">
        <h3 className="text-sm font-semibold text-kafein-text-secondary uppercase tracking-wider mb-4">
          Preferensi Kafe
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* Budget */}
          <div className="glass-card rounded-xl p-3 text-center">
            <div className="text-xs text-kafein-text-muted mb-1">Budget Maks</div>
            <div className="text-sm font-semibold text-kafein-primary">
              {formatRupiah(user.preferences.max_budget)}
            </div>
          </div>

          {/* Vibe */}
          <div className="glass-card rounded-xl p-3 text-center">
            <div className="text-xs text-kafein-text-muted mb-1 flex items-center justify-center gap-1">
              <Volume2 className="w-3 h-3" /> Suasana
            </div>
            <div className="text-sm font-semibold text-purple-400">
              {user.preferences.preferred_vibe.map(getVibeLabel).join(", ")}
            </div>
          </div>

          {/* WiFi */}
          <div className="glass-card rounded-xl p-3 text-center">
            <div className="text-xs text-kafein-text-muted mb-1 flex items-center justify-center gap-1">
              <Wifi className="w-3 h-3" /> WiFi
            </div>
            <div className={`text-sm font-semibold ${user.preferences.needs_wifi ? "text-emerald-400" : "text-kafein-text-muted"}`}>
              {user.preferences.needs_wifi ? "Dibutuhkan" : "Tidak Wajib"}
            </div>
          </div>

          {/* Plugs */}
          <div className="glass-card rounded-xl p-3 text-center">
            <div className="text-xs text-kafein-text-muted mb-1 flex items-center justify-center gap-1">
              <Plug className="w-3 h-3" /> Colokan
            </div>
            <div className={`text-sm font-semibold ${user.preferences.needs_plugs ? "text-blue-400" : "text-kafein-text-muted"}`}>
              {user.preferences.needs_plugs ? "Dibutuhkan" : "Tidak Wajib"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
