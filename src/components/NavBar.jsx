import React from "react";
import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";

const NavBar = () => {

  return (

    <>
      <nav>
        <ul className="nav-links">
          <li className="nav-item">
            <CartWidget />
          </li>
          <li className="nav-item">
            <ItemListContainer greeting="¿Qué deseas comprar?" />
          </li>
        </ul>
      </nav>
    </>
  )

}

export default NavBar;