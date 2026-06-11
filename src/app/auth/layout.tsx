import Link from "next/link";
import { CoffeeLogo } from "@/components/ui/SteamEffect";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative">
      {/* Decorative Background */}
      <div className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-kafein-primary/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-[15%] w-96 h-96 rounded-full bg-kafein-primary/3 blur-[120px] pointer-events-none" />

      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5 mb-8">
        <CoffeeLogo size="md" />
        <span className="text-2xl font-bold tracking-tight">
          KAFE<span className="text-kafein-primary">in</span>
        </span>
      </Link>

      {/* Auth Card */}
      <div className="w-full max-w-md glass-card rounded-2xl p-8 relative z-10">
        {children}
      </div>

      {/* Back to Home */}
      <Link
        href="/"
        className="mt-6 text-xs text-kafein-text-muted hover:text-kafein-text-secondary transition-colors"
      >
        ← Kembali ke Beranda
      </Link>
    </div>
  );
}
