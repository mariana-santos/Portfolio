import "./style.css";

import pic from "../../assets/main-picture.jpg";

import { React, useEffect, useLayoutEffect, useRef, useState } from "react";

import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { LuMonitorSmartphone, LuGlobe, LuLanguages } from "react-icons/lu";
import { IoAccessibility } from "react-icons/io5";
import { SiTypescript, SiReact, SiNextdotjs, SiWebflow } from "react-icons/si";

import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

import { useConfig } from "../../contexts/config";
import { scrollToHash } from "../../utils/scrollToHash";

import Signature from "./Signature";
import FigmaIcon from "./FigmaIcon";

const CHECKLIST_ICONS = [IoAccessibility, LuMonitorSmartphone, LuGlobe];
const CHECKLIST_DELAYS = [0.5, 0.75, 1];
const CHECKLIST_OFFSETS = [0, 22, 8];

const ORBIT_STACK = [
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6", angle: 10, size: 36, duration: 7.5, delay: -2 },
  { name: "React", Icon: SiReact, color: "#61DAFB", angle: 31, size: 60, duration: 6, delay: 0 },
  { name: "Figma", Icon: FigmaIcon, angle: 76, size: 32, duration: 8, delay: -4 },
  { name: "Next.js", Icon: SiNextdotjs, color: "#000000", angle: 101, size: 46, duration: 6.8, delay: -3 },
  { name: "Localization", Icon: LuLanguages, color: "#9531F4", angle: 124, size: 38, duration: 7.2, delay: -2.5 },
  { name: "Webflow", Icon: SiWebflow, color: "#4353FF", angle: 147, size: 42, duration: 7, delay: -1 },
];

const WORD_ROTATE_INTERVAL = 2000;
const CLOCK_REFRESH_INTERVAL = 30000;

function getSaoPauloTime() {
  try {
    return new Date().toLocaleTimeString("en-GB", {
      timeZone: "America/Sao_Paulo",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return "--:--";
  }
}

export default function Hero() {
  const { t } = useConfig();

  const words = t("home.hero.heading.words");
  const checklistItems = t("home.hero.checklist.items");

  const [wordIndex, setWordIndex] = useState(0);
  const [prevWordIndex, setPrevWordIndex] = useState(null);
  const [spTime, setSpTime] = useState(getSaoPauloTime);

  const wordIndexRef = useRef(0);
  const pillRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || words.length < 2) return;

    const id = setInterval(() => {
      const current = wordIndexRef.current;
      const next = (current + 1) % words.length;

      wordIndexRef.current = next;
      setPrevWordIndex(current);
      setWordIndex(next);
    }, WORD_ROTATE_INTERVAL);

    return () => clearInterval(id);
  }, [words.length]);

  useLayoutEffect(() => {
    const pill = pillRef.current;
    const activeWord = pill?.querySelector(".w-in") ?? pill?.querySelector(".w");
    if (!activeWord) return;

    pill.style.width = `${activeWord.getBoundingClientRect().width}px`;
  }, [wordIndex]);

  useEffect(() => {
    const id = setInterval(() => setSpTime(getSaoPauloTime()), CLOCK_REFRESH_INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="container" id="hero">
      <div className="column text" data-aos="fade-up">
        <h1
          className="hero-heading"
          aria-label={t("home.hero.heading.aria-label")}
        >
          <span className="hero-heading-line" aria-hidden="true">
            {t("home.hero.heading.lead")}
          </span>
          <span className="hero-heading-line hero-heading-line--word" aria-hidden="true">
            <span className="pill" ref={pillRef}>
              {prevWordIndex !== null && (
                <span key={`prev-${prevWordIndex}`} className="w w-out">
                  {words[prevWordIndex]}
                </span>
              )}
              <span
                key={`word-${wordIndex}`}
                className={`w ${prevWordIndex !== null ? "w-in" : ""}`}
              >
                {words[wordIndex]}
              </span>
            </span>
            <span>.</span>
          </span>
        </h1>

        <div className="hero-signature-wrap" data-aos="fade-up">
          <Signature className="hero-signature" />
          <span className="hero-role">
            <span className="hero-role-divider" aria-hidden="true" />
            {t("home.hero.heading.role")}
          </span>
        </div>

        <div className="hero-actions" data-aos="fade-up">
          <HashLink to="/#projects" className="hero-cta" scroll={scrollToHash}>
            {t("home.hero.actions.primary")}
          </HashLink>
          <Link to="/contact" className="hero-text-link">
            {t("home.hero.actions.secondary")}
            <FiArrowUpRight className="hero-text-link-icon" />
          </Link>
        </div>
      </div>

      <div className="column wrapper-pic" data-aos="fade-down">
        <div className="hero-photo-wrap">
          <div className="hero-photo-card">
            <img
              className="hero-photo"
              src={pic}
              alt={t("home.hero.image-alt")}
            />

            <div className="hero-photo-stats">
              <div className="hero-photo-stat">
                <span className="hero-photo-stat-value">
                  {t("home.hero.stats.experience.value")}
                </span>
                <span className="hero-photo-stat-label">
                  {t("home.hero.stats.experience.label")}
                </span>
              </div>
              <div className="hero-photo-stat">
                <span className="hero-photo-stat-value">
                  {t("home.hero.stats.location.value")}
                </span>
                <span className="hero-photo-stat-label">
                  {spTime} · {t("home.hero.stats.location.label")}
                </span>
              </div>
              <div className="hero-photo-stat">
                <span className="hero-photo-stat-value">
                  {t("home.hero.stats.languages.value")}
                </span>
                <span className="hero-photo-stat-label">
                  {t("home.hero.stats.languages.label")}
                </span>
              </div>
            </div>

            <span className="hero-photo-notch hero-photo-notch--top" aria-hidden="true" />
            <span className="hero-photo-notch hero-photo-notch--side" aria-hidden="true" />
          </div>

          <div
            className="hero-orbit"
            role="list"
            aria-label={`Daily stack: ${ORBIT_STACK.map((item) => item.name).join(", ")}`}
          >
            {ORBIT_STACK.map((item) => (
              <span
                key={item.name}
                className="hero-orbit-spoke"
                style={{ transform: `rotate(-${item.angle}deg)` }}
              >
                <span
                  className="hero-orbit-point"
                  style={{ transform: `translate(-50%, -50%) rotate(${item.angle}deg)` }}
                >
                  <span className="hero-orbit-mag" role="listitem">
                    <span
                      className="hero-orbit-badge"
                      style={{
                        width: item.size,
                        height: item.size,
                        animationDuration: `${item.duration}s`,
                        animationDelay: `${item.delay}s`,
                      }}
                    >
                      <item.Icon size="55%" color={item.color} />
                    </span>
                    <span className="hero-orbit-tip">{item.name}</span>
                  </span>
                </span>
              </span>
            ))}
          </div>

          <div className="hero-checklist">
            <span className="hero-checklist-label">
              {t("home.hero.checklist.label")}
            </span>
            {checklistItems.map((item, index) => {
              const Icon = CHECKLIST_ICONS[index];

              return (
                <span
                  key={item}
                  className="hero-checklist-item"
                  style={{
                    marginLeft: CHECKLIST_OFFSETS[index],
                    animationDelay: `${CHECKLIST_DELAYS[index]}s`,
                  }}
                >
                  <span className="hero-checklist-icon">
                    <Icon size={15} />
                  </span>
                  {item}
                  <span
                    className="hero-checklist-box"
                    style={{ animationDelay: `${CHECKLIST_DELAYS[index] + 0.4}s` }}
                  >
                    <FiCheck className="hero-checklist-tick" size={13} strokeWidth={3} />
                  </span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
