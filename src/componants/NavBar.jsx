import React, { useState } from 'react'
import elogo from '../assets/image/png/e_logo.png'
import corner from '../assets/image/png/corner_img.png'
import headerImg from '../assets/image/png/header_image.png'
import { Col, Row } from 'react-bootstrap'
import spaceamn from '../assets/image/png/spaceman.png'
import spaceman_collegue from '../assets/image/png/spaceman_collegure.png'

const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(true)
  if (showNavbar) {
    document.body.classList.remove("overflow-hidden");
  } else {
    document.body.classList.add("overflow-hidden");
  }
  return (
    <div>
      <div className='position-relative'>
        <img className='position-absolute top-0 w-100 corner_img d-none d-lg-block' src={corner} alt="corner" />
        <img className='w-100 position-absolute d-lg-none' src={headerImg} alt="headerimg" />
        <nav className='d-flex justify-content-between align-items-center custom_container z-3 position-relative'>
          <div className='d-flex align-items-center '>
            <img className='curser_p' src={elogo} alt="logo" />
          </div>
          <div>
            <ul className={`${showNavbar ? 'd-flex align-items-center gap-4 mb-0 nav_sm' : 'd-flex align-items-center gap-4 mb-0 nav_sm nav_show'}`}>
              <li className='ff_raleway fs_16 fw-medium text-white cursor_p'>Abouts</li>
              <li className='ff_raleway fs_16 fw-medium text-white cursor_p'>IBO Event</li>
              <li className='ff_raleway fs_16 fw-medium text-white cursor_p'>EEFI Tokenomics</li>
              <li className='ff_raleway fs_16 fw-medium text-white cursor_p'>Team</li>
              <li className='ff_raleway fs_16 fw-medium text-white cursor_p'>Partners</li>
              <li className='ff_raleway fs_16 fw-medium text-white cursor_p'>Roadmap</li>
              <li className='ff_raleway fs_16 fw-medium text-white cursor_p'><select name="" id="more">
                <option value="more">more</option>
                <option value="team1">team1</option>
                <option value="team2">team2</option>
              </select></li>
              <span title="close" className="ms-4 close_nav text-white fw-bold fs-1 d-lg-none" onClick={() => setShowNavbar(true)}>&times;</span>
            </ul>
          </div>
          <div><button class="ff_raleway fs_16 fw-medium enter_app z-2 d-none d-lg-block">Enter App</button></div>
          <div className='d-lg-none d-flex'>
            <span title="open"
              className=" d-lg-none fw-bold fs-1 text-white"
              onClick={() => setShowNavbar(false)}>
              &#9776; </span>
            <div className='ps-3'><button class="ff_raleway fs_16 fw-medium enter_app z-2 d-none d-md-block">Enter App</button></div>
          </div>
        </nav>
      </div>
      <div className='custom_container'>
        <Row>
          <Col lg={6} className='z-1 pt-sm-5 pt-4 mt-md-5 text-center'>
            <h1 className='text-white text-uppercase ff_neue fs_85 fw-medium m-0 text-lg-start'>Building
              elastic
              Protocol</h1>
            <p className='text-white ff_raleway fs_16 fw-normal opacity-75 m-0 pt-sm-4 pt-3 mt-sm-2 text-lg-start'>An ecosystem of unique yield strategies that help you earn yield, <span className='d-sm-block'>amplify, and stretch it across all market conditions</span></p>
            <p className=' text-white ff_raleway fs_18 fw-bold m-0 text-decoration-underline pt-sm-4 pt-3 text-lg-start'>Audited by Omniscia</p>
          </Col>
          <Col lg={6} className='position-relative'>
            <img className='position-absolute spaceman w-100 d-none d-lg-block' src={spaceamn} alt="spaceman" />
            <img className='d-lg-none w-100 overflow-hidden' src={spaceman_collegue} alt="spaceman_collegue" />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default NavBar