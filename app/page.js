import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Marquee from "../components/Marquee";
import AboutSection from "../components/AboutSection";
import WorksSection from "../components/WorksSection";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Marquee />
      <AboutSection />
      <Marquee />
      <WorksSection />
      <Marquee />
      <ServicesSection />
      <Marquee />
      <Footer />
    </main>
  );
}
