import React, { useState } from "react";

import "./styles.scss";

export default function Toogle() {
  const [ColorA, setColorB] = useState(false);

  const handleColor = () => {
    setColorB(!ColorA);
  };

  const count = 1;

  return (
    <div className={ColorA ? "head" : "header"} onClick={handleColor}>
      <p> PWD: dfhadgfjasgfhiaurfghwab fhabskvhbsvnasjndlkj </p>
      {count && <h1>Messages: {count}</h1>}
    </div>
  );
}
