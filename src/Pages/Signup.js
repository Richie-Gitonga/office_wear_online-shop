import React, {useState} from 'react'

function signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
        <form style={{width: "100%"}} >
            <h1>Create an account</h1>
           
                <label>Email Address</label>
                <input type="email" placeholder="Enter Email" value={email} required onChange={(e) => setEmail(e.target.value)}/>
                <label>Email Address</label>
                <input type="password" placeholder="Enter Password" value={password} required onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Login</button>
                </form>
  )
}

export default signup