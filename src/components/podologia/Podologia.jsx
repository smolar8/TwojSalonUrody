import React, { useState, useEffect } from "react";
import "./stylePodologia/podologia.css";

import podologiaJson from "../json/podologia.json";




const handleListingMore = (id, data) => {
  // e.preventDefault();
  console.log(data);
  console.log("id=", id);
  // {
  //   podologia.textBtn &&
  //     podologia.textBtn.map((data) => {
  //       return (
  //         <div key={podologia.id} onClick={(e) => handleListingMore(e)}>
  //           {" "}
  //           {data.text__btn}{" "}
  //         </div>
  //       );
  //     });
  // }
};

function PodologiaItemJson(json) {
  return (
    <div className="App">
      {json &&
        json.map((podologia) => {
          return (
            <div
              className="box"
              key={podologia.id}
              onClick={() => handleListingMore(podologia.id, podologia)}
            >
              <strong>{podologia.title}</strong>
              <button>more...</button>
            </div>
          );
        })}
    </div>
  );
}

export default function Podologia() {
  const [podologia, setPodologia] = useState({
    text: "",
    title: "",
    img: "",
    alt: "",
  });
  // const [visibleInf, setVisibleInf] = useState("divImigNoneVisible");

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
      {/* <section className="block-p">
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
      </section> */}

      <div className="wrapper__podologia--boxByPodologiaJson">
        {PodologiaItemJson(podologiaJson)}
      </div>
    </div>
  );
}
