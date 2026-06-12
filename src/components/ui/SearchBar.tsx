"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowRight, Bot } from "lucide-react";

interface SearchBarProps {
  variant?: "hero" | "compact";
  placeholder?: string;
  initialQuery?: string;
  onSearch?: (query: string) => void;
}

export default function SearchBar({
  variant = "hero",
  placeholder = 'Mau belajar di mana hari ini? (Contoh: Cafe sepi di Undip...)',
  initialQuery = "",
  onSearch,
}: SearchBarProps) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();

  const handleSearch = (searchQuery?: string) => {
    const finalQuery = searchQuery || query;
    if (!finalQuery.trim()) return;

    if (onSearch) {
      onSearch(finalQuery);
    } else {
      router.push(`/search?q=${encodeURIComponent(finalQuery)}`);
    }
  };

  const isHero = variant === "hero";

  return (
    <div className={isHero ? "w-full max-w-2xl" : "w-full"}>
      <div className={`card-flat flex items-center gap-3 ${isHero ? "px-5 py-3" : "px-4 py-2"}`}>
        <Bot className={`shrink-0 text-kf-brown ${isHero ? "w-5 h-5" : "w-4 h-4"}`} />
        <input
          id="search-input"
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className={`flex-1 bg-transparent outline-none text-kf-text placeholder:text-kf-text-muted ${
            isHero ? "text-sm sm:text-base py-1" : "text-sm"
          }`}
        />
        <button
          id="search-button"
          onClick={() => handleSearch()}
          disabled={!query.trim()}
          className="btn-primary !rounded-xl !px-5 !py-2.5 !text-sm disabled:opacity-30"
        >
          <span className="hidden sm:inline">✦</span> Cari Spot
        </button>
      </div>

      {/* Suggestion */}
      {isHero && (
        <p className="text-center text-xs text-kf-text-muted mt-3">
          <span className="text-kf-brown">◉</span> Coba: <em>&quot;Banyak colokan, WiFi kencang, budget &lt;30rb&quot;</em>
        </p>
      )}
    </div>
  );
}
