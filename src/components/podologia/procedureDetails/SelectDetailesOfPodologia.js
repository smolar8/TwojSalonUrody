import React from "react";

import { PodstawowyZabieg } from "./PodstawowyZabieg";
import { WrastajacePaznokcie } from "./WrastajacePaznokcie";
import { Odciski } from "./Odciski";
import { Modzele } from "./Modzele";
import { PekajacePiety } from "./PekajacePiety";
import { Grzybica } from "./Grzybica";
import { PaznokcieDystroficzne } from "./PaznokcieDystroficzne";
import { Brodawki } from "./Brodawki";
import { FrontPage } from "./FrontPage";

export default function SelectDetailesOfPodologia({ id }) {
  switch (id) {
    case 1:
      return <PodstawowyZabieg />;
    case 2:
      return <WrastajacePaznokcie />;
    case 3:
      return <Odciski />;
    case 4:
      return <Modzele />;
    case 5:
      return <PekajacePiety />;
    case 6:
      return <Grzybica />;
    case 7:
      return <PaznokcieDystroficzne />;
    case 8:
      return <Brodawki />;
    case 9:
      return <FrontPage />;

    default:
      return <div></div>;
  }
}
