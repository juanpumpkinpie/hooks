import React, { useContext } from "react";
import store from "./store";
import * as actions from "./actionTypes";
import { bugAdded, bugResolved } from "./actionCreator";

const unsubscribe = store.subscribe(() => {
  console.info("store Changed", store.getState());
});

store.dispatch(bugAdded("bug01"));
store.dispatch(bugResolved(1));

unsubscribe();

store.dispatch({
  type: actions.BUG_REMOVE,
  payload: {
    id: 1,
  },
});

console.log(store.getState());

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeContext = React.createContext(themes.light);

function Theme() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}

export default Theme;
