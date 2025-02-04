import React, { useState } from "react";
import "./styles.css";

function TaskManager() {
  const [tasks, setTasks] = useState([
    "Eat breakfast",
    "Take a shower",
    "Walk the dog",
  ]);
  const [input, setInput] = useState("");

  const handleChange = (e) => setInput(e.target.value);

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const moveUp = (index) => {
    if (index > 0) {
      let updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  const moveDown = (index) => {
    if (index < tasks.length - 1) {
      let updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="task-container">
      <h1>Task List</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Enter a task"
        />
        <button className="add-btn" onClick={addTask}>
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button className="remove-btn" onClick={() => removeTask(index)}>
              ✖
            </button>
            <button className="move-btn" onClick={() => moveUp(index)}>
              ⬆
            </button>
            <button className="move-btn" onClick={() => moveDown(index)}>
              ⬇
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
