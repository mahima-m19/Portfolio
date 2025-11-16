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
        className="lg:hidden fixed top-4 sm:top-6 left-4 sm:left-6 z-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg sm:rounded-xl bg-[var(--bg-secondary)] shadow-lg text-[var(--text-primary)]"
        style={{ border: "2px solid var(--sidebar-border)" }}
      >
        {isMobileMenuOpen ? (
          <X size={20} className="sm:w-6 sm:h-6" />
        ) : (
          <Menu size={20} className="sm:w-6 sm:h-6" />
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-1/2 -translate-y-1/2 bg-[var(--bg-secondary)] rounded-2xl sm:rounded-3xl shadow-2xl z-40 text-[var(--text-primary)] transition-all duration-300
          ${isMobileMenuOpen ? "left-4 sm:left-6" : "-left-full"}
          lg:left-6 lg:translate-x-0
          w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] max-w-[20rem] sm:max-w-72 p-5 sm:p-6 md:p-8
          max-h-[90vh] overflow-y-auto
        `}
        style={{ border: "2px solid var(--sidebar-border)" }}
      >
        <nav className="space-y-1.5 sm:space-y-2">
          <a
            href="#home"
            onClick={handleLinkClick}
            className={`flex items-center gap-2.5 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl transition-colors text-[var(--text-primary)] text-sm sm:text-base ${
              activeSection === "home"
                ? "bg-[var(--bg-active)]"
                : "hover:bg-[var(--bg-hover)]"
            }`}
          >
            <Home size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
            <span>Home</span>
          </a>
          <a
            href="#about"
            onClick={handleLinkClick}
            className={`flex items-center gap-2.5 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl transition-colors text-[var(--text-primary)] text-sm sm:text-base ${
              activeSection === "about"
                ? "bg-[var(--bg-active)]"
                : "hover:bg-[var(--bg-hover)]"
            }`}
          >
            <User size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
            <span>About</span>
          </a>
          <a
            href="#skills"
            onClick={handleLinkClick}
            className={`flex items-center gap-2.5 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl transition-colors text-[var(--text-primary)] text-sm sm:text-base ${
              activeSection === "skills"
                ? "bg-[var(--bg-active)]"
                : "hover:bg-[var(--bg-hover)]"
            }`}
          >
            <Server size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
            <span>Skills</span>
          </a>
          <a
            href="#resume"
            onClick={handleLinkClick}
            className={`flex items-center gap-2.5 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl transition-colors text-[var(--text-primary)] text-sm sm:text-base ${
              activeSection === "resume"
                ? "bg-[var(--bg-active)]"
                : "hover:bg-[var(--bg-hover)]"
            }`}
          >
            <FileText size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
            <span>Resume</span>
          </a>
          <a
            href="#projects"
            onClick={handleLinkClick}
            className={`flex items-center gap-2.5 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl transition-colors text-[var(--text-primary)] text-sm sm:text-base ${
              activeSection === "projects"
                ? "bg-[var(--bg-active)]"
                : "hover:bg-[var(--bg-hover)]"
            }`}
          >
            <Briefcase size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
            <span>Projects</span>
          </a>
          <a
            href="#achievements"
            onClick={handleLinkClick}
            className={`flex items-center gap-2.5 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl transition-colors text-[var(--text-primary)] text-sm sm:text-base ${
              activeSection === "achievements"
                ? "bg-[var(--bg-active)]"
                : "hover:bg-[var(--bg-hover)]"
            }`}
          >
            <Server size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
            <span>Achievements</span>
          </a>
          <a
            href="#contact"
            onClick={handleLinkClick}
            className={`flex items-center gap-2.5 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl transition-colors text-[var(--text-primary)] text-sm sm:text-base ${
              activeSection === "contact"
                ? "bg-[var(--bg-active)]"
                : "hover:bg-[var(--bg-hover)]"
            }`}
          >
            <Mail size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
            <span>Contact</span>
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-2.5 sm:gap-3 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-[var(--border-color)]">
          <a
            href="https://github.com/mahima-m19/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-[var(--bg-hover)] hover:bg-[var(--bg-active)] transition-colors"
          >
            <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
          </a>
          <a
            href="https://www.linkedin.com/in/mahima-m-55aa60291"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-[var(--bg-hover)] hover:bg-[var(--bg-active)] transition-colors"
          >
            <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
          </a>
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="w-full mt-5 sm:mt-6 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-[var(--bg-hover)] hover:bg-[var(--bg-active)] transition-colors flex items-center justify-center gap-2 font-semibold text-[var(--text-primary)] text-sm sm:text-base"
        >
          {theme === "dark" ? (
            <Sun size={18} className="sm:w-5 sm:h-5" />
          ) : (
            <Moon size={18} className="sm:w-5 sm:h-5" />
          )}
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
