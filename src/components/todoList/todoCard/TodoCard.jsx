import React from "react";
import "./TodoCard.css";
import trash from "../../../assets/trash.svg";

export const TodoCard = ({ todo, removeTodoFromTodoList }) => {
  return (
    <li className="li-card">
      <div>
        <div className="div-card">
          <p className="title-card">{todo.title}</p>
          <p className="value-card">R$ {todo.content} </p>
          <button
            className="button-remove"
            onClick={() => removeTodoFromTodoList(todo.id)}
          >
            <img src={trash} />
          </button>
        </div>
        <span>{todo.category}</span>
      </div>
    </li>
  );
};
