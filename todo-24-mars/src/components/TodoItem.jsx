function TodoItem({todo}) {    
  return (
    <li
        style={{ backgroundColor : todo.done ? 'green' : 'red' }}
    >
        {todo.todo}
    </li>
  )
}

export default TodoItem
