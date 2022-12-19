import React from "react";
import "./styleOferta/oferta.css";
import testimg from "../../img&icon/manicure.jpg";

export default function Oferta() {
  return (
    <div className="wrapper--oferta">
      <div className="first">
        <p className="oferta--p">Pielęgnacja twarzy, szyi i dekoltu</p>
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
}
