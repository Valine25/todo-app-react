import { useState } from "react";
import styles from './Form.module.css';
export default function Form({ todos, allTodos }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({name:"",done:false});

  function handleAdd(e) {
    e.preventDefault();
    // allTodos((prev)=>[...prev,{todo}]);
    allTodos([...todos, todo]);
    setTodo({name:"",done:false});
  }
  return (
    <div>
      <form className={styles.todoform} onSubmit={handleAdd}>
        <input className={styles.inputform}
          value={todo.name}
          onChange={(e) => setTodo({name:e.target.value,done:false})}
          type="text"
          placeholder="Add your todos here"
        ></input>
        <button className={styles.buttonform}>Add</button>
      </form>
    </div>
  );
}
