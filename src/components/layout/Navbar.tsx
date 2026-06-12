"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const isSearch = pathname === "/search";

  const navLinks = [
    { href: "/search", label: "Find Cafe" },
    { href: "/saved", label: "Saved" },
    { href: "/history", label: "History" },
  ];

  return (
    <nav id="main-navbar" className="sticky top-0 z-50 bg-kf-bg/90 backdrop-blur-md border-b border-kf-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 shrink-0">
          <span className="text-xl font-bold text-kf-brown tracking-tight">
            KAFE<span className="text-kf-brown">in</span>
          </span>
        </Link>

        {/* Inline Search (on search page) */}
        {isSearch && (
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="flex items-center gap-2 w-full px-4 py-2 rounded-full bg-kf-surface border border-kf-border">
              <Search className="w-4 h-4 text-kf-text-muted" />
              <span className="text-sm text-kf-text-muted">Cafe sepi dekat Undip</span>
            </div>
          </div>
        )}

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                pathname === link.href
                  ? "text-kf-text font-semibold border-b-2 border-kf-brown pb-0.5"
                  : "text-kf-text-secondary hover:text-kf-text"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-kf-bg-alt transition-colors">
            <Bell className="w-5 h-5 text-kf-text-secondary" />
          </button>

          <Link
            href="/auth"
            id="nav-login"
            className="btn-primary !py-2 !px-5 !rounded-full !text-sm"
          >
            Login
          </Link>

          <Link href="/profile" className="shrink-0">
            <div className="w-9 h-9 rounded-full bg-kf-peach/50 border-2 border-kf-border flex items-center justify-center overflow-hidden">
              <span className="text-sm font-semibold text-kf-brown">A</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
