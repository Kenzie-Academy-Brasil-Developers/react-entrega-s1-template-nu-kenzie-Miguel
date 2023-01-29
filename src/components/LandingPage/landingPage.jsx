import React from "react";
import { useState } from "react";
import nuKenzie from "./../../assets/Nu Kenzie.svg";
import Illustration from "./../../assets/Illustration.svg";
import { StartButtons } from "../Buttons/buttons";
import "./styleLanding.css";

export const LandingPages = ({ setLanding }) => {
  return (
    <main className="landing-page">
      <section className="sec-container">
        <div className="div-info">
          <img className="img-nuKenzie" src={nuKenzie} />
          <h1 className="title-landing">
            Centralize o controle das suas finanças
          </h1>
          <span className="text-span">de forma rápida e segura</span>
          <StartButtons setLanding={setLanding} />
        </div>
        <div className="div-illustration">
          <img className="img-illustration" src={Illustration} />
        </div>
      </section>
    </main>
  );
};
