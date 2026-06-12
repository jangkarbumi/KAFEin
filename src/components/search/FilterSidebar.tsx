"use client";

import { Wifi, Plug, Wind } from "lucide-react";

export interface FilterState {
  crowd: ("quiet" | "moderate" | "loud")[];
  budget: string | null;
  facilities: string[];
}

interface FilterSidebarProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  className?: string;
}

export default function FilterSidebar({ filters, onChange, className = "" }: FilterSidebarProps) {
  const toggleCrowd = (vibe: "quiet" | "moderate" | "loud") => {
    const updated = filters.crowd.includes(vibe)
      ? filters.crowd.filter((v) => v !== vibe)
      : [...filters.crowd, vibe];
    onChange({ ...filters, crowd: updated });
  };

  const toggleBudget = (level: string) => {
    onChange({ ...filters, budget: filters.budget === level ? null : level });
  };

  const toggleFacility = (facility: string) => {
    const updated = filters.facilities.includes(facility)
      ? filters.facilities.filter((f) => f !== facility)
      : [...filters.facilities, facility];
    onChange({ ...filters, facilities: updated });
  };

  const resetFilters = () => {
    onChange({ crowd: [], budget: null, facilities: [] });
  };

  const hasActiveFilters = filters.crowd.length > 0 || filters.budget !== null || filters.facilities.length > 0;

  return (
    <aside className={`space-y-6 ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-kf-text text-lg">Filters</h3>
        {hasActiveFilters && (
          <button onClick={resetFilters} className="text-sm text-kf-brown hover:underline">
            Reset
          </button>
        )}
      </div>

      {/* Crowd Level */}
      <div>
        <h4 className="text-xs font-semibold text-kf-text-secondary uppercase tracking-wider mb-3">
          Crowd Level
        </h4>
        <div className="space-y-2.5">
          {([
            { value: "quiet" as const, label: "Sepi (Quiet)" },
            { value: "moderate" as const, label: "Cukup Ramai (Moderate)" },
            { value: "loud" as const, label: "Ramai (Busy)" },
          ]).map((item) => (
            <label key={item.value} className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                className="checkbox-custom"
                checked={filters.crowd.includes(item.value)}
                onChange={() => toggleCrowd(item.value)}
              />
              <span className="text-sm text-kf-text">{item.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Budget */}
      <div>
        <h4 className="text-xs font-semibold text-kf-text-secondary uppercase tracking-wider mb-3">
          Budget
        </h4>
        <div className="flex gap-2">
          {[
            { label: "$$", max: 60000 },
            { label: "$$$", max: 80000 },
            { label: "$$$$", max: 999999 },
          ].map((level) => (
            <button
              key={level.label}
              onClick={() => toggleBudget(level.label)}
              className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                filters.budget === level.label
                  ? "bg-kf-brown text-white border-kf-brown"
                  : "bg-kf-surface text-kf-text border-kf-border hover:border-kf-brown"
              }`}
            >
              {level.label}
            </button>
          ))}
        </div>
        <p className="text-[10px] text-kf-text-muted mt-2">
          {filters.budget === "$$" && "Basic spent ≤ Rp 60.000"}
          {filters.budget === "$$$" && "Basic spent ≤ Rp 80.000"}
          {filters.budget === "$$$$" && "Semua budget"}
          {!filters.budget && "Pilih budget range"}
        </p>
      </div>

      {/* Facilities */}
      <div>
        <h4 className="text-xs font-semibold text-kf-text-secondary uppercase tracking-wider mb-3">
          Facilities
        </h4>
        <div className="space-y-2.5">
          {[
            { key: "wifi", label: "Fast WiFi", icon: Wifi },
            { key: "plugs", label: "Power Outlets", icon: Plug },
            { key: "outdoor", label: "Outdoor Area", icon: Wind },
          ].map((item) => (
            <label key={item.key} className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                className="checkbox-custom"
                checked={filters.facilities.includes(item.key)}
                onChange={() => toggleFacility(item.key)}
              />
              <item.icon className="w-3.5 h-3.5 text-kf-text-muted" />
              <span className="text-sm text-kf-text">{item.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Active filter count */}
      {hasActiveFilters && (
        <div className="pt-4 border-t border-kf-border-light">
          <p className="text-xs text-kf-text-secondary">
            {filters.crowd.length + (filters.budget ? 1 : 0) + filters.facilities.length} filter aktif
          </p>
        </div>
      )}
    </aside>
  );
}
