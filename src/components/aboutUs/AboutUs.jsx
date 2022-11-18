import React, { useState, useRef, useEffect } from "react";

import "./styleAbout/about.css";
import firstImg from "../../img&icon/firstSlide.png";
import secondImg from "../../img&icon/secondSlide.png";
import thirdImg from "../../img&icon/thirdSlide.png";
import TextHeader from "../../textHeader/TextHeader";
import PhotoTeam from "../../photoTeam/PhotoTeam";

const slide = [firstImg, secondImg, thirdImg];
const delay = 2000;

export default function AboutUs() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slide.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <main className="main">
      <section className="team">
        <TextHeader />
      </section>
      <section className="slide-photo">
        <div className="slideshow">
          <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {slide.map((backgroundColor, index) => (
              <div className="slide" key={index}>
                <img src={backgroundColor} alt="" />
              </div>
            ))}
          </div>

          <div className="slideshowDots">
            {slide.map((_, idx) => (
              <div
                key={idx}
                className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {
                  setIndex(idx);
                }}
              ></div>
            ))}
          </div>
        </div>
      </section>

      <section className="quotes"><PhotoTeam/></section>
    </main>
  );
}
