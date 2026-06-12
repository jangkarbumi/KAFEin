"use client";

import { useState, useMemo, Suspense } from "react";
import { List, Map, Star, Sparkles } from "lucide-react";
import SearchBar from "@/components/ui/SearchBar";
import CafeCard from "@/components/ui/CafeCard";
import FilterSidebar, { FilterState } from "@/components/search/FilterSidebar";
import { MOCK_CAFES, MOCK_ALTERNATIVES, MockSearchResult } from "@/lib/mock-data";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const [filters, setFilters] = useState<FilterState>({
    crowd: [],
    budget: null,
    facilities: [],
  });

  const results = useMemo(() => {
    if (!query) return [];

    let filtered = MOCK_CAFES;

    // Filter by crowd vibe
    if (filters.crowd.length > 0) {
      filtered = filtered.filter((c) => filters.crowd.includes(c.vibe as any));
    }

    // Filter by budget
    if (filters.budget) {
      const maxBudget = filters.budget === "$$" ? 60000 : filters.budget === "$$$" ? 80000 : 9999999;
      filtered = filtered.filter((c) => c.basic_spent <= maxBudget);
    }

    // Filter by facilities
    if (filters.facilities.includes("wifi")) {
      filtered = filtered.filter((c) => c.wifi.available && (c.wifi.speed === "fast" || c.wifi.speed === "stable"));
    }
    if (filters.facilities.includes("plugs")) {
      filtered = filtered.filter((c) => c.plugs.available);
    }
    if (filters.facilities.includes("outdoor")) {
      filtered = filtered.filter((c) => 
        c.ac.toLowerCase().includes("outdoor") || 
        c.tags.some(t => t.toLowerCase().includes("outdoor"))
      );
    }

    // Map to MockSearchResult (generate dummy scores for UI)
    return filtered.map((c, i) => ({
      ...c,
      match_score: Math.max(70, 96 - i * 3),
      match_label: i === 0 ? "Top AI Match" : "Good Match",
      ai_reasoning: i === 0 
        ? "Cocok karena: Sangat pas dengan preferensimu dan ulasan mahasiswa sangat positif."
        : "Catatan AI: Fasilitas memadai dan sesuai dengan filter yang kamu pilih.",
    } as MockSearchResult));
  }, [query, filters]);

  return (
    <div className="pt-6 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      {/* Mobile Search */}
      <div className="md:hidden mb-6">
        <SearchBar variant="compact" initialQuery={query} placeholder="Cari kafe..." />
      </div>

      {/* Header */}
      <div className="flex items-end justify-between mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-kf-text">
            {query ? (
              <>Found {results.length} Cafes</>
            ) : (
              "Cari Kafe"
            )}
          </h1>
          {query && (
            <p className="text-sm text-kf-text-secondary mt-1">
              Showing results for &ldquo;{query}&rdquo;
            </p>
          )}
        </div>

        {/* View Toggle */}
        {query && (
          <div className="flex items-center border border-kf-border rounded-lg overflow-hidden">
            <button className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium bg-kf-surface text-kf-text border-r border-kf-border">
              <List className="w-3.5 h-3.5" /> List
            </button>
            <button className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-kf-text-secondary hover:bg-kf-surface-hover">
              <Map className="w-3.5 h-3.5" /> Map
            </button>
          </div>
        )}
      </div>

      {query ? (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <FilterSidebar 
            filters={filters} 
            onChange={setFilters} 
            className="w-full lg:w-56 shrink-0" 
          />

          {/* Results */}
          <div className="flex-1 space-y-4">
            {results.length > 0 ? (
              results.map((cafe, index) => (
                <CafeCard key={cafe._id} cafe={cafe} rank={index + 1} />
              ))
            ) : (
              <div className="text-center py-12 bg-kf-surface rounded-2xl border border-kf-border">
                <div className="text-4xl mb-3">📭</div>
                <h3 className="text-lg font-bold text-kf-text">Tidak ada kafe yang cocok</h3>
                <p className="text-sm text-kf-text-secondary mt-1">Coba ubah filter atau kata kunci pencarianmu.</p>
                <button 
                  onClick={() => setFilters({ crowd: [], budget: null, facilities: [] })}
                  className="btn-outline mt-4"
                >
                  Reset Filter
                </button>
              </div>
            )}

            {/* Alternatives Section */}
            <div className="mt-10 pt-8 border-t border-kf-border-light">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-kf-brown" />
                <h2 className="text-lg font-bold text-kf-text">
                  Pilihan Alternatif di Sekitar
                </h2>
              </div>
              <p className="text-sm text-kf-text-secondary mb-4">
                Mungkin tidak terlalu sepi, tapi fasilitas nugasnya lengkap.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {MOCK_ALTERNATIVES.map((alt) => (
                  <Link
                    key={alt._id}
                    href={`/cafe/${alt._id}`}
                    className="card-flat flex items-center gap-4 p-4 hover:bg-kf-surface-hover transition-colors"
                  >
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0">
                      <Image src={alt.image} alt={alt.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-kf-text">{alt.name}</h4>
                      <p className="text-xs text-kf-text-muted flex items-center gap-1">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        {alt.rating} • {alt.distance}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            {results.length > 0 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                <span className="w-2.5 h-2.5 rounded-full bg-kf-brown" />
                <span className="w-2.5 h-2.5 rounded-full bg-kf-border" />
                <span className="w-2.5 h-2.5 rounded-full bg-kf-border" />
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center py-20">
          <div className="text-5xl mb-4">☕</div>
          <h2 className="text-lg font-bold text-kf-text mb-2">
            Mulai Pencarian
          </h2>
          <p className="text-sm text-kf-text-secondary text-center max-w-md">
            Ketik kebutuhanmu di search bar, misalnya &ldquo;kafe tenang buat nugas dekat Tembalang budget 25rb&rdquo;
          </p>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-[3px] rounded-full border-kf-border border-t-kf-brown animate-spin" />
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}
