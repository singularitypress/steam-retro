import React from "react";
import { Base } from "@components/templates";
import { Container } from "@components/atomic";
import Link from "next/link";

export default () => {
  return (
    <Base>
      <Container>
        Home
        <br />
        <Link href="/about">About</Link>
      </Container>
    </Base>
  );
};
