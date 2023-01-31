import React from "react";
import nuKenzie from "./../../assets/Nu Kenzie-preto.svg";
import { ButtonInit } from "../Buttons/buttons";
import "./styleHeader.css";

export const HeaderHome = () => {
  return (
    <header>
      <nav className="nav-bar">
        <img className="nu-kenzie" src={nuKenzie} />
        <ButtonInit />
      </nav>
    </header>
  );
};
