import React, { useContext } from "react";
import { UserContext } from "./StateContext";

export const Markup = () => {
  const data = useContext(UserContext);

  const name: string = data?.name;
  return <div>{name}</div>;
};
