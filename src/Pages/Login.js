import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //function handleSubmit() {}
  return (
        <form style={{width: "100%"}} >
            <h1>Login to your account</h1>
                <label>Email Address</label>
                <input type="email" placeholder="Enter Email" value={email} required onChange={(e) => setEmail(e.target.value)} />
            
                <label>Email Address</label>
                <input type="password" placeholder="Enter Password" value={password} required onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Login</button>
            <p>Dont have an account? <Link to="/signup">Create Account</Link></p>
            </form>
    
  )
}

export default Login