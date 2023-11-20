import React from 'react'
import Logo from '../assets/logo.ico'
import '../app.css';

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
    <header class="rn-header haeder-default black-logo-version header--fixed header--sticky">
        <div class="header-wrapper rn-popup-mobile-menu m--0 row align-items-center">
            {/* <!-- Start Header Left --> */}
            <div class="col-lg-2 col-6">
                <div class="header-left">
                    <div class="logo">
                        <a href="html/inbio/index.html">
                            <img  src={Logo} alt="logo" style={{ width: 40, height: 40, borderRadius:'10px'}}/>
                        </a>
                    </div>
                </div>
            </div>
            {/* <!-- End Header Left -->
            <!-- Start Header Center --> */}
            <div class="col-lg-10 col-6">
                <div class="header-center">
                    <nav id="sideNav" class="mainmenu-nav navbar-example2 d-none d-xl-block onepagenav">
                        {/* <!-- Start Mainmanu Nav --> */}
                        <ul class="primary-menu nav nav-pills">
                            <li class="nav-item current"><a class="nav-link smoth-animation active" href="#home">Home</a></li>
                            <li class="nav-item"><a class="nav-link smoth-animation" href="#experiences">Experience</a></li>
                            <li class="nav-item"><a class="nav-link smoth-animation" href="#educations">Education</a></li>
                            <li class="nav-item"><a class="nav-link smoth-animation" href="#resume">Resume</a></li>
                            <li class="nav-item"><a class="nav-link smoth-animation" href="#portfolio">Portfolio</a></li>
                            <li class="nav-item"><a class="nav-link smoth-animation" href="#blog">Blog</a></li>
                            <li class="nav-item"><a class="nav-link smoth-animation" href="#footer">Footer</a></li>
                        </ul>
                        {/* <!-- End Mainmanu Nav --> */}
                    </nav>
                    {/*  Start Header Right  */}
                    <div class="header-right">
                        <a class="rn-btn" target="blank" href=" "><span>BUY NOW</span></a>
                        <div class="hamberger-menu d-block d-xl-none">
                            <i id="menuBtn" class="feather-menu humberger-menu"></i>
                        </div>
                        <div class="close-menu d-block">
                            <span class="closeTrigger">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </span>
                        </div>
                    </div>
                    {/* <!-- End Header Right  --> */}
                </div>
            </div>
            {/* <!-- End Header Center --> */}
        </div>
    </header>
      </div> 
  )
}

export default Header;