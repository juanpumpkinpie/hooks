import React, { useState } from "react";
import Information from "./information";
import "./styles.scss";
import Theme from "./theme";
import Counter from "./use/useReducer";

function App() {
  const [color, setColor] = useState("red");

  return (
    <div className="App" onClick={() => setColor("green")} className={color}>
      Cambia mi color {color}
      <Counter />
      <Information />
      <Theme />
    </div>
  );
}

export default App;
