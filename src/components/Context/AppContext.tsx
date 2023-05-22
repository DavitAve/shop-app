import { FunctionComponent, ReactNode, createContext, useState } from "react";

export interface IAppContext {
  globalProperty: boolean;
  setGlobalProperty: (value: boolean) => void;
}

export const AppContext = createContext({
  globalProperty: false,
  setGlobalProperty: (value: boolean) => {
    value;
  },
});

export const AppContextProvider: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const [globalProperty, setGlobalProperty] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ globalProperty, setGlobalProperty }}>
      {children}
    </AppContext.Provider>
  );
};
