import React from 'react'
import '../forms/login.css'

export const Login = () => {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'centesr',
        height:'90vh'
    }}>
      <div class="login-box">
        <h2>Login</h2>
        <form>
          <div class="user-box">
            <input type="text" name="" required=""/>
            <label>Username</label>
          </div>
          <div class="user-box">
            <input type="password" name="" required=""/>
            <label>Password</label>
          </div>
          <a href="https://www.twitter.com">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </div>
  )
}
