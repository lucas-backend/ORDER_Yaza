export default function UiUxSection() {
  return (
    <section
      id="uiux"
      className="relative w-full min-h-screen flex items-center justify-center py-20 px-4 md:px-12 bg-[#FFF6EA][#151515]"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-4 flex flex-col justify-center h-full">
          <p className="text-sm font-medium tracking-wide uppercase opacity-70 mb-6">
            Portfolio - UX / UI Design
          </p>
          <h2 className="text-6xl md:text-8xl font-display font-bold text-[#0F1E36] uppercase  mb-8 leading-none tracking-wider">
            VITAE
          </h2>
          <p className="text-base md:text-lg leading-relaxed font-light opacity-90 mb-8">
            Vitae is a university project that proposed the creation of a
            unified platform where users could store, manage, and have full
            control over their medical data. The interface conveys security and
            ease of use.
          </p>
          <p className="text-sm font-medium opacity-80">Date: 2026</p>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <img
            src="https://placehold.co/800x600/134E4A/FFFFFF?text=Vitae+Medical+App+Mockup"
            alt="Vitae UI/UX 1"
            className="sm:col-span-2 w-full h-auto object-cover rounded-[2rem] shadow-xl transition hover:scale-105"
          />
          <img
            src="https://placehold.co/400x500/F49F44/FFFFFF?text=Vitae+Profile"
            alt="Vitae UI/UX 2"
            className="w-full h-auto object-cover rounded-[2rem] shadow-lg transition hover:scale-105"
          />
          <img
            src="https://placehold.co/400x500/E65555/FFFFFF?text=Vitae+Security"
            alt="Vitae UI/UX 3"
            className="w-full h-auto object-cover rounded-[2rem] shadow-lg transition hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
