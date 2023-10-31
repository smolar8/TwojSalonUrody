import React from "react";

import { Udvartana } from "./Udvartana";
import { Abyangha } from "./Abyangha";
import { MasazBalijski } from "./MasazBalijski";
import { MasazSwiecami } from "./MasazSwiecami";
import { MasazKijami } from "./MasazKijami";
import { MasazNaMasle } from "./MasazNaMasle";
import { MasazBanka } from "./MasazBanka";
import { MasazPlec } from "./MasazPlec";
import { FrontPage } from "./FronPage";

export default function SelectDetailesOfMasaz({ id }) {
  switch (id) {
    case 1:
      return <Udvartana />;
    case 2:
      return <Abyangha />;
    case 3:
      return <MasazBalijski />;
    case 4:
      return <MasazSwiecami />;
    case 5:
      return <MasazKijami />;
    case 6:
      return <MasazNaMasle />;
    case 7:
      return <MasazBanka />;
    case 8:
      return <MasazPlec />;
    case 9:
      return <FrontPage />;

    default:
      return <div></div>;
  }
}
