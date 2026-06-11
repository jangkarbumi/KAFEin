import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import CafeDetailCard from "@/components/cafe/CafeDetailCard";
import { MOCK_CAFES, MOCK_SEARCH_RESULTS } from "@/lib/mock-data";

export default async function CafeDetailPage(props: PageProps<"/cafe/[id]">) {
  const params = await props.params;
  const { id } = params;

  // Find cafe from mock data
  const cafe = MOCK_CAFES.find((c) => c._id === id);

  if (!cafe) {
    return (
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto min-h-screen flex flex-col items-center justify-center">
        <div className="text-6xl mb-4">🔍</div>
        <h1 className="text-xl font-bold text-kafein-text-primary mb-2">
          Kafe Tidak Ditemukan
        </h1>
        <p className="text-sm text-kafein-text-secondary mb-6">
          Kafe dengan ID tersebut tidak ada dalam database kami
        </p>
        <Link
          href="/search"
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-kafein-primary text-kafein-dark hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Pencarian
        </Link>
      </div>
    );
  }

  // Find AI reasoning if this cafe was in search results
  const searchResult = MOCK_SEARCH_RESULTS.find((r) => r._id === id);

  return (
    <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto min-h-screen">
      {/* Back Link */}
      <Link
        href="/search"
        className="inline-flex items-center gap-1.5 text-sm text-kafein-text-secondary hover:text-kafein-primary transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Kembali ke Pencarian
      </Link>

      {/* Cafe Detail */}
      <CafeDetailCard cafe={cafe} />

      {/* AI Reasoning */}
      {searchResult && (
        <div className="mt-6 glass-card rounded-2xl p-6 border-kafein-primary/20">
          <h3 className="font-semibold text-kafein-text-primary flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-kafein-primary" />
            Mengapa Kafe Ini Cocok?
          </h3>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-kafein-primary/10 flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-sm font-bold text-kafein-primary">
                {searchResult.match_score}%
              </span>
            </div>
            <p className="text-sm text-kafein-text-secondary leading-relaxed">
              {searchResult.ai_reasoning}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
