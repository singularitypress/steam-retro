import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home, About } from "@pages";

const mount = document.querySelector("#root");

const Main = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
};

ReactDOM.render(<Main />, mount);
