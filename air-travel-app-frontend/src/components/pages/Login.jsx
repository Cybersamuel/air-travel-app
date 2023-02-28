import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../forms/login.css';
import axios from 'axios';

export const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();

  const login = async(event) => {
    event.preventDefault();

    

    if(!username || !password){
      window.alert('Fill in all the blanks')
    } else {
      
      const loginValues = {
        username: username,
        password: password
      }

      const response = await axios.post('http://localhost:4000/users/auth', loginValues);
      localStorage.setItem('token', JSON.stringify(response.token));

      window.alert('You have logged in')
      navigate("/welcome", {state: {username: response.username}})
    }
    

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
          <a href="/welcome"  value="login"  onClick={login}>
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

