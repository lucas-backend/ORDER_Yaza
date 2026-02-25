export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[100] bg-white/80 backdrop-blur-md px-4 md:px-6 py-3 rounded-full shadow-lg border border-gray-200 flex gap-4 md:gap-6 text-xs md:text-sm font-medium w-max max-w-[95vw] overflow-x-auto hide-scroll items-center">
      <a href="#hero" className="hover:text-primary transition">
        Home
      </a>
      <a href="#about" className="hover:text-primary transition">
        About
      </a>
      <a href="#works" className="hover:text-primary transition">
        Works
      </a>
      <a href="#services" className="hover:text-primary transition">
        Services
      </a>
      <a href="#contact" className="hover:text-primary transition">
        Contact
      </a>
    </nav>
  );
}
