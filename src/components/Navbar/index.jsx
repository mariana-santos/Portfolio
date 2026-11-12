import { useState, React, useEffect, useRef, useLayoutEffect } from "react";
import "./style.css";

import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

import { useConfig } from "../../contexts/config";

import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { ScrollSmoother } from "gsap/ScrollSmoother";

import logo from "../../assets/logo.svg";

import { scrollToHash } from "../../utils/scrollToHash";

const PILL_LINKS = [
  { key: "home", to: "/#hero", sectionId: "hero" },
  { key: "about", to: "/#about", sectionId: "about" },
  { key: "experience", to: "/#experience", sectionId: "experience" },
  { key: "skills", to: "/#expertise", sectionId: "expertise" },
  { key: "projects", to: "/#projects", sectionId: "projects" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(null);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const pillNavRef = useRef(null);
  const pillIndicatorRef = useRef(null);

  const { language, setLanguage, theme, setTheme, t } = useConfig();
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  useEffect(() => {
    function getScrollY() {
      return ScrollSmoother.get()?.scrollTop() ?? window.scrollY;
    }

    let lastY = getScrollY();
    let frameId;

    function tick() {
      const y = getScrollY();

      setScrolled(y > 80);
      setHidden((prev) => {
        if (y > lastY + 6 && y > 320) return true;
        if (y < lastY - 6 || y <= 320) return false;
        return prev;
      });

      lastY = y;
      frameId = requestAnimationFrame(tick);
    }

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, []);

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

  useLayoutEffect(() => {
    function updateIndicator() {
      const nav = pillNavRef.current;
      const indicator = pillIndicatorRef.current;
      if (!nav || !indicator) return;

      const activeLink = nav.querySelector('.pill-link[data-active="true"]');
      if (!activeLink) {
        indicator.style.width = "0px";
        return;
      }

      indicator.style.width = `${activeLink.offsetWidth}px`;
      indicator.style.transform = `translateX(${activeLink.offsetLeft}px)`;
    }

    updateIndicator();
    window.addEventListener("resize", updateIndicator);

    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeSection, location.pathname]);

  function isPillActive({ sectionId, to }) {
    return sectionId
      ? location.pathname === "/" && activeSection === sectionId
      : location.pathname === to;
  }

  return (
    <header>
      <nav
        className={`navbar ${scrolled ? "scrolled" : ""} ${
          hidden && !menuOpen ? "nav-hidden" : ""
        }`}
      >
        <div className="navbar-inner">
          <HashLink to="/#about" className="logo" scroll={scrollToHash}>
            <img
              src={logo}
              alt={t("navbar.logo-alt")}
            />
          </HashLink>

          <div className="pill-nav" aria-label="Main" ref={pillNavRef}>
            <span
              className="pill-nav-indicator"
              aria-hidden="true"
              ref={pillIndicatorRef}
            />
            {PILL_LINKS.map((link) => (
              <HashLink
                key={link.key}
                to={link.to}
                className="pill-link"
                aria-current={isPillActive(link) ? "page" : undefined}
                data-active={isPillActive(link)}
                scroll={scrollToHash}
              >
                {t(`navbar.${link.key}`)}
              </HashLink>
            ))}
          </div>
        
          <div className="menu-wrapper">
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
            
            <HashLink to="/resume" className="resume-pill">
              {t("navbar.cv")} ↓
            </HashLink>

            <div
              className="hamburguer-toggle"
              role="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className={`hamburguer-switcher ${menuOpen ? "open" : "closed"}`}>
                <FiMenu className="menu-icon" />
                <FiX className="close-icon" />
              </div>
            </div>

            <ul
              className={
                menuOpen !== null ? (menuOpen ? "opened" : "closed") : undefined
              }
              onClick={() => menuOpen && setMenuOpen(false)}
            >
              {PILL_LINKS.map((link) => (
                <li key={link.key}>
                  <HashLink
                    to={link.to}
                    className="pill-link"
                    aria-current={isPillActive(link) ? "page" : undefined}
                    data-active={isPillActive(link)}
                    scroll={scrollToHash}
                  >
                    {t(`navbar.${link.key}`)}
                  </HashLink>
                </li>
              ))}

              <li>
                <HashLink to="/resume" className="resume-pill">
                  {t("navbar.cv")} ↓
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {menuOpen && <div className="fade fade-menu show" />}
    </header>
  );
}
