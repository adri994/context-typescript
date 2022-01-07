
import { useTodos } from '../hooks/useTodo'
import { Todo } from '../interfaces/interfaces'

interface Props {
  todo:Todo
}

const TodoItem = ({todo}:Props) => {


  const { toggleTodo } = useTodos()

  return (
    <li  style={{
      cursor: 'pointer',
      textDecoration: todo.completed ? 'line-through' : ''
      }} 
      onDoubleClick={()=>toggleTodo(todo.id)}>
      {todo.desc}
    </li>
  )
}

export default TodoItem
