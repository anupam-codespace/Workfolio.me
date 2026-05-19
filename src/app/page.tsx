import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808]">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <FeaturedProjects />
      <AboutSection />
      <Footer />
    </main>
  );
}
