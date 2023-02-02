import React, { useState } from "react";
import { InsertValueCard } from "../Buttons/buttons";
import { TodoList } from "../todoList";
import { TotalMoney } from "../TotalMoney/TotalMoney";
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
      <div className="div-form-total">
        <form onSubmit={submit} noValidate>
          <p className="title-desc">Descrição</p>
          <input
            placeholder="Digite aqui sua descrição"
            className="input-desc"
            type="text"
            value={formData.title}
            onChange={(event) =>
              setFormData({ ...formData, title: event.target.value })
            }
          />
          <span className="span-ex">Ex: Compra de roupas</span>
          <div className="div-select">
            <input
              placeholder="R$1"
              className="input-value"
              type="number"
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
              <option value="saida">Saida</option>
            </select>
          </div>
          <InsertValueCard />
        </form>

        <div>
          <TotalMoney filteredTodoList={filteredTodoList} />
        </div>
      </div>
      <div>
        <TodoList
          filteredTodoList={filteredTodoList}
          removeTodoFromTodoList={removeTodoFromTodoList}
        />
      </div>
    </main>
  );
};
