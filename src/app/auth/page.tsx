"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, LogIn, UserPlus, User } from "lucide-react";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <>
      {/* Tab Toggle */}
      <div className="flex border-b border-kf-border mb-6">
        <button
          id="auth-tab-login"
          onClick={() => setMode("login")}
          className={`flex-1 pb-3 text-sm font-semibold uppercase tracking-wider transition-colors ${
            mode === "login"
              ? "text-kf-text border-b-2 border-kf-brown"
              : "text-kf-text-muted hover:text-kf-text-secondary"
          }`}
        >
          Log In
        </button>
        <button
          id="auth-tab-register"
          onClick={() => setMode("register")}
          className={`flex-1 pb-3 text-sm font-semibold uppercase tracking-wider transition-colors ${
            mode === "register"
              ? "text-kf-text border-b-2 border-kf-brown"
              : "text-kf-text-muted hover:text-kf-text-secondary"
          }`}
        >
          Sign Up
        </button>
      </div>

      {mode === "login" ? <LoginForm /> : <RegisterForm />}
    </>
  );
}

// ─── Login Form ──────────────────────────────────────────────────────────────

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="text-center mb-2">
        <h2 className="text-xl font-bold text-kf-text">Welcome Back</h2>
        <p className="text-sm text-kf-text-secondary mt-1">Continue your studious journey.</p>
      </div>

      <div>
        <input id="login-email" type="email" placeholder="Email Address" required className="input-field" />
      </div>

      <div className="relative">
        <input
          id="login-password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          required
          className="input-field pr-10"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-kf-text-muted"
        >
          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="checkbox-custom" />
          <span className="text-sm text-kf-text-secondary">Remember me</span>
        </label>
        <button type="button" className="text-sm text-kf-brown hover:underline font-medium">
          Forgot Password?
        </button>
      </div>

      <button id="login-submit" type="submit" disabled={isLoading} className="btn-primary w-full !py-3 uppercase tracking-wider">
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          "Log In"
        )}
      </button>

      {/* Social Login */}
      <div className="relative flex items-center gap-4 my-4">
        <div className="flex-1 h-px bg-kf-border" />
        <span className="text-xs text-kf-text-muted">Or continue with</span>
        <div className="flex-1 h-px bg-kf-border" />
      </div>

      <div className="flex gap-3">
        <button type="button" className="btn-outline flex-1 !py-2.5">
          <span className="font-bold text-xs tracking-wider">GOOGLE</span> Google
        </button>
        <button type="button" className="btn-outline flex-1 !py-2.5">
          ⌘ Apple
        </button>
      </div>
    </form>
  );
}

// ─── Register Form ───────────────────────────────────────────────────────────

function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-center mb-2">
        <h2 className="text-xl font-bold text-kf-text">Create Account</h2>
        <p className="text-sm text-kf-text-secondary mt-1">Start finding your perfect study spots.</p>
      </div>

      <input id="register-name" type="text" placeholder="Full Name" required className="input-field" />
      <input id="register-email" type="email" placeholder="Email Address" required className="input-field" />

      <div className="relative">
        <input
          id="register-password"
          type={showPassword ? "text" : "password"}
          placeholder="Password (min. 8 characters)"
          required
          minLength={8}
          className="input-field pr-10"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-kf-text-muted"
        >
          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      </div>

      <input id="register-confirm" type="password" placeholder="Confirm Password" required className="input-field" />

      <button id="register-submit" type="submit" disabled={isLoading} className="btn-primary w-full !py-3 uppercase tracking-wider">
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          "Sign Up"
        )}
      </button>
    </form>
  );
}
