import { useState } from "react";
import Todoitem from "./TodoItem";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, allTodos] = useState([]);
  function handleAdd(e) {
    e.preventDefault();
    // allTodos((prev)=>[...prev,{todo}]);
    allTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <div>
      <h2>Todo</h2>
      <form onSubmit={handleAdd}>
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
        ></input>
        <button>Add</button>
      </form>
        
        {todos.map((item) => (
          <Todoitem key={item} item={item}/>
        ))}
        
      
    </div>
  );
}
