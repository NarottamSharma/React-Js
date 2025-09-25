import React from 'react'

const FormUseAction = () => {
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" id='name' name='name'  className='border-2 border-black rounded'/>
      <br />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name='email' className='border-2 border-black rounded' />

      <br />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" name='password' className='border-2 border-black rounded' />

      <br />

      <button type='submit' >Submit</button>

    </form>
  )
}

export default FormUseAction