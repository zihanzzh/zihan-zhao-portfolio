import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FeaturedProjects />
      <div id="skills" className="h-0" aria-hidden="true" />
      <div id="leadership" className="h-0" aria-hidden="true" />
      <div id="contact" className="h-0" aria-hidden="true" />
    </main>
  );
}
