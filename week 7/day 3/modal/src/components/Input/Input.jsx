import React, { useState } from "react";
import "./Input.css";
function Input() {
  const [inp, setInp] = useState("");

  function giveAlert() {
    alert(inp)
  }
  return (
    <div>
      <input onChange={(e) => setInp(e.target.value)} type="text" />
      <button onClick={giveAlert}>Look</button>
    </div>
  );
}

export default Input;
