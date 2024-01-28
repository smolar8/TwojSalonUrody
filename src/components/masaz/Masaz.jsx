import React, { useState } from "react";
import MySwiper from "../../swiper/MySwiper";
import SelectDetailesMasaz from "../masaz/procedureDetails/SelectDetailesOfMasaz";
import jsonMasaz from "../Json/masaz.json";
import "./styleMasaz/masaz.css";

function Masaz() {
  const [idItems, setIdItems] = useState(-1);

  const clickChooseSelect = (data) => {
    setIdItems(data);
  };
  // const handleOnclick1 = (e) => {
  //   setIdItems(e.realIndex);
  // };
  return (
    <div className="container">
      <h1 className="heading">Wybierz Masaż</h1>
      <MySwiper json={jsonMasaz} clickChooseSelect={clickChooseSelect} />
      <SelectDetailesMasaz id={idItems} />
    </div>
  );
}

export default Masaz;
