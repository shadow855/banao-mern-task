import { Link } from 'react-router-dom';
import './App.css';
import UnionImg from './Images/Union1.png'
import itsFreeIcon from './Images/ItsFreeIcon.png'
import joinGroupIcon from './Images/joingroupIcon.png'
import viewIcon from './Images/ViewIcon.png'
import shareIcon from './Images/shareIcon.png'
import buttonListIcon from './Images/button-list-Icon.png'
import dateIcon from './Images/dateIcon.png'
import locationIcon from './Images/locationIcon.png'
import bagIcon from './Images/bagIcon.png'
import editIcon from './Images/editIcon.png'
import warningIcon from './Images/warningIcon.png'
import eyeIcon from './Images/eyeIcon.png'
import googleIcon from './Images/googleIcon.png'
import loginsignPic from './Images/login-signPic.png'
import leaveGroup from './Images/leaveGroup.png'
import crossIcon from './Images/crossIcon.png'
import thumbIcon from './Images/thumbIcon.png'
import arrowLeft from './Images/arrowLeft.png'
import mobileEditIcon from './Images/mobileEditIcon.png'

import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';


function App() {

  const [showList1, setShowList1] = useState(false);
  const [showList2, setShowList2] = useState(false);
  const [showList3, setShowList3] = useState(false);
  const [showList4, setShowList4] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [toggleFollowButton, setToggleFollowButton] = useState(false);
  const [toggleButtonText1, setToggleButtonText1] = useState("Follow");
  const [toggleButtonText2, setToggleButtonText2] = useState("Follow");
  const [toggleButtonText3, setToggleButtonText3] = useState("Follow");
  const [toggleButtonText4, setToggleButtonText4] = useState("Follow");
  const [mobileJoinText, setMobileJoinText] = useState("Join Group");
  const [mobileJoinToggle, setMobileJoinToggle] = useState(false);

  const isDesktopOrMobile = useMediaQuery({ minWidth: 992 });
  const isDesktopOrMobileModal = useMediaQuery({ minWidth: 768 });

  const toggleList1 = () => {
    setShowList1(!showList1);
  };
  const toggleList2 = () => {
    setShowList2(!showList2);
  };
  const toggleList3 = () => {
    setShowList3(!showList3);
  };
  const toggleList4 = () => {
    setShowList4(!showList4);
  };

  const togglePass = () => {
    setShowPass(!showPass);
  }

  const handleMobileJoin = () => {
    setMobileJoinToggle(!mobileJoinToggle);

    if (!mobileJoinToggle) {
      setMobileJoinText("Leave Group");
    }
    else {
      setMobileJoinText("Join Group");
    }
  }

  const handleUser = (e) => {
    e.preventDefault();

    const modal1 = document.getElementById('exampleModalToggle');
    const modal2 = document.getElementById('exampleModalToggle2');

    const bootstrapModal1 = window.bootstrap.Modal.getInstance(modal1);
    const bootstrapModal2 = window.bootstrap.Modal.getInstance(modal2);

    if (bootstrapModal1) {
      bootstrapModal1.hide();
    }

    if (bootstrapModal2) {
      bootstrapModal2.hide();
    }

    setShowUser(!showUser);
  }

  useEffect(() => {
    const handleScroll = () => {
      const backgroundDiv = document.querySelector('.background-div');
      const belowImgDivNav = document.querySelector('.below-img-div-nav-container');
      const scrollPosition = window.scrollY;

      if (backgroundDiv && belowImgDivNav) {
        const backgroundDivBottom = backgroundDiv.getBoundingClientRect().bottom + window.scrollY;
        if (scrollPosition >= backgroundDivBottom) {
          belowImgDivNav.classList.add('sticky');
          backgroundDiv.classList.add('background-div-padding');
        } else {
          belowImgDivNav.classList.remove('sticky');
          backgroundDiv.classList.remove('background-div-padding');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const buttonFollow1 = () => {
    if (!toggleFollowButton) {
      var element = document.querySelector('.follow-button-change1');
      element.classList.add('follow-button');
      element.classList.remove('follow-button-clicked');
      setToggleButtonText1("Follow");
      setToggleFollowButton(true);
    }
    else {
      var element = document.querySelector('.follow-button-change1');
      element.classList.add('follow-button-clicked');
      element.classList.remove('follow-button');
      setToggleButtonText1("Followed");
      setToggleFollowButton(false);
    }

  }

  const buttonFollow2 = () => {
    if (!toggleFollowButton) {
      var element = document.querySelector('.follow-button-change2');
      element.classList.add('follow-button');
      element.classList.remove('follow-button-clicked');
      setToggleButtonText2("Follow");
      setToggleFollowButton(true);
    }
    else {
      var element = document.querySelector('.follow-button-change2');
      element.classList.add('follow-button-clicked');
      element.classList.remove('follow-button');
      setToggleButtonText2("Followed");
      setToggleFollowButton(false);
    }

  }

  const buttonFollow3 = () => {
    if (!toggleFollowButton) {
      var element = document.querySelector('.follow-button-change3');
      element.classList.add('follow-button');
      element.classList.remove('follow-button-clicked');
      setToggleButtonText3("Follow");
      setToggleFollowButton(true);
    }
    else {
      var element = document.querySelector('.follow-button-change3');
      element.classList.add('follow-button-clicked');
      element.classList.remove('follow-button');
      setToggleButtonText3("Followed");
      setToggleFollowButton(false);
    }

  }

  const buttonFollow4 = () => {
    if (!toggleFollowButton) {
      var element = document.querySelector('.follow-button-change4');
      element.classList.add('follow-button');
      element.classList.remove('follow-button-clicked');
      setToggleButtonText4("Follow");
      setToggleFollowButton(true);
    }
    else {
      var element = document.querySelector('.follow-button-change4');
      element.classList.add('follow-button-clicked');
      element.classList.remove('follow-button');
      setToggleButtonText4("Followed");
      setToggleFollowButton(false);
    }

  }

  useEffect(() => {
    var element = document.querySelector('.all-posts-div-container');
    if (!isDesktopOrMobile) {
      element.classList.remove('justify-content-between');
      element.classList.add('justify-content-center');
    }
    else {
      element.classList.add('justify-content-between');
      element.classList.remove('justify-content-center');
    }

  }, [isDesktopOrMobile])


  return (
    <div className='body-container'>
      {isDesktopOrMobile ?
        <div className="d-flex justify-content-around align-items-center nav-div">
          <Link className="logo-name" to="#" >
            <span style={{ color: 'rgba(39, 163, 101, 1)' }}>ATG.</span>
            <span style={{ color: 'rgba(92, 93, 93, 1)' }}>W<img alt="ALT logo" src={UnionImg} style={{ marginBottom: '4px', height: '17px', width: '17px' }} />RLD</span>
          </Link>
          <form className="d-flex form-input" role="search">
            <button className="custom-search" type="submit">
              <img alt="Search" src="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-search-24px'%20clip-path='url(%23clip0_1_1172)'%3e%3cpath%20id='Vector'%20d='M14.2083%2012.8333H13.4842L13.2275%2012.5858C14.1258%2011.5408%2014.6667%2010.1842%2014.6667%208.70833C14.6667%205.4175%2011.9992%202.75%208.70833%202.75C5.4175%202.75%202.75%205.4175%202.75%208.70833C2.75%2011.9992%205.4175%2014.6667%208.70833%2014.6667C10.1842%2014.6667%2011.5408%2014.1258%2012.5858%2013.2275L12.8333%2013.4842V14.2083L17.4167%2018.7825L18.7825%2017.4167L14.2083%2012.8333ZM8.70833%2012.8333C6.42583%2012.8333%204.58333%2010.9908%204.58333%208.70833C4.58333%206.42583%206.42583%204.58333%208.70833%204.58333C10.9908%204.58333%2012.8333%206.42583%2012.8333%208.70833C12.8333%2010.9908%2010.9908%2012.8333%208.70833%2012.8333Z'%20fill='%237A7A7A'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1172'%3e%3crect%20width='22'%20height='22'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" width={22} height={22} />
            </button>
            <input className="form-control me-2" type="search" placeholder="Search for your favorite groups in ATG" aria-label="Search" style={{ backgroundColor: '#f2f2f2', borderRadius: '0 21px 21px 0', border: 'none' }} />
          </form>
          {showUser ? <div className="user-profile d-flex align-items-center">
            <div className="user-pic"></div>
            <div className='user-name'>Siddharth Goyal</div>
            <img src={itsFreeIcon} alt="itsFreeIcon" />
          </div> :
            <div className="create-acc-link d-flex align-items-center">
              Create account.<Link className="" aria-current="page" data-bs-toggle="modal" data-bs-target="#exampleModalToggle" to="#" style={{ textDecoration: 'none' }}> <span style={{ color: '#0D6EFD', marginLeft: '5px', fontWeight: 'bold' }}>It's free! <img alt="arrowIcon" src={itsFreeIcon} /></span></Link>
            </div>
          }
        </div> : <></>}

      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-custom-width">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title" id="exampleModalToggleLabel">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</div>
              <button type="button" className="btn-close modal-close-button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex justify-content-around">
              <div className="create-acc">
                <div className='create-acc-title'>Create Account</div>
                <form className='form-create'>
                  <div className="d-flex">
                    <input type="name" className="form-control input-name" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='First Name' style={{ borderTopLeftRadius: '8px' }} />
                    <input type="name" className="form-control input-name" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Last Name' style={{ borderTopRightRadius: '8px' }} />
                  </div>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
                  <div className="input-group">
                    <input type={showPass ? "name" : "password"} style={{ borderRight: 'none' }} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    <div className="input-group-append">
                      <span className="input-group-text" id="togglePassword">
                        <img src={eyeIcon} alt="eyeIcon" onClick={togglePass} />
                      </span>
                    </div>
                  </div>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" style={{ borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px' }} />
                  <button className="btn btn-primary create-button" onClick={(e) => handleUser(e)}>Create Account</button>
                </form>
                <button className='sign-fb'><img src='https://s3-alpha-sig.figma.com/img/2260/c71f/967377e16ffbb611ef03393e79e51f6e?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F~8Tw-ATcsI2pGAxhPhupUwt3L7GNfW3yobHXm4vZUEhNGwIoS2ALlexWwzTOuBKHC4o3gtZ6RDMCESXNeleK2Nz~m7L6A-pOgYpi9PgH0Gwh~lyPD-LlKn4yCpoTu9bcw6O7IOCALT8pNGeqBKt5hujWvuzJZgsAb6pZj7T9zxGTtnFKNemXwcWicEX2MAm~cA~8nR8qCbW2f1fTlbj9LASHcvvWLtcQbqH-VgmPonmk1j1Xh8BaRtU472c~IZRd5xah4U0wU-T3fydhPPrLobPCPOnhkriX-eEv2rXHn0SH3c2rCwscNT-2FVfd5KTdGBYOAYVm1hVBTQ~HpeQwA__' alt="fbIcon" style={{ height: '16px', width: '16px', marginRight: '10px', marginBottom: '2px' }} />Sign up with Facebook</button>
                <button className='google-fb'><img src={googleIcon} alt="gmailIcon" style={{ height: '16px', width: '16px', marginRight: '10px', marginBottom: '2px' }} />Sign up with Google</button>

              </div>
              <div className="create-acc-right d-flex flex-column  align-items-end">
                <div className="already-check">Already have an account? <span data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Sign In</span></div>
                <div className="login-signPic"><img src={loginsignPic} alt="loginsignPic" /></div>
                <div className="text-below-Pic">By signing up, you agree to our Terms & conditions, Privacy policy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-custom-width">
          <div className="modal-content modal-content-2">
            <div className="modal-header">
              <div className="modal-title" id="exampleModalToggleLabel">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</div>
              <button type="button" className="btn-close modal-close-button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex justify-content-around">
              <div className="create-acc-2">
                <div className='create-acc-title'>Sign In</div>
                <form className='form-create-2'>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
                  <div className="input-group">
                    <input type={showPass ? "name" : "password"} style={{ borderRight: 'none' }} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    <div className="input-group-append">
                      <span className="input-group-text" id="togglePassword">
                        <img src={eyeIcon} alt="eyeIcon" onClick={togglePass} />
                      </span>
                    </div>
                  </div>
                  <button className="btn btn-primary create-button" onClick={(e) => handleUser(e)}>Sign In</button>
                </form>
                <button className='sign-fb'><img src='https://s3-alpha-sig.figma.com/img/2260/c71f/967377e16ffbb611ef03393e79e51f6e?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F~8Tw-ATcsI2pGAxhPhupUwt3L7GNfW3yobHXm4vZUEhNGwIoS2ALlexWwzTOuBKHC4o3gtZ6RDMCESXNeleK2Nz~m7L6A-pOgYpi9PgH0Gwh~lyPD-LlKn4yCpoTu9bcw6O7IOCALT8pNGeqBKt5hujWvuzJZgsAb6pZj7T9zxGTtnFKNemXwcWicEX2MAm~cA~8nR8qCbW2f1fTlbj9LASHcvvWLtcQbqH-VgmPonmk1j1Xh8BaRtU472c~IZRd5xah4U0wU-T3fydhPPrLobPCPOnhkriX-eEv2rXHn0SH3c2rCwscNT-2FVfd5KTdGBYOAYVm1hVBTQ~HpeQwA__' alt="fbIcon" style={{ height: '16px', width: '16px', marginRight: '10px', marginBottom: '2px' }} />Sign up with Facebook</button>
                <button className='google-fb'><img src={googleIcon} alt="gmailIcon" style={{ height: '16px', width: '16px', marginRight: '10px', marginBottom: '2px' }} />Sign up with Google</button>
                <div className='forgotPass'>Forgot Password?</div>
              </div>
              <div className="create-acc-right-2 d-flex flex-column  align-items-end">
                <div className="already-check">Don’t have an account yet? <span data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Create new for free!</span></div>
                <div className="login-signPic"><img src={loginsignPic} alt="loginsignPic" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal-Mobile --> */}
      <div className="modal fade modal-full-width" id="mobileexampleModalToggle1" aria-hidden="true" aria-labelledby="exampleModalToggleLabel1" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-custom-width-mobile">
          <div className="modal-content modal-content-mobile">
            {isDesktopOrMobileModal ?
              <div className="modal-header">
                <div className="modal-title" id="exampleModalToggleLabel">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</div>
                <button type="button" className="btn-close btn-close-mobile modal-close-button" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              : <></>}
            <div className="modal-body d-flex justify-content-around">
              {isDesktopOrMobileModal ?
                <div className="create-acc">
                  <div className='create-acc-title'>Create Account</div>
                  <form className='form-create'>
                    <div className="d-flex">
                      <input type="name" className="form-control input-name" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='First Name' style={{ borderTopLeftRadius: '8px' }} />
                      <input type="name" className="form-control input-name" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Last Name' style={{ borderTopRightRadius: '8px' }} />
                    </div>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
                    <div className="input-group">
                      <input type={showPass ? "name" : "password"} style={{ borderRight: 'none' }} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                      <div className="input-group-append">
                        <span className="input-group-text" id="togglePassword">
                          <img src={eyeIcon} alt="eyeIcon" onClick={togglePass} />
                        </span>
                      </div>
                    </div>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" style={{ borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px' }} />
                    <button type='submit' className="btn btn-primary create-button">Create Account</button>
                  </form>
                  <button className='sign-fb'><img src='https://s3-alpha-sig.figma.com/img/2260/c71f/967377e16ffbb611ef03393e79e51f6e?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F~8Tw-ATcsI2pGAxhPhupUwt3L7GNfW3yobHXm4vZUEhNGwIoS2ALlexWwzTOuBKHC4o3gtZ6RDMCESXNeleK2Nz~m7L6A-pOgYpi9PgH0Gwh~lyPD-LlKn4yCpoTu9bcw6O7IOCALT8pNGeqBKt5hujWvuzJZgsAb6pZj7T9zxGTtnFKNemXwcWicEX2MAm~cA~8nR8qCbW2f1fTlbj9LASHcvvWLtcQbqH-VgmPonmk1j1Xh8BaRtU472c~IZRd5xah4U0wU-T3fydhPPrLobPCPOnhkriX-eEv2rXHn0SH3c2rCwscNT-2FVfd5KTdGBYOAYVm1hVBTQ~HpeQwA__' alt="fbIcon" style={{ height: '16px', width: '16px', marginRight: '10px', marginBottom: '2px' }} />Sign up with Facebook</button>
                  <button className='google-fb'><img src={googleIcon} alt="gmailIcon" style={{ height: '16px', width: '16px', marginRight: '10px', marginBottom: '2px' }} />Sign up with Google</button>

                </div>
                :
                <div className="create-acc-mobile-small" style={{ border: '0.1px solid red' }}>
                  <div className="d-flex justify-content-between-align-items-center">
                    <div className='create-acc-title' style={{ marginBottom: '20px' }}>Create Account</div>
                    <button type="button" className="btn-close btn-close-mobile-small modal-close-button" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <form className='form-create-small'>
                    <div className="d-flex">
                      <input type="name" className="form-control input-mobile-small input-name" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='First Name' style={{ borderTopLeftRadius: '8px' }} />
                      <input type="name" className="form-control input-mobile-small input-name" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Last Name' style={{ borderTopRightRadius: '8px' }} />
                    </div>
                    <input type="email" className="form-control input-mobile-small" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
                    <div className="input-group">
                      <input type={showPass ? "name" : "password"} style={{ borderRight: 'none' }} className="form-control input-mobile-small" id="exampleInputPassword1" placeholder="Password" />
                      <div className="input-group-append">
                        <span className="input-group-text" id="togglePassword">
                          <img src={eyeIcon} alt="eyeIcon" onClick={togglePass} />
                        </span>
                      </div>
                    </div>
                    <input type="password" className="form-control input-mobile-small" id="exampleInputPassword1" placeholder="Confirm Password" style={{ borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px' }} />
                    <div className="d-flex justify-content-between align-items-center">
                      <button type='submit' className="btn btn-primary create-button create-button-small">Create Account</button>
                      <div className='or-signin' data-bs-target="#mobileexampleModalToggle2" data-bs-toggle="modal">or, Sign In</div>
                    </div>
                  </form>
                  <div className="d-flex flex-column">
                    <button className='sign-fb-small'><img src='https://s3-alpha-sig.figma.com/img/2260/c71f/967377e16ffbb611ef03393e79e51f6e?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F~8Tw-ATcsI2pGAxhPhupUwt3L7GNfW3yobHXm4vZUEhNGwIoS2ALlexWwzTOuBKHC4o3gtZ6RDMCESXNeleK2Nz~m7L6A-pOgYpi9PgH0Gwh~lyPD-LlKn4yCpoTu9bcw6O7IOCALT8pNGeqBKt5hujWvuzJZgsAb6pZj7T9zxGTtnFKNemXwcWicEX2MAm~cA~8nR8qCbW2f1fTlbj9LASHcvvWLtcQbqH-VgmPonmk1j1Xh8BaRtU472c~IZRd5xah4U0wU-T3fydhPPrLobPCPOnhkriX-eEv2rXHn0SH3c2rCwscNT-2FVfd5KTdGBYOAYVm1hVBTQ~HpeQwA__' alt="fbIcon" style={{ height: '16px', width: '16px', marginRight: '10px', marginBottom: '2px' }} />Sign up with Facebook</button>
                    <button className='google-fb-small'><img src={googleIcon} alt="gmailIcon" style={{ height: '16px', width: '16px', marginRight: '10px', marginBottom: '2px' }} />Sign up with Google</button>
                    <div className="text-below-Pic-small">By signing up, you agree to our Terms & conditions, Privacy policy</div>
                  </div>
                </div>
              }
              {isDesktopOrMobileModal ?
                <div className="create-acc-right d-flex flex-column  align-items-end">
                  <div className="already-check">Already have an account? <span data-bs-target="#mobileexampleModalToggle2" data-bs-toggle="modal">Sign In</span></div>
                  <div className="login-signPic"><img src={loginsignPic} alt="loginsignPic" /></div>
                  <div className="text-below-Pic">By signing up, you agree to our Terms & conditions, Privacy policy</div>
                </div>
                : <></>}
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade modal-full-width" id="mobileexampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-custom-width-mobile">
          <div className="modal-content modal-content-mobile">
            {isDesktopOrMobileModal ?
              <div className="modal-header">
                <div className="modal-title" id="exampleModalToggleLabel">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</div>
                <button type="button" className="btn-close btn-close-mobile modal-close-button" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              : <></>}
            <div className="modal-body d-flex justify-content-around">
              {isDesktopOrMobileModal ?
                <div className="create-acc">
                  <div className='create-acc-title'>Welcome Back!</div>
                  <form className='form-create-2'>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
                    <div className="input-group">
                      <input type={showPass ? "name" : "password"} style={{ borderRight: 'none' }} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                      <div className="input-group-append">
                        <span className="input-group-text" id="togglePassword">
                          <img src={eyeIcon} alt="eyeIcon" onClick={togglePass} />
                        </span>
                      </div>
                    </div>
                    <button type='submit' className="btn btn-primary create-button">Sign In</button>
                  </form>
                  <button className='sign-fb'><img src='https://s3-alpha-sig.figma.com/img/2260/c71f/967377e16ffbb611ef03393e79e51f6e?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F~8Tw-ATcsI2pGAxhPhupUwt3L7GNfW3yobHXm4vZUEhNGwIoS2ALlexWwzTOuBKHC4o3gtZ6RDMCESXNeleK2Nz~m7L6A-pOgYpi9PgH0Gwh~lyPD-LlKn4yCpoTu9bcw6O7IOCALT8pNGeqBKt5hujWvuzJZgsAb6pZj7T9zxGTtnFKNemXwcWicEX2MAm~cA~8nR8qCbW2f1fTlbj9LASHcvvWLtcQbqH-VgmPonmk1j1Xh8BaRtU472c~IZRd5xah4U0wU-T3fydhPPrLobPCPOnhkriX-eEv2rXHn0SH3c2rCwscNT-2FVfd5KTdGBYOAYVm1hVBTQ~HpeQwA__' alt="fbIcon" style={{ height: '16px', width: '16px', marginRight: '10px', marginBottom: '2px' }} />Sign up with Facebook</button>
                  <button className='google-fb'><img src={googleIcon} alt="gmailIcon" style={{ height: '16px', width: '16px', marginRight: '10px', marginBottom: '2px' }} />Sign up with Google</button>
                  <div className='forgotPass'>Forgot Password?</div>
                </div>
                :
                <div className="create-acc-mobile-small" style={{ border: '0.1px solid red' }}>
                  <div className="d-flex justify-content-between-align-items-center">
                    <div className='create-acc-title' style={{ marginBottom: '20px' }}>Welcome Back!</div>
                    <button type="button" className="btn-close btn-close-mobile-small modal-close-button" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <form className='form-create-small'>
                    <input type="email" className="form-control input-mobile-small" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
                    <div className="input-group">
                      <input type={showPass ? "name" : "password"} style={{ borderRight: 'none' }} className="form-control input-mobile-small" id="exampleInputPassword1" placeholder="Password" />
                      <div className="input-group-append">
                        <span className="input-group-text" id="togglePassword">
                          <img src={eyeIcon} alt="eyeIcon" onClick={togglePass} />
                        </span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <button type='submit' className="btn btn-primary create-button signin-button-small">Sign In</button>
                      <div className='or-signin' data-bs-target="#mobileexampleModalToggle1" data-bs-toggle="modal">or, Create Account</div>
                    </div>
                  </form>
                  <div className="d-flex flex-column">
                    <button className='sign-fb-small'><img src='https://s3-alpha-sig.figma.com/img/2260/c71f/967377e16ffbb611ef03393e79e51f6e?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F~8Tw-ATcsI2pGAxhPhupUwt3L7GNfW3yobHXm4vZUEhNGwIoS2ALlexWwzTOuBKHC4o3gtZ6RDMCESXNeleK2Nz~m7L6A-pOgYpi9PgH0Gwh~lyPD-LlKn4yCpoTu9bcw6O7IOCALT8pNGeqBKt5hujWvuzJZgsAb6pZj7T9zxGTtnFKNemXwcWicEX2MAm~cA~8nR8qCbW2f1fTlbj9LASHcvvWLtcQbqH-VgmPonmk1j1Xh8BaRtU472c~IZRd5xah4U0wU-T3fydhPPrLobPCPOnhkriX-eEv2rXHn0SH3c2rCwscNT-2FVfd5KTdGBYOAYVm1hVBTQ~HpeQwA__' alt="fbIcon" style={{ height: '16px', width: '16px', marginRight: '10px', marginBottom: '2px' }} />Sign up with Facebook</button>
                    <button className='google-fb-small'><img src={googleIcon} alt="gmailIcon" style={{ height: '16px', width: '16px', marginRight: '10px', marginBottom: '2px' }} />Sign up with Google</button>
                    <div className='forgotPass'>Forgot Password?</div>
                  </div>
                </div>
              }
              {isDesktopOrMobileModal ?
                <div className="create-acc-right d-flex flex-column  align-items-end">
                  <div className="already-check">Don’t have an account yet? <span data-bs-target="#mobileexampleModalToggle1" data-bs-toggle="modal">Create new for free!</span></div>
                  <div className="login-signPic"><img src={loginsignPic} alt="loginsignPic" /></div>
                </div>
                : <></>}
            </div>
          </div>
        </div>
      </div>

      <div className="background-div">
        <p className="overlay-text">Computer Engineering</p>
        <p className="overlay-text-2">142,765 Computer Engineers follow this</p>
        {isDesktopOrMobile ? <></> :
          <div className='mobie-nav d-flex justify-content-between align-items-center'>
            <img src={arrowLeft} alt="arrowLeft" style={{ marginLeft: '20px' }} />
            <button className='mobile-join-group' onClick={handleMobileJoin}>{mobileJoinText}</button>
          </div>
        }
      </div>

      <div className='d-flex justify-content-center flex-column align-items-center below-img-div-nav-container bg-white'>
        {isDesktopOrMobile ?
          <div className='below-img-div-nav d-flex justify-content-between align-items-center'>
            <div className='d-flex justify-content-between align-items-center below-img-div-nav-links'>
              <div className='d-flex justify-content-center align-items-center' style={{ color: 'black', height: '68px', borderBottom: '1px solid' }}>All Posts (32)</div>
              <div>Article</div>
              <div>Event</div>
              <div>Education</div>
              <div>Job</div>
            </div>
            <div>
              <button className='post-button'>Write a Post<img alt="arrowIcon" src={itsFreeIcon} style={{ marginLeft: '12px' }} /></button>
              {showUser ?
                <button className='group-button-leave' onClick={handleUser}> <img alt="arrowIcon" src={leaveGroup} style={{ marginRight: '6px' }} />Leave Group</button>
                :
                <button className='group-button' onClick={handleUser}><img alt="arrowIcon" src={joinGroupIcon} style={{ marginRight: '6px' }} />Join Group</button>
              }
            </div>
          </div>
          :
          <div className='below-img-div-nav-mobile d-flex justify-content-between align-items-center'>
            <div className='mobile-posts'>Posts(368)</div>
            <button className='filter-all'>Filter: All <img src={itsFreeIcon} alt="itsFreeIcon" style={{ marginLeft: '10px' }} /></button>
          </div>
        }
      </div >

      <div className='d-flex justify-content-center' style={{ marginTop: '28px' }}>
        <div className="all-posts-div-container d-flex justify-content-between">

          <div className="all-posts-div d-flex flex-column">

            <div className='post-1'>
              <div className='post-1-image'></div>
              <div className="post-1-content">
                <div className='type-post-text'>✍️ Article</div>
                <div className='d-flex justify-content-between'>
                  <div className='post-title'>What if famous brands had regular fonts? Meet RegulaBrands!</div>
                  <div className='list-container'>
                    <button className='list-button d-flex justify-content-center align-items-center' onClick={toggleList1}><img src={buttonListIcon} alt="lists" /></button>
                    {showList1 && (
                      <ul className="list-group">
                        <li className="list-group-item" style={{ border: 'none' }}>Edit</li>
                        <li className="list-group-item" style={{ border: 'none' }}>Report</li>
                        <li className="list-group-item" style={{ border: 'none' }}>Option 3</li>
                      </ul>
                    )}
                  </div>
                </div>
                <div className="post-desc">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</div>
                <div className="post-footer d-flex align-items-center justify-content-between">
                  <div className='d-flex align-items-center'>
                    <div className="post-1-creator-pic"></div>
                    {isDesktopOrMobile ?
                      <div className="post-creator-name">Sarthak Kamra</div>
                      :
                      <div>
                        <div className="post-creator-name">Sarthak Kamra</div>
                        <div className='views d-flex align-items-center'>
                          <div className='views-text' style={{ marginLeft: '0' }}>1.4k views</div>
                        </div>
                      </div>
                    }
                  </div>
                  <div className="views-share d-flex align-items-center">
                    {isDesktopOrMobile ?
                      <div className='views d-flex align-items-center'>
                        <img src={viewIcon} alt="views-icon" />
                        <div className='views-text'>1.4k views</div>
                      </div>
                      : <></>}
                    {isDesktopOrMobile ?
                      <button className='share-button'><img src={shareIcon} alt="shareIcon" /></button>
                      :
                      <button className='share-button-mobile'><img src={shareIcon} alt="shareIcon" style={{ marginRight: '10px' }} />Share</button>
                    }
                  </div>
                </div>
              </div>
            </div>

            <div className='post-2'>
              <div className='post-2-image'></div>
              <div className="post-2-content">
                <div className='type-post-text'>🔬️ Education</div>
                <div className='d-flex justify-content-between'>
                  <div className='post-title'>Tax Benefits for Investment under National Pension Scheme launched by Government</div>
                  <div className='list-container'>
                    <button className='list-button d-flex justify-content-center align-items-center' onClick={toggleList2}><img src={buttonListIcon} alt="lists" /></button>
                    {showList2 && (
                      <ul className="list-group">
                        <li className="list-group-item" style={{ border: 'none' }}>Edit</li>
                        <li className="list-group-item" style={{ border: 'none' }}>Report</li>
                        <li className="list-group-item" style={{ border: 'none' }}>Option 3</li>
                      </ul>
                    )}
                  </div>
                </div>
                <div className="post-desc">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</div>
                <div className="post-footer d-flex align-items-center justify-content-between">
                  <div className='d-flex align-items-center'>
                    <div className="post-2-creator-pic"></div>
                    {isDesktopOrMobile ?
                      <div className="post-creator-name">Sarah West</div>
                      :
                      <div>
                        <div className="post-creator-name">Sarah West</div>
                        <div className='views d-flex align-items-center'>
                          <div className='views-text' style={{ marginLeft: '0' }}>4.8k views</div>
                        </div>
                      </div>
                    }
                  </div>
                  <div className="views-share d-flex align-items-center">
                    {isDesktopOrMobile ?
                      <div className='views d-flex align-items-center'>
                        <img src={viewIcon} alt="views-icon" />
                        <div className='views-text'>1.4k views</div>
                      </div>
                      : <></>}
                    {isDesktopOrMobile ?
                      <button className='share-button'><img src={shareIcon} alt="shareIcon" /></button>
                      :
                      <button className='share-button-mobile'><img src={shareIcon} alt="shareIcon" style={{ marginRight: '10px' }} />Share</button>
                    }
                  </div>
                </div>
              </div>
            </div>

            <div className='post-3'>
              <div className='post-3-image'></div>
              <div className="post-3-content">
                <div className='type-post-text'>🗓️ Meetup</div>
                <div className='d-flex justify-content-between'>
                  <div className='post-title'>Finance & Investment Elite Social Mixer @Lujiazui</div>
                  <div className='list-container'>
                    <button className='list-button d-flex justify-content-center align-items-center' onClick={toggleList3}><img src={buttonListIcon} alt="lists" /></button>
                    {showList3 && (
                      <ul className="list-group">
                        <li className="list-group-item" style={{ border: 'none' }}>Edit</li>
                        <li className="list-group-item" style={{ border: 'none' }}>Report</li>
                        <li className="list-group-item" style={{ border: 'none' }}>Option 3</li>
                      </ul>
                    )}
                  </div>
                </div>
                <div className="post-desc-3 d-flex justify-content-between align-items-center">
                  <div className="date d-flex align-items-center"><img src={dateIcon} alt="dateIcon" style={{ marginRight: '7px' }} />Fri, 12 Oct, 2018</div>
                  <div className="location d-flex align-items-center"><img src={locationIcon} alt="locationIcon" style={{ marginRight: '7px' }} />Ahmedabad, India</div>
                </div>
                <button className='desc-button-3'>Visit Website</button>
                <div className="post-footer d-flex align-items-center justify-content-between">
                  <div className='d-flex align-items-center'>
                    <div className="post-3-creator-pic"></div>
                    {isDesktopOrMobile ?
                      <div className="post-creator-name">Ronal Jone</div>
                      :
                      <div>
                        <div className="post-creator-name">Ronal Jones</div>
                        <div className='views d-flex align-items-center'>
                          <div className='views-text' style={{ marginLeft: '0' }}>800 views</div>
                        </div>
                      </div>
                    }
                  </div>
                  <div className="views-share d-flex align-items-center">
                    {isDesktopOrMobile ?
                      <div className='views d-flex align-items-center'>
                        <img src={viewIcon} alt="views-icon" />
                        <div className='views-text'>1.4k views</div>
                      </div>
                      : <></>}
                    {isDesktopOrMobile ?
                      <button className='share-button'><img src={shareIcon} alt="shareIcon" /></button>
                      :
                      <button className='share-button-mobile'><img src={shareIcon} alt="shareIcon" style={{ marginRight: '10px' }} />Share</button>
                    }
                  </div>
                </div>
              </div>
            </div>

            <div className='post-4'>
              <div className="post-4-content">
                <div className='type-post-text'>💼️ Job</div>
                <div className='d-flex justify-content-between'>
                  <div className='post-title'>Software Developer</div>
                  <div className='list-container'>
                    <button className='list-button d-flex justify-content-center align-items-center' onClick={toggleList4}><img src={buttonListIcon} alt="lists" /></button>
                    {showList4 && (
                      <ul className="list-group">
                        <li className="list-group-item" style={{ border: 'none' }}>Edit</li>
                        <li className="list-group-item" style={{ border: 'none' }}>Report</li>
                        <li className="list-group-item" style={{ border: 'none' }}>Option 3</li>
                      </ul>
                    )}
                  </div>
                </div>
                <div className="post-desc-4 d-flex justify-content-between align-items-center">
                  <div className="date d-flex align-items-center"><img src={bagIcon} alt="dateIcon" style={{ marginRight: '7px' }} />Innovaccer Analytics Private Ltd.</div>
                  <div className="location d-flex align-items-center"><img src={locationIcon} alt="locationIcon" style={{ marginRight: '7px' }} />Noida, India</div>
                </div>
                <button className='desc-button-4'>Apply on Timesjobs</button>
                <div className="post-footer d-flex align-items-center justify-content-between">
                  <div className='d-flex align-items-center'>
                    <div className="post-4-creator-pic"></div>
                    {isDesktopOrMobile ?
                      <div className="post-creator-name">Joseph Gray</div>
                      :
                      <div>
                        <div className="post-creator-name">Joseph Gray</div>
                        <div className='views d-flex align-items-center'>
                          <div className='views-text' style={{ marginLeft: '0' }}>1.7k views</div>
                        </div>
                      </div>
                    }
                  </div>
                  <div className="views-share d-flex align-items-center">
                    {isDesktopOrMobile ?
                      <div className='views d-flex align-items-center'>
                        <img src={viewIcon} alt="views-icon" />
                        <div className='views-text'>1.4k views</div>
                      </div>
                      : <></>}
                    {isDesktopOrMobile ?
                      <button className='share-button'><img src={shareIcon} alt="shareIcon" /></button>
                      :
                      <button className='share-button-mobile'><img src={shareIcon} alt="shareIcon" style={{ marginRight: '10px' }} />Share</button>
                    }
                  </div>
                </div>
              </div>
            </div>

          </div>

          {isDesktopOrMobile ?
            <div className="all-posts-side-div d-flex flex-column align-items-center">
              <div className="location-input-div d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <img src={locationIcon} alt="locationIcon" style={{ marginRight: '7px' }} />
                  {showUser ?
                    <input className='location-input' type="text" placeholder='Enter your location' />
                    :
                    <input className='location-input' type="text" placeholder='Noida, India' />
                  }
                </div>
                {showUser ? <img src={crossIcon} alt="editIcon" /> : <img src={editIcon} alt="editIcon" />}
              </div>
              <div className='d-flex' style={{ marginTop: '32px' }}>
                <img src={warningIcon} alt="warningIcon" style={{ marginRight: '7px', width: '16px', height: '16px', marginTop: '3px', marginLeft: '10px' }} />
                <div className="location-instruction">Your location will help us serve better and extend a personalised experience.</div>
              </div>
              {showUser ?
                <div className='d-flex flex-column recommender-groups-container'>
                  <div className='rec-groups-title'><img src={thumbIcon} alt="thumbIcon" style={{ marginRight: '4px' }} />RECOMMENDED GROUPS</div>
                  <div className="follow d-flex justify-content-between align-items-center">
                    <div className='d-flex align-items-center'>
                      <div className='follow-icon follow-icon-url-1'></div>
                      Leisure
                    </div>
                    <button className='follow-button follow-button-change1' onClick={buttonFollow1}>{toggleButtonText1}</button>
                  </div>

                  <div className="follow d-flex justify-content-between align-items-center">
                    <div className='d-flex align-items-center'>
                      <div className='follow-icon follow-icon-url-2'></div>
                      Activism
                    </div>
                    <button className='follow-button follow-button-change2' onClick={buttonFollow2}>{toggleButtonText2}</button>
                  </div>

                  <div className="follow d-flex justify-content-between align-items-center">
                    <div className='d-flex align-items-center'>
                      <div className='follow-icon follow-icon-url-3'></div>
                      MBA
                    </div>
                    <button className='follow-button follow-button-change3' onClick={buttonFollow3}>{toggleButtonText3}</button>
                  </div>

                  <div className="follow d-flex justify-content-between align-items-center">
                    <div className='d-flex align-items-center'>
                      <div className='follow-icon follow-icon-url-4'></div>
                      Philosophy
                    </div>
                    <button className='follow-button follow-button-change4' onClick={buttonFollow4}>{toggleButtonText4}</button>
                  </div>

                  <div className='see-more'>See More...</div>
                </div>
                : <></>}
            </div>
            : <></>}
        </div>
      </div>
      {isDesktopOrMobile ? <></> :
        <img src={mobileEditIcon} data-bs-toggle="modal" data-bs-target="#mobileexampleModalToggle1" alt="mobileEditIcon" className='mobile-edit-icon' style={{ cursor: 'pointer' }} />
      }
    </div>
  );
}

export default App;
