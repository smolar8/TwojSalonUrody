import React from "react";

import { ManicureHybryda } from "./ManicureHybryda";
import { ManicureJapan } from "./ManicureJapan";
import { Free } from "./Free";

export default function SelectDetailesOferta({ id }) {
  switch (id) {
    case 2:
      return <ManicureHybryda />;
    case 1:
      return <ManicureJapan />;
    case 0:
      return <Free />;

    default:
      return <div></div>;
  }
}
