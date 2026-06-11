import { Coffee } from "lucide-react";

export default function SteamEffect() {
  return (
    <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-1.5 pointer-events-none">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-1 h-6 rounded-full bg-kafein-primary/30 animate-steam"
          style={{
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${2 + i * 0.3}s`,
          }}
        />
      ))}
    </div>
  );
}

export function CoffeeLogo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: { icon: "w-5 h-5", container: "" },
    md: { icon: "w-7 h-7", container: "" },
    lg: { icon: "w-10 h-10", container: "w-20 h-20 rounded-2xl bg-gradient-to-br from-kafein-primary/20 to-kafein-primary/5 flex items-center justify-center border border-kafein-primary/20" },
  };

  const s = sizes[size];

  if (size === "lg") {
    return (
      <div className={s.container}>
        <Coffee className={`${s.icon} text-kafein-primary animate-float`} />
      </div>
    );
  }

  return (
    <div className="relative">
      <Coffee className={`${s.icon} text-kafein-primary`} />
      <SteamEffect />
    </div>
  );
}
