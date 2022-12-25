import React, { useState, useRef, useEffect } from "react";

import "./styleAbout/about.css";

import TextHeader from "./textHeader/TextHeader.jsx";
import PhotoTeam from "./photoTeam/PhotoTeam";
import MessengerText from "./messenger/Messenger";
import Call from "../../img&icon/Phone-icon.png";
import Messenger from "../../img&icon/messenger.jpg";

// img slides
import firstImg from "../../img&icon/1head.jpg";
import secondImg from "../../img&icon/2head.jpg";
import thirdImg from "../../img&icon/TLO.png";

const slide = [firstImg, secondImg, thirdImg];
const delay = 4000;

export default function AboutUs() {
  const [index, setIndex] = useState(0);
  const [styleScroll, setStyleScroll] = useState("visible--false");
  const [visibleMessenge, setVisibleMessenge] = useState(false);
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

  useEffect(() => {
    if (window.pageYOffset > 150) {
      setStyleScroll("visible--true");
    } else {
      setStyleScroll("visible--false");
    }
  }, [window.pageYOffset]);

  const slideShow = (data) => {
    const result = slide.filter((_, index) => index === data);

    return (
      <div className="slideshowSlider ">
        <img className="slideshowSlider--img" src={result} alt="slides" />
      </div>
    );
  };
  const handleGoUpPage = (event) => {
    event.preventDefault();
    window.scrollBy(0, -1 * window.pageYOffset);
  };

  const handleVisibleMessenge = (e) => {
    e.preventDefault();
    if (visibleMessenge) {
      setVisibleMessenge(!visibleMessenge);
    }
  };
  return (
    <main className="main">
      <section className="slide-photo">
        <div className="slide__photo--socials">
          <div className="slide__photo__socials--call">
            <img className="img" src={Call} alt="photoNum" />
            <p className="img--text">zadzwoń</p>
          </div>

          <div
            className="slide__photo__socials--messenger"
            onClick={() => setVisibleMessenge((s) => !s)}
          >
            <img className="img" src={Messenger} alt="messengerNum" />
            <p className="img--text">messenger</p>
          </div>
        </div>
        <div className="slideshow">{slideShow(index)}</div>
      </section>
      {visibleMessenge ? <MessengerText /> : null}

      <section className="teams">
        <PhotoTeam />
      </section>
      <section className="slogon">
        <TextHeader />
      </section>
      <div id="toTopButton" className={styleScroll} onClick={handleGoUpPage}>
        To top
      </div>
    </main>
  );
}
