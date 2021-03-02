import React, { useState, useEffect } from "react";

import "./styles.scss";

export default function Toogle() {
  const [ColorA, setColorB] = useState(false);
  const [value, setValue] = useState(
    localStorage.getItem("ThevalueEffect") || ""
  );
  const handleColor = () => {
    setColorB(!ColorA);
    localStorage.removeItem("ThevalueEffect");
  };

  useEffect(
    (event) => {
      localStorage.setItem("ThevalueEffect", value);
    },
    [value]
  );
  const onChange = (event) => {
    setValue(event.target.value);
  };

  const count = 1;

  return (
    <div className={ColorA ? "head" : "header"} onClick={handleColor}>
      <p> PWD: Yes it change the color and remove the item in LocalStorage </p>
      {count && <h1>Messages: {count}</h1>}

      <fieldset>
        <legend>LocalStorage</legend>
        <label for="name">ThevalueEffect:</label>
        <input value={value} onChange={onChange} />
        <p>The value for localStorage is: {value}</p>
      </fieldset>
    </div>
  );
}
