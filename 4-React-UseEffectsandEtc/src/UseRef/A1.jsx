import { useRef } from "react"


const UseRef= ()=>{
  const inputElement = useRef(null);
  const focusInput=()=>{
    inputElement.current.focus()
    inputElement.current.value='Narottam'
  }
  return(
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={()=>focusInput()} >Focus & Write Narottam</button>
    </div>
  )
}

export default UseRef;