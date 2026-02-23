export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#FDF3E5][#070714] overflow-hidden"
    >
      
      <div
        className="absolute inset-0 z-0 bg-cosmic bg-cover bg-center bg-no-repeat mix-blend-soft-light opacity-50"
      ></div>
      <div
        className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"
      ></div>

      <div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 flex flex-col items-center justify-center h-full text-center"
      >
        
        <div className="mb-8 text-primary animate-bounce">
          <svg
            fill="currentColor"
            height="48"
            viewBox="0 0 24 24"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
            ></path>
          </svg>
        </div>

        <h1
          className="font-display text-5xl sm:text-7xl md:text-9xl font-bold tracking-tight text-primary uppercase leading-none drop-shadow-lg mb-6 hover:scale-105 transition duration-500 cursor-default"
        >
          Thanks for<br />Coming!
        </h1>
        <p
          className="font-body text-gray-800 text-xl md:text-2xl font-light tracking-widest mb-20 drop-shadow-md"
        >
          See you soon
        </p>

        
        <div
          className="w-full flex justify-between items-center text-primary mt-auto border-t border-primary/20 pt-8 uppercase font-condensed tracking-widest text-xs md:text-sm"
        >
          <div className="hover:text-blue-500 transition cursor-pointer">
            Back to top
          </div>
          <div className="flex items-center gap-2">
            <span>&copy; 2025 Yaza Nurzahira</span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <a href="#" className="hover:text-blue-500 transition"
              ><i className="fa-brands fa-instagram text-lg"></i
            ></a>
            <a href="#" className="hover:text-blue-500 transition"
              ><i className="fa-brands fa-linkedin text-lg"></i
            ></a>
            <a href="#" className="hover:text-blue-500 transition"
              ><i className="fa-solid fa-envelope text-lg"></i
            ></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
