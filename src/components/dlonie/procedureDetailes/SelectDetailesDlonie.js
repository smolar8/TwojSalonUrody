import React from "react";

import { ManicureHybryda } from "./ManicureHybryda";
import { ManicureJapan } from "./ManicureJapan";
import { Parafina } from "./Parafina.jsx";
import { Free } from "./Free";

export default function SelectDetailesOferta({ id }) {
  switch (id) {
    case 1:
      return <ManicureHybryda />;
    case 2:
      return <ManicureJapan />;
    case 3:
      return <Parafina />;
    case 4:
      return <Free />;

    default:
      return <div></div>;
  }
}
