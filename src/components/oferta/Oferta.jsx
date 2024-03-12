import React, { useState } from "react";
import MySwiper from "../../swiper/MySwiper";
import SelectDetailesOferta from "../oferta/procedureDetailes/SelectDetailesOferta";
// import jsonOferta from "../Json/oferta.json";
import "./styleOferta/oferta.css";
import { apiFoto } from "../Json/ofertaPhoto";

function Oferta() {
  const [idItems, setIdItems] = useState(-1);

  const clickChooseSelect = (data) => {
    setIdItems(data);
  };
  // const handleOnclick1 = (e) => {
  //   setIdItems(e.realIndex);
  // };
  return (
    <div className="oferta">
      <h1 className="oferta--h1">Wybierz Ofertę</h1>
      <MySwiper json={apiFoto} clickChooseSelect={clickChooseSelect} />
      <SelectDetailesOferta id={idItems} />
    </div>
  );
}

export default Oferta;
