import Link from "next/link";
import { Coffee } from "lucide-react";

export default function Footer() {
  return (
    <footer id="main-footer" className="py-8 px-4 border-t border-kafein-border/20">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Coffee className="w-5 h-5 text-kafein-primary" />
          <span className="font-semibold text-sm">
            KAFE<span className="text-kafein-primary">in</span> AI
          </span>
        </Link>

        <div className="flex items-center gap-4 text-xs text-kafein-text-muted">
          <Link href="/" className="hover:text-kafein-text-secondary transition-colors">
            Beranda
          </Link>
          <Link href="/search" className="hover:text-kafein-text-secondary transition-colors">
            Cari Kafe
          </Link>
          <Link href="/profile" className="hover:text-kafein-text-secondary transition-colors">
            Profil
          </Link>
        </div>

        <p className="text-xs text-kafein-text-muted">
          © 2026 KAFEin AI — Dibuat dengan ☕ untuk mahasiswa Undip
        </p>
      </div>
    </footer>
  );
}
