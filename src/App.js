import React, { useState, useEffect } from "react";
import Information from "./information";
import "./styles.scss";
import Theme from "./theme";
import Tick from "./tick";
import Toogle from "./toogle";
import Counter from "./use/useReducer";
import axios from "./axios";

function App({ fetchURL }) {
  const [color, setColor] = useState("red");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      console.group("Data from API:");
      console.log(request);
      console.groupEnd();
    }
    fetchData();
  }, [fetchURL]);

  return (
    <div className="App" onClick={() => setColor("green")} className={color}>
      Cambia mi color {color}
      {(document.title = color)}
      <Counter />
      <Information />
      <Theme />
      <Tick />
      <Toogle />
    </div>
  );
}

export default App;
