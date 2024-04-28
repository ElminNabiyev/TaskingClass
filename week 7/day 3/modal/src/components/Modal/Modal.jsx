import React, { useState } from "react";
import "./Modal.css";
function Modal() {
  const [showModal, setShowModal] = useState(false);

  function generateModal(value) {
    setShowModal(value);
  }
  return (
    <>
      <div className={`modal ${showModal ? "active" : null}`}>
        <button onClick={()=>generateModal(false)}>X</button>
        <h1>Salam</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          ipsam corrupti repellat, expedita ad tempora voluptatum unde adipisci
          consequuntur, rerum aliquid magnam dignissimos velit quibusdam optio
          eligendi veritatis vitae? Repudiandae?
        </p>
      </div>
      <button onClick={()=>generateModal(true)}>Show</button>
    </>
  );
}

export default Modal;
