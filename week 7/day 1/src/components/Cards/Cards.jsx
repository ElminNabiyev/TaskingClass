import React from "react";
import "./Cards.css";
function Cards() {
    return (
        <div className="container_card">
            <div className="img_div">
                <img className="card_imgs" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                <div className="contents">
                    <h2>Fancy Product</h2>
                    <p>$40.00 - $80.00</p>
                    <button>View Options</button>
                </div>
            </div>
        </div>
    );
}

export default Cards;
