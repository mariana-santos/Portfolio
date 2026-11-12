import "./style.css";

import pic from "../../assets/main-picture.jpg";

import { React, useEffect, useLayoutEffect, useRef, useState } from "react";

import { useConfig } from "../../contexts/config";

const WORD_ROTATE_INTERVAL = 2800;

export default function Hero() {
  const { t } = useConfig();

  const words = t("home.hero.heading.words");

  const [wordIndex, setWordIndex] = useState(0);
  const [prevWordIndex, setPrevWordIndex] = useState(null);

  const wordIndexRef = useRef(0);
  const pausedRef = useRef(false);
  const pillRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || words.length < 2) return;

    const id = setInterval(() => {
      if (pausedRef.current) return;

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

  function pauseRotation() {
    pausedRef.current = true;
  }

  function resumeRotation() {
    pausedRef.current = false;
  }

  return (
    <section className="container" id="hero">
      <div className="column text" data-aos="fade-up">
        <h1
          className="hero-heading"
          aria-label={t("home.hero.heading.aria-label")}
          onMouseEnter={pauseRotation}
          onMouseLeave={resumeRotation}
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

        <div className="smaller">{t("home.subtitle")}</div>
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
