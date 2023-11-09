import React from 'react'
import { Col, Row } from 'react-bootstrap'
import chaker from '../assets/image/png/ashokechaker.png'
import saving from '../assets/image/png/saving.png'
import index from '../assets/image/png/index.png'
import social from '../assets/image/png/social.png'
import tools from '../assets/image/png/tools.png'
import lcandle from '../assets/image/png/L_candels.png'
import rcandle from '../assets/image/png/R_candels.png'

const Token = () => {
    return (
        <div className='bg_saving py-5 L_candel mt_2'>
            <div className='L_candel'>
                <div className='custom_container py-5 my-lg-5'>
                    <Row className=''>
                        <Col lg={6} className='pb-lg-0 pb-5 position-relative'>
                            <img className='position-absolute l_candle w-100' src={lcandle} alt="rcandle" />
                            <h3 className=' ff_neue fs_46 fw-bold m-0'>EEFI Tokenomics</h3>
                            <p className=' ff_raleway fs_16 fw-normal m-0 pt-3 mt-1 pb-4'>EEFI is the special rewards token of the protocol that is minted and distributed in a decentralized fashion. It produces amplified yield during uptrends and protects from downside action during downtrends.</p>
                            <button className=' ff_raleway fs_16 fw-medium text-white view_contct mt-2'>View Contract Address</button>
                            <p className=' ff_neue fs_24 fw-bold m-0 pt-5'>IBO TOKENOMICS</p>
                            <p className=' ff_raleway fs_18 fw-bold m-0 pt-4 mt-2'>IBO Round 1 Price</p>
                            <p className=' ff_raleway fs_16 fw-semibold color_blue m-0 pt-3'>1 EEFI = $12</p>
                            <p className=' ff_raleway fs_18 fw-bold m-0 pt-4'>IBO Round 1 Price</p>
                            <p className=' ff_raleway fs_16 fw-semibold color_blue m-0 pt-3'>1 EEFI = $12</p>
                            <p className=' ff_raleway fs_18 fw-bold m-0 pt-4'>IBO Round 1 Price</p>
                            <p className=' ff_raleway fs_16 fw-semibold color_blue m-0 pt-3'>1 EEFI = $12</p>
                            <p className='ff_raleway fs_18 fw-bold m-0 pt-4'>TOTAL SUPPLY</p>
                            <p className=' ff_raleway fs_16 fw-semibold m-0 pt-3'>170,000</p>
                        </Col>
                        <Col lg={6} className='pt-lg-0 pt-5 position-relative overflow-hidden'>
                            <img className='w-100 position-absolute top-0' src={rcandle} alt="rcandle" />
                            <div className='d-flex align-items-center'>
                                <img src={chaker} alt="chaker" />
                                <div>
                                    <p className='text-white ff_neue fw-bold fs_24 m-0'>Decentralized Yield</p>
                                    <p className='text-white ff_raleway fw-normal fs_16 m-0 opacity-75 pt-3'>Protocol’s native utility | rewards token</p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center pt-4 mt-2'>
                                <img src={saving} alt="chaker" />
                                <div>
                                    <p className='text-white ff_neue fw-bold fs_24 m-0'>Extra Value</p>
                                    <p className='text-white ff_raleway fw-normal fs_16 m-0 opacity-75 pt-3'>Can be highly deflationary during market uptrends</p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center pt-4 mt-2'>
                                <img src={index} alt="chaker" />
                                <div>
                                    <p className='text-white ff_neue fw-bold fs_24 m-0'>Smart Index</p>
                                    <p className='text-white ff_raleway fw-normal fs_16 m-0 opacity-75 pt-3'>Token can be viewed as an index of all strategy performance on the protocol</p>
                                </div>
                            </div>
                            <div className='d-flex pt-4 mt-2'>
                                <span>  <img src={social} alt="chaker" /></span>
                                <div>
                                    <p className='text-white ff_neue fw-bold fs_24 m-0'>Social Coordination (E,E)</p>
                                    <p className='text-white ff_raleway fw-normal fs_16 m-0 opacity-75 pt-3'>Promotes hyper social coordination around all strategies on the protocol (E,E) (makes hedging fun and working together produces more benefits to all vault users)</p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center pt-4 mt-2'>
                                <img src={tools} alt="chaker" />
                                <div>
                                    <p className='text-white ff_neue fw-bold fs_24 m-0'>Expansive Utility Dimensions</p>
                                    <p className='text-white ff_raleway fw-normal fs_16 m-0 opacity-75 pt-3'>EEFI’s utility will expand as more strategies are added to the protocol.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Token