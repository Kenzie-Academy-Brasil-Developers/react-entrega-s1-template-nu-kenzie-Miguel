import React, { useState } from "react";
import TodoCreateForm from "../../components/TodoCreateForm";
import TodoList from "../../components/TodoList";

export const TodoPage = ({
  filteredTodoList,
  addTodoToTodoList,
  removeTodoFromTodoList,
  setFilter,
}) => {
  return (
    <div>
      <TodoCreateForm
        addTodoToTodoList={addTodoToTodoList}
        filteredTodoList={filteredTodoList}
        removeTodoFromTodoList={removeTodoFromTodoList}
      />

      {/* <ul>
       <button onClick={() => setFilter("")}>Todos</button>
        <button onClick={() => setFilter("Entrada")}>Entrada</button>
        <button onClick={() => setFilter("Saida")}>Saida</button>
  </ul>*/}
    </div>
  );
};
