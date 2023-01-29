import { useState } from "react";
import TodoPage from "./pages/TodoPage";
import { HeaderHome } from "./components/Header/header";
import { v4 as uuidv4 } from "uuid";
import { LandingPages } from "./components/LandingPage/landingPage";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState("");
  const [page, setLanding] = useState(true);

  const filteredTodoList = todoList.filter((todo) => {
    return filter === "" ? true : todo.category === filter;
  });

  const addTodoToTodoList = (todo) => {
    const newTodo = { ...todo, id: uuidv4() };
    setTodoList([...todoList, newTodo]);
  };

  const removeTodoFromTodoList = (todoId) => {
    if (confirm("Você realmente deseja excluir essa nota")) {
      const newTodoList = todoList.filter((todo) => todo.id !== todoId);
      setTodoList(newTodoList);
    }
  };

  return page ? (
    <LandingPages setLanding={setLanding} />
  ) : (
    <div className="App">
      <>
        <HeaderHome />

        <TodoPage
          filteredTodoList={filteredTodoList}
          addTodoToTodoList={addTodoToTodoList}
          removeTodoFromTodoList={removeTodoFromTodoList}
          setFilter={setFilter}
        />
      </>
    </div>
  );
}

export default App;
