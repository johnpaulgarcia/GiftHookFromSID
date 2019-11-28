import React, { createContext, useReducer } from "react";
import * as constants from "./constants/";

const initialState = { color: "black" };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case constants.CHANGE_BG:
        const newState = { ...state, backgroundColor: "blue" };
        return newState;
      default:
        return null;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
