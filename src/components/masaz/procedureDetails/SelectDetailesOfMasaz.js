import React from "react";

import { MasazComponent1 } from "./MasazComponent1";
import { MasazComponent2 } from "./MasazComponent2";
import { MasazComponent3 } from "./MasazComponent3";
import { MasazComponent4 } from "./MasazComponent4";
import { MasazComponent5 } from "./MasazComponent5";
import { MasazComponent6 } from "./MasazComponent6";
import { MasazComponent7 } from "./MasazComponent7";
import { MasazComponent8 } from "./MasazComponent8";
import { MasazComponent9 } from "./MasazComponent9";

export default function SelectDetailesOfMasaz({ id }) {
  switch (id) {
    case 1:
      return <MasazComponent1 />;
    case 2:
      return <MasazComponent2 />;
    case 3:
      return <MasazComponent3 />;
    case 4:
      return <MasazComponent4 />;
    case 5:
      return <MasazComponent5 />;
    case 6:
      return <MasazComponent6 />;
    case 7:
      return <MasazComponent7 />;
    case 8:
      return <MasazComponent8 />;
    case 9:
      return <MasazComponent9 />;

    default:
      return <div></div>;
  }
}
