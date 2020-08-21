import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

console.log();

const todoData = [
  { text: "Learn about React" },
  { text: "Meet friend for lunch" },
  { text: "Build really cool todo app" },
];
function App() {
  const [todos, setTodos] = useState(todoData);
  return (
    <div className="App">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
