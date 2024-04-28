import React, { useState } from "react";
import "./Navbar.css";
function Navbar() {
  const [active, setActive] = useState(false);

  function getNav() {
    setActive(!active);
  }
  return (
    <header>
      <nav>
        <div className="container">
          <h1>Logo</h1>
          <button onClick={getNav}>{active?"x":"="}</button>
        </div>
      </nav>
      <ul className={`${active ? "active" : null}`}>
        <li>menu</li>
        <li>menu</li>
        <li>menu</li>
      </ul>
    </header>
  );
}

export default Navbar;
