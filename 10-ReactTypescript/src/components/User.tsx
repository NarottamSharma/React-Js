import React from 'react'
// {name,age,isStudent}
const User = (props:{name:string;age:number;isStudent:boolean} ) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h2>{props.age}</h2>
      <h2>{props.isStudent}</h2>
    </div>
  )
}

export default User