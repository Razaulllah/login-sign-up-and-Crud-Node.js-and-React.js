import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css"
import axios from "axios";

export default function Login({ onLogin }) {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const login = () => {
    axios.post("http://localhost:9002/login", user)
      .then(res => {
        if (res.data.token) {
          alert(res.data.message);
          onLogin(); // set isLoggedIn to true in App.js
          navigate('/home'); // navigate to home page
        } else {
          alert(res.data.message);
        }
      })
      .catch(err => {
        alert(err);
      });
  };

  return (
    <div className="login">
      <h1>Login</h1>

      <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your email" />

      <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your password" />

      <button onClick={login}>Login</button>
      <h1 className="text-blue font-bold">or</h1>
      <button onClick={() => navigate('/register')}>Register</button>
    </div>
  )
}