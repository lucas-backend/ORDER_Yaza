export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full flex items-center justify-center py-12 px-4 md:px-8"
    >
      <div
        className="about_section w-full max-w-7xl aspect-video bg-white[#0a0a0a] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100 relative"
      >
        
        <div
          className="lg:w-2/5 h-1/2 lg:h-full relative overflow-hidden bg-primary/10"
        >
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"
          ></div>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn8aCgQT5Ja1KgdNqP5yimMzjMnv0QsYeOy0VT-KReOTUZsSNSZNuwzEqHoPWKZyljv6LfH58I0aAOMoJf7LviwtUrKtGe7rg7VHIwSPWaBkN6bT3Cs7tNZutmV0KYFL2jjQ2LgydJzIDNPG2dlY32EfD1Nps2yafQUBhzXw-Kr8CK35cuRqpTgXXfcCA22N0e9_T5R4lITrP0esTLymoIjzxIleBa-ivdpB1E0M0Vj063n5XEAvFw9mjTPE9DgYqZs54cPbG9Wmmt"
            alt="Yaza Nurzahira"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute bottom-6 left-6 z-20 text-white">
            <h3
              className="font-condensed font-bold text-3xl uppercase flex items-center gap-2"
            >
              Contact
            </h3>
            <p className="text-sm opacity-90 mb-1">
              <i className="fa-solid fa-envelope mr-2"></i>yaza.nurzahira@icloud.com
            </p>
          </div>
        </div>

        
        <div
          className="lg:w-3/5 h-1/2 lg:h-full p-8 md:p-12 overflow-y-auto hide-scroll text-gray-800"
        >
          <div className="flex items-center gap-3 mb-6">
            <i className="fa-solid fa-star-of-life text-primary text-3xl"></i>
            <h3
              className="text-primary font-condensed font-bold text-4xl uppercase"
            >
              About Me
            </h3>
          </div>

          <p
            className="text-base md:text-lg leading-relaxed mb-8 text-gray-600"
          >
            I'm a Peruvian designer from Arequipa City, specialized in branding
            and graphic design. My passion lies in crafting and enhancing
            projects that stand out with a distinctive style, ensuring they
            convey the right message with a genuine and unique personality.
            Inspired by the stars, I believe in limitless creativity, where
            every idea has the potential to shine and leave a lasting impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            
            <div>
              <h4
                className="font-condensed font-bold text-2xl uppercase mb-4 border-b border-gray-200 pb-2"
              >
                Experience
              </h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <div className="font-bold text-primary">
                    Junior Manager (2023)
                  </div>
                  <div className="opacity-80">INNICIA Business Incubator</div>
                </li>
                <li>
                  <div className="font-bold text-primary">
                    Designer (2023 - now)
                  </div>
                  <div className="opacity-80">GOE UCSM Nueva Face</div>
                </li>
                <li>
                  <div className="font-bold text-primary">
                    Junior Designer (2024)
                  </div>
                  <div className="opacity-80">Moon Creative Agency</div>
                </li>
              </ul>
            </div>

            
            <div>
              <h4
                className="font-condensed font-bold text-2xl uppercase mb-4 border-b border-gray-200 pb-2"
              >
                Skills
              </h4>
              <div className="flex flex-wrap gap-3">
                <div
                  className="bg-gray-100 text-[#FF9A00] w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold border border-gray-200 shadow-sm transition hover:scale-110"
                >
                  Ai
                </div>
                <div
                  className="bg-gray-100 text-[#31A8FF] w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold border border-gray-200 shadow-sm transition hover:scale-110"
                >
                  Ps
                </div>
                <div
                  className="bg-gray-100 text-[#D8A5FF] w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold border border-gray-200 shadow-sm transition hover:scale-110"
                >
                  Ae
                </div>
                <div
                  className="bg-gray-100 text-gray-800 w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold border border-gray-200 shadow-sm transition hover:scale-110"
                >
                  <i className="fa-brands fa-figma"></i>
                </div>
              </div>

              <h4 className="font-condensed font-bold text-2xl uppercase mt-6 mb-3">
                Languages
              </h4>
              <div className="text-sm">
                <p>
                  <span className="font-bold text-primary">Spanish:</span> Native
                </p>
                <p>
                  <span className="font-bold text-primary">English:</span>
                  Intermediate B1
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
