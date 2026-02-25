import Link from "next/link";
import { worksData } from "../data/worksdata";

export default function WorksSection() {
  return (
    <section id="works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display uppercase tracking-wide">
            Selected <span className="text-primary">Works</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A showcase of my recent projects and creative endeavors across
            different mediums.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {worksData.map((work) => (
            <div
              key={work.id}
              className="flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="w-full aspect-4/3 bg-gray-200 relative group overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex flex-col grow text-left">
                <p className="text-primary font-medium text-xs mb-2 uppercase tracking-wider">
                  {work.category}
                </p>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {work.title}
                </h2>
                <p className="text-sm text-gray-400 mb-6 grow leading-relaxed">
                  {work.description}
                </p>
                <Link
                  href={`/works/${work.slug}`}
                  className="flex items-center text-sm font-medium text-gray-900 hover:text-primary transition-colors group mt-auto w-fit"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-base font-medium rounded-full text-primary hover:bg-primary hover:text-white transition-colors duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
