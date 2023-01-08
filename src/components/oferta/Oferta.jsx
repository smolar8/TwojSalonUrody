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
  const handleGetByJson = (data) => {
    return data.map((item) => {
      return (
        <p className="oferta--p" key={item.title} onClick={handleVisibleOferta}>
          {item.title}
        </p>
      );
    });
  };

  return (
    <AnimatedPage>
      <div className="wrapper--oferta">
        <section className="block-p">{handleGetByJson(ofertaJson)}</section>
        <div className={visibleInf}>
          <p className="visibleInf--p">{oferta.text}</p>
          <img className="visibleInf--img" src={oferta.img} alt={oferta.alt} />
        </div>
      </div>
    </AnimatedPage>
  );
}
