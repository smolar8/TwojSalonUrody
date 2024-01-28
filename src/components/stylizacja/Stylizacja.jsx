import React, { useState } from "react";
import jsonStylizacja from "../Json/stylizacja.json";

import SelectDetailesOfStylizacja from "./procedureDetails/SelectDetailesOfStylizacja";
import "./styleStylizacja/stylizacja.scss";

import MySwiper from "../../swiper/MySwiper";

function Stylizacja() {
  const [idItems, setIdItems] = useState(-1);

  const clickChooseSelect = (data) => {
    setIdItems(data);
  };

  return (
    <div className="stylizacja">
      <header className="stylizacja--header">
        <p className="stylizacja__header--p">
          W swojej pracy łączę zamiłowanie do podologii z chęcią pomagania
          innym. Motywacją do pracy jest dla mnie nieustanne niesienie ulgi
          potrzebującym pacjentom. W gabinecie utrzymuję medyczny standard
          higieny. Stosuję nowoczesne i skuteczne metody terapii.
        </p>
        <p className="stylizacja__header--p">
          W dbałości o Państwa bezpieczeństwo przy każdym zabiegu wykorzystywane
          są tylko wysterylizowane narzędzia oraz zachowywane są wszelkie zasady
          higieny.
        </p>
      </header>
      <MySwiper json={jsonStylizacja} clickChooseSelect={clickChooseSelect} />
      <SelectDetailesOfStylizacja id={idItems} />
    </div>
  );
}

export default Stylizacja;
