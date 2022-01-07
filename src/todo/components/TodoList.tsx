
// import React, { useContext } from 'react'
// import { TodoContext } from '../context/TodoContext'
import { useTodos } from '../hooks/useTodo';
import TodoItem from './TodoItem';

const TodoList = () => {

  // const { todoState } = useContext(TodoContext)
  // const { todos } = todoState;
  const { todos } = useTodos()
  return (
    <ul>
      {
        todos.map(t => (<TodoItem todo={t} key={t.id} />))
      }
      
    </ul>
  )
}

export default TodoList
