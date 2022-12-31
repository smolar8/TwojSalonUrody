import React, { useState, useEffect } from "react";
import "./stylePodologia/podologia.css";

import podologiaJson from "../json/podologia.json";

export default function Podologia() {
  const [podologia, setPodologia] = useState({
    text: "",
    title: "",
    img: "",
    alt: "",
  });
  const [visibleInf, setVisibleInf] = useState("divImigNoneVisible");

  const handleVisiblePodologia = (e) => {
    e.preventDefault();
    setVisibleInf("divImigVisible");
    podologiaJson.map((item) => {
      return e.target.innerText === item.title ? setPodologia(item) : null;
    });
  };
  return (
    <div className="wrapper--podologia">
      <section className="block-p">
        <p className="--p" onClick={handleVisiblePodologia}>
          PODOLOGIA
        </p>
        <div className="square">
          <p className="podologia--p" onClick={handleVisiblePodologia}>
            Pedicure leczniczy
          </p>
        </div>
        <div className="square">
          <p className="podologia--p" onClick={handleVisiblePodologia}>
            Usuwanie odcisków
          </p>
        </div>
        <div className="square">
          <p className="podologia--p" onClick={handleVisiblePodologia}>
            Usuwanie modzeli
          </p>
        </div>
        <div className="square">
          <p className="podologia--p" onClick={handleVisiblePodologia}>
            Usuwanie brodawek
          </p>
        </div>
        <div className="square">
          <p className="podologia--p" onClick={handleVisiblePodologia}>
            Paznokcie wrastające i wkręcające- leczenie
          </p>
        </div>
        <div className="square">
          <p className="podologia--p" onClick={handleVisiblePodologia}>
            Leczenie grzybicy paznokci
          </p>
        </div>
        <div className="square">
          <p className="podologia--p" onClick={handleVisiblePodologia}>
            Leczenie pękających pięt
          </p>
        </div>
        <div className="square">
          <p className="podologia--p" onClick={handleVisiblePodologia}>
            Leczenie suchej skóry stóp
          </p>
        </div>
        <div className="square">
          <p className="podologia--p" onClick={handleVisiblePodologia}>
            Wizyty domowe
          </p>
        </div>
        <div className="square">
          <p className="podologia--p" onClick={handleVisiblePodologia}>
            Dziecko w gabinecie
          </p>
        </div>
      </section>

      <div className={visibleInf}>
        <p className="visibleInf--p">{podologia.text}</p>
        <img
          className="visibleInf--img"
          src={podologia.img}
          alt={podologia.alt}
        />
      </div>
    </div>
  );
}
