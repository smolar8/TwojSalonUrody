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
  const handleGetByJson = (data) => {
    return data.map((item) => {
      return (
        <div
          className="wrapper__podologia__boxByPodologiaJson--item"
          key={item.title}
        >
          {item.text}
        </div>
      );
    });
  };
  return (
    <div className="wrapper--podologia">
      <h2>PODOLOGIA</h2>
      <section className="block-p">
        <p className="podologia--p" onClick={handleVisiblePodologia}>
          Pedicure leczniczy
        </p>
        <p className="podologia--p" onClick={handleVisiblePodologia}>
          Usuwanie odcisków
        </p>
        <p className="podologia--p" onClick={handleVisiblePodologia}>
          Usuwanie modzeli
        </p>
        <p className="podologia--p" onClick={handleVisiblePodologia}>
          Usuwanie brodawek
        </p>
        <p className="podologia--p" onClick={handleVisiblePodologia}>
          Paznokcie wrastające i wkręcające- leczenie
        </p>
        <p className="podologia--p" onClick={handleVisiblePodologia}>
          Leczenie grzybicy paznokci
        </p>
        <p className="podologia--p" onClick={handleVisiblePodologia}>
          Leczenie pękających pięt
        </p>
        <p className="podologia--p" onClick={handleVisiblePodologia}>
          Leczenie suchej skóry stóp
        </p>

        <p className="podologia--p" onClick={handleVisiblePodologia}>
          Wizyty domowe
        </p>
        <p className="podologia--p" onClick={handleVisiblePodologia}>
          Dziecko w gabinecie
        </p>
      </section>

      <div className="wrapper__podologia--boxByPodologiaJson">
        {handleGetByJson(podologiaJson)}
      </div>
    </div>
  );
}
