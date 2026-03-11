import ComicNav from "@/components/ComicNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import ComicFooter from "@/components/ComicFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ComicNav />
      <HeroSection />
      <AboutSection />
      {/* <SkillsSection /> */}
      <ProjectsSection />
      <ExperienceSection />
      {/* <ContactSection /> */}
      <ComicFooter />
    </div>
  );
};

export default Index;
