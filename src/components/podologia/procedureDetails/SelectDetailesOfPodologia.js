import React from "react";

import { PodologiaComponent1 } from "./PodologiaComponent1";
import { PodologiaComponent2 } from "./Podologiacomponent2";
import { PodologiaComponent3 } from "./PodologiaComponent3";
import { PodologiaComponent4 } from "./PodologiaComponent4";
import { PodologiaComponent5 } from "./PodologiaComponent5";
import { PodologiaComponent6 } from "./PodologiaComponent6";
import { PodologiaComponent7 } from "./PodologiaComponent7";
import { PodologiaComponent8 } from "./PodologiaComponent8";

export default function SelectDetailesOfPodologia({ id }) {
  switch (id) {
    case 1:
      return <PodologiaComponent1 />;
    case 2:
      return <PodologiaComponent2 />;
    case 3:
      return <PodologiaComponent3 />;
    case 4:
      return <PodologiaComponent4 />;
    case 5:
      return <PodologiaComponent5 />;
    case 6:
      return <PodologiaComponent6 />;
    case 7:
      return <PodologiaComponent7 />;
    case 8:
      return <PodologiaComponent8 />;

    default:
      return <div></div>;
  }
}
