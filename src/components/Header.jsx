import React from 'react'
import Logo from '../assets/logo.ico'

function Header() {
  return (
      <div>
          <ul id='nav'style={{display:'flex'}}>
             <li> <img style={{ width: 40, height: 40, borderRadius:'10px'}}
                  src={Logo} alt='brand'  />
              </li>
         
              <li id='brnd-name'> <h1 style={{
                  color: 'white', fontFamily:'serif', 
                  fontSize: '22px', marginTop: '5px', padding:'7px'}}>
                  SIBANANDA &nbsp;NAYAK</h1>
              </li>
          </ul>
      </div> 
  )
}

export default Header;