import React from "react";
import nuKenzie from "./../../assets/Nu Kenzie-preto.svg";
import { ButtonInit } from "../Buttons/buttons";
import "./styleHeader.css";

export const HeaderHome = ({ setHome }) => {
  return (
    <header>
      <nav className="nav-bar">
        <img src={nuKenzie} />
        <ButtonInit />
      </nav>
    </header>
  );
};
