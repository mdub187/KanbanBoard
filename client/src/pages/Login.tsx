import { useState, FormEvent, ChangeEvent } from "react";

import authAPI from "../api/authAPI";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;    
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await authAPI.Login(loginData);
      authAPI.Login(loginData)
      console.log('Login successful', response);
    } catch (err) {
      console.error('Failed to login', err);
    }
  };

  // const handleSubmit = async (e: FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     const response = await login(loginData);
  //     console.log(response);
  //   } catch (err) {
  //     console.error('Failed to login', err);
  //   }
  // };

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label >Username</label>
        <input 
          type='text'
          name='username'
          value={loginData.username || ''}
          onChange={handleChange}
        />
      <label>Password</label>
        <input 
          type='password'
          name='password'
          value={loginData.password || ''}
          onChange={handleChange}
        />
        <button type='submit'>Submit Form</button>
      </form>
    </div>
    
  )
};

export default Login;
