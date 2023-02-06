import React from "react";
import Pricindcard from "./pricingcard";
import './pricing.css'

function price() {
  return (
    <div className="pricingPart">
      <h1 className="priceHead">PRICING</h1>
      <div className="pricingcards">
      <Pricindcard 
          mainHead="Breakfast"
          subHead="₹ 50"
        />
        <Pricindcard 
          mainHead="Lunch"
          subHead="₹ 60"
        />
        <Pricindcard 
          mainHead="Dinner"
          subHead="₹ 60"
        />
        {/* <Pricindcard />
        <Pricindcard /> */}
      </div>
    </div>
  );
}

export default price;
