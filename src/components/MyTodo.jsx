import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function handleAdd(e) {
    e.preventDefault();
    setTodos((prev) => [...prev, { todo }]);
    // console.log(todos);
    console.log(todo);
    setTodo("");
  }
  return (
    <div>
      <h1>Todo List</h1>
      <form>
        <input
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          value={todo}
        />
        <button onClick={(e) => handleAdd(e)}>Add</button>
      </form>
      {todos.length == 0 ? (
        <p>"No tasks added"</p>
      ) : (
        <ul>
          {todos.map((task, index) => {
            return (
              <li key={index}>
                <strong>{task.todo}</strong>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
