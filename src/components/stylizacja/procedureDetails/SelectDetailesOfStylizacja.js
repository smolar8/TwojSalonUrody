import React from "react";

import { Henna } from "./Henna";
import { HennaPudrowa } from "./HennaPudrowa";
import { Laminacja } from "./Laminacja";
import { FrontPage } from "./FrontPage";

export default function SelectDetailesOfStylizacja({ id }) {
  switch (id) {
    case 1:
      return <Henna />;
    case 2:
      return <HennaPudrowa />;
    case 3:
      return <Laminacja />;
    case 4:
      return <FrontPage />;

    default:
      return <div></div>;
  }
}
