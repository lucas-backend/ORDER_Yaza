export default function WorksSection() {
  const works = [
    {
      id: 1,
      title: "Project Alpha",
      category: "UI/UX Design",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80",
      link: "#",
    },
    {
      id: 2,
      title: "Project Beta",
      category: "Graphic Design",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80",
      link: "#",
    },
    {
      id: 3,
      title: "Project Gamma",
      category: "Video Editing",
      image:
        "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=500&q=80",
      link: "#",
    },
    {
      id: 4,
      title: "Project Delta",
      category: "Photography",
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
            <a
              key={work.id}
              href={work.link}
              className="group relative block overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${work.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-primary font-medium text-sm mb-2 uppercase tracking-wider">
                  {work.category}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {work.title}
                </h3>

                <div className="mt-4 flex items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <span className="mr-2 text-sm font-medium">View Project</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </a>
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
