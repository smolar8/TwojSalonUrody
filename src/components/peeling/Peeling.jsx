import React, { useState } from "react";
import MySwiper from "../../swiper/MySwiper";

import SelectDetailesPeeling from "../peeling/procedureDetails/SelectDetailesPeeling";
import jsonPeeling from "../Json/peeling.json";
import "./stylePeeling/peeling.css";

function Peeling() {
  const [idItems, setIdItems] = useState(-1);

  const clickChooseSelect = (data) => {
    setIdItems(data);
  };
  const handleOnclick1 = (e) => {
    setIdItems(e.realIndex);
  };
  return (
    <div className="container">
      <h1 className="heading">Chemiczne peelingi medyczne - jak działają?</h1>
      <span>
        <p>
          Chemiczne peelingi medyczne to najlepszy sposób na głębokie
          oczyszczenie i regenerację skóry! Twarz po kwasach jest aksamitnie
          gładka i perfekcyjnie odżywiona. Znacznie zmniejsza się widoczność
          zmarszczek i przebarwień, poprawia się koloryt, a także jędrność i
          elastyczność skóry!
        </p>
      </span>
      <h3>Kwasy na twarz - jak wygląda skóra po zabiegu?</h3>
      <span>
        <p>
          Skóra po zabiegu z kwasami zwykle jest zaczerwieniona i podrażniona. W
          kolejnych dniach rozpoczyna się proces złuszczania naskórka. Wiele
          osób zastanawia się, jak długo łuszczy się skóra po kwasach? Wszystko
          zależy od mocy zastosowanego preparatu. Istnieją chemiczne peelingi
          medyczne o działaniu łagodnym, które nie skutkują dużym złuszczaniem.
          Dysponujemy jednak również mocnymi zabiegami stosowanymi w przypadku
          poważnych problemów estetycznych, po których złuszczanie jest bardziej
          widoczne i trwa kilka dni.
        </p>
      </span>
      <h3>
        hemiczne peelingi medyczne to zabiegi, które działają nie tylko na
        powierzchni skóry (usuwając martwy naskórek i niedoskonałości), ale
        również w jej wnętrzu. Jeszcze przez wiele tygodni po zabiegu możemy
        obserwować nieustanną poprawę kondycji skóry. Wytwarzane są nowe włókna
        kolagenu i elastyny - twarz wygląda coraz młodziej i atrakcyjniej!
      </h3>
      <span>
        <ol>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ol>
      </span>
      <MySwiper json={jsonPeeling} clickChooseSelect={clickChooseSelect} />
      <SelectDetailesPeeling id={idItems} />
    </div>
  );
}

export default Peeling;
