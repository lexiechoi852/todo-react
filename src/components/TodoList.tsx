import React from "react";
import { Card } from 'primereact/card';
import TodoItem from "./TodoItem";
import { ITodo } from "../types/todo";

interface TodoListProps {
  todos: ITodo[];
  editTodo: (id: string, todo: ITodo) => void;
  removeTodo: (id: string) => void;
}

export default function TodoList({ todos, editTodo, removeTodo }: TodoListProps) {
  return (
    <Card className="todo-list-container">
      {todos.length > 0 ? (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              editTodo={editTodo}
              removeTodo={removeTodo}
            />
          ))
        ) : (
          <div className="no-todo-message">No todos found</div>
        )}
    </Card>
  );
}
