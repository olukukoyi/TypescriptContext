import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext<IPlanet | undefined>(undefined);

type ContextProps = {
  children: React.ReactNode;
};

interface IPlanet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}

export const ContextProvider = ({ children }: ContextProps) => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://swapi.dev/api/planets/1/");
      const res = await data.json();
      console.log(res);

      if (data != undefined) {
        setData(res);
      }
    };
    fetchData();
  }, []);
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export const usePlanet = () => {
  const context = useContext(UserContext) as IPlanet;
  return context;
};

export default ContextProvider;
