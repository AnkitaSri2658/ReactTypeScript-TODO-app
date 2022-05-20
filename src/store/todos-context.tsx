import React, { useState } from "react";
import Todo from "../models/todo";
type TodosContextObj = {
  item: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  item: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodohandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };
  const removeTodohandler = (todoId: string) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== todoId);
    });
  };
  const contextValue: TodosContextObj = {
    item: todos,
    addTodo: addTodohandler,
    removeTodo: removeTodohandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
