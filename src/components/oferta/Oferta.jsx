import React, { useState, useEffect } from "react";
import "./styleOferta/oferta.css";
import j from "../../img&icon/1head.jpg";
import ofertaJson from "../json/oferta.json";
const URL = "/static/media/";
export default function Oferta() {
  const [oferta, setOferta] = useState({
    id: "",
    title: "",
    img: "",
  });

  const handleVisibleOferta = (e) => {
    e.preventDefault();
    ofertaJson.map((item) => {
      return e.target.innerText === item.title ? setOferta(item) : null;
    });
  };

  return (
    <div className="wrapper--oferta">
      <p className="oferta--p" onClick={handleVisibleOferta}>
        Pielęgnacja twarzy, szyi i dekoltu
      </p>

      <p className="oferta--p" onClick={handleVisibleOferta}>
        Pielęgnacja twarzy, szyi i dekoltu
      </p>
      <p className="oferta--p" onClick={handleVisibleOferta}>
        Pielęgnacja dłoni i paznokci
      </p>
      <p className="oferta--p" onClick={handleVisibleOferta}>
        Pielęgnacja stóp - <b>PODOLOGIA</b>
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
      <p
        className="oferta--p"
        name="Strefa wellness"
        onClick={handleVisibleOferta}
      >
        Strefa wellness
      </p>

      <p
        className="first"
        name="Przekłuwanie uszu"
        onClick={handleVisibleOferta}
      >
        Przekłuwanie uszu
      </p>
      <div className="ofr-img-img">
        <img id="tettt" className="ofr-img-img" src={oferta.img} alt="yyy" />

        <p>{oferta.text}</p>
      </div>
    </div>
  );
}
