import React, { useState } from 'react'
import './NewUser.css'

export default function NewUser() {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const registerHandler = (event) => {
    event.preventDefault()
    let userInfo={
      email,
      password
    }
    fetch('.../users.json',{method:'POST',body:JSON.stringify(userInfo)})
    .then(response=>console.log(response))

  }
  return (
    <div className="wrapper-login mt-5">
      <form className='form-login' onSubmit={registerHandler}>
        <h2>Login</h2>
        <div className="input-field">
          <input type="text" required value={email} onChange={(event) => setEmail(event.target.value)} />
          <label>Enter your email</label>
        </div>
        <div className="input-field">
          <input type="password" required value={password} onChange={(event) => setPassword(event.target.value)} />
          <label>Enter your password</label>
        </div>
        <div className="forget">
          <label htmlFor="remember">
            <input type="checkbox" id="remember" />
            <p>Remember me</p>
          </label>
          <a href="#" className='forgetPass'>Forgot password?</a>
        </div>
        <button type="submit">Log In</button>
        <div className="register">
          <p>Don't have an account? <a href="#"className='registerA'>Register</a></p>
        </div>
      </form>
    </div>
  )
}
