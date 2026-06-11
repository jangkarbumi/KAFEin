import ProfileHeader from "@/components/profile/ProfileHeader";
import SearchHistory from "@/components/profile/SearchHistory";
import { MOCK_USER } from "@/lib/mock-data";
import { LogOut } from "lucide-react";

export default function ProfilePage() {
  const user = MOCK_USER;

  return (
    <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto min-h-screen">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-kafein-text-primary">
          Profil Saya
        </h1>
        <p className="text-sm text-kafein-text-secondary mt-1">
          Kelola profil dan lihat riwayat pencarian kafe
        </p>
      </div>

      {/* Profile Info */}
      <div className="space-y-6">
        <ProfileHeader user={user} />
        <SearchHistory history={user.search_history} />

        {/* Logout Button */}
        <button
          id="logout-button"
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium text-red-400 bg-red-500/5 border border-red-500/20 hover:bg-red-500/10 hover:border-red-500/30 transition-all duration-200"
        >
          <LogOut className="w-4 h-4" />
          Keluar dari Akun
        </button>
      </div>
    </div>
  );
}
