import React from "react";
import "./styleButtons.css";

export const StartButtons = ({ setLanding }) => {
  return (
    <button
      className="start-btn"
      onClick={() => {
        setLanding(false);
      }}
    >
      Iniciar
    </button>
  );
};

export const ButtonInit = ({ setLanding }) => {
  return (
    <button
      className="buttonInit"
      onClick={() => {
        setLanding(true);
      }}
    >
      Inicio
    </button>
  );
};

export const InserBtnValue = () => {
  return (
    <button className="insert-value" type="submit">
      Inserir valor
    </button>
  );
};

export const InsertValueCard = () => {
  return (
    <button className="insert-value__card" type="submit">
      Inserir valor
    </button>
  );
};
