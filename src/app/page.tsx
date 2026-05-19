import InitialLoadShell from "@/components/InitialLoadShell";
import Container from "@/components/Container";
import SectionIndicator from "@/components/SectionIndicator";
import SectionHeading from "@/components/SectionHeading";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import AboutSection from "@/components/AboutSection";
import GithubGraph from "@/components/GithubGraph";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <InitialLoadShell>
      <SectionIndicator />
      <main className="min-h-screen bg-[#080808]">
        <Container>
          <Navbar />
          <HeroSection />
          
          <SectionHeading title="Skills" />
          <SkillsSection />
          
          <SectionHeading title="Projects" />
          <FeaturedProjects />
          
          <SectionHeading title="About" />
          <AboutSection />

          <SectionHeading title="Contribution Graph" />
          <GithubGraph />

          <SectionHeading title="Sponsors" />
          <Sponsors />

          <Footer />
        </Container>
      </main>
    </InitialLoadShell>
  );
}
