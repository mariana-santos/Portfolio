import "./style.css";
import { FiMusic, FiActivity } from "react-icons/fi";
import { PiAirplaneTilt } from "react-icons/pi";
import { FaRegLightbulb } from "react-icons/fa";
import { IoLibraryOutline } from "react-icons/io5";

import { useConfig } from "../../../contexts/config";

// Music covers
import casuarinaCover from "../../../assets/about/casuarina.png";
import queenCover from "../../../assets/about/queen.png";
import abbaCover from "../../../assets/about/abba.png";

// Book covers
import bookNeverKnownMen from "../../../assets/about/EU_QUE_NUNCA_CONHECI_OS_HOMENS.webp";
import bookSolitude from "../../../assets/about/CEM_ANOS_DE_SOLIDAO.webp";

// Travel photos
import santorini from "../../../assets/about/santorini.jpeg";
import viena from "../../../assets/about/viena.jpeg";
import ilhabela from "../../../assets/about/ilhabela.jpeg";
import flagBr from "../../../assets/about/br.png";
import flagPe from "../../../assets/about/peru.png";
import flagNl from "../../../assets/about/nl.png";
import venice from "../../../assets/about/venice.jpeg";

// Fun fact photos
import tattooPhoto from "../../../assets/about/office tattoo.jpeg";
import funkoPhoto from "../../../assets/about/dwight.jpeg";

// Off-screen photos
import embroideringPhoto from "../../../assets/about/embroidering.jpeg";
import paintingPhoto from "../../../assets/about/painting.jpeg";
import bakingPhoto from "../../../assets/about/cookies.jpeg";
import bikePhoto from "../../../assets/about/bike.jpeg";
import pilatesPhoto from "../../../assets/about/pilates.jpeg";

const TOP_THREE_COVERS = [casuarinaCover, queenCover, abbaCover];
const BOOK_COVERS = [bookNeverKnownMen, bookSolitude];
const FAVOURITE_TRIP_PHOTOS = [santorini, viena, ilhabela, venice];
const NEXT_TRIP_FLAGS = [flagBr, flagPe, flagNl];
const OFFSCREEN_PHOTOS = [embroideringPhoto, paintingPhoto, bakingPhoto, bikePhoto, pilatesPhoto];
const OFFSCREEN_AREAS = ["a", "b", "c", "d", "e"];

export default function PersonView() {
  const { t } = useConfig();

  const nowPlaying = t("home.about.person.music.now-playing");
  const topThree = t("home.about.person.music.top-three");
  const books = t("home.about.person.reading.books");
  const favouriteTrips = t("home.about.person.travel.favourites");
  const nextTrips = t("home.about.person.travel.next");
  const offScreen = t("home.about.person.off-screen.list");

  return (
    <div className="about person-view">
      <div className="bento-grid">

        <div className="bento-card bento-music">
          <div className="bento-card-header">
            <FiMusic />
            <span className="bento-card-title">{t("home.about.person.music.title")}</span>
          </div>
          <p className="bento-card-description">{t("home.about.person.music.description")}</p>
          <p className="bento-card-text">{t("home.about.person.music.text")}</p>

          <div className="music-now-section">
            <ol className="top-three-list">
              {topThree.map((track, index) => (
                <li key={track.title}>
                  <div
                    className="top-three-cover"
                    style={{ backgroundImage: `url(${TOP_THREE_COVERS[index]})`, backgroundSize: "cover", backgroundPosition: "center" }}
                  >
                    <span className="top-three-rank">{index + 1}</span>
                  </div>
                  <div className="top-three-title">{track.title}</div>
                  <div className="top-three-artist">{track.artist}</div>
                </li>
              ))}
            </ol>

            <div className="now-playing-section">
              <div className="bento-section-label">{t("home.about.person.music.now-playing-label")}</div>
              <div className="now-playing">
                <div className="now-playing-art placeholder-block" aria-hidden="true">album art</div>
                <div className="now-playing-info">
                  <h3 className="now-playing-title">{nowPlaying.title}</h3>
                  <div className="now-playing-artist">{nowPlaying.artist}</div>
                  <div className="now-playing-progress"><span style={{ width: "62%" }} /></div>
                  <div className="now-playing-times">
                    <span>{nowPlaying.elapsed}</span>
                    <span>{nowPlaying.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bento-card bento-reading">
          <div className="bento-card-header">
            <IoLibraryOutline />
            <span className="bento-card-title">{t("home.about.person.reading.title")}</span>
          </div>
          <p className="bento-card-description">{t("home.about.person.reading.description")}</p>
          <p className="bento-card-text">{t("home.about.person.reading.text")}</p>

          <div className="book-list">
            {books.map((book, index) => (
              <div className="book-item" key={book.title}>
                <img className="book-cover" src={BOOK_COVERS[index]} alt={book.title} loading="lazy" />
                <div className="book-info">
                  <h3 className="book-title">{book.title}</h3>
                  <div className="book-author">{book.author}</div>
                </div>
              </div>
            ))}
          </div>

          <p className="book-mentions">{t("home.about.person.reading.mentions")}</p>

          <div className="external-links">
            <span className="external-links-label">{t("home.about.person.reading.social-label")}</span>
            <a className="external-link" href="https://www.skoob.com.br/" target="_blank" rel="noreferrer">
              {t("home.about.person.reading.skoob-link")}
            </a>
            <a className="external-link" href="https://www.goodreads.com/" target="_blank" rel="noreferrer">
              {t("home.about.person.reading.goodreads-link")}
            </a>
          </div>
        </div>

        <div className="bento-card bento-travel">
          <div className="bento-card-header">
            <PiAirplaneTilt />
            <span className="bento-card-title">{t("home.about.person.travel.title")}</span>
          </div>
          <p className="bento-card-description">{t("home.about.person.travel.description")}</p>
          <p className="bento-card-text">{t("home.about.person.travel.text")}</p>

          <div className="bento-section">
            <div className="bento-section-label">{t("home.about.person.travel.favourites-label")}</div>
            <div className="trip-grid">
              {favouriteTrips.map((trip, index) => (
                <div
                  className="trip-card"
                  key={trip.place}
                  style={{ backgroundImage: `url(${FAVOURITE_TRIP_PHOTOS[index]})`, backgroundSize: "cover", backgroundPosition: "center" }}
                >
                  <span className="trip-place">{trip.place}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bento-section bento-section--push">
            <div className="bento-section-label">{t("home.about.person.travel.next-label")}</div>
            <div className="next-trip-list">
              {nextTrips.map((trip, index) => (
                <div className="next-trip" key={trip.place}>
                  <img className="next-trip-icon" src={NEXT_TRIP_FLAGS[index]} alt="" aria-hidden="true" loading="lazy" />
                  <span className="next-trip-name">{trip.place}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bento-card bento-fun-fact">
          <div className="bento-card-header">
            <FaRegLightbulb />
            <span className="bento-card-title">{t("home.about.person.fun-fact.title")}</span>
          </div>
          <p className="bento-card-description">{t("home.about.person.fun-fact.description")}</p>

          <p className="bento-card-text">{t("home.about.person.fun-fact.body")}</p>

          <div className="fun-fact-media"> 
            <figure>
              <img className="fun-fact-photo" src={tattooPhoto} alt={t("home.about.person.fun-fact.tattoo-caption")} loading="lazy" />
              <figcaption>{t("home.about.person.fun-fact.tattoo-caption")}</figcaption>
            </figure>
            <figure>
              <img className="fun-fact-photo" src={funkoPhoto} alt={t("home.about.person.fun-fact.funko-caption")} loading="lazy" />
              <figcaption>{t("home.about.person.fun-fact.funko-caption")}</figcaption>
            </figure>
          </div>
        </div>

        <div className="bento-card bento-off-screen">
          <div className="bento-card-header">
            <FiActivity />
            <span className="bento-card-title">{t("home.about.person.off-screen.title")}</span>
          </div>
          <p className="bento-card-description">{t("home.about.person.off-screen.description")}</p>
          <p className="bento-card-text">{t("home.about.person.off-screen.text")}</p>

          <div className="offscreen-grid">
            {offScreen.map((item, index) => (
              <figure className="offscreen-item" style={{ gridArea: OFFSCREEN_AREAS[index] }} key={item}>
                <div className="offscreen-photo-wrap">
                  <img className="offscreen-photo" src={OFFSCREEN_PHOTOS[index]} alt={item} loading="lazy" />
                </div>
                <figcaption className="offscreen-label">{item}</figcaption>
              </figure>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
