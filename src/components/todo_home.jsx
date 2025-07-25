import { useState } from "react";
import TodoItem from "./todo_item";
import "../App.css";

function TodoList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appoinment",
      completed: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      completed: false,
    },
  ]);

  const [text, setText] = useState("");
 
  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setText("");
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !tasks.completed };
        } else {
          return task;
        }
      })
    );
  }

  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}

      <div style={{ display: "flex", gap: "10px" }}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={() => addTask(text)}>add</button>
      </div>
    </div>
  );
}
export default TodoList;
