import React from "react";

import { Udvartana } from "./Udvartana";
import { Abyangha } from "./Abyangha";
import { MasazBalijski } from "./MasazBalijski";
import { MasazSwiecami } from "./MasazSwiecami";
import { MasazBambus } from "./MasazBambus";
import { MasazBanka } from "./MasazBanka";
import { MasazPlec } from "./MasazPlec";
import { Kobido } from "./Kobido";
import { FrontPage } from "./FronPage";
import { MasazKamieniami } from "./MasazKamieniami.jsx";
import { MasazNaBalsamie } from "./MasazNaBalsamie.jsx";
import { MasazTwarz } from "./MasazTwarz.jsx";
import { DrenazLimfatyczny } from "./DrenazLimfatyczny.jsx";
import { MasazCzekolada } from "./MasazCzekolada.jsx";

export default function SelectDetailesOfMasaz({ id }) {
  switch (id) {
    case 1:
      return <Kobido />;
    case 2:
      return <Udvartana />;
    case 3:
      return <Abyangha />;
    case 4:
      return <MasazBalijski />;
    case 5:
      return <MasazSwiecami />;
    case 6:
      return <MasazBambus />;
    case 7:
      return <MasazKamieniami />;
    case 8:
      return <MasazBanka />;
    case 9:
      return <MasazPlec />;

    case 10:
      return <MasazNaBalsamie />;
    case 11:
      return <MasazTwarz />;
    case 12:
      return <DrenazLimfatyczny />;
    case 13:
      return <MasazCzekolada />;
    case 14:
      return <FrontPage />;

    default:
      return <div></div>;
  }
}
