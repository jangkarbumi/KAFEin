"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, LogIn } from "lucide-react";
import { CoffeeLogo } from "@/components/ui/SteamEffect";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/search", label: "Cari Kafe" },
  ];

  return (
    <nav
      id="main-navbar"
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-kafein-border/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <CoffeeLogo size="md" />
          <span className="text-xl font-bold tracking-tight">
            KAFE<span className="text-kafein-primary">in</span>
          </span>
          <span className="hidden sm:inline-block ml-1 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest rounded-full bg-kafein-primary/10 text-kafein-primary border border-kafein-primary/20">
            AI Beta
          </span>
        </Link>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                pathname === link.href
                  ? "text-kafein-primary font-medium"
                  : "text-kafein-text-secondary hover:text-kafein-text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          <Link
            href="/profile"
            id="nav-profile"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm transition-all duration-200 ${
              pathname === "/profile"
                ? "bg-kafein-primary/10 text-kafein-primary border border-kafein-primary/20"
                : "text-kafein-text-secondary hover:text-kafein-text-primary hover:bg-kafein-dark-elevated"
            }`}
          >
            <User className="w-4 h-4" />
            <span className="hidden sm:inline">Profil</span>
          </Link>
          <Link
            href="/auth"
            id="nav-login"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-sm font-medium bg-gradient-to-r from-kafein-primary to-kafein-primary-dark text-kafein-dark hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all duration-300"
          >
            <LogIn className="w-4 h-4" />
            <span className="hidden sm:inline">Masuk</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
