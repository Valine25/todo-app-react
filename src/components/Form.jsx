import { useState } from "react";
import styles from './Form.module.css';
export default function Form({ todos, allTodos }) {
  const [todo, setTodo] = useState("");

  function handleAdd(e) {
    e.preventDefault();
    // allTodos((prev)=>[...prev,{todo}]);
    allTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <div>
      <form className={styles.todoform} onSubmit={handleAdd}>
        <input className={styles.inputform}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="Add your todos here"
        ></input>
        <button className={styles.buttonform}>Add</button>
      </form>
    </div>
  );
}
