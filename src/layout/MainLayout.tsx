import React, { useContext, useEffect, useState } from "react";

export interface MainLayoutContextProviderProps {
  backEnabled: boolean;
  setBackEnabled: (value: boolean) => void;
  backUrl?: string;
  setBackUrl: (value: string) => void;
  reset: () => void;
}

export const MainLayoutContext =
  React.createContext<MainLayoutContextProviderProps>({} as any);

const MainLayoutContextProvider = (props: React.PropsWithChildren<any>) => {
  const [backEnabled, setBackEnabled] = useState(false);
  const [backUrl, setBackUrl] = useState<string>();

  const reset = () => {
    setBackEnabled(false);
    setBackUrl(undefined);
  };
  return (
    <MainLayoutContext.Provider
      value={{
        backEnabled,
        setBackEnabled,
        backUrl,
        setBackUrl,
        reset,
      }}
    >
      {props.children}
    </MainLayoutContext.Provider>
  );
};

type DefaultProps = MainLayoutContextProviderProps;
export const useMainLayout = (givenProps: Partial<DefaultProps> = {}) => {
  const defaultContext = useContext(MainLayoutContext);

  useEffect(() => {
    if (givenProps.backEnabled !== undefined)
      defaultContext.setBackEnabled(givenProps.backEnabled);
    if (givenProps.backUrl !== undefined)
      defaultContext.setBackUrl(givenProps.backUrl);

    return () => {
      defaultContext.reset();
    };
  }, []);

  return defaultContext;
};

export default MainLayoutContextProvider;
