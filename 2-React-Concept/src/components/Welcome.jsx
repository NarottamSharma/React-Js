import React from 'react'

const Welcome = () => {
  return (
    <div>
        <h1>Hello World!</h1>
        <p>Welcome to JSX Learning</p>
        <form >
            <label htmlFor="name">Name </label>
            <input type="text" placeholder='Enter Name' />
        </form>
    </div>
  )
}

export default Welcome