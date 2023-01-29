import React, { useState } from "react";

export const ListValue = ({ trasiction, setTrasiction }) => {
  const [filter, setFilter] = useState("");
  const filterTrasiction = trasiction.filter((trasiction) => {
    trasiction.type.includes(filter || trasiction.type);
  });
  return (
    <main>
      <div>
        <p>Resumo financeiro</p>
        <div></div>
      </div>
      <ul>{trasiction.length}</ul>
    </main>
  );
};
