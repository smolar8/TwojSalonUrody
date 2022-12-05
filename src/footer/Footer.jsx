import React from "react";

import "./styleFooter/footer.css";
import YT from "../img&icon/yt.png";
import FB from "../img&icon/fb.png";
import Inst from "../img&icon/inst.png";

function Footer() {
  return (
    <div className="footer">
      <div className="address">
        <h2>Klinika Medycyny Estetycznej</h2>
        <p>ul. Siedmiogrodzka 1</p>
        <div className="social">
          <span>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=7KyymUCY-Uw&ab_channel=%D0%AE%D0%9C%D0%9E%D0%A0ICTV-%D0%9E%D1%84%D0%B8%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB"
              rel="noopener"
            >
              <img className="yt-img social-icon" src={YT} alt="youtube" />
            </a>
          </span>
          <span>
            <a href="/" rel="noopener">
              <img className="fb-img social-icon" src={FB} alt="facebook" />
            </a>
          </span>
          <span>
            <a href="/" rel="noopener">
              <img
                className="inst-img social-icon"
                src={Inst}
                alt="instagram"
              />
            </a>
          </span>
        </div>
      </div>
      <div className="impotent--links">
        <h2>Ważne linki</h2>
        <ul className="checklist">
          <li>Regulaminy</li>
          <li>Polityka prywatności</li>
          <li>Kontakt</li>
          <li>Rezerwacje</li>
          <li>Kup zabieg</li>
          <li>Karta podarunkowa</li>
          <li>Kariera</li>
        </ul>
      </div>
      <div className="tel-email">
        <h2>Telefon & Email</h2>
        <p>
          tel:
          <a href="tel:+48134567912">+48 134 566 912</a>
        </p>
        <p>
          email: <a href="mailto:aaa@gmail.com">aaa@gmail.com</a>
        </p>
      </div>
      <div className="offer">
        <h2>Oferta</h2>
        <ol className="checklist">
          <li>Depilacja laserowa</li>
          <li>Modelowanie sylwetki</li>
          <li>Redukcja celulitu</li>
          <li>Medycyna estetyczna</li>
          <li>Oczyszczanie skóry</li>
        </ol>
      </div>
      <div className="time-work">
        <h2>Godziny otwarcia</h2>
        <p>Pon. - Pt. 8:00 - 21:00</p>
        <p>Sob. 9:00 - 18:00</p>
      </div>
    </div>
  );
}

export default Footer;
