import React from 'react'
import '../forms/login.css'

export const About = () => {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height:'90vh'
    }}>
      <div className="login-box">
        <h2>About Redstone</h2>
        <form>
          <div className='user-box'>
            Redstone is a leading conglomerate in this world. It is divided into three companies, namely
            <ul>
              <li>Redstone Heavy Industries</li>
              <li>Redstone Security</li>
              <li>Redstone Technologies</li>
            </ul>
          </div>     
        </form>
      </div>
    </div>
  )
}
