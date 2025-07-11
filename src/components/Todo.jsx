import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./footer";

export default function Todo() {
  const [todos, allTodos] = useState([]);
  const completedTodos=todos.filter((todo)=>todo.done).length;
  const totalTodos=todos.length;
  return (
    <div>
      <Form todos={todos} allTodos={allTodos} />
      <TodoList todos={todos} allTodos={allTodos}/>
      <Footer completedTodos={completedTodos} totalTodos={totalTodos}/>
    </div>
  );
}
