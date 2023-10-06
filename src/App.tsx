import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { ITodo } from "./types/todo";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos && typeof storedTodos === 'string') {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const addTodo = (todo: ITodo) => {
    const newTodos = [...todos, todo];

    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  const editTodo = (id: string, newTodo: ITodo) => {
    const updatedTodos = todos.map((todo) => todo.id === id ? newTodo : todo);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  }

  const removeTodo = (id: string) => {
    const removedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(removedTodos);
    localStorage.setItem('todos', JSON.stringify(removedTodos));
  }

  return (
    <div className="app-container">
      <h1>Todo App</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} editTodo={editTodo} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
