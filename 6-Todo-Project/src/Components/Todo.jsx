import React from "react";
import "../style.css";
import { useState } from "react";
function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit =()=>{
    setTodos((todos)=>{
      return todos.concat({
        text:input,
        id:Math.floor(Math.random()*10)
      })
    })
    setInput("")
  }

  const removeTodo=(id)=>setTodos(todos=>todos.filter(t=>t.id!==id))

  return (
    <div className="container">
      <input
        type="text"
        placeholder="New Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>

      <ul className="todos-list">
        {todos && todos.map((todo)=>{
          return (
            <li className="todo" key={todo.id}>
              <span>{todo.text}</span>
              <button className="close" onClick={()=>removeTodo(todo.id)} >x</button>
            </li>
          )
        })}
      </ul>

    </div>

    
  );
}

export default Todo;
