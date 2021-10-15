import React from "react";
import "./cardsDisplay.scss";

import ExampleCard from "./cards/exampleCard/exampleCard";
import IndigoCard from "./cards/indigoCard/indigoCard";
import KristiCard from "./cards/kristiCard/kristiCard";
import KesineeCard from "./cards/kesineeCard/KesineeCard";
import JennDiazCard from "./cards/jennDiazCard/jennDiazCard";
import RachaelCard from "./cards/rachael-tCard/rachael-tCard";
import ChumleyCard from "./cards/chumleyCard/chumleyCard";
import BriesCard from './cards/briesCard/briesCard';


function CardsDisplay(props) {
  return (
    <div className="cardholder">
      <div>
        <ExampleCard />
      </div>

      <div>
        <JennDiazCard />
      </div>

      <div>
        <IndigoCard />
      </div>

      <div>
        <KristiCard />
      </div>

      <div>
        <KesineeCard />
      </div>

      <div>
        <ChumleyCard />
      </div>

      <div><RachaelCard /></div>

      <div><BriesCard /></div>

    </div>
  );
}

export default CardsDisplay;
