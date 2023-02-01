import React from "react";
import Item from "./item";
import {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
} from "../../data/menudata";

//let width = box.clientWidth;
//const [width, pr] = useState("");

const previous = () => {
  let box = document.querySelector(".parentMenu");
  let width = box.clientWidth;
  box.scrollLeft = box.scrollLeft - width;
  //console.log(width);
};
const next = () => {
  let box = document.querySelector(".parentMenu");
  let width = box.clientWidth;
  box.scrollLeft = box.scrollLeft + width;
  //console.log(width);
};

function MenuCard() {
  return (
    <div className="">
      <div className="menuPg" id="Menu">
        <h1 className="menuHead">MENU</h1>
        <button className="menucar leftbtn" onClick={previous}>
          <p className="caroselBtn">◄</p>
        </button>
        <div className="parentMenu MenuContainer">
          <div className="childMenu  sp">
            <Item value={Sunday} />
          </div>
          <div className="childMenu  sp">
            <Item value={Monday} />
          </div>
          <div className="childMenu  sp">
            <Item value={Tuesday} />
          </div>
          <div className="childMenu  sp">
            <Item value={Wednesday} />
          </div>
          <div className="childMenu  sp">
            <Item value={Thursday} />
          </div>
          <div className="childMenu  sp">
            <Item value={Friday} />
          </div>
          <div className="childMenu  sp">
            <Item value={Saturday} />
          </div>
        </div>
        <button className="menucar rightbtn" onClick={next}>
          <p className="caroselBtn">►</p>
        </button>
        <button className="btn menuButton">FULL MENU</button>
      </div>
    </div>
  );
}

export default MenuCard;
