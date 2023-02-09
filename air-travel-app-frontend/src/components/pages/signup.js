import React from 'react'
import '../forms/signup.css'

export const SignUp = () => {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height:'90vh'
    }}>
      <div className='login-box'>
        <h2>Sign Up</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required=""/>
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required=""/>
            <label>Email Address</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required=""/>
            <label>Password</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required=""/>
            <label>Confirm Password</label>
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
