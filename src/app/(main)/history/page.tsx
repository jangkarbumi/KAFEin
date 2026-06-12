import Link from "next/link";
import { Clock, ChevronRight, Search, Trash2 } from "lucide-react";
import { MOCK_USER } from "@/lib/mock-data";

function formatDate(timestamp: string): string {
  const date = new Date(timestamp);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export default function HistoryPage() {
  const user = MOCK_USER;

  return (
    <div className="pt-6 pb-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-kf-text">
            Search History
          </h1>
          <p className="text-sm text-kf-text-secondary mt-1">
            {user.search_history.length} pencarian terakhir
          </p>
        </div>
        <button className="btn-outline !text-sm !text-kf-red !border-kf-red/20 hover:!bg-red-50">
          <Trash2 className="w-4 h-4" /> Clear All
        </button>
      </div>

      {/* History List */}
      {user.search_history.length > 0 ? (
        <div className="card divide-y divide-kf-border-light">
          {user.search_history.map((item, index) => (
            <Link
              key={index}
              href={`/search?q=${encodeURIComponent(item.query)}`}
              className="flex items-center gap-4 px-5 py-5 hover:bg-kf-surface-hover transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-kf-bg-alt flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4 text-kf-text-muted" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-kf-text group-hover:text-kf-brown transition-colors">
                  &ldquo;{item.query}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs text-kf-text-muted">
                    {formatDate(item.timestamp)}
                  </span>
                  <span className="text-xs text-kf-text-muted flex items-center gap-1">
                    <Search className="w-3 h-3" /> {item.results_count} hasil
                  </span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-kf-text-muted group-hover:text-kf-brown transition-colors shrink-0" />
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-4xl mb-3">🔍</div>
          <h2 className="font-bold text-kf-text mb-1">Belum ada riwayat pencarian</h2>
          <p className="text-sm text-kf-text-secondary">Cari cafe dan riwayatmu akan muncul di sini</p>
          <Link href="/search" className="btn-primary mt-4 inline-flex">
            Mulai Pencarian
          </Link>
        </div>
      )}
    </div>
  );
}
