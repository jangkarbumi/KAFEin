import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group glass-card rounded-2xl p-6 hover:border-kafein-primary/30 hover:bg-kafein-primary/[0.03] transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-kafein-primary/10 flex items-center justify-center mb-4 group-hover:bg-kafein-primary/15 transition-colors">
        <Icon className="w-6 h-6 text-kafein-primary" />
      </div>
      <h3 className="font-semibold text-kafein-text-primary mb-1.5">
        {title}
      </h3>
      <p className="text-sm text-kafein-text-secondary leading-relaxed">
        {description}
      </p>
    </div>
  );
}
