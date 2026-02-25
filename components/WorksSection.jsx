export default function WorksSection() {
  const works = [
    {
      id: 1,
      title: "Project Alpha",
      category: "UI/UX Design",
      description:
        "A comprehensive redesign focusing on user journey and accessibility.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80",
      link: "#",
    },
    {
      id: 2,
      title: "Project Beta",
      category: "Graphic Design",
      description: "Visual identity and branding package for a local startup.",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80",
      link: "#",
    },
    {
      id: 3,
      title: "Project Gamma",
      category: "Video Editing",
      description: "Promotional video campaign targeting young professionals.",
      image:
        "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=500&q=80",
      link: "#",
    },
    {
      id: 4,
      title: "Project Delta",
      category: "Photography",
      description: "Product photography series for an e-commerce platform.",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80",
      link: "#",
    },
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {works.map((work) => (
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
                <a
                  href={work.link}
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
                </a>
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
