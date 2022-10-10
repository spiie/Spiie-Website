import React, {useState} from 'react'
import './css/todo.css'

const Todo = ({}) => {
  const [todo, setTodo] = useState([])

  return(
    <div className="Todo">
    <p>ToDo</p>
    <form onSubmit={(e) => {
      const dataTodo = todo
      dataTodo.push({
        id: todo.length + 1,
        value: e.target[1].value,
      })

      setTodo(dataTodo)

    }}>
      <input type="text" name="newTodo" id="newTodo" placeholder='Que veut tu ajouter ?'/>
      <button type="submit"> Ajouter </button>
    </form>
    {todo}
    </div>
  )
}

export default Todo