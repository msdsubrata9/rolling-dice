import React from "react";
import { diceDotMap } from "../utils/constants";

function Dice({ number }) {
  const diceDotMappedValues = diceDotMap[number];

  return (
    <div className="dice">
      <div className="dice-inner">
        {diceDotMappedValues.map((className, index) => {
          return <div key={index} className={`dot ${className}`}></div>;
        })}
      </div>
    </div>
  );
}

export default Dice;
