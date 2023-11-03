import React from "react";

import { OczyszczanieWodorowe } from "./OczyszczanieWodorowe";
import { OczyszczanieManualne } from "./OczyszczanieManualne";
import { Kobido } from "./Kobido";
import { ZabiegFirmowy } from "./ZabiegFirmowy";
import { MasazTwarzy } from "./MasazTwarzy";
import { BonPodarunkowy } from "./BonPodarunkowy";
import { PrzekluwanieUszu } from "./PrzekluwanieUszu";
import { Mikrodermabrazja } from "./Mikrodermabrazja";
import { Volumetiq } from "./Volumetiq";
import { Depilacja } from "./Depilacja";
import { FaleRadiowe } from "./FaleRadiowe";
import { MezoterapiaMikro } from "./MezoterapiaMikro";
import { Peeling } from "./Peeling";
import { MezoterapiaBeziglowa } from "./MezoterapiaBeziglowa";
import { Oxybrazja } from "./Oxybrazja";
import { Free } from "./Free";

export default function SelectDetailesOferta({ id }) {
  switch (id) {
    case 1:
      return <OczyszczanieWodorowe />;
    case 2:
      return <OczyszczanieManualne />;
    case 3:
      return <Kobido />;
    case 4:
      return <ZabiegFirmowy />;
    case 5:
      return <MasazTwarzy />;
    case 6:
      return <BonPodarunkowy />;
    case 7:
      return <PrzekluwanieUszu />;
    case 8:
      return <Mikrodermabrazja />;
    case 9:
      return <Volumetiq />;
    case 10:
      return <Depilacja />;
    case 11:
      return <FaleRadiowe />;
    case 12:
      return <MezoterapiaMikro />;
    case 13:
      return <Peeling />;
    case 14:
      return <MezoterapiaBeziglowa />;
    case 15:
      return <Oxybrazja />;
    case 16:
      return <Free />;
    default:
      return <div>Depilacja</div>;
  }
}
