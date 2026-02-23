export default function Navbar() {
  return (
    <nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[100] bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-gray-200 hidden md:flex gap-6 text-sm font-medium"
    >
      <a href="#hero" className="hover:text-primary transition">Home</a>
      <a href="#about" className="hover:text-primary transition">About</a>
      <a href="#logos" className="hover:text-primary transition">Logos</a>
      <a href="#visual-identity" className="hover:text-primary transition"
        >Identity</a
      >
      <a href="#uiux" className="hover:text-primary transition">UI/UX</a>
      <a href="#social-media" className="hover:text-primary transition">Social</a>
    </nav>
  );
}
