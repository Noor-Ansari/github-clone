import React, { createContext, useReducer, useContext } from "react";

const Context = createContext();

function DataLayer({ reducers, initialState, children }) {
  return (
    <Context.Provider value={useReducer(reducers, initialState)}>
      {children}
    </Context.Provider>
  );
}

export const useDataLayerValues = () => useContext(Context);

export default DataLayer;
