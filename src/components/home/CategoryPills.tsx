"use client";

import { useRouter } from "next/navigation";
import { User, Users, Monitor, Coffee } from "lucide-react";

const CATEGORIES = [
  { label: "Tugas Individu", icon: User, query: "cafe sepi untuk belajar sendiri" },
  { label: "Kerja Kelompok", icon: Users, query: "tempat kerja kelompok meja besar" },
  { label: "Meeting Online", icon: Monitor, query: "cafe wifi kencang untuk meeting online" },
  { label: "Nongkrong Santai", icon: Coffee, query: "cafe nongkrong santai murah" },
];

export default function CategoryPills() {
  const router = useRouter();

  return (
    <section className="py-10 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-3">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.label}
            onClick={() => router.push(`/search?q=${encodeURIComponent(cat.query)}`)}
            className="btn-outline !rounded-full !py-2.5 !px-5 !text-sm group hover:border-kf-brown hover:bg-kf-surface-hover active:scale-95 transition-all"
          >
            <cat.icon className="w-4 h-4 text-kf-brown" />
            {cat.label}
          </button>
        ))}
      </div>
    </section>
  );
}
