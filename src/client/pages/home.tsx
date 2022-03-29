import React from "react";
import { Link } from "react-router-dom";
import { Base } from "@components/templates";
import { Container } from "@components/atomic";
import { dialog } from "electron";

export const Home = () => {
  return (
    <Base>
      <Container>
        Home
        <br />
        <button className="dialog-btn">Click</button>
      </Container>
    </Base>
  );
};
