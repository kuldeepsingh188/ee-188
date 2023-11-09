import React from 'react'
import { AuIcon, CatIcon, DairyIcon, DiscodIcon, FileIcon, MIcon, SmsIcon, TwiterIcon, YoutubeIcon } from './Icon'
import f_logo from '../assets/image/png/footerlogo.png'

const Footer = () => {
  return (
    <div>
      <div className='custom_container text-center py-5 my-5'>
        <img src={f_logo} alt="logo" />
        <p className='ff_raleway fs_16 fw-normal m-0 color_blue pt-2'>Join Our Community</p>

        <div className='d-flex flex-wrap gap-4 justify-content-center mt-3 pt-1'>
          <p className='ff_raleway fs_16 fw-normal m-0 text-black'>About</p>
          <p className='ff_raleway fs_16 fw-normal m-0 text-black'>IBO Event</p>
          <p className='ff_raleway fs_16 fw-normal m-0 text-black'>EEFI Tokenomics</p>
          <p className='ff_raleway fs_16 fw-normal m-0 text-black'>Team</p>
          <p className='ff_raleway fs_16 fw-normal m-0 text-black'>Roadmap</p>
          <p className='ff_raleway fs_16 fw-normal m-0 text-black'>Partners</p>
          <p className='ff_raleway fs_16 fw-normal m-0 text-black'>Contact Us</p>
        </div>
        <div className='d-flex flex-wrap gap-4 justify-content-center pt-3 mt-1'>
          <div className='circel'><YoutubeIcon /></div>
          <div className='circel'><CatIcon /></div>
          <div className='circel'><TwiterIcon /></div>
          <div className='circel'><AuIcon /></div>
          <div className='circel'><DiscodIcon /></div>
          <div className='circel'><MIcon /></div>
          <div className='circel'><SmsIcon /></div>
          <div className='circel'><DairyIcon /></div>
          <div className='circel'><FileIcon /></div>
        </div>
      </div>
    </div>
  )
}

export default Footer