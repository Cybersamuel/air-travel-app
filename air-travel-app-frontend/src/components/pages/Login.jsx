import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../forms/login.css';
import axios from 'axios';

export const Login = () => {

  const [username, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const login = async(event) => {
    event.preventDefault();

    if (!username || !password){
      window.alert("You have to fill in the blanks!");
    } else {
      try {
        const data = await axios.post('http://localhost:4000/users/login', {
          username: username,
          password: password
        });

        console.log(data);
        localStorage.clear();

        localStorage.setItem('token', JSON.stringify(data.token));

        navigate("/welcome", {state: {username: data.username}});

        window.alert(`You have logged in ${username}`);

      } catch (error) {
        console.log(error);
        alert("Invalid credentials")
      }
      
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
              setEmail(e.target.value);
            }}/>
            <label htmlFor='email'>Username</label>
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
          <a href="/welcome"  value="login" onClick={login}>
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
