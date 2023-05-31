import React from 'react'

function Header() {
  return (
      <>
          <ul ClassName='nav' style={{
              display: "flex", Height: '30px',
              padding: '10px',
              backgroundColor:'red',
              
          }}>
              <li>Skills</li>
              < li>Projects</li>
             < li>Contact Me</li>
              
          </ul>
          
      </>
  )
}

export default Header;