import React, { useState } from "react";

import "./styles.scss";

export default function Toogle() {
  const [ColorA, setColorB] = useState(false);

  const handleColor = () => {
    setColorB(!ColorA);
  };

  return (
    <div className={ColorA ? "head" : "header"} onClick={handleColor}>
      <p> PWD: dfhadgfjasgfhiaurfghwab fhabskvhbsvnasjndlkj </p>
    </div>
  );
}
