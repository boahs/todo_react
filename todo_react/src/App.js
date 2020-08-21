import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const todoText = [
  { text: "learn more about React" },
  { text: "Meet friend for lunch" },
  { text: "Build really cool todo app" },
];

console.log(todoText);

function App() {
  const [todos, setTodos] = useState([todoText]); //adding in initial todoText object
  // console.log(todos);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
