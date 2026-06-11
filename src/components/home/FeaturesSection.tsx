import { Wifi, Plug, Volume2, MapPin } from "lucide-react";
import FeatureCard from "@/components/ui/FeatureCard";

const FEATURES = [
  {
    icon: Wifi,
    title: "WiFi Terverifikasi",
    description: "Info kualitas WiFi real dari pengalaman mahasiswa",
  },
  {
    icon: Plug,
    title: "Info Colokan",
    description: "Tahu jumlah colokan sebelum datang ke kafe",
  },
  {
    icon: Volume2,
    title: "Level Kebisingan",
    description: "Pilih suasana sesuai mood belajarmu",
  },
  {
    icon: MapPin,
    title: "Dekat Kampus",
    description: "Kafe-kafe terbaik di sekitar area Undip",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-20 px-4 sm:px-6 bg-kafein-dark-card/50 border-t border-kafein-border/20"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-kafein-primary text-sm font-semibold uppercase tracking-widest">
            Kenapa KAFEin?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 tracking-tight">
            Info yang Kamu{" "}
            <span className="text-kafein-primary">Butuhkan</span>
          </h2>
          <p className="text-kafein-text-secondary mt-3 max-w-lg mx-auto">
            Tidak perlu lagi kecewa datang ke kafe ternyata WiFi lemot atau
            colokan penuh. Kami punya datanya.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
