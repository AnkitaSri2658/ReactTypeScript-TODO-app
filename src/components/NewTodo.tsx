import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submithandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    if (enteredText?.trim().length === 0) {
      return;
    }
    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submithandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;
