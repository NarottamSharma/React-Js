import { useState, type ChangeEvent, type FormEvent } from 'react'

interface ContactFormState {
  name:string;
  email:string;
}

const ContactForm = () => {
  const [formData,setFormData] = useState<ContactFormState>({
    name:'',
    email:''
  })

  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    const {name,value} = e.target;
    setFormData(prevState=>({...prevState,[name]:value}))
  }

  const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log('Form submitted:', formData);
  }

  return (
    <form onSubmit={handleSubmit} >
      <div>
        <label>Name: <input type="text" name='name' value={formData.name} onChange={handleChange} /> </label>
      </div>
      <div>
        <label>Email: <input type="text" name='email' value={formData.email} onChange={handleChange} /> </label>
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default ContactForm