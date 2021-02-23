import React, { useState } from "react";
import Information from "./information";
import "./styles.scss";
import Counter from "./use/useReducer";

function App() {
  const [color, setColor] = useState("red");

  return (
    <div className="App" onClick={() => setColor("green")} className={color}>
      Cambia mi color {color}
      <Counter />
      <Information />
    </div>
  );
}

export default App;
