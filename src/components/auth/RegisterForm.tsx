"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, UserPlus, User } from "lucide-react";

export default function RegisterForm({ onSwitchToLogin }: { onSwitchToLogin: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const passwordsMatch = password === confirmPassword || confirmPassword === "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) return;
    setIsLoading(true);
    // Phase 3: Implement actual auth
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-kafein-text-primary">
          Buat Akun Baru
        </h2>
        <p className="text-sm text-kafein-text-secondary mt-2">
          Daftar untuk menyimpan preferensi dan riwayat pencarian
        </p>
      </div>

      {/* Name */}
      <div className="space-y-1.5">
        <label htmlFor="register-name" className="text-xs font-medium text-kafein-text-secondary uppercase tracking-wider">
          Nama Lengkap
        </label>
        <div className="glass-input rounded-xl flex items-center gap-3 px-4 py-3">
          <User className="w-4 h-4 text-kafein-text-muted shrink-0" />
          <input
            id="register-name"
            type="text"
            placeholder="Nama lengkap kamu"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="flex-1 bg-transparent outline-none text-sm text-kafein-text-primary placeholder:text-kafein-text-muted/50"
          />
        </div>
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <label htmlFor="register-email" className="text-xs font-medium text-kafein-text-secondary uppercase tracking-wider">
          Email
        </label>
        <div className="glass-input rounded-xl flex items-center gap-3 px-4 py-3">
          <Mail className="w-4 h-4 text-kafein-text-muted shrink-0" />
          <input
            id="register-email"
            type="email"
            placeholder="nama@students.undip.ac.id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-transparent outline-none text-sm text-kafein-text-primary placeholder:text-kafein-text-muted/50"
          />
        </div>
      </div>

      {/* Password */}
      <div className="space-y-1.5">
        <label htmlFor="register-password" className="text-xs font-medium text-kafein-text-secondary uppercase tracking-wider">
          Password
        </label>
        <div className="glass-input rounded-xl flex items-center gap-3 px-4 py-3">
          <Lock className="w-4 h-4 text-kafein-text-muted shrink-0" />
          <input
            id="register-password"
            type={showPassword ? "text" : "password"}
            placeholder="Minimal 8 karakter"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={8}
            className="flex-1 bg-transparent outline-none text-sm text-kafein-text-primary placeholder:text-kafein-text-muted/50"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-kafein-text-muted hover:text-kafein-text-secondary transition-colors"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Confirm Password */}
      <div className="space-y-1.5">
        <label htmlFor="register-confirm" className="text-xs font-medium text-kafein-text-secondary uppercase tracking-wider">
          Konfirmasi Password
        </label>
        <div className={`glass-input rounded-xl flex items-center gap-3 px-4 py-3 ${!passwordsMatch ? "border-red-500/50" : ""}`}>
          <Lock className="w-4 h-4 text-kafein-text-muted shrink-0" />
          <input
            id="register-confirm"
            type={showPassword ? "text" : "password"}
            placeholder="Ulangi password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="flex-1 bg-transparent outline-none text-sm text-kafein-text-primary placeholder:text-kafein-text-muted/50"
          />
        </div>
        {!passwordsMatch && (
          <p className="text-xs text-red-400">Password tidak cocok</p>
        )}
      </div>

      {/* Submit */}
      <button
        id="register-submit"
        type="submit"
        disabled={isLoading || !passwordsMatch}
        className="w-full py-3 rounded-xl bg-gradient-to-r from-kafein-primary to-kafein-primary-dark text-kafein-dark font-semibold text-sm hover:shadow-[0_0_30px_rgba(245,158,11,0.25)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-kafein-dark/30 border-t-kafein-dark rounded-full animate-spin" />
        ) : (
          <>
            <UserPlus className="w-4 h-4" />
            Daftar
          </>
        )}
      </button>

      {/* Switch to Login */}
      <p className="text-center text-sm text-kafein-text-secondary">
        Sudah punya akun?{" "}
        <button
          type="button"
          onClick={onSwitchToLogin}
          className="text-kafein-primary hover:text-kafein-primary-light font-medium transition-colors"
        >
          Masuk di sini
        </button>
      </p>
    </form>
  );
}
