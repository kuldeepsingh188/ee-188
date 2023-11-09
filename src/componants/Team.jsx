import React from 'react'
import { Col, Row } from 'react-bootstrap'
import monkey from '../assets/image/png/monkey.png'
import soloman from '../assets/image/png/solon.png'
import anton from '../assets/image/png/anton.png'
import { DiscodIcon, LineIcon, LinkdinIcon, TwiterIcon, } from './Icon'

const Team = () => {
    return (
        <>
            <div className='bg_bulls py-5'>
                <div className='py-5 mb-lg-5'>
                    <h3 className=' ff_neue fs_46 fw-bold text-white text-center m-0 pt-4 pb_130'>our Team</h3>
                </div>
            </div>
            <div className='custom_container mt_270'>
                <Row className='w-100'>
                    <Col md={4}>
                        <div className='team_profile text-center'>
                            <img className='w-100 p-3' src={monkey} alt="monkey" />
                            <p className=' ff_raleway fs_24 fw-medium m-0 mt-1'>Davoice</p>
                            <p className=' ff_raleway fs_16 fw-normal m-0 pt-2'>co-founder</p>
                            <div className='d-flex justify-content-center align-items-center gap-3 py-3 mt-1'>
                                <TwiterIcon />
                                <LineIcon />
                                <DiscodIcon/>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='team_profile text-center mt-5 mt-md-0'>
                            <img className='w-100 p-3' src={soloman} alt="soloman" />
                            <p className=' ff_raleway fs_24 fw-medium m-0 mt-1'>Solomon Adekale</p>
                            <p className=' ff_raleway fs_16 fw-normal m-0 py-2'>co-founder</p>
                            <div className='d-flex justify-content-center align-items-center gap-3 py-3 mt-1'>
                                <TwiterIcon />
                                <LineIcon />
                                <DiscodIcon />
                                <LineIcon />
                                <LinkdinIcon/>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='team_profile text-center mt-5 mt-md-0'>
                            <img className='w-100 p-3' src={anton} alt="anto" />
                            <p className=' ff_raleway fs_24 fw-medium m-0 mt-1'>Anton</p>
                            <p className=' ff_raleway fs_16 fw-normal m-0 py-2'>co-founder</p>
                            <div className='d-flex justify-content-center align-items-center gap-3 py-3 mt-1'>
                                <TwiterIcon />
                                <LineIcon />
                                <DiscodIcon />
                                <LineIcon />
                                <LinkdinIcon />
                            </div>
                        </div>
                    </Col>

                </Row>
            </div>

        </>
    )
}

export default Team