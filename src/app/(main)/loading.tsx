export default function Loading() {
  return (
    <div className="flex-1 flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-[3px] rounded-full border-kf-border border-t-kf-brown animate-spin" />
        <p className="text-sm text-kf-text-secondary">Memuat halaman...</p>
      </div>
    </div>
  );
}
