import "./style.css";
import { FiMusic, FiActivity, FiGift } from "react-icons/fi";
import { PiAirplaneTilt } from "react-icons/pi";
import { FaRegLightbulb, FaStar } from "react-icons/fa";
import { IoLibraryOutline } from "react-icons/io5";
import { BsBrush } from "react-icons/bs";

import { useConfig } from "../../../contexts/config";

// Music covers
import casuarinaCover from "../../../assets/about/casuarina.png";
import queenCover from "../../../assets/about/queen.png";
import abbaCover from "../../../assets/about/abba.png";

// Book covers
import bookNeverKnownMen from "../../../assets/about/EU_QUE_NUNCA_CONHECI_OS_HOMENS.webp";
import book1984 from "../../../assets/about/1984.webp";
import bookSolitude from "../../../assets/about/CEM_ANOS_DE_SOLIDAO.webp";

// Travel photos
import santorini from "../../../assets/about/santorini.jpeg";
import viena from "../../../assets/about/viena.jpeg";
import ilhabela from "../../../assets/about/ilhabela.jpeg";
import flagBr from "../../../assets/about/br.png";
import flagPe from "../../../assets/about/peru.png";
import flagNl from "../../../assets/about/nl.png";

// Movement photos
import bikePhoto from "../../../assets/about/bike.jpeg";
import pilatesPhoto from "../../../assets/about/pilates.jpeg";

// Fun fact photos
import tattooPhoto from "../../../assets/about/office tattoo.jpeg";
import funkoPhoto from "../../../assets/about/dwight.jpeg";

// Hobbies photos
import embroideringPhoto from "../../../assets/about/embroidering.jpeg";
import paintingPhoto from "../../../assets/about/painting.jpeg";
import bakingPhoto from "../../../assets/about/cookies.jpeg";

const TOP_THREE_COVERS = [casuarinaCover, queenCover, abbaCover];
const BOOK_COVERS = [bookNeverKnownMen, book1984, bookSolitude];
const FAVOURITE_TRIP_PHOTOS = [santorini, viena, ilhabela];
const NEXT_TRIP_FLAGS = [flagBr, flagPe, flagNl];
const MOVEMENT_PHOTOS = { bike: bikePhoto, pilates: pilatesPhoto };
const HOBBY_PHOTOS = [embroideringPhoto, paintingPhoto, bakingPhoto];

export default function PersonView() {
  const { t } = useConfig();

  const nowPlaying = t("home.about.person.music.now-playing");
  const topThree = t("home.about.person.music.top-three");
  const genres = t("home.about.person.music.genres");
  const books = t("home.about.person.reading.books");
  const favouriteTrips = t("home.about.person.travel.favourites");
  const nextTrips = t("home.about.person.travel.next");
  const hobbies = t("home.about.person.hobbies.list");

  return (
    <div className="about person-view">
      <div className="bento-grid">

        <div className="bento-card bento-music">
          <div className="bento-card-header">
            <FiMusic />
            <span className="bento-card-title">{t("home.about.person.music.title")}</span>
          </div>
          <p className="bento-card-description">{t("home.about.person.music.description")}</p>

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

          <div className="bento-section">
            <div className="bento-section-label">{t("home.about.person.music.top-three-label")}</div>
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
          </div>

          <div className="bento-section bento-section--push">
            <div className="bento-section-label">{t("home.about.person.music.genres-label")}</div>
            <div className="genre-chips">
              {genres.map((genre) => (
                <span className="genre-chip" key={genre}>{genre}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="bento-card bento-reading">
          <div className="bento-card-header">
            <IoLibraryOutline />
            <span className="bento-card-title">{t("home.about.person.reading.title")}</span>
          </div>
          <p className="bento-card-description">{t("home.about.person.reading.description")}</p>

          <div className="book-list">
            {books.map((book, index) => (
              <div className="book-item" key={book.title}>
                <img className="book-cover" src={BOOK_COVERS[index]} alt={book.title} loading="lazy" />
                <div className="book-info">
                  <h3 className="book-title">{book.title}</h3>
                  <div className="book-author">{book.author}</div>
                  <div className="book-rating" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <FaStar key={starIndex} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

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
                  <span className="next-trip-info">
                    <span className="next-trip-name">{trip.place}</span>
                    <span className="next-trip-note">{trip.note}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bento-card bento-movement">
          <div className="bento-card-header">
            <FiActivity />
            <span className="bento-card-title">{t("home.about.person.movement.title")}</span>
          </div>
          <p className="bento-card-description">{t("home.about.person.movement.description")}</p>

          <p className="bento-card-text">
            {t("home.about.person.movement.intro-before")}
            <span className="highlight">{t("home.about.person.movement.bike-label")}</span>
            {t("home.about.person.movement.intro-between")}
            <span className="highlight">{t("home.about.person.movement.pilates-label")}</span>
            {t("home.about.person.movement.intro-after")}
          </p>

          <div className="movement-media">
            <figure>
              <img
                className="movement-media-photo"
                src={MOVEMENT_PHOTOS.bike}
                alt={t("home.about.person.movement.bike-alt")}
                loading="lazy"
              />
              <figcaption>{t("home.about.person.movement.bike-caption")}</figcaption>
            </figure>
            <figure>
              <img
                className="movement-media-photo"
                src={MOVEMENT_PHOTOS.pilates}
                alt={t("home.about.person.movement.pilates-alt")}
                loading="lazy"
              />
              <figcaption>{t("home.about.person.movement.pilates-caption")}</figcaption>
            </figure>
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

        <div className="bento-card bento-hobbies">
          <div className="bento-card-header">
            <BsBrush />
            <span className="bento-card-title">{t("home.about.person.hobbies.title")}</span>
          </div>
          <p className="bento-card-description">{t("home.about.person.hobbies.description")}</p>
          <p className="bento-card-text">{t("home.about.person.hobbies.body")}</p>

          <div className="hobby-grid">
            {hobbies.map((hobby, index) => (
              <figure className="hobby-item" key={hobby}>
                {HOBBY_PHOTOS[index] ? (
                  <img className="hobby-photo" src={HOBBY_PHOTOS[index]} alt={hobby} loading="lazy" />
                ) : (
                  <div className="hobby-photo placeholder-block" aria-hidden="true">{hobby}</div>
                )}
                <figcaption>{hobby}</figcaption>
              </figure>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
