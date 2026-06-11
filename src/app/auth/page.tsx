"use client";

import { useState } from "react";
import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <>
      {/* Tab Toggle */}
      <div className="flex mb-6 p-1 rounded-xl bg-kafein-dark-elevated/50">
        <button
          id="auth-tab-login"
          onClick={() => setMode("login")}
          className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            mode === "login"
              ? "bg-kafein-primary text-kafein-dark"
              : "text-kafein-text-secondary hover:text-kafein-text-primary"
          }`}
        >
          Masuk
        </button>
        <button
          id="auth-tab-register"
          onClick={() => setMode("register")}
          className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            mode === "register"
              ? "bg-kafein-primary text-kafein-dark"
              : "text-kafein-text-secondary hover:text-kafein-text-primary"
          }`}
        >
          Daftar
        </button>
      </div>

      {/* Forms */}
      {mode === "login" ? (
        <LoginForm onSwitchToRegister={() => setMode("register")} />
      ) : (
        <RegisterForm onSwitchToLogin={() => setMode("login")} />
      )}
    </>
  );
}
