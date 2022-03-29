import { IComponent } from "@types";
import React from "react";

export const Container = ({ children }: IComponent) => {
  return <div className="container mx-auto">{children}</div>;
};
