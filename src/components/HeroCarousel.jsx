import { useRef, useState } from "react";
import dots1 from "../assets/icons/dots-1.svg";
import dots2 from "../assets/icons/dots-2.svg";
import dots3 from "../assets/icons/dots-3.svg";

const DOT_IMAGES = [dots1, dots2, dots3];

// Swipeable promo carousel. Tapping a card advances to the next one,
// matching the Figma prototype ("tap card to advance").
export default function HeroCarousel({ slides }) {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  function goTo(index) {
    const track = trackRef.current;
    track.scrollTo({ left: index * track.clientWidth, behavior: "smooth" });
  }

  function handleScroll() {
    const track = trackRef.current;
    setActive(Math.round(track.scrollLeft / track.clientWidth));
  }

  return (
    <section className="carousel" aria-roledescription="carousel">
      <div className="carousel__track" ref={trackRef} onScroll={handleScroll}>
        {slides.map((slide, i) => (
          <article
            key={slide.title}
            className="hero-card"
            style={{ background: slide.background }}
            onClick={() => goTo((i + 1) % slides.length)}
            aria-label={`${i + 1} of ${slides.length}`}
          >
            {slide.image && (
              <>
                <img className="hero-card__photo" src={slide.image} alt="" />
                <div className="hero-card__shade" />
              </>
            )}
            <p className="hero-card__eyebrow">{slide.eyebrow}</p>
            <h2 className="hero-card__title">{slide.title}</h2>
            <p className="hero-card__subtitle">{slide.subtitle}</p>
            <button
              type="button"
              className="hero-card__cta"
              style={{ color: slide.ctaColor }}
              onClick={(e) => e.stopPropagation()}
            >
              {slide.cta}
            </button>
          </article>
        ))}
      </div>
      <div className="carousel__dots">
        <img src={DOT_IMAGES[active]} width="40" height="8" alt={`Slide ${active + 1} of ${slides.length}`} />
      </div>
    </section>
  );
}
