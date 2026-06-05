import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturedProjects />
      <LeadershipSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
