import React, { useContext } from "react";
import store from "./store";

const unsubscribe = store.subscribe(() => {
  console.info("store Changed", store.getState());
});

store.dispatch({
  type: "bugAdded",
  payload: {
    description: "bug01",
  },
});

unsubscribe();

store.dispatch({
  type: "bugRemoved",
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
