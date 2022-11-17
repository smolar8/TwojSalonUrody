import React, { useState, useRef, useEffect } from "react";
import "./styleAbout/about.css";
import FB from "../../img&icon/fb.png";
import YT from "../../img&icon/yt.png";
// const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const img1 = [FB, YT, FB];
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
          prevIndex === img1.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <main className="main">
      <section className="slide-photo">
        <div className="slideshow">
          <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {img1.map((backgroundColor, index) => (
              <div className="slide" key={index}>
                <img src={backgroundColor} alt="" />
              </div>
            ))}
          </div>

          <div className="slideshowDots">
            {img1.map((_, idx) => (
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
        {/* <div>
          <img src={FB} alt="facebook" />
        </div>
        <div>
          <img src={YT} alt="" />
        </div>
        <div>
          <img src={FB} alt="facebook" />
        </div>
        <div>
          <img src={YT} alt="" />
        </div> */}
      </section>
      <section className="team"></section>
      <section className="quotes"></section>
    </main>
  );
}
