import React from 'react'
import Logo from '../assets/logo.ico'

import '../css/style.css';
import '../app.css';

function Header() {
  return (
      <div>
          {/* <ul id='nav'style={{display:'flex'}}>
             <li> <img style={{ width: 40, height: 40, borderRadius:'10px'}}
                  src={Logo} alt='brand'  />
              </li>
         
              <li id='brnd-name'> <h1 style={{
                  color: 'white', fontFamily:'serif', 
                  fontSize: '22px', marginTop: '5px', padding:'7px'}}>
                  SIBANANDA &nbsp;NAYAK</h1>
              </li>
          </ul> */}
    <header class="rn-header haeder-default black-logo-version header--fixed header--sticky">
        <div class="header-wrapper rn-popup-mobile-menu m--0 row align-items-center">
            {/* <!-- Start Header Left --> */}
            <div class="col-lg-2 col-6">
                <div class="header-left">
                    <div class="logo">
                        <a href="html/inbio/index.html">
                            <img  src={Logo} alt="logo" style={{ width: 40, height: 40, borderRadius:'10px'}}/>
                            <span>SIBANANDA &nbsp;NAYAK</span>
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

    {/* <!-- Start Popup Mobile Menu  --> */}

    <div class="popup-mobile-menu">
        <div class="inner">
            <div class="menu-top">
                <div class="menu-header">
                    <a class="logo" href="html/inbio/index.html">
                        <img src={Logo}  alt="Personal Portfolio" />
                    </a>
                    <div class="close-button">
                        <button class="close-menu-activation close"><i data-feather="x"></i></button>
                    </div>
                </div>
                <p class="discription">Lorem ipsum dolor sit amet consect adipisicing elit repellendus.
                </p>
            </div>
            <div class="content">
                <ul class="primary-menu nav nav-pills onepagenav">
                    <li class="nav-item current"><a class="nav-link smoth-animation" href="#home">Home</a></li>
                    <li class="nav-item"><a class="nav-link smoth-animation" href="#experiences">Experience</a></li>
                    <li class="nav-item"><a class="nav-link smoth-animation" href="#educations">Education</a></li>
                    <li class="nav-item"><a class="nav-link smoth-animation" href="#resume">Resume</a></li>
                    <li class="nav-item"><a class="nav-link smoth-animation" href="#portfolio">Portfolio</a></li>
                    <li class="nav-item"><a class="nav-link smoth-animation" href="#blog">Blog</a></li>
                    <li class="nav-item"><a class="nav-link smoth-animation" href="#footer">Footer</a></li>
                </ul>
                {/* <!-- social sharea area --> */}
                <div class="social-share-style-1 mt--40">
                    <span class="title">find with me</span>
                    <ul class="social-share d-flex liststyle">
                        <li class="facebook"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg></a>
                        </li>
                        <li class="instagram"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg></a>
                        </li>
                        <li class="linkedin"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg></a>
                        </li>
                    </ul>
                </div>
                {/* <!-- end --> */}
            </div>
        </div>
    </div>

    {/* <!-- End Popup Mobile Menu  --> */}


    
      </div> 
  )
}

export default Header;