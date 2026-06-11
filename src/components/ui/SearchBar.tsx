"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowRight, BookOpen, Wifi, Users, Clock } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ─── Quick Suggestion Chips ──────────────────────────────────────────────────

interface Suggestion {
  label: string;
  icon: LucideIcon;
}

const SUGGESTIONS: Suggestion[] = [
  { label: "Kafe tenang buat nugas", icon: BookOpen },
  { label: "WiFi kencang dekat Undip", icon: Wifi },
  { label: "Tempat rapat kelompok murah", icon: Users },
  { label: "Kafe buka sampai malam", icon: Clock },
];

// ─── Props ───────────────────────────────────────────────────────────────────

interface SearchBarProps {
  /** Variant: hero (large, centered) or compact (smaller, for navbar) */
  variant?: "hero" | "compact";
  /** Placeholder text */
  placeholder?: string;
  /** Initial query value */
  initialQuery?: string;
  /** Show suggestion chips below the search bar */
  showSuggestions?: boolean;
  /** Optional: custom onSearch callback instead of navigation */
  onSearch?: (query: string) => void;
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function SearchBar({
  variant = "hero",
  placeholder = 'Contoh: "Cari kafe tenang buat nugas dekat Tembalang, budget 25rb"',
  initialQuery = "",
  showSuggestions = true,
  onSearch,
}: SearchBarProps) {
  const [query, setQuery] = useState(initialQuery);
  const [isFocused, setIsFocused] = useState(false);
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const isHero = variant === "hero";

  return (
    <div className={isHero ? "w-full max-w-2xl" : "w-full max-w-xl"}>
      <div
        className={`glass-input rounded-2xl transition-all duration-300 ${
          isHero ? "p-1.5" : "p-1"
        } ${isFocused ? "shadow-[0_0_60px_rgba(245,158,11,0.08)]" : ""}`}
      >
        <div
          className={`flex items-center gap-3 ${
            isHero ? "px-4 py-2" : "px-3 py-1"
          }`}
        >
          <Search
            className={`shrink-0 transition-colors duration-300 ${
              isHero ? "w-5 h-5" : "w-4 h-4"
            } ${isFocused ? "text-kafein-primary" : "text-kafein-text-muted"}`}
          />
          <input
            id="search-input"
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={handleKeyDown}
            className={`flex-1 bg-transparent outline-none text-kafein-text-primary placeholder:text-kafein-text-muted/60 ${
              isHero ? "text-sm sm:text-base py-1" : "text-sm py-0.5"
            }`}
          />
          <button
            id="search-button"
            onClick={() => handleSearch()}
            disabled={!query.trim()}
            className={`shrink-0 rounded-xl bg-gradient-to-br from-kafein-primary to-kafein-primary-dark flex items-center justify-center text-kafein-dark hover:shadow-[0_0_24px_rgba(245,158,11,0.3)] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:shadow-none ${
              isHero ? "w-10 h-10" : "w-8 h-8"
            }`}
          >
            <ArrowRight className={isHero ? "w-5 h-5" : "w-4 h-4"} />
          </button>
        </div>
      </div>

      {/* Quick Suggestions */}
      {showSuggestions && isHero && (
        <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
          <span className="text-xs text-kafein-text-muted mr-1">Coba:</span>
          {SUGGESTIONS.map((s) => (
            <button
              key={s.label}
              onClick={() => {
                setQuery(s.label);
                handleSearch(s.label);
              }}
              className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-kafein-text-secondary bg-kafein-dark-elevated/60 border border-kafein-border/30 hover:border-kafein-primary/40 hover:text-kafein-primary-light hover:bg-kafein-primary/5 transition-all duration-200"
            >
              <s.icon className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
              {s.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
