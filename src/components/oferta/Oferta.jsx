import React, { useState, useEffect } from "react";
import URL from "../../img&icon/imgOferta";

import "./styleOferta/oferta.css";

import ofertaJson from "../json/oferta.json";

export default function Oferta() {
  const [oferta, setOferta] = useState({
    id: "",
    title: "",
    img: "",
  });
  function handleVisibleOferta(e) {
    e.preventDefault();
    oferta.map((item, index) => {
      e.id === item.id ? (
        <div className="visibleIMG">
          <img src={`${URL}+${item.img}`} alt="" />
          <span> treść opis photo {item.title}</span>
        </div>
      ) : null;
    });
  }
}

useEffect(() => {
  const getJson = () => {
    //pobrać Json w useSTate
  };
  getJson();
}, []);
return (
  <div className="wrapper--oferta">
    <div className="first">
      <p className="oferta--p" onClick={(e) => handleVisibileInformation(e)}>
        Pielęgnacja twarzy, szyi i dekoltu
      </p>
    </div>
    <p className="oferta--p">Pielęgnacja twarzy, szyi i dekoltu</p>
    <p className="oferta--p">Pielęgnacja dłoni i paznokci</p>
    <p className="oferta--p">
      Pielęgnacja stóp - <b>PODOLOGIA</b>
    </p>
    <p className="oferta--p">Pielęgnacja ciała</p>
    <p className="oferta--p">Medycyne estetyczna</p>

    <p className="oferta--p">Pielęgnacja brwi i rzęs</p>
    <p className="oferta--p">Wizaź</p>
    <p className="oferta--p">Depilacja</p>
    <p className="oferta--p">Strefa wellness</p>

    <p className="first">Przekłuwanie uszu</p>
    <img id="tettt" className="ofr-img-img" src={testimg} alt="yyy" />
  </div>
);

// import URL from "../url"
// export default function Oferta() {
//   const [oferta, setOferta] = useState({
//     id: "",
//     title: "",
//     img: "",
//   });
//   function handleVisibleOferta(e) {
//     e.preventDefault();
//     oferta.map((item, index) => {
//       e.id === item.id ? (return {
//        < div className="visibleIMG">
//         <img src=`${URL}+${item.img}` alt = "" />
//           <span> treszcz opis photo { item.title}</span>
//        </div >}): null
//     })
//   }
//   useEffect(() => {
// //pobranie Json i goto useState(oferta)
//   }, []);

// oferta.map((item, index) => {
//   e.id === item.id ? return {
//    < div className="visibleIMG">
//     <img src=`${URL}+${item.img}` alt = "" />
//       <span> treszcz opis photo { item.title}</span>
//    </div >}): null
// })
// }
// };
