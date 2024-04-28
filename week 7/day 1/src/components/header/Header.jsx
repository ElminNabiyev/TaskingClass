import React from "react";
import "./header.css";
function Header() {
  return (
    <div>
      <header>
        <nav>
        <div className="container">
          <a href="">Start Bootstrap</a>
        <div className="cart">
          <ul className="normal_list">
            <li className="lists">Home</li>
            <li className="lists">About</li>
            <li className="lists shop 
            ">
              Shop
              <ul className="dropdown">
                <li>All Products</li>
                <hr />
                <li>Popular Items</li>
                <li>New Arrivals</li>
              </ul>
            </li>
          </ul>
          <button>
            Cart <span>0</span>
          </button>
        </div>
        </div>
        </nav>
      </header>
      </div>
  );
}
export default Header;