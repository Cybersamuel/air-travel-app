import React from 'react';
import axios from 'axios';
import '../forms/signup.css';
import { useNavigate } from 'react-router-dom'

export const SignUp = () => {

  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  // const [confpassword, setConfpassword] = React.useState("")

  const register = async(event) => {
    event.preventDefault();

    if (!username || !email || !password){
        window.alert("All blanks have to be filled");
    } else {
        try {
          const userDetails = {
            username,
            email,
            password
            //confpassword
          };

          const user = await axios.post('http://localhost:4000/users/add', userDetails);

          localStorage.setItem('token', JSON.stringify(user.token));

          navigate('/welcome', {state: {username: user.username}})

          window.alert(`${username} you are successfully registered`);
          
        } catch(error) {
          console.error(error);
        }
      }
  }

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
            <input 
            type="text" 
            id='username' 
            value={username} 
            required="true"
            onChange={(e) => {
              setUsername(e.target.value);
            }}/>
            <label htmlFor='username'>Username</label>
          </div>
          <div className="user-box">
            <input 
            type="email"
            id='email'
            value={email}
            required="true"
            onChange={(e) => {
              setEmail(e.target.value);
            }}/>
            <label htmlFor='email'>Email Address</label>
          </div>
          <div className="user-box">
            <input 
            type="password" 
            id='password'
            value={password}
            required='true'
            onChange={(e) => {
              setPassword(e.target.value);
            }}/>
            <label htmlFor='password'>Password</label>
          </div>
          <div className="user-box">
            {/* <input 
            type="password" 
            id='confpassword'
            value={confpassword} 
            required="true"
            onChange={(e) => {
            setConfpassword(e.target.value);
            }}/>
            <label htmlFor='password'>Confirm Password</label> */}
          </div>
          <a href='/welcome' type='submit' onClick={register}>
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
