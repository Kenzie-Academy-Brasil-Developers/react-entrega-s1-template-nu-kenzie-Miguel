import React from "react";

export const TodoCard = ({ todo, removeTodoFromTodoList }) => {
  return (
    <li className="li-card">
      <div>
        <h3>{todo.title}</h3>
        <p>{todo.content}</p>
        <button onClick={() => removeTodoFromTodoList(todo.id)}>
          Remover todo
        </button>
      </div>

      <span>{todo.category}</span>
    </li>
  );
};
