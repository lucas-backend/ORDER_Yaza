export default function LogosSection() {
  return (
    <section
      id="logos"
      className="relative w-full min-h-screen flex items-center justify-center py-20 px-4 md:px-12 bg-[#F9F3E9][#18181b]"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-4 flex flex-col justify-center h-full">
          <p className="text-sm md:text-base font-medium tracking-wide opacity-80 mb-6 uppercase">
            Portfolio - Logofolio
          </p>
          <h2 className="text-6xl md:text-8xl font-display text-logos-primary[#5f7cdc] uppercase tracking-tight leading-none mb-6">
            Logofolio
          </h2>
          <p className="text-base md:text-lg leading-relaxed opacity-90 max-w-md">
            Throughout my experience as a designer, I have created various logos
            for individuals, businesses, local startups, and university
            projects.
          </p>
          <p className="mt-8 text-sm font-medium opacity-80">
            Date: 2021 - 2026
          </p>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          <img
            src="https://placehold.co/400x400/1c2b4b/FFF?text=Logo+1"
            alt="Logo 1"
            className="w-full aspect-square object-cover rounded-2xl shadow-sm transition hover:scale-105 hover:shadow-xl border border-gray-100"
          />
          <img
            src="https://placehold.co/400x400/5465FF/FFF?text=Logo+2"
            alt="Logo 2"
            className="w-full aspect-square object-cover rounded-2xl shadow-sm transition hover:scale-105 hover:shadow-xl border border-gray-100"
          />
          <img
            src="https://placehold.co/400x400/E65555/FFF?text=Logo+3"
            alt="Logo 3"
            className="w-full aspect-square object-cover rounded-2xl shadow-sm transition hover:scale-105 hover:shadow-xl border border-gray-100"
          />
          <img
            src="https://placehold.co/400x400/F49F44/FFF?text=Logo+4"
            alt="Logo 4"
            className="w-full aspect-square object-cover rounded-2xl shadow-sm transition hover:scale-105 hover:shadow-xl border border-gray-100"
          />
          <img
            src="https://placehold.co/400x400/1e1e4a/FFF?text=Logo+5"
            alt="Logo 5"
            className="w-full aspect-square object-cover rounded-2xl shadow-sm transition hover:scale-105 hover:shadow-xl border border-gray-100"
          />
          <img
            src="https://placehold.co/400x400/134E4A/FFF?text=Logo+6"
            alt="Logo 6"
            className="w-full aspect-square object-cover rounded-2xl shadow-sm transition hover:scale-105 hover:shadow-xl border border-gray-100"
          />
        </div>
      </div>
    </section>
  );
}
