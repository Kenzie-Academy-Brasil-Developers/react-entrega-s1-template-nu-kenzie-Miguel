import React from "react";
import "./TotalMoney.css";

export const TotalMoney = ({ filteredTodoList }) => {
  return (
    <div className="div-box">
      <div className="div-value">
        <h2 className="value-full">Valor total:</h2>
        <h2>
          {filteredTodoList.reduce(
            (previousValue, currentItem) =>
              currentItem.category === "entrada"
                ? previousValue + Number(currentItem.content)
                : previousValue - Number(currentItem.content),
            0
          )}
        </h2>
      </div>
      <p className="value-sub">O valor se refere ao saldo</p>
    </div>
  );
};
