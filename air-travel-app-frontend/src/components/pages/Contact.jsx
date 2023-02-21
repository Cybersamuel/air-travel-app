import React from 'react';

export const Contact = () => {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height:'90vh'
    }}>
      <div className="login-box">
        <h2>Contact Info</h2>
        <form>
          <div className="user-box">
            <ul>
              <li>Phone: 301-000-000</li>
              <li>Email: info@redstoneglobal.com</li>
              <li>Instagram: redstonecorp</li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  )
}

