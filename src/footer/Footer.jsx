import React from "react";

import "./styleFooter/footer.css";
import YT from "../img&icon/social/yt.png";
import FB from "../img&icon/social/fb.png";
import Inst from "../img&icon/social/inst.png";
import LogoFace from "../img&icon/logo/HeadLogo-footer.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer--address">
        <div className="footer__adress--wrap">
          <img className="logo_face" src={LogoFace} alt="logo" />
        </div>
        <h5 className="address--gabinet">Gabinet Kosmetyczny</h5>
        <h5 className="address--salon">Twój Salon Urody</h5>

        <p className="address--p">
          ul. Partyzantów 2 <br></br>27-500 Opatów
        </p>
      </div>
      <div className="footer--contakt">
        <h5 className="footer__contakt--h5">Kontakt</h5>
        <p className="footer__contakt--tel">
          tel:
          <a className="footer__contakt__tel--a" href="tel:+48134567912">
            721 377 690
          </a>
        </p>
        <p className="footer__contakt--email">
          <a
            className="footer__contakt__email--a"
            href="mailto:twojsalonurody@interia.pl"
          >
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
        <h5 className="footer__shortcuts--h5">Na skróty</h5>
        <ul className="checklist">
          <li>na razie, nie wiem co chciałbyś tu napisać</li>
        </ul>
      </div>

      <div className="footer--opinion">
        <h5 className="footer__opinion--h5"> Najnowsze opinie</h5>
        <p className="time__work--p">
          Do gabinetu kosmetycznego Twój Salon Urody i w cudowne ręce Pań
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
