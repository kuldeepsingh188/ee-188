import React from 'react'
import queen from '../assets/image/png/queen.png'
import { Col, Row } from 'react-bootstrap'
import estien from '../assets/image/png/eastian.png'
import mummy from '../assets/image/png/mummy.png'
import fish from '../assets/image/png/fish.png'
import cartoon from '../assets/image/png/cartoon.png'
import nft from '../assets/image/png/nft.png'
import racer from '../assets/image/png/racer.png'
import mask from '../assets/image/png/mask.png'
import real from '../assets/image/png/hoverimg.png'
const Futuere = () => {
  return (
    <div>
      <div className=' custom_container py-5'>
        <h3 className='ff_neue fs_46 fw-bold color_blue text-center m-0'>Future Use Cases (Strategies)</h3>
        <p className=' ff_raleway fs_16 fw-normal opacity-75 text-center m-0 pt-3 mt-1 pb-2 '>Elastic Protocol will continue to pioneer an expanding ecosystem of yield strategies that will cater to DeFi users across a <span className='d-lg-block'>range of blockchains, communities, and interests. Each will help in generating sustainable yield and expanding the</span> utility of the native utility token $EEFI. Here is some of what we are planning and looking into:</p>
        <Row className='py-5 my-4'>
          <Col lg={4} sm={6} className='position-relative overflow-hidden stile'>
            <img className='w-100' src={mask} alt="mask" />
            <img className='position-absolute real rounded-4' src={real} alt="real" />
          </Col>
          <Col lg={4} sm={6} className='pt-3 mt-1 pt-sm-0 mt-sm-0 position-relative overflow-hidden stile'>
            <img className='w-100' src={queen} alt="queen" />
            <img className='position-absolute real rounded-4' src={real} alt="real" />
          </Col>
          <Col lg={4} sm={6} className='pt-4 mt-1 pt-lg-0 mt-lg-0 position-relative overflow-hidden stile'>
            <img className='w-100' src={estien} alt="estien" />
            <img className='position-absolute real rounded-4' src={real} alt="real" />
          </Col>
          <Col lg={4} sm={6} className='pt-4 mt-1 position-relative overflow-hidden stile'>
            <img className='position-absolute real rounded-4' src={real} alt="real" />
            <img className='w-100' src={mummy} alt="mummy" />
          </Col>
          <Col lg={4} sm={6} className='pt-sm-4 mt-sm-3 pt-4 mt-1 position-relative overflow-hidden stile'>
            <img className='w-100' src={fish} alt="fish" />
            <img className='position-absolute real rounded-4' src={real} alt="real" />
          </Col>
          <Col lg={4} sm={6} className='pt-sm-4 mt-sm-3 pt-4 mt-1 position-relative overflow-hidden stile'>
            <img className='w-100' src={cartoon} alt="cartoon" />
            <img className='position-absolute real rounded-4' src={real} alt="real" />
          </Col>
          <Col lg={4} sm={6} className='pt-sm-4 mt-sm-3 pt-4 mt-1 position-relative overflow-hidden stile'>
            <img className='w-100' src={nft} alt="nft" />
            <img className='position-absolute real rounded-4' src={real} alt="real" />
          </Col>
          <Col lg={4} sm={6} className='pt-sm-4 mt-sm-3 pt-4 mt-1 position-relative overflow-hidden stile'>
            <img className='w-100' src={racer} alt="racer" />
            <img className='position-absolute real rounded-4' src={real} alt="real" />
          </Col>
          <Col lg={4} sm={6} className='pt-sm-4 mt-sm-3 pt-4 mt-1 position-relative overflow-hidden stile m-auto'>
            <img className='w-100' src={mask} alt="mask" />
            <img className='position-absolute real rounded-4' src={real} alt="real" />
          </Col> 
</Row>
      </div>
    </div>
  )
}

export default Futuere