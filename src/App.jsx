import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoList from "./components/todo_home";

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
