import React from "react";

import { StylizacjaComponent1 } from "./StylizacjaComponent1";
import { StylizacjaComponent2 } from "./StylizacjaComponent2";
import { StylizacjaComponent3 } from "./StylizacjaComponent3";

export default function SelectDetailesOfStylizacja({ id }) {
  switch (id) {
    case 1:
      return <StylizacjaComponent1 />;
    case 2:
      return <StylizacjaComponent2 />;
    case 3:
      return <StylizacjaComponent3 />;

    default:
      return <div></div>;
  }
}
