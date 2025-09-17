import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
interface FormData {
  name: string;
  email: string;
  password: string;
}
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Name is Required" })}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", { 
            required: "Email is Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })}
          placeholder="Enter your email"
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        <br />
      </div>
          
      <div>
        <label htmlFor="password">Password:</label>
        <input 
          type="password" 
          id="password"
          {...register("password", {
            required: "Password is Required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long"
            }
          })} 
          placeholder="Password" 
        />
        {errors.password &&  <p style={{ color: "red" }}>{errors.password.message}</p> }
      </div>

      <div>
        <button disabled={isSubmitting} type="submit" >Submit</button>
      </div>
    </form>
  );
};

export default Form;
