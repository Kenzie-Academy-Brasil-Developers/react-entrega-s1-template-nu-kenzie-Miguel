import React from "react";
import "./TodoCard.css";

export const TodoCard = ({ todo, removeTodoFromTodoList }) => {
  return (
    <li className="li-card">
      <div>
        <div className="div-card">
          <p className="title-card">{todo.title}</p>
          <p>R$ {todo.content} </p>
          <button
            className="button-remove"
            onClick={() => removeTodoFromTodoList(todo.id)}
          >
            Remover
          </button>
        </div>
        <div>
          <span>{todo.category}</span>
        </div>
      </div>
    </li>
  );
};
