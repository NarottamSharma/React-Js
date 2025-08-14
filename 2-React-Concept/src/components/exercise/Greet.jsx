import React from 'react'

export const Greet = () => {
    const greet = "Hello "
    const date = new Date()
  return (
    <div>
        <h1>{greet}</h1>
        <p>Date : {date.getDate()} </p>
    </div>
  )
}
