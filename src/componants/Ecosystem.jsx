import React from 'react'
import { Col, Row } from 'react-bootstrap'
import olmpyus from '../assets/image/png/olympus.png'
import bond from '../assets/image/png/bond.png' 
import foundry from '../assets/image/png/foundry.png'
import balencer from '../assets/image/png/balancer.png'
import gearbox from '../assets/image/png/gearbox.png'
import uniswap from '../assets/image/png/uniswap.png'

const Ecosystem = () => {
  return (
      <div className='pb-5'>
          <div className='custom_container py-5'>
              <h3 className=' ff_neue fs_46 fw-bold color_blue m-0 pt-5 mt-md-5 text-center pb-3'>Ecosystem Partners</h3>
              <Row className='py-5 pb-4'>
                  <Col md={4}>
                      <div className='eco_partner d-flex justify-content-center align-items-center py-5 h-100'>
                          <img className='' src={olmpyus} alt="" />
                      </div>
                  </Col>
                  <Col md={4}>
                      <div className='eco_partner d-flex justify-content-center align-items-center py-5 mt-5 mt-md-0'>
                          <img src={bond} alt="bond"/>
                      </div>
                  </Col>
                  <Col md={4}>
                      <div className='eco_partner d-flex justify-content-center align-items-center py-5 mt-5 mt-md-0'>
                          <img src={foundry} alt="foundry"/>
                      </div>
                  </Col>
                  <Col md={4}>
                      <div className='eco_partner d-flex justify-content-center align-items-center py-5 mt-5 h-75'>
                          <img src={balencer} alt="balencr"/>
                      </div>
                  </Col>
                  <Col md={4}>
                      <div className='eco_partner d-flex justify-content-center align-items-center py-5 mt-5'>
                          <img src={gearbox} alt="gearbox" />
                      </div>
                  </Col>
                  <Col md={4}>
                      <div className='eco_partner d-flex justify-content-center align-items-center py-5 mt-5 h-75'>
                          <img src={uniswap} alt="uniswap" />
                      </div>
                  </Col>
              </Row>
              <button className='announced ff_raleway fs_16 fw-semibold color_blue my-5 m-auto d-flex'>More To Be Announced</button>
          </div>
    </div>
  )
}

export default Ecosystem