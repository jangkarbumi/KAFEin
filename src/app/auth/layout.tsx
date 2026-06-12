import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4"
      style={{ background: "linear-gradient(135deg, #FDF5EE 0%, #EBF0F0 100%)" }}
    >
      <div className="w-full max-w-4xl card overflow-hidden flex flex-col md:flex-row min-h-[520px]">
        {/* Left: Image Panel */}
        <div className="relative w-full md:w-1/2 min-h-[200px] md:min-h-0 bg-gradient-to-br from-kf-brown-dark to-kf-brown flex flex-col justify-end p-8 text-white">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-kf-brown-dark/90 via-kf-brown-dark/50 to-kf-brown-dark/30 z-10" />
          <div className="absolute inset-0 opacity-40">
            <Image src="/Ka.Ma.jpg" alt="Cafe interior" fill className="object-cover" />
          </div>

          {/* Content */}
          <div className="relative z-20">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold tracking-tight">
                ☕ KAFEin
              </span>
            </Link>
            <h2 className="text-2xl font-bold leading-snug">
              Join the Student<br />Community
            </h2>
            <p className="text-sm text-white/70 mt-2 max-w-[280px] leading-relaxed">
              Find your perfect study spot, connect with peers,
              and let our AI guide you to the ideal atmosphere for your productivity.
            </p>
          </div>
        </div>

        {/* Right: Form Panel */}
        <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}
