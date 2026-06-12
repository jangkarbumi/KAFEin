import Link from "next/link";
import Image from "next/image";
import { Clock, ChevronRight, Heart, Star, MapPin, Wifi, Plug, Volume2, Lock, Sparkles, User, Shield, X, Plus } from "lucide-react";
import { MOCK_USER, MOCK_CAFES, getVibeLabel, getVibeDot } from "@/lib/mock-data";

export default function ProfilePage() {
  const user = MOCK_USER;
  const savedCafes = MOCK_CAFES.filter((c) => user.saved_cafes.includes(c._id));

  return (
    <div className="pt-6 pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ── Left Sidebar ── */}
        <div className="space-y-6">
          {/* Profile Card */}
          <div className="card p-6 text-center">
            {/* Avatar */}
            <div className="relative w-24 h-24 mx-auto mb-4">
              <div className="w-24 h-24 rounded-full bg-kf-peach/50 border-4 border-kf-surface flex items-center justify-center overflow-hidden shadow-md">
                <User className="w-12 h-12 text-kf-brown" />
              </div>
              <button className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-kf-brown text-white flex items-center justify-center text-xs shadow-sm">
                ✎
              </button>
            </div>

            <h2 className="text-lg font-bold text-kf-text">{user.name}</h2>
            <p className="text-sm text-kf-text-secondary">{user.email}</p>

            {/* Verified Badge */}
            {user.verified_student && (
              <div className="mt-3 flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-kf-bg-alt border border-kf-border-light">
                <Shield className="w-4 h-4 text-kf-teal" />
                <span className="text-sm font-medium text-kf-teal">Verified Student Status</span>
              </div>
            )}

            {/* Form Fields */}
            <div className="mt-5 space-y-3 text-left">
              <div>
                <label className="text-xs font-medium text-kf-text-secondary">Display Name</label>
                <input type="text" defaultValue={user.name} className="input-field mt-1" />
              </div>
              <div>
                <label className="text-xs font-medium text-kf-text-secondary">Email Address</label>
                <input type="email" defaultValue={user.email} className="input-field mt-1" />
              </div>
            </div>

            <button className="btn-outline w-full mt-4 !text-sm">
              <Lock className="w-4 h-4" /> Change Password
            </button>
          </div>

          {/* AI Preferences */}
          <div className="card p-6">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-kf-brown" />
              <h3 className="font-bold text-kf-text">AI Preferences</h3>
            </div>
            <p className="text-xs text-kf-text-secondary leading-relaxed mb-4">
              Set your &apos;Always Needed&apos; features to help our AI recommend the perfect study spots.
            </p>

            <div className="flex flex-wrap gap-2 mb-3">
              {user.preferences.map((pref) => (
                <span key={pref} className="badge-teal flex items-center gap-1.5">
                  {pref === "Fast WiFi" && <Wifi className="w-3 h-3" />}
                  {pref === "Power Outlets" && <Plug className="w-3 h-3" />}
                  {pref}
                  <button className="ml-0.5 hover:bg-white/20 rounded-full p-0.5 transition-colors">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>

            <button className="btn-outline !text-sm w-full">
              <Plus className="w-4 h-4" /> Add Preference
            </button>
          </div>
        </div>

        {/* ── Right Content ── */}
        <div className="lg:col-span-2 space-y-8">
          {/* Saved Study Spots */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-kf-text">Saved Study Spots</h2>
              <Link href="/saved" className="text-sm text-kf-text-secondary hover:text-kf-brown transition-colors">
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {savedCafes.map((cafe, i) => (
                <Link key={cafe._id} href={`/cafe/${cafe._id}`} className="card overflow-hidden group">
                  <div className="relative h-40">
                    <Image src={cafe.image} alt={cafe.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    {/* Heart */}
                    <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center">
                      <Heart className="w-4 h-4 fill-kf-red text-kf-red" />
                    </button>
                    {/* Match Badge */}
                    {i === 0 && (
                      <div className="absolute top-3 left-3">
                        <span className="badge bg-kf-teal text-white text-xs font-semibold">
                          ✦ Perfect Match
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-kf-text group-hover:text-kf-brown transition-colors">
                        {cafe.name}
                      </h3>
                      <span className={`badge ${cafe.vibe === "quiet" ? "badge-green" : cafe.vibe === "moderate" ? "badge-yellow" : "badge-red"} text-[10px]`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${getVibeDot(cafe.vibe)}`} />
                        {getVibeLabel(cafe.vibe)}
                      </span>
                    </div>
                    <p className="text-xs text-kf-text-muted flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3" /> {cafe.distance_km} km away
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-kf-text-muted">
                      {cafe.wifi.available && <Wifi className="w-3.5 h-3.5" />}
                      {cafe.plugs.available && <Plug className="w-3.5 h-3.5" />}
                      <Volume2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Recent Searches */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-kf-text">Recent Searches</h2>
              <button className="text-sm text-kf-text-secondary hover:text-kf-brown transition-colors">
                Clear
              </button>
            </div>

            <div className="card divide-y divide-kf-border-light">
              {user.search_history.map((item, index) => (
                <Link
                  key={index}
                  href={`/search?q=${encodeURIComponent(item.query)}`}
                  className="flex items-center gap-4 px-5 py-4 hover:bg-kf-surface-hover transition-colors group"
                >
                  <div className="w-9 h-9 rounded-full bg-kf-bg-alt flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-kf-text-muted" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-kf-text group-hover:text-kf-brown transition-colors">
                      &ldquo;{item.query}&rdquo;
                    </p>
                    <p className="text-xs text-kf-text-muted mt-0.5">
                      {new Date(item.timestamp) > new Date(Date.now() - 86400000) ? "Yesterday" : new Date(item.timestamp).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-kf-text-muted group-hover:text-kf-brown transition-colors shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
