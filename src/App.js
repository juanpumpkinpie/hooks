import React, { useState } from "react";
import Information from "./information";
import "./styles.scss";
import Theme from "./theme";
import Tick from "./tick";
import Counter from "./use/useReducer";

function App() {
  const [color, setColor] = useState("red");

  return (
    <div className="App" onClick={() => setColor("green")} className={color}>
      Cambia mi color {color}
      {(document.title = color)}
      <Counter />
      <Information />
      <Theme />
      <Tick />
    </div>
  );
}

export default App;
