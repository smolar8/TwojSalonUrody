import React from "react";

import "./styleFooter/footer.css";
import YT from "../img&icon/social/yt.png";
import FB from "../img&icon/social/fb.png";
import Inst from "../img&icon/social/inst.png";
import LogoFace from "../img&icon/logo/logo-face.png";
import LogoFeet from "../img&icon/logo/logo-feet.png";
import LogoName from "../img&icon/logo/logo-name.png";

function Footer() {
  return (
    <div className="footer">
      <div className="address">
        <div className="wrap">
          <img className="logo_feet" src={LogoFeet} alt="feet" />
          <img className="logo_face" src={LogoFace} alt="logo" />
          <img className="logo_name" src={LogoName} alt="logo" />
        </div>
        <h3 className="address--gabinet">Gabinet Kosmetyczny</h3>
        <h3 className="address--salon">Twój Salon Urody</h3>

        <p className="address--p"> ul. Partyzantów 2</p>
        <p> 27-500 Opatów</p>
      </div>
      <div className="footer--contakt">
        <h3 className="footer__contakt--h3">Kontakt</h3>
        <p className="footer__contakt--tel">
          tel:
          <a href="tel:+48134567912"> 721 377 690 </a>
        </p>
        <p className="footer__contakt--email">
          <a href="mailto:twojsalonurody@interia.pl">
            twojsalonurody@interia.pl
          </a>
        </p>

        <div className="footer__contakt--social">
          <span>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=7KyymUCY-Uw&ab_channel=%D0%AE%D0%9C%D0%9E%D0%A0ICTV-%D0%9E%D1%84%D0%B8%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB"
              rel="noopener noreferrer"
            >
              <img
                className="yt-img footer__contakt__social--icon"
                src={YT}
                alt="youtube"
              />
            </a>
          </span>
          <span>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img
                className="fb-img footer__contakt__social--icon"
                src={FB}
                alt="facebook"
              />
            </a>
          </span>
          <span>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img
                className="inst-img footer__contakt__social--icon"
                src={Inst}
                alt="instagram"
              />
            </a>
          </span>
        </div>
      </div>
      <div className="footer--shortcuts">
        <h3 className="footer__shortcuts--h3">Na skróty</h3>
        <ul className="checklist">
          <li>na razie, nie wiem co chciałbyś tu napisać</li>
        </ul>
      </div>

      <div className="footer--opinion">
        <h3 className="footer__opinion--h3"> Najnowsze opinie</h3>
        <p className="time__work--p">
          Do gabinetu kosmetycznego POCZUCIE PIĘKNA i w cudowne ręce Pań
          trafiłam z polecenia i był to strzał w 10!!!! Profesjonalizm oraz
          niezwykle miła atmosfera, jaką wprowadzają dziewczyny to nie wszystkie
          atuty tego miejsca. Profesjonalnie wykonywane zabiegi oraz wiedza,
          jaką posiadają Panie spowodowały, że z przyjemnością oddaje się w Ich
          ręce : &#10099; - Anna M.
        </p>
      </div>
    </div>
  );
}

export default Footer;
