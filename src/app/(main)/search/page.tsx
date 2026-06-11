import { Suspense } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import SearchBar from "@/components/ui/SearchBar";
import CafeCard from "@/components/ui/CafeCard";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { MOCK_SEARCH_RESULTS } from "@/lib/mock-data";

export default async function SearchPage(props: PageProps<"/search">) {
  const searchParams = await props.searchParams;
  const query = (searchParams?.q as string) || "";

  // Filter results based on query (mock: show all if query exists)
  const results = query ? MOCK_SEARCH_RESULTS : [];

  return (
    <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      {/* Search Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-kafein-text-primary mb-6">
          {query ? (
            <>
              Hasil untuk{" "}
              <span className="text-kafein-primary">&ldquo;{query}&rdquo;</span>
            </>
          ) : (
            "Cari Kafe"
          )}
        </h1>

        {/* Search Bar */}
        <Suspense fallback={<LoadingSpinner size="sm" />}>
          <SearchBar
            variant="compact"
            initialQuery={query}
            showSuggestions={false}
            placeholder="Cari kafe lain..."
          />
        </Suspense>
      </div>

      {/* Results */}
      {query ? (
        <>
          {/* Results Count & Filter */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-kafein-text-secondary">
              <span className="font-semibold text-kafein-text-primary">{results.length}</span>{" "}
              kafe ditemukan
            </p>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs text-kafein-text-secondary bg-kafein-dark-elevated border border-kafein-border/30 hover:border-kafein-primary/30 transition-all">
              <SlidersHorizontal className="w-3 h-3" />
              Filter
            </button>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {results.map((cafe, index) => (
              <CafeCard key={cafe._id} cafe={cafe} rank={index + 1} />
            ))}
          </div>
        </>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-16 h-16 rounded-2xl bg-kafein-dark-elevated flex items-center justify-center mb-4">
            <Search className="w-8 h-8 text-kafein-text-muted" />
          </div>
          <h2 className="text-lg font-semibold text-kafein-text-primary mb-2">
            Mulai Pencarian
          </h2>
          <p className="text-sm text-kafein-text-secondary text-center max-w-md">
            Ketik kebutuhanmu di search bar di atas, misalnya &ldquo;kafe tenang buat nugas dekat Tembalang budget 25rb&rdquo;
          </p>
        </div>
      )}
    </div>
  );
}
