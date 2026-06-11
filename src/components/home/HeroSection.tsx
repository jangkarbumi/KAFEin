import { Coffee, Sparkles } from "lucide-react";
import SearchBar from "@/components/ui/SearchBar";

export default function HeroSection() {
  return (
    <section className="hero-bg flex-1 flex flex-col items-center justify-center px-4 sm:px-6 pt-28 pb-16 min-h-screen relative">
      {/* Decorative Orbs */}
      <div className="absolute top-32 left-[10%] w-72 h-72 rounded-full bg-kafein-primary/5 blur-[100px] animate-pulse-glow pointer-events-none" />
      <div
        className="absolute bottom-20 right-[15%] w-96 h-96 rounded-full bg-kafein-primary/3 blur-[120px] animate-pulse-glow pointer-events-none"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Coffee Icon */}
      <div className="relative mb-8 animate-slide-up">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-kafein-primary/20 to-kafein-primary/5 flex items-center justify-center border border-kafein-primary/20">
          <Coffee className="w-10 h-10 text-kafein-primary animate-float" />
        </div>
        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-lg bg-kafein-primary flex items-center justify-center">
          <Sparkles className="w-3.5 h-3.5 text-kafein-dark" />
        </div>
      </div>

      {/* Headline */}
      <div
        className="text-center max-w-3xl animate-slide-up"
        style={{ animationDelay: "0.1s" }}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4">
          Temukan Kafe Ideal
          <br />
          <span className="bg-gradient-to-r from-kafein-primary-light via-kafein-primary to-kafein-primary-dark bg-clip-text text-transparent">
            untuk Belajar
          </span>
        </h1>
        <p className="text-kafein-text-secondary text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Ketik kebutuhanmu, AI kami akan menemukan kafe dengan WiFi kencang,
          colokan banyak, dan suasana yang pas di sekitar kampus Undip.
        </p>
      </div>

      {/* Search Bar */}
      <div
        className="w-full flex justify-center mt-10 animate-slide-up"
        style={{ animationDelay: "0.2s" }}
      >
        <SearchBar variant="hero" showSuggestions />
      </div>

      {/* Stats Row */}
      <div
        className="flex items-center gap-6 sm:gap-10 mt-14 animate-slide-up"
        style={{ animationDelay: "0.4s" }}
      >
        {[
          { value: "50+", label: "Kafe Terdaftar" },
          { value: "AI", label: "Powered Search" },
          { value: "24/7", label: "Selalu Tersedia" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-kafein-primary">
              {stat.value}
            </div>
            <div className="text-xs text-kafein-text-muted mt-0.5">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
