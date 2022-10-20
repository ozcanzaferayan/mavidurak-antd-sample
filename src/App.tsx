import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
const queryClient = new QueryClient();

export const App = () => {
  const [token, setToken] = useState("");

  const value = useMemo(() => ({ token, setToken }), [token]);
  return (
    <QueryClientProvider client={queryClient}>
      <TokenContext.Provider value={value}>
        <MainLayout />
      </TokenContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
