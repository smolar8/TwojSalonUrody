import React from "react";

import { PeelingComponent1 } from "./PeelingComponent1";
import { PeelingComponent2 } from "./PeelingComponent2";
import { PeelingComponent3 } from "./PeelingComponent3";
import { PeelingComponent4 } from "./PeelingComponent4";

export default function SelectDetailesPeeling({ id }) {
  switch (id) {
    case 1:
      return <PeelingComponent1 />;
    case 2:
      return <PeelingComponent2 />;
    case 3:
      return <PeelingComponent3 />;
    case 4:
      return <PeelingComponent4 />;

    default:
      return <div></div>;
  }
}
