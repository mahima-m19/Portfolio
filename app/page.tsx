import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ResumeSection from "@/components/ResumeSection";
import ProjectSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--body-bg)] text-[var(--text-primary)]">
      <Sidebar />

      <section id="home">
        <HeroSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="resume">
        <ResumeSection />
      </section>

      <section id="projects">
        <ProjectSection />
      </section>

      <section id="achievements">
        <AchievementsSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
      <FooterSection />
    </div>
  );
}
