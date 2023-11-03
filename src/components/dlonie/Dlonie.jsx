import React, { useState } from "react";
import jsonDlonie from "../Json/dlonie.json";

import SelectDetailesOfDlonie from "../dlonie/procedureDetailes/SelectDetailesDlonie";
import "./styleDlonie/dlonie.scss";

import MySwiper from "../../swiper/MySwiper";

function Dlonie() {
  const [idItems, setIdItems] = useState(-1);

  const clickChooseSelect = (data) => {
    setIdItems(data);
  };

  return (
    <div className="container">
      <h1 className="heading">
        <p className="head">
          W swojej pracy łączę zamiłowanie do podologii z chęcią pomagania
          innym. Motywacją do pracy jest dla mnie nieustanne niesienie ulgi
          potrzebującym pacjentom. W gabinecie utrzymuję medyczny standard
          higieny. Stosuję nowoczesne i skuteczne metody terapii.
        </p>
        <p className="head">
          <br></br>W dbałości o Państwa bezpieczeństwo przy każdym zabiegu
          wykorzystywane są tylko wysterylizowane narzędzia oraz zachowywane są
          wszelkie zasady higieny.
        </p>
      </h1>
      <MySwiper json={jsonDlonie} clickChooseSelect={clickChooseSelect} />
      <SelectDetailesOfDlonie id={idItems} />
    </div>
  );
}

export default Dlonie;
