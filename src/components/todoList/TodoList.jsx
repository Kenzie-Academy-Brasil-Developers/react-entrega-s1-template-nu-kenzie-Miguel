import React from "react";
import { Card } from "../Card/Card";
import { TodoCard } from "./todoCard";
import "./todoList.css";

export const TodoList = ({ filteredTodoList, removeTodoFromTodoList }) => {
  return (
    <>
      <p>Resumo financeiro</p>
      <ul className="ul-card">
        {filteredTodoList.length > 0 ? (
          <>
            {filteredTodoList.map((todo, index) => (
              <TodoCard
                key={index}
                todo={todo}
                removeTodoFromTodoList={removeTodoFromTodoList}
              />
            ))}
          </>
        ) : (
          <Card />
        )}
      </ul>
    </>
  );
};
