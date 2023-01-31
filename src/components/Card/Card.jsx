import React from "react";
import cardImg from "./../../assets/NoCard.svg";
import "./Card.css";

export const Card = () => {
  return (
    <div className="test">
      <h2 className="sub-title">Você ainda não possui nenhum lançamento</h2>

      <div className="div-img">
        <img src={cardImg} />
        <img src={cardImg} />
        <img src={cardImg} />
      </div>
    </div>
  );
};
