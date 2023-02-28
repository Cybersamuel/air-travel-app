import React from 'react';
import '../forms/login.css';

export const Welcome = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height:'90vh'
        }}>
            <div className='login-box'>
            <form>
                <div className='user-box'>
                    <h2>Congratulations! You made it </h2>
                </div>
            </form>
            </div>
        </div>
    )
}

