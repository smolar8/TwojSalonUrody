import React from "react";

import { OczyszczanieWodorowe } from "./OczyszczanieWodorowe";
import { OczyszczanieManualne } from "./OczyszczanieManualne";
import { RetiPeel } from "./RetiPeel";
import { ZabiegFirmowy } from "./ZabiegFirmowy";
import { MasazTwarzy } from "./MasazTwarzy";

import { PrzekluwanieUszu } from "./PrzekluwanieUszu";
import { Mikrodermabrazja } from "./Mikrodermabrazja";
import { Volumetiq } from "./Volumetiq";
import { Depilacja } from "./Depilacja";
import { FaleRadiowe } from "./FaleRadiowe";
import { MezoterapiaMikro } from "./MezoterapiaMikro";
import { Peeling } from "./Peeling";
import { MezoterapiaBeziglowa } from "./MezoterapiaBeziglowa";
import { Oxybrazja } from "./Oxybrazja";
import { Elektrokoagulacja } from "./Elektrokoagulacja";
import { Retix } from "./Retix";
import { LuksusowyZabieg } from "./LuksuwowyZabieg";
import { ArchitectPeel } from "./ArchitectPeel";
import { CeraNaczyniowa } from "./CeraNaczyniowa";
import { Normalizujacy } from "./Normalizujacy";
import { Kolagen } from "./Kolagen";
import { DiamentowyLift } from "./DiamentowyLift";
import { Free } from "./Free";

export default function SelectDetailesOferta({ id }) {
  switch (id) {
    case 1:
      return <OczyszczanieWodorowe />;
    case 2:
      return <OczyszczanieManualne />;
    case 3:
      return <RetiPeel />;
    case 4:
      return <ZabiegFirmowy />;
    case 5:
      return <MasazTwarzy />;
    case 6:
      return <PrzekluwanieUszu />;
    case 7:
      return <Mikrodermabrazja />;
    case 8:
      return <Volumetiq />;
    case 9:
      return <Depilacja />;
    case 10:
      return <FaleRadiowe />;
    case 11:
      return <MezoterapiaMikro />;
    case 12:
      return <Peeling />;
    case 13:
      return <MezoterapiaBeziglowa />;
    case 14:
      return <Oxybrazja />;
    case 15:
      return <Elektrokoagulacja />;
    case 16:
      return <Retix />;
    case 17:
      return <LuksusowyZabieg />;
    case 18:
      return <ArchitectPeel />;
    case 19:
      return <CeraNaczyniowa />;
    case 20:
      return <Normalizujacy />;
    case 21:
      return <Kolagen />;
    case 22:
      return <DiamentowyLift />;
    case 23:
      return <Free />;
    default:
      return <div>strona startowa</div>;
  }
}
