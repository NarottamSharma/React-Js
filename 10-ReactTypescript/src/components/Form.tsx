import { useState, useRef, type FormEvent } from 'react'

export const Form = () => {
  type formData = {
    name:string;
    email:string;
    password:string
  }
  const [submittedData, setSubmittedData] = useState<formData>({
    name:'',
    email:'',
    password:''
    
  })
  const name = useRef<HTMLInputElement>(null)
  const email = useRef<HTMLInputElement>(null)
  const password= useRef<HTMLInputElement>(null)
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (name.current && email.current && password.current) {
      setSubmittedData({
        name: name.current?.value || '',
        email: email.current?.value||'',
        password: password.current?.value||''
      })
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Enter Your name' ref={name} />
      <input type="email" placeholder='Enter Your email' ref={email} />
      <input type="password" placeholder='Enter Your password' ref={password} />
      <button type="submit">Submit</button>

      <section>
        <h1>Name: {submittedData.name}</h1>
        <h1>Email: {submittedData.email}</h1>
        <h1>Password: {submittedData.password}</h1>
      </section>
    </form>
  )
}
