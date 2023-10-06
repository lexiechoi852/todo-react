import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { ITodo } from '../types/todo';

interface TodoItemProps {
  todo: ITodo;
  editTodo: (id: string, todo: ITodo) => void;
  removeTodo: (id: string) => void;
}

export default function TodoItem({ todo, editTodo, removeTodo }: TodoItemProps) {

  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState('');

  const handleEditTodo = () => {
    if (!value) return;
    
    const editedTodo = {
      ...todo,
      content: value
    }
    editTodo(todo.id, editedTodo);
    setIsEditing(false);
  }

  return (
    <div className='todo-item-container'>
      {isEditing ? (
        <div className='input-container'>
          <InputText value={value} onChange={(e) => setValue(e.target.value)} />
          <Button type="button" severity="info" onClick={handleEditTodo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 30 30"
              fill="white"
            >
              <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z" />
            </svg>
          </Button>
        </div>
      ) : (
        <div>{todo.content}</div>
      )}
      <div className='btn-container'>
        <Button label="Edit" onClick={() => setIsEditing(true)} />
        <Button label="Remove" severity="danger" onClick={() => removeTodo(todo.id)} />
      </div>
    </div>
  )
}
