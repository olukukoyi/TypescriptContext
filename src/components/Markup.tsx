import { usePlanet } from "./StateContext";

export const Markup = () => {
  const data2 = usePlanet();

  const name = data2.name;
  return <div>{name}</div>;
};
