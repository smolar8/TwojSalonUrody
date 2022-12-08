import React, { useState, useRef, useEffect } from "react";

import "./styleAbout/about.css";

import TextHeader from "./textHeader/TextHeader.jsx";
import PhotoTeam from "./photoTeam/PhotoTeam";
//img socials
import Fb from "../../img&icon/fb.png";
import Yt from "../../img&icon/yt.png";
import Inst from "../../img&icon/inst.png";

// img slides
import firstImg from "../../img&icon/firstSlide.png";
import secondImg from "../../img&icon/secondSlide.png";
import thirdImg from "../../img&icon/thirdSlide.png";

const slide = [firstImg, secondImg, thirdImg];
const delay = 4000;

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

    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === slide.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [index]);

  const slideShow = (data) => {
    const result = slide.filter((elemnt, index) => index === data);

    return (
      <div className="slideshowSlider ">
        <img className="slideshowSlider--img" src={result} alt="slides" />
      </div>
    );
  };

  return (
    <main className="main">
      <section className="team">
        <TextHeader />
      </section>
      <section className="slide-photo">
        <div className="slide__photo--socials">
          <div className="slide__photo__socials--yt">
            <img className="img" src={Yt} alt="yt" />
            <p className="img--text">youtube</p>
          </div>
          <div className="slide__photo__socials--fb">
            <img className="img" src={Fb} alt="fb" />
            <p className="img--text">facebook</p>
          </div>
          <div className="slide__photo__socials--inst">
            <img className="img" src={Inst} alt="instagram" />
            <p className="img--text">instagram</p>
          </div>
        </div>
        <div className="slideshow">
          {slideShow(index)}
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

      <section className="teams">
        <PhotoTeam />
      </section>
    </main>
  );
}
