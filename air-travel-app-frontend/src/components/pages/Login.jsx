import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../forms/login.css';
import axios from 'axios';

export const Login = () => {

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const login = async(event) => {
    event.preventDefault();

    const user = {
      username: username
    }

    axios.post()
  }

  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'centesr',
        height:'90vh'
    }}>
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input 
            type="text"
            id='username'
            value={username} 
            required={true}
            onChange={(e) => {
              setUsername(e.target.value);
            }}/>
            <label htmlFor='username'>Username</label>
          </div>
          <div className="user-box">
            <input 
            type="password" 
            id="password"
            value={password}
            required={true}
            onChange={(e) => {
              setPassword(e.target.value);
            }}/>
            <label htmlFor='password'>Password</label>
          </div>
          <a href="/welcome"  value="login"  onSonClick={login}>
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
