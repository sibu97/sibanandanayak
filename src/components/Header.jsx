import React from 'react'
import Logo from '../assets/logo.ico'
import Profilephoto from '../images/slider/photo2.jpg'

import '../css/style.css';
import '../app.css';
const feather = require('feather-icons');

function Header() {
    return (
        <div> 

            <header className="rn-header haeder-default black-logo-version header--fixed header--sticky">
                <div className="header-wrapper rn-popup-mobile-menu m--0 row align-items-center">
                    {/* Start Header Left  */}
                    <div className="col-lg-2 col-6">
                        <div className="header-left">
                            <div className="logo">
                                <a href="html/inbio/index.html">
                                    <img src={Logo} alt="logo" style={{ width: 40, height: 40, borderRadius: '10px' }} />
                                    <span>SIBANANDA &nbsp;NAYAK</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* End Header Left 
            Start Header Center  */}
                    <div className="col-lg-10 col-6">
                        <div className="header-center">
                            <nav id="sideNav" className="mainmenu-nav navbar-example2 d-none d-xl-block onepagenav">
                                {/* Start Mainmanu Nav  */}
                                <ul className="primary-menu nav nav-pills">
                                    <li className="nav-item current"><a className="nav-link smoth-animation active" href="#home">Home</a></li>
                                    <li className="nav-item"><a className="nav-link smoth-animation" href="#experiences">Experience</a></li>
                                    <li className="nav-item"><a className="nav-link smoth-animation" href="#educations">Education</a></li>
                                    <li className="nav-item"><a className="nav-link smoth-animation" href="#resume">Resume</a></li>
                                    <li className="nav-item"><a className="nav-link smoth-animation" href="#portfolio">Portfolio</a></li>
                                    <li className="nav-item"><a className="nav-link smoth-animation" href="#blog">Blog</a></li>
                                    <li className="nav-item"><a className="nav-link smoth-animation" href="#footer">Footer</a></li>
                                </ul>
                                {/* End Mainmanu Nav  */}
                            </nav>
                            {/*  Start Header Right  */}
                            <div className="header-right">
                                <a className="rn-btn" target="blank" href=" "><span>CONTACT ME</span></a>
                                <div className="hamberger-menu d-block d-xl-none">
                                    <i id="menuBtn" className="feather-menu humberger-menu"></i>
                                </div>
                                <div className="close-menu d-block">
                                    <span className="closeTrigger">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                    </span>
                                </div>
                            </div>
                            {/* End Header Right   */}
                        </div>
                    </div>
                    {/* End Header Center  */}
                </div>
            </header>

            {/* Start Popup Mobile Menu   */}

            <div className="popup-mobile-menu">
                <div className="inner">
                    <div className="menu-top">
                        <div className="menu-header">
                            <a className="logo" href="html/inbio/index.html">
                                <img src={Logo} alt="Personal Portfolio" />
                            </a>
                            <div className="close-button">
                                <button className="close-menu-activation close"><i data-feather="x"></i></button>
                            </div>
                        </div>
                        <p className="discription">Lorem ipsum dolor sit amet consect adipisicing elit repellendus.
                        </p>
                    </div>
                    <div className="content">
                        <ul className="primary-menu nav nav-pills onepagenav">
                            <li className="nav-item current"><a className="nav-link smoth-animation" href="#home">Home</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation" href="#experiences">Experience</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation" href="#educations">Education</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation" href="#resume">Resume</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation" href="#portfolio">Portfolio</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation" href="#blog">Blog</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation" href="#footer">Footer</a></li>
                        </ul>
                        {/* social sharea area  */}
                        <div className="social-share-style-1 mt--40">
                            <span className="title">find with me</span>
                            <ul className="social-share d-flex liststyle">
                                <li className="facebook"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-facebook">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg></a>
                                </li>
                                <li className="instagram"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg></a>
                                </li>
                                <li className="linkedin"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-linkedin">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg></a>
                                </li>
                            </ul>
                        </div>
                        {/* end  */}
                    </div>
                </div>
            </div>

            {/* End Popup Mobile Menu   */}

            <main className="main-page-wrapper">
                Start Slider Area
                <div id="home" className="rn-slide-area">
                    <div className="slide slider-style-3">
                        <div className="container">
                            <div className="row slider-wrapper">
                                <div className="order-2 order-xl-1 col-lg-12 col-xl-5 mt_lg--50 mt_md--50 mt_sm--50">
                                    <div className="slider-info">
                                        <div className="row">
                                            <div className="col-xl-12 col-lg-12 col-12">
                                                <div className="user-info-top">
                                                    <div className="user-info-header">
                                                        <div className="user">
                                                            <i data-feather="user"></i>
                                                        </div>
                                                        <h2 className="title">
                                                            Hi, I’m <span>SIBANANDA &nbsp;NAYAK</span>
                                                        </h2>
                                                        <p className="disc">Web designer and developer working for envato.com in Paris,
                                                            France.</p>
                                                    </div>
                                                    <div className="user-info-footer">
                                                        <div className="info">
                                                            <i data-feather="file"></i>
                                                            <span>Web designer & developer</span>
                                                        </div>
                                                        <div className="info">
                                                            <i data-feather="mail"></i>
                                                            <span>nayaksibananda22@gmail.com</span>
                                                        </div>
                                                        <div className="info">
                                                            <i data-feather="map-pin"></i>
                                                            <span>Hyderabad , India</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-lg-12 col-12">
                                                <div className="user-info-bottom">
                                                    <span>Download my curriculum vitae: </span>
                                                    <div className="button-wrapper d-flex">
                                                        <a className="rn-btn mr--30" href="#contacts"><span>DOWNLOAD CV</span></a>
                                                        <a className="rn-btn" href="#contacts"><span>CONTACT ME</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-1 order-xl-2 col-lg-12 col-xl-7">
                                    <div className="background-image-area">
                                        <div className="thumbnail-image">
                                            {/* require('../images/slider/banner-02.png').default */}
                                            <img src={Profilephoto} alt="Personal Portfolio" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                End Slider Area
                Start Experience area
                <div id="experiences" className="rn-experience-area section-separator rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" className="section-title text-center">
                                    <span className="subtitle">Over 10 years of experience</span>
                                    <h2 className="title">My Experience</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--10">
                            <div className="col-12 mt_experience">
                                single skills
                                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" className="experience-style-two">
                                    <div className="experience-left">
                                        <div className="experience-image">
                                            <img src="../images/portfolio/portfolio-01.jpg" alt="Personal Portfolio" />
                                        </div>
                                        <div className="experience-center">
                                            <span className="date">2015-Present</span>
                                            <h4 className="experience-title">
                                                Rainbow - Themes.
                                            </h4>
                                            <h6 className="subtitle">
                                                Co-Founder, Web Designer & Developer
                                            </h6>
                                            <p className="disc">Reinvetning the way you create websites</p>
                                        </div>
                                    </div>
                                    <div className="experience-right">
                                        <div className="experience-footer">
                                            <a className="rn-btn" href="#contacts"><span>CONTACT ME</span></a>
                                        </div>
                                    </div>
                                </div>
                                single skills
                                single skills
                                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" data-aos-once="true" className="experience-style-two">
                                    <div className="experience-left">
                                        <div className="experience-image">
                                            <img src="../images/portfolio/portfolio-02.jpg" alt="Personal Portfolio" />
                                        </div>
                                        <div className="experience-center">
                                            <span className="date">2015-Present</span>
                                            <h4 className="experience-title">
                                                App Development.
                                            </h4>
                                            <h6 className="subtitle">
                                                Co-Founder, Web Designer & Developer
                                            </h6>
                                            <p className="disc">Reinvetning the way you create websites</p>
                                        </div>
                                    </div>
                                    <div className="experience-right">
                                        <div className="experience-footer">
                                            <a className="rn-btn" href="#contacts"><span>CONTACT ME</span></a>
                                        </div>
                                    </div>
                                </div>
                                single skills
                                single skills
                                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-once="true" className="experience-style-two">
                                    <div className="experience-left">
                                        <div className="experience-image">
                                            <img src="../images/portfolio/portfolio-03.jpg" alt="Personal Portfolio" />
                                        </div>
                                        <div className="experience-center">
                                            <span className="date">2015-Present</span>
                                            <h4 className="experience-title">
                                                Application Management.
                                            </h4>
                                            <h6 className="subtitle">
                                                Co-Founder, Web Designer & Developer
                                            </h6>
                                            <p className="disc">Reinvetning the way you create websites</p>
                                        </div>
                                    </div>
                                    <div className="experience-right">
                                        <div className="experience-footer">
                                            <a className="rn-btn" href="#contacts"><span>CONTACT ME</span></a>
                                        </div>
                                    </div>
                                </div>
                                single skills
                            </div>
                        </div>
                    </div>
                </div>
                End Experience area
                Start education section
                <div id="educations" className="rn-education-area rn-section-gap section-separator">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" className="section-title text-center">
                                    <span className="subtitle">Phd, Master and Bachelo</span>
                                    <h2 className="title">Education</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--10">
                            <div className="col-12 mt_experience">
                                single skills
                                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" className="experience-style-two">
                                    <div className="experience-left">
                                        <div className="experience-image">
                                            <img src="../images/portfolio/portfolio-04.jpg" alt="Personal Portfolio" />
                                        </div>
                                        <div className="experience-center">
                                            <span className="date">2015-Present</span>
                                            <h4 className="experience-title">
                                                Software Develop.
                                            </h4>
                                            <h6 className="subtitle">
                                                Co-Founder, Web Designer & Developer
                                            </h6>
                                            <p className="disc">Reinvetning the way you create websites</p>
                                        </div>
                                    </div>
                                    <div className="experience-right">
                                        <div className="experience-footer">
                                            <a className="rn-btn" href="#contacts"><span>CONTACT ME</span></a>
                                        </div>
                                    </div>
                                </div>
                                single skills
                                single skills
                                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" data-aos-once="true" className="experience-style-two">
                                    <div className="experience-left">
                                        <div className="experience-image">
                                            <img src="../images/portfolio/portfolio-05.jpg" alt="Personal Portfolio" />
                                        </div>
                                        <div className="experience-center">
                                            <span className="date">2015-Present</span>
                                            <h4 className="experience-title">
                                                Web Design.
                                            </h4>
                                            <h6 className="subtitle">
                                                Co-Founder, Web Designer & Developer
                                            </h6>
                                            <p className="disc">Reinvetning the way you create websites</p>
                                        </div>
                                    </div>
                                    <div className="experience-right">
                                        <div className="experience-footer">
                                            <a className="rn-btn" href="#contacts"><span>CONTACT ME</span></a>
                                        </div>
                                    </div>
                                </div>
                                single skills
                            </div>
                        </div>
                    </div>
                </div>
                End education section
                Start Resume Area
                <div className="rn-resume-area rn-section-gap section-separator" id="resume">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" className="section-title text-center">
                                    <span className="subtitle">7+ Years of Experience</span>
                                    <h2 className="title">My Resume</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--45">
                            <div className="col-lg-12">
                                <ul data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" className="rn-nav-list nav nav-tabs" id="myTabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="education-tab" data-bs-toggle="tab" href="#education" role="tab" aria-controls="education" aria-selected="true">education</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " id="professional-tab" data-bs-toggle="tab" href="#professional" role="tab" aria-controls="professional" aria-selected="false">professional
                                            Skills</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="experience-tab" data-bs-toggle="tab" href="#experience" role="tab" aria-controls="experience" aria-selected="false">experience</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="interview-tab" data-bs-toggle="tab" href="#interview" role="tab" aria-controls="interview" aria-selected="false">interview</a>
                                    </li>
                                </ul>
                                Start Tab Content Wrapper
                                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" data-aos-once="true" className="rn-nav-content tab-content" id="myTabContents">
                                    Start Single Tab
                                    <div className="tab-pane show active fade single-tab-area" id="education" role="tabpanel" aria-labelledby="education-tab">
                                        <div className="personal-experience-inner mt--40">
                                            <div className="row">
                                                Start Skill List Area
                                                <div className="col-lg-6 col-md-12 col-12">
                                                    <div className="content">
                                                        <span className="subtitle">2007 - 2010</span>
                                                        <h4 className="maintitle">Education Quality</h4>
                                                        <div className="experience-list">
                                                            Start Single List
                                                            <div className="resume-single-list">
                                                                <div className="inner">
                                                                    <div className="heading">
                                                                        <div className="title">
                                                                            <h4>Personal Portfolio April Fools</h4>
                                                                            <span>University of DVI (1997 - 2001)</span>
                                                                        </div>
                                                                        <div className="date-of-time">
                                                                            <span>4.30/5</span>
                                                                        </div>
                                                                    </div>
                                                                    <p className="description">The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales.
                                                                        Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                        mauris hendrerit ante.</p>
                                                                </div>
                                                            </div>
                                                            End Single List
                                                            Start Single List
                                                            <div className="resume-single-list">
                                                                <div className="inner">
                                                                    <div className="heading">
                                                                        <div className="title">
                                                                            <h4> Examples Of Personal Portfolio</h4>
                                                                            <span>College of Studies (2000 - 2002)</span>
                                                                        </div>
                                                                        <div className="date-of-time">
                                                                            <span>4.50/5</span>
                                                                        </div>
                                                                    </div>
                                                                    <p className="description">Maecenas finibus nec sem ut
                                                                        imperdiet. Ut tincidunt est ac dolor aliquam sodales.
                                                                        Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                        mauris hendrerit ante.</p>
                                                                </div>
                                                            </div>
                                                            End Single List
                                                            Start Single List
                                                            <div className="resume-single-list">
                                                                <div className="inner">
                                                                    <div className="heading">
                                                                        <div className="title">
                                                                            <h4>Tips For Personal Portfolio</h4>
                                                                            <span>University of Studies (1997 - 2001)</span>
                                                                        </div>
                                                                        <div className="date-of-time">
                                                                            <span>4.80/5</span>
                                                                        </div>
                                                                    </div>
                                                                    <p className="description"> If you are going to use a passage. Ut tincidunt est ac dolor aliquam sodales.
                                                                        Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                        mauris hendrerit ante.</p>
                                                                </div>
                                                            </div>
                                                            End Single List
                                                        </div>
                                                    </div>
                                                </div>
                                                End Skill List Area
                                                Start Skill List Area 2nd
                                                <div className="col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60">
                                                    <div className="content">
                                                        <span className="subtitle">2007 - 2010</span>
                                                        <h4 className="maintitle">Job Experience</h4>
                                                        <div className="experience-list">
                                                            Start Single List
                                                            <div className="resume-single-list">
                                                                <div className="inner">
                                                                    <div className="heading">
                                                                        <div className="title">
                                                                            <h4>Diploma in Web Development</h4>
                                                                            <span>BSE In CSE (2004 - 2008)</span>
                                                                        </div>
                                                                        <div className="date-of-time">
                                                                            <span>4.70/5</span>
                                                                        </div>
                                                                    </div>
                                                                    <p className="description">Contrary to popular belief. Ut tincidunt est ac dolor aliquam sodales.
                                                                        Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                        mauris hendrerit ante.</p>
                                                                </div>
                                                            </div>
                                                            End Single List
                                                            Start Single List
                                                            <div className="resume-single-list">
                                                                <div className="inner">
                                                                    <div className="heading">
                                                                        <div className="title">
                                                                            <h4>The Personal Portfolio Mystery</h4>
                                                                            <span>Job at Rainbow-Themes (2008 - 2016)</span>
                                                                        </div>
                                                                        <div className="date-of-time">
                                                                            <span>4.95/5</span>
                                                                        </div>
                                                                    </div>
                                                                    <p className="description">Generate Lorem Ipsum which looks. Ut tincidunt est ac dolor aliquam sodales.
                                                                        Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                        mauris hendrerit ante.</p>
                                                                </div>
                                                            </div>
                                                            End Single List
                                                            Start Single List
                                                            <div className="resume-single-list">
                                                                <div className="inner">
                                                                    <div className="heading">
                                                                        <div className="title">
                                                                            <h4>Diploma in Computer Science</h4>
                                                                            <span>Works at Plugin Development (2016 - 2020)</span>
                                                                        </div>
                                                                        <div className="date-of-time">
                                                                            <span>5.00/5</span>
                                                                        </div>
                                                                    </div>
                                                                    <p className="description">Maecenas finibus nec sem ut
                                                                        imperdiet. Ut tincidunt est ac dolor aliquam sodales.
                                                                        Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                        mauris hendrerit ante.</p>
                                                                </div>
                                                            </div>
                                                            End Single List
                                                        </div>
                                                    </div>
                                                </div>
                                                End Skill List Area
                                            </div>
                                        </div>
                                    </div>
                                    End Single Tab

                                    Start Single Tab
                                    <div className="tab-pane fade " id="professional" role="tabpanel" aria-labelledby="professional-tab">
                                        <div className="personal-experience-inner mt--40">
                                            <div className="row row--40">
                                                Start Single Progressbar
                                                <div className="col-lg-6 col-md-6 col-12">
                                                    <div className="progress-wrapper">
                                                        <div className="content">
                                                            <span className="subtitle">Features</span>
                                                            <h4 className="maintitle">Design Skill</h4>
                                                            Start Single Progress Charts
                                                            <div className="progress-charts">
                                                                <h6 className="heading heading-h6">PHOTOSHOT</h6>
                                                                <div className="progress">
                                                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar" style={{ width: "100%" }} ariaValuenow="85" ariaValuemin="0" ariaValuemax="100">
                                                                        <span className="percent-label">100%</span></div>
                                                                </div>
                                                            </div>
                                                            End Single Progress Charts
                                                            Start Single Progress Charts
                                                            <div className="progress-charts">
                                                                <h6 className="heading heading-h6">FIGMA</h6>
                                                                <div className="progress">
                                                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.6s" data-wow-delay=".4s" role="progressbar" style={{ width: "95%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                                        className="percent-label">95%</span></div>
                                                                </div>
                                                            </div>
                                                            End Single Progress Charts
                                                            Start Single Progress Charts
                                                            <div className="progress-charts">
                                                                <h6 className="heading heading-h6">ADOBE XD</h6>
                                                                <div className="progress">
                                                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.7s" data-wow-delay=".5s" role="progressbar" style={{ width: " 60%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                                        className="percent-label">60%</span></div>
                                                                </div>
                                                            </div>
                                                            End Single Progress Charts
                                                            Start Single Progress Charts
                                                            <div className="progress-charts">
                                                                <h6 className="heading heading-h6">ADOBE ILLUSTRATOR</h6>
                                                                <div className="progress">
                                                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".6s" role="progressbar" style={{ width: "70%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                                        className="percent-label">70%</span></div>
                                                                </div>
                                                            </div>
                                                            End Single Progress Charts
                                                            Start Single Progress Charts
                                                            <div className="progress-charts">
                                                                <h6 className="heading heading-h6">DESIGN</h6>
                                                                <div className="progress">"
                                                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.9s" data-wow-delay=".7s" role="progressbar" style={{ width: "90%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                                        className="percent-label">90%</span></div>
                                                                </div>
                                                            </div>
                                                            End Single Progress Charts
                                                        </div>
                                                    </div>
                                                </div>
                                                End Single Progressbar
                                                Start Single Progressbar
                                                <div className="col-lg-6 col-md-6 col-12 mt_sm--60">
                                                    <div className="progress-wrapper">
                                                        <div className="content">
                                                            <span className="subtitle">Features</span>
                                                            <h4 className="maintitle">Development Skill</h4>
                                                            Start Single Progress Charts
                                                            <div className="progress-charts">
                                                                <h6 className="heading heading-h6">HTML</h6>
                                                                <div className="progress">
                                                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar" style={{ width: "85%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                                        className="percent-label">85%</span></div>
                                                                </div>
                                                            </div>
                                                            End Single Progress Charts
                                                            Start Single Progress Charts
                                                            <div className="progress-charts">
                                                                <h6 className="heading heading-h6">CSS</h6>
                                                                <div className="progress">
                                                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.6s" data-wow-delay=".4s" role="progressbar" style={{ width: "80%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                                        className="percent-label">80%</span></div>
                                                                </div>
                                                            </div>
                                                            End Single Progress Charts
                                                            Start Single Progress Charts
                                                            <div className="progress-charts">
                                                                <h6 className="heading heading-h6">JAVASCRIPT</h6>
                                                                <div className="progress">
                                                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.7s" data-wow-delay=".5s" role="progressbar" style={{ width: " 90%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                                        className="percent-label">90%</span></div>
                                                                </div>
                                                            </div>
                                                            End Single Progress Charts
                                                            Start Single Progress Charts
                                                            <div className="progress-charts">
                                                                <h6 className="heading heading-h6">SOFTWARE</h6>
                                                                <div className="progress">
                                                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".6s" role="progressbar" style={{ width: " 75%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                                        className="percent-label">75%</span></div>
                                                                </div>
                                                            </div>
                                                            End Single Progress Charts
                                                            Start Single Progress Charts
                                                            <div className="progress-charts">
                                                                <h6 className="heading heading-h6">PLUGIN</h6>
                                                                <div className="progress">
                                                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.9s" data-wow-delay=".7s" role="progressbar" style={{ width: " 70%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                                        className="percent-label">70%</span></div>
                                                                </div>
                                                            </div>
                                                            End Single Progress Charts
                                                        </div>
                                                    </div>
                                                </div>
                                                End Single Progressbar
                                            </div>
                                        </div>
                                    </div>
                                    End Single Tab
                                    Start Single Tab
                                    <div className="tab-pane fade" id="experience" role="tabpanel" aria-labelledby="experience-tab">
                                        <div className="personal-experience-inner mt--40">
                                            <div className="row">
                                                Start Skill List Area
                                                <div className="col-lg-6 col-md-12 col-12">
                                                    <div className="content">
                                                        <span className="subtitle">2007 - 2010</span>
                                                        <h4 className="maintitle">Education Quality</h4>
                                                        <div className="experience-list">
                                                            Start Single List
                                                            <div className="resume-single-list">
                                                                <div className="inner">
                                                                    <div className="heading">
                                                                        <div className="title">
                                                                            <h4>Personal Portfolio April Fools</h4>
                                                                            <span>University of DVI (1997 - 2001)</span>
                                                                        </div>
                                                                        <div className="date-of-time">
                                                                            <span>4.30/5</span>
                                                                        </div>
                                                                    </div>
                                                                    <p className="description">The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales.
                                                                        Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                        mauris hendrerit ante.</p>
                                                                </div>
                                                            </div>
                                                            End Single List
                                                            Start Single List
                                                            <div className="resume-single-list">
                                                                <div className="inner">
                                                                    <div className="heading">
                                                                        <div className="title">
                                                                            <h4> Examples Of Personal Portfolio</h4>
                                                                            <span>College of Studies (2000 - 2002)</span>
                                                                        </div>
                                                                        <div className="date-of-time">
                                                                            <span>4.50/5</span>
                                                                        </div>
                                                                    </div>
                                                                    <p className="description">Maecenas finibus nec sem ut
                                                                        imperdiet. Ut tincidunt est ac dolor aliquam sodales.
                                                                        Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                        mauris hendrerit ante.</p>
                                                                </div>
                                                            </div>
                                                            End Single List
                                                            Start Single List
                                                            <div className="resume-single-list">
                                                                <div className="inner">
                                                                    <div className="heading">
                                                                        <div className="title">
                                                                            <h4>Tips For Personal Portfolio</h4>
                                                                            <span>University of Studies (1997 - 2001)</span>
                                                                        </div>
                                                                        <div className="date-of-time">
                                                                            <span>4.80/5</span>
                                                                        </div>
                                                                    </div>
                                                                    <p className="description"> If you are going to use a passage. Ut tincidunt est ac dolor aliquam sodales.
                                                                        Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                        mauris hendrerit ante.</p>
                                                                </div>
                                                            </div>
                                                            End Single List
                                                        </div>
                                                    </div>
                                                </div>
                                                End Skill List Area
                                                Start Skill List Area 2nd
                                                <div className="col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60">
                                                    <div className="content">
                                                        <span className="subtitle">2007 - 2010</span>
                                                        <h4 className="maintitle">Job Experience</h4>
                                                        <div className="experience-list">
                                                            Start Single List
                                                            <div className="resume-single-list">
                                                                <div className="inner">
                                                                    <div className="heading">
                                                                        <div className="title">
                                                                            <h4>Diploma in Web Development</h4>
                                                                            <span>BSE In CSE (2004 - 2008)</span>
                                                                        </div>
                                                                        <div className="date-of-time">
                                                                            <span>4.70/5</span>
                                                                        </div>
                                                                    </div>
                                                                    <p className="description">Contrary to popular belief. Ut tincidunt est ac dolor aliquam sodales.
                                                                        Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                        mauris hendrerit ante.</p>
                                                                </div>
                                                            </div>
                                                            End Single List
                                                            Start Single List
                                                            <div className="resume-single-list">
                                                                <div className="inner">
                                                                    <div className="heading">
                                                                        <div className="title">
                                                                            <h4>The Personal Portfolio Mystery</h4>
                                                                            <span>Job at Rainbow-Themes (2008 - 2016)</span>
                                                                        </div>
                                                                        <div className="date-of-time">
                                                                            <span>4.95/5</span>
                                                                        </div>
                                                                    </div>
                                                                    <p className="description">Generate Lorem Ipsum which looks. Ut tincidunt est ac dolor aliquam sodales.
                                                                        Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                        mauris hendrerit ante.</p>
                                                                </div>
                                                            </div>
                                                            End Single List
                                                            Start Single List
                                                            <div className="resume-single-list">
                                                                <div className="inner">
                                                                    <div className="heading">
                                                                        <div className="title">
                                                                            <h4>Diploma in Computer Science</h4>
                                                                            <span>Works at Plugin Development (2016 - 2020)</span>
                                                                        </div>
                                                                        <div className="date-of-time">
                                                                            <span>5.00/5</span>
                                                                        </div>
                                                                    </div>
                                                                    <p className="description">Maecenas finibus nec sem ut
                                                                        imperdiet. Ut tincidunt est ac dolor aliquam sodales.
                                                                        Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                        mauris hendrerit ante.</p>
                                                                </div>
                                                            </div>
                                                            End Single List
                                                        </div>
                                                    </div>
                                                </div>
                                                End Skill List Area
                                            </div>
                                        </div>
                                    </div>
                                    End Single Tab
                                    Start Single Tab
                                    <div className="tab-pane fade" id="interview" role="tabpanel" aria-labelledby="interview-tab">
                                        <div className="personal-experience-inner mt--40">
                                            <div className="row">
                                                Start Skill List Area
                                                <div className="col-lg-6 col-md-12 col-12">
                                                    <div className="content">
                                                        <span className="subtitle">2007 - 2010</span>
                                                        <h4 className="maintitle">Education Quality</h4>
                                                        <div className="experience-list">
                                                            Start Single List
                                                            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-once="true" className="resume-single-list">
                                                                <div className="inner">
                                                                    <div className="heading">
                                                                        <div className="title">
                                                                            <h4>Personal Portfolio April Fools</h4>
                                                                            <span>University of DVI (1997 - 2001)</span>
                                                                        </div>
                                                                        <div className="date-of-time">
                                                                            <span>4.30/5</span>
                                                                        </div>
                                                                    </div>
                                                                    <p className="description">The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales.
                                                                        Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                        mauris hendrerit ante.</p>
                                                                </div>
                                                            </div>
                                                            End Single List
                                                            Start Single List
                                                            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" className="resume-single-list">
                                                                <div className="inner">
                                                                    <div className="heading">
                                                                        <div className="title">
                                                                            <h4> Examples Of Personal Portfolio</h4>
                                                                            <span>College of Studies (2000 - 2002)</span>
                                                                        </div>
                                                                        <div className="date-of-time">
                                                                            <span>4.50/5</span>
                                                                        </div>
                                                                    </div>
                                                                    <p className="description">Maecenas finibus nec sem ut
                                                                        imperdiet. Ut tincidunt est ac dolor aliquam sodales.
                                                                        Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                        mauris hendrerit ante.</p>
                                                                </div>
                                                            </div>
                                                            End Single List
                                                            Start Single List
                                                            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="700" data-aos-once="true" className="resume-single-list">
                                                                <div className="inner">
                                                                    <div className="heading">
                                                                        <div className="title">
                                                                            <h4>Tips For Personal Portfolio</h4>
                                                                            <span>University of Studies (1997 - 2001)</span>
                                                                        </div>
                                                                        <div className="date-of-time">
                                                                            <span>4.80/5</span>
                                                                        </div>
                                                                    </div>
                                                                    <p className="description"> If you are going to use a passage. Ut tincidunt est ac dolor aliquam sodales.
                                                                        Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                        mauris hendrerit ante.</p>
                                                                </div>
                                                            </div>
                                                            End Single List
                                                        </div>
                                                    </div>
                                                </div>
                                                End Skill List Area
                                                Start Skill List Area 2nd
                                                <div className="col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60">
                                                    <div className="content">
                                                        <span className="subtitle">2007 - 2010</span>
                                                        <h4 className="maintitle">Job Experience</h4>
                                                        <div className="experience-list">
                                                            Start Single List
                                                            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" className="resume-single-list">
                                                                <div className="inner">
                                                                    <div className="heading">
                                                                        <div className="title">
                                                                            <h4>Diploma in Web Development</h4>
                                                                            <span>BSE In CSE (2004 - 2008)</span>
                                                                        </div>
                                                                        <div className="date-of-time">
                                                                            <span>4.70/5</span>
                                                                        </div>
                                                                    </div>
                                                                    <p className="description">Contrary to popular belief. Ut tincidunt est ac dolor aliquam sodales.
                                                                        Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                        mauris hendrerit ante.</p>
                                                                </div>
                                                            </div>
                                                            End Single List
                                                            Start Single List
                                                            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="700" data-aos-once="true" className="resume-single-list">
                                                                <div className="inner">
                                                                    <div className="heading">
                                                                        <div className="title">
                                                                            <h4>The Personal Portfolio Mystery</h4>
                                                                            <span>Job at Rainbow-Themes (2008 - 2016)</span>
                                                                        </div>
                                                                        <div className="date-of-time">
                                                                            <span>4.95/5</span>
                                                                        </div>
                                                                    </div>
                                                                    <p className="description">Generate Lorem Ipsum which looks. Ut tincidunt est ac dolor aliquam sodales.
                                                                        Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                        mauris hendrerit ante.</p>
                                                                </div>
                                                            </div>
                                                            End Single List
                                                            Start Single List
                                                            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="900" data-aos-once="true" className="resume-single-list">
                                                                <div className="inner">
                                                                    <div className="heading">
                                                                        <div className="title">
                                                                            <h4>Diploma in Computer Science</h4>
                                                                            <span>Works at Plugin Development (2016 - 2020)</span>
                                                                        </div>
                                                                        <div className="date-of-time">
                                                                            <span>5.00/5</span>
                                                                        </div>
                                                                    </div>
                                                                    <p className="description">Maecenas finibus nec sem ut
                                                                        imperdiet. Ut tincidunt est ac dolor aliquam sodales.
                                                                        Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                        mauris hendrerit ante.</p>
                                                                </div>
                                                            </div>
                                                            End Single List
                                                        </div>
                                                    </div>
                                                </div>
                                                End Skill List Area
                                            </div>
                                        </div>
                                    </div>
                                    End Single Tab
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                End Resume Area
                Start Portfolio Area
                <div id="portfolio" className="rn-portfolio-area portfolio-style-three rn-section-gap section-separator">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" className="section-title text-center">
                                    <span className="subtitle">Visit my portfolio and keep your feedback</span>
                                    <h2 className="title">My Portfolio</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--25 mt_md--5 mt_sm--5">
                            <div className="col-lg-12">
                                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" data-aos-once="true" className="portfolio-wrapper portfolio-slick-activation slick-arrow-style-one rn-slick-dot-style">
                                    Start Single Portfolio
                                    <div className="rn-portfolio-slick">
                                        <div className="rn-portfolio" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                            <div className="inner">
                                                <div className="thumbnail">
                                                    <a href="javascript:void(0)">
                                                        <img src="../images/portfolio/portfolio-06.jpg" alt="Personal Portfolio Images" />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <div className="category-info">
                                                        <div className="category-list">
                                                            <a href="javascript:void(0)">PHOTOSHOP</a>
                                                        </div>
                                                        <div className="meta">
                                                            <span><a href="javascript:void(0)"><i className="feather-heart"></i></a>
                                                                650</span>
                                                        </div>
                                                    </div>
                                                    <h4 className="title"><a href="javascript:void(0)">The services provide for design<i
                                                        className="feather-arrow-up-right"></i></a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    End Single Portfolio
                                    Start Single Portfolio
                                    <div className="rn-portfolio-slick">
                                        <div className="rn-portfolio" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                            <div className="inner">
                                                <div className="thumbnail">
                                                    <a href="javascript:void(0)">
                                                        <img src="../images/portfolio/portfolio-05.jpg" alt="Personal Portfolio Images" />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <div className="category-info">
                                                        <div className="category-list">
                                                            <a href="javascript:void(0)">Figma</a>
                                                        </div>
                                                        <div className="meta">
                                                            <span><a href="javascript:void(0)"><i className="feather-heart"></i></a>
                                                                650</span>
                                                        </div>
                                                    </div>
                                                    <h4 className="title"><a href="javascript:void(0)">Mobile app landing design & Services<i
                                                        className="feather-arrow-up-right"></i></a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    End Single Portfolio
                                    Start Single Portfolio
                                    <div className="rn-portfolio-slick">
                                        <div className="rn-portfolio" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                            <div className="inner">
                                                <div className="thumbnail">
                                                    <a href="javascript:void(0)">
                                                        <img src="../images/portfolio/portfolio-04.jpg" alt="Personal Portfolio Images" />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <div className="category-info">
                                                        <div className="category-list">
                                                            <a href="javascript:void(0)">Laravel</a>
                                                        </div>
                                                        <div className="meta">
                                                            <span><a href="javascript:void(0)"><i className="feather-heart"></i></a>
                                                                650</span>
                                                        </div>
                                                    </div>
                                                    <h4 className="title"><a href="javascript:void(0)">Web app Responsive design & Services<i
                                                        className="feather-arrow-up-right"></i></a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    End Single Portfolio
                                    Start Single Portfolio
                                    <div className="rn-portfolio-slick">
                                        <div className="rn-portfolio" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                            <div className="inner">
                                                <div className="thumbnail">
                                                    <a href="javascript:void(0)">
                                                        <img src="../images/portfolio/portfolio-03.jpg" alt="Personal Portfolio Images" />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <div className="category-info">
                                                        <div className="category-list">
                                                            <a href="javascript:void(0)">Figma</a>
                                                        </div>
                                                        <div className="meta">
                                                            <span><a href="javascript:void(0)"><i className="feather-heart"></i></a>
                                                                650</span>
                                                        </div>
                                                    </div>
                                                    <h4 className="title"><a href="javascript:void(0)">PHP with app landing design & Services<i
                                                        className="feather-arrow-up-right"></i></a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    End Single Portfolio
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                End portfolio Area
                Start News Area
                <div className="rn-blog-area rn-section-gap section-separator" id="blog">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" className="section-title text-center">
                                    <span className="subtitle">Visit my blog and keep your feedback</span>
                                    <h2 className="title">My Blog</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row row--25 mt--30 mt_md--10 mt_sm--10">
                            Start Single blog
                            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" className="col-lg-6 col-xl-4 mt--30 col-md-6 col-sm-12 col-12 mt--30">
                                <div className="rn-blog" data-bs-toggle="modal" data-bs-target="#exampleModalCenters">
                                    <div className="inner">
                                        <div className="thumbnail">
                                            <a href="javascript:void(0)">
                                                <img src="../images/blog/blog-01.jpg" alt="Personal Portfolio Images" />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="category-info">
                                                <div className="category-list">
                                                    <a href="javascript:void(0)">Canada</a>
                                                </div>
                                                <div className="meta">
                                                    <span><i className="feather-clock"></i> 2 min read</span>
                                                </div>
                                            </div>
                                            <h4 className="title"><a href="javascript:void(0)">T-shirt design is the part of design
                                                <i className="feather-arrow-up-right"></i></a></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            End Single blog
                            Start Single blog
                            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="150" data-aos-once="true" className="col-lg-6 col-xl-4 mt--30 col-md-6 col-sm-12 col-12 mt--30">
                                <div className="rn-blog" data-bs-toggle="modal" data-bs-target="#exampleModalCenters">
                                    <div className="inner">
                                        <div className="thumbnail">
                                            <a href="javascript:void(0)">
                                                <img src="../images/blog/blog-02.jpg" alt="Personal Portfolio Images" />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="category-info">
                                                <div className="category-list">
                                                    <a href="javascript:void(0)">Development</a>
                                                </div>
                                                <div className="meta">
                                                    <span><i className="feather-clock"></i> 2 hour read</span>
                                                </div>
                                            </div>
                                            <h4 className="title"><a href="javascript:void(0)">The services provide for design <i
                                                className="feather-arrow-up-right"></i></a></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            End Single blog
                            Start Single blog
                            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" data-aos-once="true" className="col-lg-6 col-xl-4 mt--30 col-md-6 col-sm-12 col-12 mt--30">
                                <div className="rn-blog" data-bs-toggle="modal" data-bs-target="#exampleModalCenters">
                                    <div className="inner">
                                        <div className="thumbnail">
                                            <a href="javascript:void(0)">
                                                <img src="../images/blog/blog-03.jpg" alt="Personal Portfolio Images" />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="category-info">
                                                <div className="category-list">
                                                    <a href="javascript:void(0)">Application</a>
                                                </div>
                                                <div className="meta">
                                                    <span><i className="feather-clock"></i> 5 min read</span>
                                                </div>
                                            </div>
                                            <h4 className="title"><a href="javascript:void(0)">Mobile app landing design & app
                                                maintain<i className="feather-arrow-up-right"></i></a></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            End Single blog
                        </div>
                    </div>
                </div>
                ENd Mews Area
                Modal Portfolio Body area Start
                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><i data-feather="x"></i></span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="portfolio-popup-thumbnail">
                                            <div className="image">
                                                <img className="w-100" src="../images/portfolio/portfolio-04.jpg" alt="slide" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="text-content">
                                            <h3>
                                                <span>Featured - Design</span> App Design Development.
                                            </h3>
                                            <p className="mb--30">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>
                                            <p>Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>
                                            <div className="button-group mt--20">
                                                <a href="#" className="rn-btn thumbs-icon">
                                                    <span>LIKE THIS</span>
                                                    <i data-feather="thumbs-up"></i>
                                                </a>
                                                <a href="#" className="rn-btn">
                                                    <span>VIEW PROJECT</span>
                                                    <i data-feather="chevron-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                        End of .text-content
                                    </div>
                                </div>
                                End of .row Body
                            </div>
                        </div>
                    </div>
                </div>
                End Modal Portfolio area
                Modal Blog Body area Start
                <div className="modal fade" id="exampleModalCenters" tabindex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-news" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><i data-feather="x"></i></span>
                                </button>
                            </div>
                            End of .modal-header
                            <div className="modal-body">
                                <img src="../images/blog/blog-big-01.jpg" alt="news modal" className="img-fluid modal-feat-img" />
                                <div className="news-details">
                                    <span className="date">2 May, 2021</span>
                                    <h2 className="title">Digital Marketo to Their New Office.</h2>
                                    <p>Nobis eleifend option congue nihil imperdiet doming id quod mazim placerat
                                        facer
                                        possim assum.
                                        Typi non
                                        habent claritatem insitam; est usus legentis in iis qui facit eorum
                                        claritatem.
                                        Investigationes
                                        demonstraverunt
                                        lectores legere me lius quod ii legunt saepius. Claritas est etiam processus
                                        dynamicus, qui
                                        sequitur
                                        mutationem consuetudium lectorum.</p>
                                    <h4>Nobis eleifend option conguenes.</h4>
                                    <p>Mauris tempor, orci id pellentesque convallis, massa mi congue eros, sed
                                        posuere
                                        massa nunc quis
                                        dui.
                                        Integer ornare varius mi, in vehicula orci scelerisque sed. Fusce a massa
                                        nisi.
                                        Curabitur sit
                                        amet
                                        suscipit nisl. Sed eget nisl laoreet, suscipit enim nec, viverra eros. Nunc
                                        imperdiet risus
                                        leo,
                                        in rutrum erat dignissim id.</p>
                                    <p>Ut rhoncus vestibulum facilisis. Duis et lorem vitae ligula cursus venenatis.
                                        ClassName aptent
                                        taciti sociosqu
                                        ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc vitae
                                        nisi
                                        tortor. Morbi
                                        leo
                                        nulla, posuere vel lectus a, egestas posuere lacus. Fusce eleifend hendrerit
                                        bibendum. Morbi
                                        nec
                                        efficitur ex.</p>
                                    <h4>Mauris tempor, orci id pellentesque.</h4>
                                    <p>Nulla non ligula vel nisi blandit egestas vel eget leo. Praesent fringilla
                                        dapibus dignissim.
                                        Pellentesque
                                        quis quam enim. Vestibulum ultrices, leo id suscipit efficitur, odio lorem
                                        rhoncus dolor, a
                                        facilisis
                                        neque mi ut ex. Quisque tempor urna a nisi pretium, a pretium massa
                                        tristique.
                                        Nullam in
                                        aliquam
                                        diam. Maecenas at nibh gravida, ornare eros non, commodo ligula. Sed
                                        efficitur
                                        sollicitudin
                                        auctor.
                                        Quisque nec imperdiet purus, in ornare odio. Quisque odio felis, vestibulum
                                        et.</p>
                                </div>
                                Comment Section Area Start
                                <div className="comment-inner">
                                    <h3 className="title mb--40 mt--50">Leave a Reply</h3>
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12 col-12">
                                                <div className="rnform-group"><input type="text" placeholder="Name" />
                                                </div>
                                                <div className="rnform-group"><input type="email" placeholder="Email" />
                                                </div>
                                                <div className="rnform-group"><input type="text" placeholder="Website" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-12">
                                                <div className="rnform-group">
                                                    <textarea placeholder="Comment"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <a className="rn-btn" href="#"><span>SUBMIT NOW</span></a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                Comment Section End
                            </div>
                            End of .modal-body
                        </div>
                    </div>
                </div>
                End Modal Blog area
                Back to  top Start
                <div className="backto-top">
                    <div>
                        <i data-feather="arrow-up"></i>
                    </div>
                </div>
                Back to top end
                Start Right Demo
                <div className="rn-right-demo">
                    <button className="demo-button">
                        <span className="text">Demos</span>
                    </button>
                </div>
                End Right Demo
                Start Modal Area
                <div className="demo-modal-area">
                    <div className="wrapper">
                        <div className="close-icon">
                            <button className="demo-close-btn"><span className="feather-x"></span></button>
                        </div>
                        <div className="rn-modal-inner">
                            <div className="demo-top text-center">
                                <h4 className="title">InBio</h4>
                                <p className="subtitle">Its a personal portfolio template. You can built any personal website easily.</p>
                            </div>
                            <ul className="popuptab-area nav nav-tabs" id="popuptab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active demo-dark" id="demodark-tab" data-bs-toggle="tab" href="#demodark" role="tab" aria-controls="demodark" aria-selected="true">Dark Demo</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link demo-light" id="demolight-tab" data-bs-toggle="tab" href="#demolight" role="tab" aria-controls="demolight" aria-selected="false">Light Demo</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="popuptabContent">
                                <div className="tab-pane show active" id="demodark" role="tabpanel" aria-labelledby="demodark-tab">
                                    <div className="content">
                                        <div className="row">
                                            Start Single Content
                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="single-demo">
                                                    <div className="inner">
                                                        <div className="thumbnail">
                                                            <a href="html/inbio/index.html">
                                                                <img className="w-100" src="../images/demo/main-demo.png" alt="Personal Portfolio" />
                                                                <span className="overlay-content">
                                                                    <span className="overlay-text">View Demo <i
                                                                        className="feather-external-link"></i></span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title"><a href="html/inbio/index.html">Main Demo</a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="single-demo">
                                                    <div className="inner badge-2">
                                                        <div className="thumbnail">
                                                            <a href="html/inbio/index-technician.html">
                                                                <img className="w-100" src="../images/demo/index-technician.png" alt="Personal Portfolio" />
                                                                <span className="overlay-content">
                                                                    <span className="overlay-text">View Demo <i
                                                                        className="feather-external-link"></i></span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title"><a href="html/inbio/index-technician.html">Technician</a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="single-demo">
                                                    <div className="inner badge-2">
                                                        <div className="thumbnail">
                                                            <a href="html/inbio/index-model.html">
                                                                <img className="w-100" src="../images/demo/home-model-v2.png" alt="Personal Portfolio" />
                                                                <span className="overlay-content">
                                                                    <span className="overlay-text">View Demo <i
                                                                        className="feather-external-link"></i></span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title"><a href="html/inbio/index-model.html">Model</a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="single-demo">
                                                    <div className="inner badge-1">
                                                        <div className="thumbnail">
                                                            <a href="html/inbio/home-consulting.html">
                                                                <img className="w-100" src="../images/demo/home-consulting.png" alt="Personal Portfolio" />
                                                                <span className="overlay-content">
                                                                    <span className="overlay-text">View Demo <i
                                                                        className="feather-external-link"></i></span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title"><a href="html/inbio/home-consulting.html">Consulting</a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="single-demo">
                                                    <div className="inner badge-1">
                                                        <div className="thumbnail">
                                                            <a href="html/inbio/fashion-designer.html">
                                                                <img className="w-100" src="../images/demo/fashion-designer.png" alt="Personal Portfolio" />
                                                                <span className="overlay-content">
                                                                    <span className="overlay-text">View Demo <i
                                                                        className="feather-external-link"></i></span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title"><a href="html/inbio/fashion-designer.html">Fashion Designer</a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="single-demo">
                                                    <div className="inner">
                                                        <div className="thumbnail">
                                                            <a href="html/inbio/index.html">
                                                                <img className="w-100" src="../images/demo/developer.png" alt="Personal Portfolio" />
                                                                <span className="overlay-content">
                                                                    <span className="overlay-text">View Demo <i
                                                                        className="feather-external-link"></i></span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title"><a href="html/inbio/index.html">Developer</a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="single-demo">
                                                    <div className="inner">
                                                        <div className="thumbnail">
                                                            <a href="html/inbio/instructor-fitness.html">
                                                                <img className="w-100" src="../images/demo/instructor-fitness.png" alt="Personal Portfolio" />
                                                                <span className="overlay-content">
                                                                    <span className="overlay-text">View Demo <i
                                                                        className="feather-external-link"></i></span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title"><a href="html/inbio/instructor-fitness.html">Fitness Instructor</a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="single-demo">
                                                    <div className="inner badge-1">
                                                        <div className="thumbnail">
                                                            <a href="html/inbio/home-web-Developer.html">
                                                                <img className="w-100" src="../images/demo/home-model.png" alt="Personal Portfolio" />
                                                                <span className="overlay-content">
                                                                    <span className="overlay-text">View Demo <i
                                                                        className="feather-external-link"></i></span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title"><a href="html/inbio/home-web-Developer.html">Web Developer</a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="single-demo">
                                                    <div className="inner">
                                                        <div className="thumbnail">
                                                            <a href="html/inbio/home-designer.html">
                                                                <img className="w-100" src="../images/demo/home-video.png" alt="Personal Portfolio" />
                                                                <span className="overlay-content">
                                                                    <span className="overlay-text">View Demo <i
                                                                        className="feather-external-link"></i></span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title"><a href="html/inbio/home-designer.html">Designer</a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="single-demo">
                                                    <div className="inner">
                                                        <div className="thumbnail">
                                                            <a href="html/inbio/home-content-writer.html">
                                                                <img className="w-100" src="../images/demo/text-rotet.png" alt="Personal Portfolio" />
                                                                <span className="overlay-content">
                                                                    <span className="overlay-text">View Demo <i
                                                                        className="feather-external-link"></i></span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title"><a href="html/inbio/home-content-writer.html">Content Writter</a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="single-demo">
                                                    <div className="inner">
                                                        <div className="thumbnail">
                                                            <a href="html/inbio/home-instructor.html">
                                                                <img className="w-100" src="../images/demo/index-boxed.png" alt="Personal Portfolio" />
                                                                <span className="overlay-content">
                                                                    <span className="overlay-text">View Demo <i
                                                                        className="feather-external-link"></i></span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title"><a href="html/inbio/home-instructor.html">Instructor</a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="single-demo">
                                                    <div className="inner">
                                                        <div className="thumbnail">
                                                            <a href="html/inbio/home-freelancer.html">
                                                                <img className="w-100" src="../images/demo/home-sticky.png" alt="Personal Portfolio" />
                                                                <span className="overlay-content">
                                                                    <span className="overlay-text">View Demo <i
                                                                        className="feather-external-link"></i></span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title"><a href="html/inbio/home-freelancer.html">Freelancer</a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="single-demo">
                                                    <div className="inner">
                                                        <div className="thumbnail">
                                                            <a href="html/inbio/home-photographer.html">
                                                                <img className="w-100" src="../images/demo/index-bg-image.png" alt="Personal Portfolio" />
                                                                <span className="overlay-content">
                                                                    <span className="overlay-text">View Demo <i
                                                                        className="feather-external-link"></i></span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title"><a href="html/inbio/home-photographer.html">Photographer</a>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="single-demo">
                                                    <div className="inner">
                                                        <div className="thumbnail">
                                                            <a href="html/inbio/index-politician.html">
                                                                <img className="w-100" src="../images/demo/front-end.png" alt="Personal Portfolio" />
                                                                <span className="overlay-content">
                                                                    <span className="overlay-text">View Demo <i
                                                                        className="feather-external-link"></i></span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title"><a href="html/inbio/index-politician.html">Politician</a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="single-demo coming-soon">
                                                    <div className="inner">
                                                        <div className="thumbnail">
                                                            <a href="#">
                                                                <img className="w-100" src="../images/demo/coming-soon.png" alt="Personal Portfolio" />
                                                            </a>
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title"><a href="#">Accountant</a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            End Single Content
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="demolight" role="tabpanel" aria-labelledby="demolight-tab">
                                    <div className="content">
                                        <div className="row">
                                            Start Single Content
                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="single-demo">
                                                    <div className="inner">
                                                        <div className="thumbnail">
                                                            <a href="html/inbio/index-white-version.html">
                                                                <img className="w-100" src="../images/demo/main-demo-white-version.png" alt="Personal Portfolio" />
                                                                <span className="overlay-content">
                                                                    <span className="overlay-text">View Demo <i
                                                                        className="feather-external-link"></i></span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title"><a href="html/inbio/index-white-version.html">Main Demo</a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="single-demo">
                                                    <div className="inner badge-2">
                                                        <div className="thumbnail">
                                                            <a href="html/inbio/index-technician-white-version.html">
                                                                <img className="w-100" src="../images/demo/index-technician-white-version.png" alt="Personal Portfolio" />
                                                                <span className="overlay-content">
                                                                    <span className="overlay-text">View Demo <i
                                                                        className="feather-external-link"></i></span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title"><a href="html/inbio/index-technician-white-version.html">Technician</a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="single-demo">
                                                    <div className="inner badge-2">
                                                        <div className="thumbnail">
                                                            <a href="html/inbio/index-model-white-version.html">
                                                                <img className="w-100" src="../images/demo/home-model-v2-white.png" alt="Personal Portfolio" />
                                                                <span className="overlay-content">
                                                                    <span className="overlay-text">View Demo <i
                                                                        className="feather-external-link"></i></span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title"><a href="html/inbio/index-model-white-version.html">Model</a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="single-demo">
                                                    <div className="inner badge-1">
                                                        <div className="thumbnail">
                                                            <a href="html/inbio/home-consulting-white-version.html">
                                                                <img className="w-100" src="../images/demo/home-consulting-white-version.png" alt="Personal Portfolio" />
                                                                <span className="overlay-content">
                                                                    <span className="overlay-text">View Demo <i
                                                                        className="feather-external-link"></i></span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title"><a href="html/inbio/home-consulting-white-version.html">Consulting</a>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="single-demo">
                                                    <div className="inner badge-1">
                                                        <div className="thumbnail">
                                                            <a href="html/inbio/fashion-designer-white-version.html">
                                                                <img className="w-100" src="../images/demo/fashion-designer-white-version.png" alt="Personal Portfolio" />
                                                                <span className="overlay-content">
                                                                    <span className="overlay-text">View Demo <i
                                                                        className="feather-external-link"></i></span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title"><a href="html/inbio/fashion-designer-white-version.html">Fashion Designer</a>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="single-demo">
                                                    <div className="inner">
                                                        <div className="thumbnail">
                                                            <a href="html/inbio/index-developer-white-version.html">
                                                                <img className="w-100" src="../images/demo/developer-white-version.png" alt="Personal Portfolio" />
                                                                <span className="overlay-content">
                                                                    <span className="overlay-text">View Demo <i
                                                                        className="feather-external-link"></i></span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title"><a href="html/inbio/index-developer-white-version.html">Developer</a>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="single-demo">
                                                    <div className="inner">
                                                        <div className="thumbnail">
                                                            <a href="html/inbio/instructor-fitness-white-version.html">
                                                                <img className="w-100" src="../images/demo/instructor-fitness-white-version.png" alt="Personal Portfolio" />
                                                                <span className="overlay-content">
                                                                    <span className="overlay-text">View Demo <i
                                                                        className="feather-external-link"></i></span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title"><a href="html/inbio/instructor-fitness-white-version.html">Fitness Instructor</a>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Content   */}
                                            {/* Start Single Content   */}
                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="single-demo">
                                                    <div className="inner badge-1">
                                                        <div className="thumbnail">
                                                            <a href="html/inbio/home-web-developer-white-version.html">
                                                                <img className="w-100" src="../images/demo/home-model-white-version.png" alt="Personal Portfolio" />
                                                                <span className="overlay-content">
                                                                    <span className="overlay-text">View Demo <i
                                                                        className="feather-external-link"></i></span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title"><a href="html/inbio/home-web-developer-white-version.html">Web Developer</a>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Content   */}
                                            {/* Start Single Content   */}
                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="single-demo">
                                                    <div className="inner">
                                                        <div className="thumbnail">
                                                            <a href="html/inbio/home-designer-white-version.html">
                                                                <img className="w-100" src="../images/demo/home-video-white-version.png" alt="Personal Portfolio" />
                                                                <span className="overlay-content">
                                                                    <span className="overlay-text">View Demo <i
                                                                        className="feather-external-link"></i></span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title"><a href="html/inbio/home-designer-white-version.html">Designer</a>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Content   */}
                                            {/* Start Single Content   */}
                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="single-demo">
                                                    <div className="inner">
                                                        <div className="thumbnail">
                                                            <a href="html/inbio/home-content-writer-white-version.html">
                                                                <img className="w-100" src="../images/demo/text-rotet-white-version.png" alt="Personal Portfolio" />
                                                                <span className="overlay-content">
                                                                    <span className="overlay-text">View Demo <i
                                                                        className="feather-external-link"></i></span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title"><a href="html/inbio/home-content-writer-white-version.html">Content
                                                                Writter</a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Content   */}
                                            {/* Start Single Content   */}
                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="single-demo">
                                                    <div className="inner">
                                                        <div className="thumbnail">
                                                            <a href="html/inbio/home-instructor-white-version.html">
                                                                <img className="w-100" src="../images/demo/index-boxed-white-version.png" alt="Personal Portfolio" />
                                                                <span className="overlay-content">
                                                                    <span className="overlay-text">View Demo <i
                                                                        className="feather-external-link"></i></span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title"><a href="html/inbio/home-instructor-white-version.html">Instructor</a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Content   */}
                                            {/* Start Single Content   */}
                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="single-demo">
                                                    <div className="inner">
                                                        <div className="thumbnail">
                                                            <a href="html/inbio/home-freelancer-white-version.html">
                                                                <img className="w-100" src="../images/demo/home-sticky-white-version.png" alt="Personal Portfolio" />
                                                                <span className="overlay-content">
                                                                    <span className="overlay-text">View Demo <i
                                                                        className="feather-external-link"></i></span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title"><a href="html/inbio/home-freelancer-white-version.html">Freelancer</a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Content   */}
                                            {/* Start Single Content   */}
                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="single-demo">
                                                    <div className="inner">
                                                        <div className="thumbnail">
                                                            <a href="html/inbio/home-photographer-white-version.html">
                                                                <img className="w-100" src="../images/demo/index-bg-image-white-version.png" alt="Personal Portfolio" />
                                                                <span className="overlay-content">
                                                                    <span className="overlay-text">View Demo <i
                                                                        className="feather-external-link"></i></span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title"><a href="html/inbio/home-photographer-white-version.html">Photographer</a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Content   */}
                                            {/* Start Single Content   */}
                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="single-demo">
                                                    <div className="inner">
                                                        <div className="thumbnail">
                                                            <a href="html/inbio/index-politician-white-version.html">
                                                                <img className="w-100" src="../images/demo/front-end-white-version.png" alt="Personal Portfolio" />
                                                                <span className="overlay-content">
                                                                    <span className="overlay-text">View Demo <i
                                                                        className="feather-external-link"></i></span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title"><a href="html/inbio/index-politician-white-version.html">Politician</a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Content   */}
                                            {/* Start Single Content   */}
                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="single-demo coming-soon">
                                                    <div className="inner">
                                                        <div className="thumbnail">
                                                            <a href="#">
                                                                <img className="w-100" src="../images/demo/coming-soon.png" alt="Personal Portfolio" />
                                                            </a>
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title"><a href="#">Accountant</a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Content   */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Modal Area   */}
            </main>
            {/* Rn footer area Start  */}
            <div id="footer" className="rn-footer-area footer-style-2 rn-section-gapTop section-separator">
                <div className="container pb--80 pb_sm--40 plr_sm--20">
                    <div className="row">
                        <div className="col-xl-3 col-12 col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="logo-thumbnail">
                                <a href="#"><img src="../images/logo/logo.png" alt="logo-image" /></a>
                            </div>
                            <div className="social-icone-wrapper">
                                <ul className="social-share d-flex liststyle">
                                    <li className="facebook"><a href="#"><i data-feather="linkedin"></i></a>
                                    </li>
                                    <li className="instagram"><a href="#"><i data-feather="instagram"></i></a>
                                    </li>
                                    <li className="linkedin"><a href="#"><i data-feather="twitter"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sl-3 col-12 mt_sm--20 col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="menu-wrapper">
                                <div className="menu-title">
                                    <h6>product</h6>
                                </div>
                                <ul className="menu-footer">
                                    <li><a href="#">Database</a></li>
                                    <li><a href="#">Authentication</a></li>
                                    <li><a href="#">Storage</a></li>
                                    <li><a href="#">Support</a></li>
                                    <li><a href="#">Pricing</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sl-3 col-12 mt_sm--20 col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="menu-wrapper">
                                <div className="menu-title">
                                    <h6>Resources</h6>
                                </div>
                                <ul className="menu-footer">
                                    <li><a href="#">Authentication</a></li>
                                    <li><a href="#">System Status</a></li>
                                    <li><a href="#">Terms of service</a></li>
                                    <li><a href="#">Pricing</a></li>
                                    <li><a href="#">over right</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sl-3 col-12 mt_sm--20 col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="menu-wrapper">
                                <div className="menu-title">
                                    <h6>Developers</h6>
                                </div>
                                <ul className="menu-footer">
                                    <li><a href="#">Documentation</a></li>
                                    <li><a href="#">Authentication</a></li>
                                    <li><a href="#">API Reference</a></li>
                                    <li><a href="#">Support</a></li>
                                    <li><a href="#">Open Source</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright text-center ptb--40 section-separator">
                    <p className="description">© 2022. All rights reserved by <a target="_blank" href="https://themeforest.net/user/rainbow-themes/portfolio">Rainbow-Themes.</a></p>
                </div>
            </div>



        </div>
    )
}

export default Header;