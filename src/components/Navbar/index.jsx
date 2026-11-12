import { useState, React, useEffect } from "react";
import "./style.css";

import { FiSun, FiMoon } from "react-icons/fi";

import { useConfig } from "../../contexts/config";

import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

import logo from "../../assets/logo.svg";

const PILL_LINKS = [
  { key: "home", to: "/#hero", sectionId: "hero" },
  { key: "about", to: "/#about", sectionId: "about" },
  { key: "experience", to: "/#experience", sectionId: "experience" },
  { key: "skills", to: "/#expertise", sectionId: "expertise" },
  { key: "projects", to: "/#projects", sectionId: "projects" },
  { key: "contact", to: "/contact", sectionId: null },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(null);
  const [activeSection, setActiveSection] = useState("hero");

  const { language, setLanguage, theme, setTheme, t } = useConfig();
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuOpen && !event.target.closest(".menu-wrapper"))
        setMenuOpen(false);
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (location.pathname !== "/") return;

    const sections = PILL_LINKS
      .filter((link) => link.sectionId)
      .map((link) => document.getElementById(link.sectionId))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [location.pathname]);

  function isPillActive({ sectionId, to }) {
    return sectionId
      ? location.pathname === "/" && activeSection === sectionId
      : location.pathname === to;
  }

  return (
    <header>
      <nav
        className="navbar"
        style={{
          backgroundColor: menuOpen
            ? "var(--bg-light-strong)"
            : "var(--header-transparent)",
        }}
      >
        <HashLink to="/#about" className="logo">
          <img
            src={logo}
            alt={t("navbar.logo-alt")}
          />
        </HashLink>

        <div className="pill-nav" aria-label="Main">
          {PILL_LINKS.map((link) => (
            <HashLink
              key={link.key}
              to={link.to}
              className="pill-link"
              aria-current={isPillActive(link) ? "page" : undefined}
              data-active={isPillActive(link)}
            >
              {t(`navbar.${link.key}`)}
            </HashLink>
          ))}
        </div>

        <div className="menu-wrapper">
          <HashLink to="/resume" className="resume-pill">
            {t("navbar.cv")} ↓
          </HashLink>

          <div className="language-switcher" role="group" aria-label="Language">
            <button
              type="button"
              className="lang-btn"
              data-active={language === "en"}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
            <button
              type="button"
              className="lang-btn"
              data-active={language === "pt"}
              onClick={() => setLanguage("pt")}
            >
              PT
            </button>
          </div>

          <div
            className="theme-toggle"
            role="button"
            aria-label={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <div className={`theme-switcher ${theme}`}>
              <FiMoon className="moon" />
              <FiSun className="sun" />
            </div>
          </div>

          <div
            className={`hamburguer ${
              menuOpen !== null && (menuOpen ? "close" : "open")
            }`}
            role="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </div>

          <ul
            className={
              menuOpen !== null ? (menuOpen ? "opened" : "closed") : undefined
            }
            onClick={() => menuOpen && setMenuOpen(false)}
          >
            {PILL_LINKS.map((link) => (
              <li key={link.key} className="code autoclose">
                <HashLink to={link.to}>{t(`navbar.${link.key}`)}</HashLink>
              </li>
            ))}

            <li className="code autoclose">
              <HashLink to="/resume">{t("navbar.cv")}</HashLink>
            </li>
          </ul>
        </div>
      </nav>

      {menuOpen && <div className="fade fade-menu show" />}
    </header>
  );
}
