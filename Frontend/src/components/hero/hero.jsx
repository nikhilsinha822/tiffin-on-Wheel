import React from "react";

// setTimeout(animation, 100);

// function animation() {
//   document.querySelector(".introTxt").classList.add("resintroTxt");
// }

function Home() {
  return (
    <div className="Home" id="Home">
      <div className="introTxt">
      <h1>Get the best meal at your footsteps!</h1>
      </div>      
      <button className="btn"><a href="/customer" style={{textDecoration:"none", color:"#030332"}}>BOOK - NOW</a></button>
    </div>
  );
}

export default Home;
