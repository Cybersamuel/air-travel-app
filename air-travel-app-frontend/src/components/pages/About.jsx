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
            Redstone is a leading conglomerate in this world. From our headquarters in the Redstone Complex in
            Statropolis, we focus on providing the best experience for our clients on software, IT, 
            automotive industry and private security. <br/>
            <br/>
            <ul>
              <li>Redstone Heavy Industries - The branch of Redstone in charge of heavy manufacturing.</li><br/>
              <li>Redstone Security - Our private security branch with a massive global footprint, employing 20,000 contractors</li><br/>
              <li>Redstone Technologies - Our wing that specializes in IT and Research & Development.</li>
            </ul>
          </div>     
        </form>
      </div>
    </div>
  )
}
