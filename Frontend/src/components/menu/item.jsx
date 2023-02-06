// import React from "react"

// const resCarosel = () => {
//     let width = box.clientWidth;
//     if(width > 907){
//         document.querySelector('.childMenu').classList.add("childMenuCaroselRes")
//         document.querySelector('.childMenu').classList.add("grandchildCarsoselRes")
//     }
//     else{
//         document.querySelector('.childMenu').classList.remove("childMenuCaroselRes")
//         document.querySelector('.childMenu').classList.remove("grandchildCarsoselRes")
//     }

// }

function Item(props) {
  return props.value.map((prop) => {
    return (
      <div key={prop.id} className="childMenu childMenuCaroselRes">
        <div className="grandChildMenu">
          <img style={{margin: '50px 10px'}} className="menuImage" src={prop.image} />
        </div>
      </div>
    );
  });
}

export default Item;
