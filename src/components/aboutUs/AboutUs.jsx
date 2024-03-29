import React, { useState, useRef, useEffect } from "react";

import "./styleAbout/about.css";

import TextBottomAbout from "./textBottomAbout/TextBottomAbout.jsx";
import PhotoTeam from "./photoTeam/PhotoTeam";
// import MessengerText from "./messenger/Messenger";
// import Call from "../../img&icon/Phone-icon.png";
// import Messenger from "../../img&icon/messenger.jpg";

import AnimatedPage from "../../animated/AnimatedPage";
import { apiPhoto } from "../Json/slideAbout.js";

export default function AboutUs() {
  const delay = 4000;
  const [index, setIndex] = useState(0);

  // const [visibleMessenge, setVisibleMessenge] = useState(false);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) => (1 < index ? 0 : prevIndex + 1));
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [index]);

  const slideShow = (data) => {
    let result = "";
    let coming = 0;
    apiPhoto.map((item) =>
      item.key === data ? ((result = item.content), (coming = item.text)) : null
    );
    return (
      <div className="slideshowSlider ">
        <img className="slideshowSlider--img" src={result} alt={coming} />
      </div>
    );
  };

  // const PhonCall = () => {
  //   return (
  //     <div className="slide__photo__socials--call">
  //       <a href="tel:+48721377690">
  //         <img className="img" src={Call} alt="photoNum" />
  //       </a>
  //     </div>
  //   );
  // };

  return (
    <AnimatedPage>
      <main className="main">
        <section className="slide-photo">
          {/* <div className="slide__photo--socials">
            <PhonCall />
            <div
              className="slide__photo__socials--messenger"
              onClick={() => setVisibleMessenge((s) => !s)}
            >
              <img className="img" src={Messenger} alt="messengerNum" />
            </div>
          </div> */}
          <div className="slideshow">{slideShow(index)}</div>
        </section>
        {/* {visibleMessenge ? <MessengerText /> : null} */}

        <section className="teams">
          <PhotoTeam />
        </section>
        <section className="slogon">
          <TextBottomAbout />
        </section>
      </main>
    </AnimatedPage>
  );
}
