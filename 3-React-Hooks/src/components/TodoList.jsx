import { useState } from 'react'

const TodoList = () => {
  const [todos,setTodos]=useState([])
  const [inputValue,setInputValue] = useState("")
  
  const handleChange = e =>{
    setInputValue(e.target.value)
  }
  
  const handleSubmit =(e)=>{
    e.preventDefault()
    if(inputValue.trim()){
      setTodos([...todos,inputValue])
      setInputValue("")
    }
  }
  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} placeholder='Add a new Todo' />
        <button type='submit' >Add Todo</button>
      </form>

      <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
      </ul>

    </div>
  )
}

export default TodoList