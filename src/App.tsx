import React, { useMemo, useState } from "react";
import MainLayout from "./screens/MainLayout/MainLayout";

type ContextType = {
  token: string;
  setToken: (token: string) => void;
};
export const TokenContext = React.createContext<ContextType>({
  token: "",
  setToken: () => {},
});
export const App = () => {
  const [token, setToken] = useState("");

  const value = useMemo(() => ({ token, setToken }), [token]);
  return (
    <TokenContext.Provider value={value}>
      <MainLayout />
    </TokenContext.Provider>
  );
};

export default App;
