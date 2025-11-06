"use client";

import { useState, useEffect } from "react";
import {
  Home,
  User,
  FileText,
  Briefcase,
  Server,
  Mail,
  Linkedin,
  Github,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Sidebar() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "resume",
        "projects",
        "achievements",
        "contact",
      ];
      const scrollPosition = window.scrollY + 200; // Offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-6 left-6 z-50 w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--bg-secondary)] shadow-lg text-[var(--text-primary)]"
        style={{ border: "2px solid var(--sidebar-border)" }}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-1/2 -translate-y-1/2 bg-[var(--bg-secondary)] rounded-3xl shadow-2xl z-40 text-[var(--text-primary)] transition-all duration-300
          ${isMobileMenuOpen ? "left-6" : "-left-full"}
          lg:left-6 lg:translate-x-0
          w-[calc(100%-3rem)] max-w-72 p-6 sm:p-8
        `}
        style={{ border: "2px solid var(--sidebar-border)" }}
      >
        <nav className="space-y-2">
          <a
            href="#home"
            onClick={handleLinkClick}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-[var(--text-primary)] ${
              activeSection === "home"
                ? "bg-[var(--bg-active)]"
                : "hover:bg-[var(--bg-hover)]"
            }`}
          >
            <Home size={20} />
            <span>Home</span>
          </a>
          <a
            href="#about"
            onClick={handleLinkClick}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-[var(--text-primary)] ${
              activeSection === "about"
                ? "bg-[var(--bg-active)]"
                : "hover:bg-[var(--bg-hover)]"
            }`}
          >
            <User size={20} />
            <span>About</span>
          </a>
          <a
            href="#skills"
            onClick={handleLinkClick}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-[var(--text-primary)] ${
              activeSection === "skills"
                ? "bg-[var(--bg-active)]"
                : "hover:bg-[var(--bg-hover)]"
            }`}
          >
            <Server size={20} />
            <span>Skills</span>
          </a>
          <a
            href="#resume"
            onClick={handleLinkClick}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-[var(--text-primary)] ${
              activeSection === "resume"
                ? "bg-[var(--bg-active)]"
                : "hover:bg-[var(--bg-hover)]"
            }`}
          >
            <FileText size={20} />
            <span>Resume</span>
          </a>
          <a
            href="#projects"
            onClick={handleLinkClick}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-[var(--text-primary)] ${
              activeSection === "projects"
                ? "bg-[var(--bg-active)]"
                : "hover:bg-[var(--bg-hover)]"
            }`}
          >
            <Briefcase size={20} />
            <span>Projects</span>
          </a>
          <a
            href="#achievements"
            onClick={handleLinkClick}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-[var(--text-primary)] ${
              activeSection === "achievements"
                ? "bg-[var(--bg-active)]"
                : "hover:bg-[var(--bg-hover)]"
            }`}
          >
            <Server size={20} />
            <span>Achievements</span>
          </a>
          <a
            href="#contact"
            onClick={handleLinkClick}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-[var(--text-primary)] ${
              activeSection === "contact"
                ? "bg-[var(--bg-active)]"
                : "hover:bg-[var(--bg-hover)]"
            }`}
          >
            <Mail size={20} />
            <span>Contact</span>
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-3 mt-8 pt-8 border-t border-[var(--border-color)]">
          <a
            href="https://github.com/mahima-m19/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--bg-hover)] hover:bg-[var(--bg-active)] transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/mahima-m-55aa60291"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--bg-hover)] hover:bg-[var(--bg-active)] transition-colors"
          >
            <Linkedin size={18} />
          </a>
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="w-full mt-6 px-4 py-3 rounded-xl bg-[var(--bg-hover)] hover:bg-[var(--bg-active)] transition-colors flex items-center justify-center gap-2 font-semibold text-[var(--text-primary)]"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
        </button>
      </aside>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
