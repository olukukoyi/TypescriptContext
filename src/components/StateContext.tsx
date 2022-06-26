import { createContext, useEffect, useState } from "react";

export const UserContext = createContext(undefined);

type ContextProps = {
  children: React.ReactNode;
};

export const ContextProvider = ({ children }: ContextProps) => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://swapi.dev/api/planets/1/");
      const res = await data.json();
      if (data != undefined) {
        setData(res);
      }
    };
    fetchData();
  }, []);
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default ContextProvider;
