import React, { useState } from "react";
import { InsertValueCard } from "../Buttons/buttons";
import { Card } from "../Card/Card";
import TodoList from "../TodoList";
import "./TodoCreateForm.css";

export const TodoCreateForm = ({
  addTodoToTodoList,
  filteredTodoList,
  removeTodoFromTodoList,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "entrada",
  });

  const submit = (event) => {
    event.preventDefault();

    if (formData.title !== "" && formData.content !== "") {
      addTodoToTodoList(formData);
    } else {
      alert("Você precisa preencher os campos para enviar o formulário.");
    }

    setFormData({
      title: "",
      content: "",
      category: "entrada",
    });
  };

  return (
    <main className="form-listCard">
      <form onSubmit={submit} noValidate>
        <p>Descrição</p>
        <input
          placeholder="Digite aqui sua descrição"
          className="input-desc"
          type="text"
          value={formData.title}
          onChange={(event) =>
            setFormData({ ...formData, title: event.target.value })
          }
        />
        <span>Ex: Compra de roupas</span>
        <div className="div-select">
          <input
            placeholder="R$1"
            className="input-value"
            type="text"
            value={formData.content}
            onChange={(event) =>
              setFormData({ ...formData, content: event.target.value })
            }
          />
          <select
            className="select-value"
            value={formData.category}
            onChange={(event) =>
              setFormData({ ...formData, category: event.target.value })
            }
          >
            <option value="entrada">Entrada</option>
            <option value="Saida">Saida</option>
          </select>
        </div>
        <InsertValueCard />
      </form>
      <div>
        <TodoList
          filteredTodoList={filteredTodoList}
          removeTodoFromTodoList={removeTodoFromTodoList}
        />
      </div>
    </main>
  );
};
