export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative w-full min-h-screen flex flex-col bg-[#FDF3E5][#070714] overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-cosmic bg-cover bg-center bg-no-repeat mix-blend-soft-light opacity-50"></div>
      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 flex flex-col flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 flex-grow">
          {/* Contact Info Side */}
          <div className="flex flex-col justify-center">
            <div className="mb-6 text-primary animate-bounce self-start">
              <svg
                fill="currentColor"
                height="48"
                viewBox="0 0 24 24"
                width="48"
              >
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"></path>
              </svg>
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold text-primary uppercase leading-none drop-shadow-lg mb-6">
              Let's Work
              <br />
              Together!
            </h2>
            <p className="font-body text-gray-800 text-lg md:text-xl font-light mb-10 max-w-lg">
              Have a project in mind or just want to say hi? Fill out the form
              or reach out via my social channels.
            </p>

            <div className="flex items-center gap-6 mt-auto">
              <a
                href="#"
                className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <i className="fa-brands fa-instagram text-xl"></i>
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <i className="fa-brands fa-linkedin text-xl"></i>
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <i className="fa-brands fa-whatsapp text-xl"></i>
              </a>
            </div>
          </div>

          {/* Contact Form Side */}
          <div className="flex flex-col justify-center">
            <form className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl w-full border border-white/50">
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-widest font-condensed"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-widest font-condensed"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-widest font-condensed"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-medium rounded-xl px-6 py-4 hover:bg-blue-600 transition-colors duration-300 uppercase tracking-widest shadow-lg shadow-primary/30"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="w-full flex justify-between items-center text-primary mt-16 border-t border-primary/20 pt-8 uppercase font-condensed tracking-widest text-xs md:text-sm">
          <a
            href="#hero"
            className="hover:text-blue-500 transition cursor-pointer"
          >
            Back to top
          </a>
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Yaza Nurzahira</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Bandar Lampung, Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
