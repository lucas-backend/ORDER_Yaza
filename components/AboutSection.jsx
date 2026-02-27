export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full flex items-center justify-center py-16 md:py-24 px-4 md:px-8"
    >
      <div className="about_section w-full max-w-7xl flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative">
        <div className="lg:w-2/5 w-full relative overflow-hidden rounded-[2rem] shadow-xl aspect-3/4 sm:aspect-square lg:aspect-3/4">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
          <img
            src="/images/fotoyaza_about.webp"
            alt="Yaza Nurzahira"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute bottom-6 left-6 z-20 text-white">
            <h3 className="font-condensed font-bold text-3xl uppercase flex items-center gap-2">
              Contact
            </h3>
            <p className="text-sm opacity-90 mb-1">
              <i className="fa-solid fa-envelope mr-2"></i>
              yaza.nurzahira@icloud.com
            </p>
          </div>
        </div>

        <div className="lg:w-3/5 w-full text-gray-800 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6">
            <i className="fa-solid fa-star-of-life text-primary text-3xl"></i>
            <h3 className="text-primary font-condensed font-bold text-4xl uppercase">
              About Me
            </h3>
          </div>

          <p className="text-base md:text-lg leading-relaxed mb-8 text-gray-600">
            I am Yaza Nurzahira. I'm a student of Informatics Engineering. Even
            though I learn about logic and coding at college, I really love the
            world of creative design. I am a Graphic Designer who also works on
            UI UX Design and Motion Graphics. I believe that every project is a
            new journey to find new ideas. I feel very happy when I turn still
            images into moving animations and create digital designs that are
            easy and fun to use. For me, design is not just a job. It is
            something that always makes me excited and helps me grow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-condensed font-bold text-2xl uppercase mb-4 border-b border-gray-200 pb-2">
                Experience
              </h4>
              <ul className="space-y-4 text-sm mb-6">
                <li>
                  <div className="font-bold text-primary">Graphic Designer</div>
                  <div className="opacity-80">PT APIK Indonesia</div>
                </li>
                <li>
                  <div className="font-bold text-primary">
                    Social Media Specialist
                  </div>
                  <div className="opacity-80">Sky Garden Cafe & Resto</div>
                </li>
                <li>
                  <div className="font-bold text-primary">Graphic Designer</div>
                  <div className="opacity-80">Freelancer</div>
                </li>
              </ul>

              <h4 className="font-condensed font-bold text-2xl uppercase mb-4 border-b border-gray-200 pb-2">
                Skills
              </h4>
              <div className="flex flex-wrap gap-3">
                <div className="bg-gray-100 w-12 h-12 rounded-xl flex items-center justify-center border border-gray-200 shadow-sm transition hover:scale-110 p-2 text-gray-800">
                  <img
                    src="/images/skills/figma.webp"
                    alt="Figma"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="bg-gray-100 w-12 h-12 rounded-xl flex items-center justify-center border border-gray-200 shadow-sm transition hover:scale-110 p-2 text-gray-800">
                  <img
                    src="/images/skills/alightmotion.webp"
                    alt="Alight Motion"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="bg-gray-100 w-12 h-12 rounded-xl flex items-center justify-center border border-gray-200 shadow-sm transition hover:scale-110 p-2 text-gray-800">
                  <img
                    src="/images/skills/ibispaint.webp"
                    alt="Ibis Paint"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="bg-gray-100 w-12 h-12 rounded-xl flex items-center justify-center border border-gray-200 shadow-sm transition hover:scale-110 p-2 text-gray-800">
                  <img
                    src="/images/skills/canva.webp"
                    alt="Canva"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="bg-gray-100 w-12 h-12 rounded-xl flex items-center justify-center border border-gray-200 shadow-sm transition hover:scale-110 p-2 text-gray-800">
                  <img
                    src="/images/skills/capcut.webp"
                    alt="Capcut"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            <div>
              <div>
                <h4 className="font-condensed font-bold text-2xl uppercase mb-4 border-b border-gray-200 pb-2">
                  Organization
                </h4>
                <ul className="space-y-4 text-sm">
                  <li>
                    <div className="font-bold text-primary">
                      Vice Head of Campaign and Information Department
                    </div>
                    <div className="opacity-80">UKM KOIN Unila</div>
                  </li>
                  <li>
                    <div className="font-bold text-primary">
                      Media and Information Division
                    </div>
                    <div className="opacity-80">
                      Informatics Engineering Student Association
                    </div>
                  </li>
                  <li>
                    <div className="font-bold text-primary">
                      Mascot Training Workshop Speaker
                    </div>
                    <div className="opacity-80">
                      BEM Gentiaras (School of Economics)
                    </div>
                  </li>
                  <li>
                    <div className="font-bold text-primary">
                      Publication, Documentation, and Decoration Coordinator
                    </div>
                    <div className="opacity-80">
                      Legacy Project (University Level)
                    </div>
                  </li>
                  <li>
                    <div className="font-bold text-primary">
                      Publication, Documentation, and Decoration Staff
                    </div>
                    <div className="opacity-80">
                      Electrical Engineering in Action 2025 (University Level)
                    </div>
                  </li>
                </ul>
              </div>

              {/* <h4 className="font-condensed font-bold text-2xl uppercase mt-6 mb-3">
                Languages
              </h4>
              <div className="text-sm">
                <p>
                  <span className="font-bold text-primary">Spanish:</span>{" "}
                  Native
                </p>
                <p>
                  <span className="font-bold text-primary">English:</span>
                  Intermediate B1
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
