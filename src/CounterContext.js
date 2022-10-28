import { createContext, useState } from "react";

export const CounterContext = createContext(() => {});

export const CounterProvider = ({ children }) => {
  const [state, setState] = useState(0);
  const updateState = () => {
    setState(state + 1);
  };
  return (
    <CounterContext.Provider
      value={{

        state,
        updateState,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};
