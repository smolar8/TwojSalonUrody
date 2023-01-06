import React, { useState, useEffect } from "react";
import "./styleOferta/oferta.css";
import AnimatedPage from "../../animated/AnimatedPage";

import ofertaJson from "../json/oferta.json";

export default function Oferta() {
  const [oferta, setOferta] = useState({
    text: "",
    title: "",
    img: "",
    alt: "",
  });

  const [visibleInf, setVisibleInf] = useState("divImigNoneVisible");

  const handleVisibleOferta = (e) => {
    e.preventDefault();
    setVisibleInf("divImigVisible");
    ofertaJson.map((item) => {
      return e.target.innerText === item.title ? setOferta(item) : null;
    });
  };

  return (
    <AnimatedPage>
      <div className="wrapper--oferta">
        <section className="block-p">
          <p className="oferta--p" onClick={handleVisibleOferta}>
            Pielęgnacja twarzy, szyi i dekoltu
          </p>

          <p className="oferta--p" onClick={handleVisibleOferta}>
            Pielęgnacja dłoni i paznokci
          </p>

          <p className="oferta--p" onClick={handleVisibleOferta}>
            Pielęgnacja ciała
          </p>
          <p className="oferta--p" onClick={handleVisibleOferta}>
            Medycyne estetyczna
          </p>

          <p className="oferta--p" onClick={handleVisibleOferta}>
            Pielęgnacja brwi i rzęs
          </p>
          <p className="oferta--p" onClick={handleVisibleOferta}>
            Wizaź
          </p>
          <p className="oferta--p" onClick={handleVisibleOferta}>
            Depilacja
          </p>
          <p className="oferta--p" onClick={handleVisibleOferta}>
            Strefa wellness
          </p>

          <p className="oferta--p" onClick={handleVisibleOferta}>
            Przekłuwanie uszu
          </p>
        </section>

        <div className={visibleInf}>
          <p className="visibleInf--p">{oferta.text}</p>
          <img className="visibleInf--img" src={oferta.img} alt={oferta.alt} />
        </div>
      </div>
    </AnimatedPage>
  );
}
