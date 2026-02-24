import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Marquee from "../components/Marquee";
import AboutSection from "../components/AboutSection";
import LogosSection from "../components/LogosSection";
import VisualIdentitySection from "../components/VisualIdentitySection";
import UiUxSection from "../components/UiUxSection";
import SocialMediaSection from "../components/SocialMediaSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Marquee />
      <AboutSection />
      <Marquee />
      <LogosSection />
      <Marquee />
      <VisualIdentitySection />
      <Marquee />
      <UiUxSection />
      <Marquee />
      <SocialMediaSection />
      <Marquee />
      <Footer />
    </main>
  );
}
