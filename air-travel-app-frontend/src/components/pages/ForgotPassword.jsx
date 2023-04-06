import React, {useState} from 'react'
import '../forms/forgotPassword.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export const ForgotPassword = () => {

    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    const recoverPassword = async (event) => {
        event.preventDefault();

        if (!email){
            alert('Enter your email address');
        } else {
            
            alert('A link to reset your account has been sent to you');
            const userDetails = {
                email
            }
            const user = await axios.post('http://localhost:4000/users/update', userDetails)

            localStorage.setItem('token', JSON.stringify(user.token))
            
            navigate()
        }
    }



    return(
        <div className='login-box'>
            <form>
                <h2>If you have an account with us, enter your email</h2>
                <div className="user-box">
                    <input 
                        type="text"
                        id='email'
                        value={email} 
                        required={true}
                        onChange={(e) => {
                        setEmail(e.target.value);
                        }}/>
                        <label htmlFor='email'>Email Address</label>
                        <a href='/' type='submit' onClick={recoverPassword}>Submit</a>
                    </div>
                </form>
            </div>
    )
}

