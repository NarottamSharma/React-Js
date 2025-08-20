import React, { useState } from 'react'

function Example3() {
  const [name,setName]= useState(()=>{
    const savedName = localStorage.getItem('name')
    return savedName ? JSON.parse(savedName):""
  })
  return (
    <div>
      <h1>Your Name: {name}</h1>
      <input type="text" value={name} onChange={handleChange} placeholder='Enter Your Name' />
    </div>
  )
}

export default Example3