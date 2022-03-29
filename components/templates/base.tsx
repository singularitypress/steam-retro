import { IComponent } from "@types";
import React from "react";

export const Base = ({ children }: IComponent) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};
