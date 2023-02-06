import React from "react";

function Pricingcard({ mainHead, subHead }) {
  return (
    <>
      <div className="column">
        <p className="cardHead">{mainHead}</p>
        <p className="priceAmt">{subHead}</p>
        <button className="cardBtn">Grab</button>
      </div>
    </>
    
  );
}

export default Pricingcard;
