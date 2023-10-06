import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext'
import { ITodo } from '../types/todo';

interface AddTodoProps {
  addTodo: (todo: ITodo) => void
}

export default function AddTodo({ addTodo }: AddTodoProps) {
  const [value, setValue] = useState('');

  const submit = () => {
    if (!value) return;
    
    const newTodo = {
      id: nanoid(),
      content: value,
      isFinished: false
    }
    addTodo(newTodo);
    setValue('');
  }
  
  return (
    <div className='input-container'>
      <InputText value={value} onChange={(e) => setValue(e.target.value)} />
      <Button label="Add" type='button' onClick={submit} />
    </div>
  )
}
