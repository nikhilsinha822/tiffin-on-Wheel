import React from "react";
import Pricindcard from "./pricingcard";

function price() {
  return (
    <div className="pricingPart">
      <h1 className="priceHead">PRICING</h1>
      <div className="pricingcards">
        <Pricindcard />
        <Pricindcard />
        <Pricindcard />
      </div>
    </div>
  );
}

export default price;
