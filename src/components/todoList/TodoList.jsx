import React from "react";
import TodoCard from "./TodoCard";
import "./todoList.css";

export const TodoList = ({ filteredTodoList, removeTodoFromTodoList }) => {
  return (
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
        <p aria-label="alert">Você ainda não possui nenhum lançamento</p>
      )}
    </ul>
  );
};
