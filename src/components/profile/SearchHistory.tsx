import { Search, Clock, Hash } from "lucide-react";
import Link from "next/link";
import type { MockUser } from "@/lib/mock-data";

interface SearchHistoryProps {
  history: MockUser["search_history"];
}

function formatDate(timestamp: string): string {
  const date = new Date(timestamp);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Hari ini";
  if (diffDays === 1) return "Kemarin";
  if (diffDays < 7) return `${diffDays} hari lalu`;
  return date.toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" });
}

export default function SearchHistory({ history }: SearchHistoryProps) {
  if (history.length === 0) {
    return (
      <div className="glass-card rounded-2xl p-8 text-center">
        <Search className="w-10 h-10 text-kafein-text-muted mx-auto mb-3" />
        <p className="text-kafein-text-secondary text-sm">
          Belum ada riwayat pencarian. Coba cari kafe sekarang!
        </p>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      <div className="px-6 py-4 border-b border-kafein-border/20">
        <h3 className="font-semibold text-kafein-text-primary flex items-center gap-2">
          <Clock className="w-4 h-4 text-kafein-primary" />
          Riwayat Pencarian
        </h3>
      </div>

      <div className="divide-y divide-kafein-border/10">
        {history.map((item, index) => (
          <Link
            key={index}
            href={`/search?q=${encodeURIComponent(item.query)}`}
            className="flex items-center gap-4 px-6 py-4 hover:bg-kafein-primary/[0.02] transition-colors group"
          >
            <div className="w-9 h-9 rounded-xl bg-kafein-dark-elevated flex items-center justify-center shrink-0 group-hover:bg-kafein-primary/10 transition-colors">
              <Search className="w-4 h-4 text-kafein-text-muted group-hover:text-kafein-primary transition-colors" />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm text-kafein-text-primary truncate group-hover:text-kafein-primary-light transition-colors">
                {item.query}
              </p>
              <div className="flex items-center gap-3 mt-0.5">
                <span className="text-[10px] text-kafein-text-muted flex items-center gap-1">
                  <Clock className="w-2.5 h-2.5" />
                  {formatDate(item.timestamp)}
                </span>
                <span className="text-[10px] text-kafein-text-muted flex items-center gap-1">
                  <Hash className="w-2.5 h-2.5" />
                  {item.results_count} hasil
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
