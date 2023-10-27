import React from "react";

export const StylizacjaComponent1 = () => {
  return (
    <div>
      <h1 className="h1">Henna</h1>
      <p>
        Henna brwi i rzęs to zabieg polegający na delikatnym farbowaniu włosków
        brwi oraz rzęs. Efekt utrzymuje się na rzęsach przez około 3-4 tygodnie,
        na brwiach około 2 tygodni. Kolor henny jest dobierany indywidualnie.
      </p>
      <br></br>
      <h3>Przeciwwskazania do zabiegu:</h3>

      <span className="li">
        <ul>
          <li> uczulenie na hennę</li>
          <li>stany zapalne i alergiczne skóry</li>
          <li> choroby i uszkodzenia oka (np. jęczmień, zapalenie spojówek)</li>
          <li> uszkodzenia lub otarcia naskórka w okolicy brwi</li>
          <li>soczewki kontaktowe</li>
        </ul>
      </span>
      <h3>Regulację wykonujemy pęsetą oraz woskiem.</h3>
    </div>
  );
};
