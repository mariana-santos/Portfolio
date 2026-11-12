import "./style.css";

import pic from "../../assets/main-picture.jpg";

import { React, useEffect, useLayoutEffect, useRef, useState } from "react";

import { FiArrowUpRight } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

import { useConfig } from "../../contexts/config";
import { scrollToHash } from "../../utils/scrollToHash";

import Signature from "./Signature";

const WORD_ROTATE_INTERVAL = 2000;

export default function Hero() {
  const { t } = useConfig();

  const words = t("home.hero.heading.words");

  const [wordIndex, setWordIndex] = useState(0);
  const [prevWordIndex, setPrevWordIndex] = useState(null);

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
        <div className="pic">
          <div className="line-element" />
          <img
            src={pic}
            alt={t("home.hero.image-alt")}
            id="main-pic"
          />
        </div>
      </div>
    </section>
  );
}
