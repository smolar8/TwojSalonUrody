import React from "react";

import { OfertaComponent1 } from "./OfertaComponent1";
import { OfertaComponent2 } from "./OfertaComponent2";
import { OfertaComponent3 } from "./OfertaComponent3";
import { OfertaComponent4 } from "./OfertaComponent4";
import { OfertaComponent5 } from "./OfertaComponent5";
import { OfertaComponent6 } from "./OfertaComponent6";
import { OfertaComponent7 } from "./OfertaComponent7";
import { OfertaComponent8 } from "./OfertaComponent8";
import { OfertaComponent9 } from "./OfertaComponent9";
import { OfertaComponent10 } from "./OfertaComponent10";
import { OfertaComponent11 } from "./OfertaComponent11";

export default function SelectDetailesOferta({ id }) {
  switch (id) {
    case 1:
      return <OfertaComponent1 />;
    case 2:
      return <OfertaComponent2 />;
    case 3:
      return <OfertaComponent3 />;
    case 4:
      return <OfertaComponent4 />;
    case 5:
      return <OfertaComponent5 />;
    case 6:
      return <OfertaComponent6 />;
    case 7:
      return <OfertaComponent7 />;
    case 8:
      return <OfertaComponent8 />;
    case 9:
      return <OfertaComponent9 />;
    case 10:
      return <OfertaComponent10 />;
    case 11:
      return <OfertaComponent11 />;
    default:
      return <div>Depilacja</div>;
  }
}
