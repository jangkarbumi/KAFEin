export default function LoadingSpinner({ size = "md", text }: { size?: "sm" | "md" | "lg"; text?: string }) {
  const sizes = {
    sm: "w-5 h-5 border-2",
    md: "w-8 h-8 border-[3px]",
    lg: "w-12 h-12 border-4",
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div
        className={`${sizes[size]} rounded-full border-kafein-border border-t-kafein-primary animate-spin`}
      />
      {text && (
        <p className="text-sm text-kafein-text-secondary animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
}
