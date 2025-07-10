import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {
  const [todos, allTodos] = useState([]);
  return (
    <div>
      <Form todos={todos} allTodos={allTodos} />
      <TodoList todos={todos} />
    </div>
  );
}
