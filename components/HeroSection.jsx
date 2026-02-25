export default function HeroSection() {
  return (
    <header
      id="hero"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
    >
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-6xl">
        <div className="hidden md:flex flex-col justify-center">
          <h2 className="text-primary font-condensed font-bold text-2xl lg:text-4xl tracking-widest text-vertical uppercase opacity-80">
            Digital Creator
          </h2>
        </div>
        <div className="flex flex-col items-center leading-[0.90] select-none">
          <div className="flex items-baseline gap-2 md:gap-6">
            <span className="text-primary font-display text-[6rem] sm:text-[10rem] md:text-[14rem] tracking-tight drop-shadow-sm">
              PORT
            </span>
            <span className="text-primary font-display text-[6rem] sm:text-[10rem] md:text-[14rem] tracking-tight drop-shadow-sm">
              20
            </span>
          </div>
          <div className="flex items-baseline gap-2 md:gap-6">
            <span className="text-primary font-display text-[6rem] sm:text-[10rem] md:text-[14rem] tracking-tight drop-shadow-sm">
              FOLIO
            </span>
            <span className="text-primary font-display text-[6rem] sm:text-[10rem] md:text-[14rem] tracking-tight drop-shadow-sm">
              26
            </span>
          </div>
          <div className="relative z-10 text-center mt-6">
            <p className="font-condensed font-bold uppercase tracking-[0.2em] text-sm md:text-base text-gray-600">
              <span className="font-normal normal-case italic font-serif mr-1">
                by
              </span>
              YAZA NURZAHIRA
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
