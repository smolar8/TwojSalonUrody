import React from "react";

import "./styleFooter/footer.css";
import YT from "../img&icon/social/yt.png";
import FB from "../img&icon/social/fb.png";
import Inst from "../img&icon/social/inst.png";

function Footer() {
  return (
    <div className="footer">
      <div className="address">
        <h2>
          Gabinet Kosmetyczny <br /> Twój Salon Urody
        </h2>
        <p> ul. Partyzantów 2</p>
        <p> 27-500 Opatów</p>
      </div>
      <div className="impotent--links">
        <h2>Ważne linki</h2>

        <ul className="checklist">
          <li>Regulaminy</li>
          <li>Polityka prywatności</li>
          {/* <li>Rezerwacje</li>
          <li>Kup zabieg</li>
          <li>Karta podarunkowa</li> */}
          <div className="social">
            <span>
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=7KyymUCY-Uw&ab_channel=%D0%AE%D0%9C%D0%9E%D0%A0ICTV-%D0%9E%D1%84%D0%B8%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB"
                rel="noopener noreferrer"
              >
                <img className="yt-img social-icon" src={YT} alt="youtube" />
              </a>
            </span>
            <span>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <img className="fb-img social-icon" src={FB} alt="facebook" />
              </a>
            </span>
            <span>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <img
                  className="inst-img social-icon"
                  src={Inst}
                  alt="instagram"
                />
              </a>
            </span>
          </div>
        </ul>
      </div>
      <div className="tel-email">
        <h2>Telefon & Email</h2>
        <p>
          tel:
          <a href="tel:+48134567912">+48 721 377 690 </a>
        </p>
        <p>
          email: <a href="mailto:aaa@gmail.com">twojsalonurody@interia.pl</a>
        </p>
      </div>
      {/* <div className="offer">
        <h2>Oferta</h2>
        <ol className="checklist">
          <li>Depilacja laserowa</li>
          <li>Modelowanie sylwetki</li>
          <li>Redukcja celulitu</li>
          <li>Medycyna estetyczna</li>
          <li>Oczyszczanie skóry</li>
        </ol>
      </div> */}
      <div className="time-work">
        <h2> Godziny otwarcia</h2>
        <p>Pon. - Pt. 10:00 - 18:00</p>
        <p>Sob. 9:00 - 14:00</p>
      </div>
    </div>
  );
}

export default Footer;
