import SearchBar from "@/components/ui/SearchBar";

export default function HeroSection() {
  return (
    <section className="hero-gradient px-4 sm:px-6 pt-16 pb-12">
      <div className="max-w-3xl mx-auto text-center">
        {/* Headline */}
        <div className="animate-slide-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-kf-text">
            Fokus Belajar,
            <br />
            <span className="text-kf-brown">Tanpa Distraksi.</span>
          </h1>
          <p className="text-kf-text-secondary text-base sm:text-lg max-w-xl mx-auto leading-relaxed mt-5">
            KAFEin membantu mahasiswa menemukan spot nugas ideal. Dukungan AI
            untuk mencocokkan gaya belajarmu dengan suasana cafe yang tepat.
          </p>
        </div>

        {/* Search Bar */}
        <div
          className="mt-10 flex justify-center animate-slide-up"
          style={{ animationDelay: "0.15s" }}
        >
          <SearchBar variant="hero" />
        </div>
      </div>
    </section>
  );
}
