import Link from "next/link";

export default function Footer() {
  return (
    <footer id="main-footer" className="bg-kf-bg-alt border-t border-kf-border-light py-10 px-4 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <Link href="/" className="text-lg font-bold text-kf-brown tracking-tight">
            KAFEin
          </Link>
          <p className="text-xs text-kf-text-muted mt-1">
            © 2024 KAFEin. Built for the studious companion.
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-kf-text-secondary">
          <Link href="/" className="hover:text-kf-text transition-colors">About KAFEin</Link>
          <Link href="/" className="hover:text-kf-text transition-colors">Student Community</Link>
          <Link href="/" className="hover:text-kf-text transition-colors">Contact Us</Link>
          <Link href="/" className="hover:text-kf-text transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
