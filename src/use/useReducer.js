import React, { useReducer } from "react";
//without redux and better

const reducer = (state, action) => {
  switch (action.type) {
    case "decrement":
      return state + 1;
    default:
      return state;
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <>
      count: {state}
      <button onClick={() => dispatch({ type: "decrement" })}>
        El botón está aquí {state}
      </button> 
    </>
  );
}

export default Counter;
