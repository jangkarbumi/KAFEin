export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Ketik Kebutuhanmu",
      description:
        'Tulis bebas seperti "kafe tenang WiFi kencang dekat Tembalang budget 25rb"',
    },
    {
      step: "02",
      title: "AI Menganalisis",
      description:
        "Gemini AI memahami konteks dan mencocokkan dengan database kafe kami",
    },
    {
      step: "03",
      title: "Dapat Rekomendasi",
      description:
        "Dapatkan kafe terbaik beserta alasan mengapa cocok untukmu",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 px-4 sm:px-6 border-t border-kafein-border/20"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-kafein-primary text-sm font-semibold uppercase tracking-widest">
            Cara Kerja
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 tracking-tight">
            Semudah{" "}
            <span className="text-kafein-primary">Pesan Kopi</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div key={item.step} className="relative text-center">
              {/* Connector Line */}
              {index < 2 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-kafein-primary/30 to-transparent" />
              )}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-kafein-primary/15 to-kafein-primary/5 border border-kafein-primary/20 mb-5">
                <span className="text-xl font-bold text-kafein-primary">
                  {item.step}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-kafein-text-secondary leading-relaxed max-w-[280px] mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
