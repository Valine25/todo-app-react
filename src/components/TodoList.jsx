import Todoitem from "./TodoItem";
import styles from './todolist.module.css';
export default function TodoList({ todos,allTodos }) {
  const sortedTodos=todos.slice().sort((a,b)=>Number(a.done)-Number(b.done));
  return (
    <div className={styles.list}>
      {sortedTodos.map((item) => (
        <Todoitem key={item.name} item={item} todos={todos} allTodos={allTodos} />
      ))}
    </div>
  );
}
