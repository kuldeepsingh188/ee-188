import React from 'react'
import cloud from '../assets/image/png/clouds.png'
import { Col, Row } from 'react-bootstrap'
import aaa from '../assets/image/png/aaaaa.png'
import sample from '../assets/image/png/$AMPL.png'
import Slider from 'react-slick'

const Core = () => {
    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='core position-relative pb-lg-5'>
            <img className='position-absolute cloud w-100' src={cloud} alt="cloud" />
            <div className='custom_container py-5'>
                <h3 className='ff_neue fs_46 fw-bold m-0 text-center text-white pt-md-5 mt-5'>Core Strategies</h3>
                <p className='ff_raleway fs_16 fw-normal m-0 text-center text-white pt-4'>Our initial strategies use powerful burgeoning trends like Real Yield, Rebase, and others to generate <span className='d-md-block'>cutting-edged yield innovations. These yield strategies stretch beyond the drought in stable coins and set the value for</span> our native protocol token $EEFI. Check them out!'</p>


                <Slider {...settings}>
                    <div className='d-lg-flex align-items-center justify-content-lg-around'>
                        <div className='position-relative'>
                            <img className='position-absolute sample' src={sample} alt="" />
                            <div className='innovation m-auto d-flex flex-column my-5'>
                                <span>
                                    <button className='px-3 py-2 ff_raleway fs_14 fw-normal text-white apy mt-3 ms-3    '>
                                        Innovation
                                    </button>
                             </span>
                                <img className='w-100' src={aaa} alt="aaaa" />
                                <div className='d-flex justify-content-between px-3'>
                                    <p className='ff_raleway fs_16 fw-normal text-white pb-3 m-0 opacity-75'>Projected Yield (APY)</p>
                                    <p className='ff_inter ff_raleway fs_16 fw-bold color_blue m-0'>7,777,777%</p>
                                </div>
                                <div className='d-flex justify-content-between px-3'>
                                    <p className='ff_raleway fs_16 fw-normal text-white pb-3 m-0 opacity-50'>Current Deposits</p>
                                    <p className='ff_inter ff_raleway fs_16 fw-medium text-white m-0'>0.00 AMPL</p>
                                </div>
                                <div className='ino_line pt-1 mx-3 '></div>
                                <div className='d-flex justify-content-between px-3 pt-3'>
                                    <p className='ff_raleway fs_16 fw-normal text-white pb-4 m-0 opacity-50'>Current Deposits</p>
                                    <p className='ff_inter ff_raleway fs_16 fw-medium text-white m-0'>0.00 AMPL</p>
                                </div>
                            </div>
                        </div>
                        <div className='p s-5 m s-5'>
                            <p className='ff_neue fs_38 fw-normal text-white m-0'>Elastic Vault</p>
                            <p className='ff_raleway fs_22 fw-medium text-white m-0 pt-4 mt-2'>Deposit Token</p>
                            <p className='ff_raleway fs_16 fw-normal text-white opacity-75 m-0 pt-4'> $AMPL</p>
                            <p className='ff_raleway fs_22 fw-medium text-white m-0 pt-3 mt-1'>Flagship Hedging Strategy</p>
                            <p className='ff_raleway fs_16 fw-normal text-white opacity-75 m-0 pt-3 mt-1'>This one-of-a-kind strategy combines the benefits of <span className='d-block'>Rebase’s force multiplier effect and Real Yield’s</span> sustainability.</p>
                            <p className='ff_raleway fs_16 fw-normal text-white opacity-75 m-0 pt-3 mt-1'>Helps users to protect against downtrends and amplify <span className='d-block'>Rebase’s force multiplier effect and Real Yield’s</span></p>
                        </div>
                    </div>
                    <div className='d-lg-flex align-items-center justify-content-lg-around'>
                        <div className='position-relative'>
                            <img className='position-absolute sample' src={sample} alt="SAMPLE" />
                            <div className='innovation m-auto d-flex flex-column my-5'>
                                <span>
                                    <button className='px-3 py-2 ff_raleway fs_14 fw-normal text-white apy mt-3 ms-3    '>
                                        Innovation
                                    </button>
                                </span>
                                <img className='w-100' src={aaa} alt="aaaa" />
                                <div className='d-flex justify-content-between px-3'>
                                    <p className='ff_raleway fs_16 fw-normal text-white pb-3 m-0 opacity-75'>Projected Yield (APY)</p>
                                    <p className='ff_inter ff_raleway fs_16 fw-bold color_blue m-0'>7,777,777%</p>
                                </div>
                                <div className='d-flex justify-content-between px-3'>
                                    <p className='ff_raleway fs_16 fw-normal text-white pb-3 m-0 opacity-50'>Current Deposits</p>
                                    <p className='ff_inter ff_raleway fs_16 fw-medium text-white m-0'>0.00 AMPL</p>
                                </div>
                                <div className='ino_line pt-1 mx-3 '></div>
                                <div className='d-flex justify-content-between px-3 pt-3'>
                                    <p className='ff_raleway fs_16 fw-normal text-white pb-4 m-0 opacity-50'>Current Deposits</p>
                                    <p className='ff_inter ff_raleway fs_16 fw-medium text-white m-0'>0.00 AMPL</p>
                                </div>
                            </div>
                        </div>
                        <div className='pb-lg-0 pb-5'>
                            <p className='ff_neue fs_38 fw-normal text-white m-0'>Elastic Vault</p>
                            <p className='ff_raleway fs_22 fw-medium text-white m-0 pt-4 mt-2'>Deposit Token</p>
                            <p className='ff_raleway fs_16 fw-normal text-white opacity-75 m-0 pt-4'> $AMPL</p>
                            <p className='ff_raleway fs_22 fw-medium text-white m-0 pt-3 mt-1'>Flagship Hedging Strategy</p>
                            <p className='ff_raleway fs_16 fw-normal text-white opacity-75 m-0 pt-3 mt-1'>This one-of-a-kind strategy combines the benefits of <span className='d-block'>Rebase’s force multiplier effect and Real Yield’s</span> sustainability.</p>
                            <p className='ff_raleway fs_16 fw-normal text-white opacity-75 m-0 pt-3 mt-1'>Helps users to protect against downtrends and amplify <span className='d-block'>Rebase’s force multiplier effect and Real Yield’s</span></p>
                        </div>
                    </div>
                    <div className='d-lg-flex align-items-center justify-content-lg-around'>
                        <div className='position-relative'>
                            <img className='position-absolute sample' src={sample} alt="sample" />
                            <div className='innovation m-auto d-flex flex-column my-5'>
                                <span>
                                    <button className='px-3 py-2 ff_raleway fs_14 fw-normal text-white apy mt-3 ms-3    '>
                                        Innovation
                                    </button>
                                </span>
                                <img className='w-100' src={aaa} alt="aaaa" />
                                <div className='d-flex justify-content-between px-3'>
                                    <p className='ff_raleway fs_16 fw-normal text-white pb-3 m-0 opacity-75'>Projected Yield (APY)</p>
                                    <p className='ff_inter ff_raleway fs_16 fw-bold color_blue m-0'>7,777,777%</p>
                                </div>
                                <div className='d-flex justify-content-between px-3'>
                                    <p className='ff_raleway fs_16 fw-normal text-white pb-3 m-0 opacity-50'>Current Deposits</p>
                                    <p className='ff_inter ff_raleway fs_16 fw-medium text-white m-0'>0.00 AMPL</p>
                                </div>
                                <div className='ino_line pt-1 mx-3 '></div>
                                <div className='d-flex justify-content-between px-3 pt-3'>
                                    <p className='ff_raleway fs_16 fw-normal text-white pb-4 m-0 opacity-50'>Current Deposits</p>
                                    <p className='ff_inter ff_raleway fs_16 fw-medium text-white m-0'>0.00 AMPL</p>
                                </div>
                            </div>
                        </div>
                        <div className='p s-5 m s-5'>
                            <p className='ff_neue fs_38 fw-normal text-white m-0'>Elastic Vault</p>
                            <p className='ff_raleway fs_22 fw-medium text-white m-0 pt-4 mt-2'>Deposit Token</p>
                            <p className='ff_raleway fs_16 fw-normal text-white opacity-75 m-0 pt-4'> $AMPL</p>
                            <p className='ff_raleway fs_22 fw-medium text-white m-0 pt-3 mt-1'>Flagship Hedging Strategy</p>
                            <p className='ff_raleway fs_16 fw-normal text-white opacity-75 m-0 pt-3 mt-1'>This one-of-a-kind strategy combines the benefits of <span className='d-lg-block'>Rebase’s force multiplier effect and Real Yield’s</span> sustainability.</p>
                            <p className='ff_raleway fs_16 fw-normal text-white opacity-75 m-0 pt-3 mt-1'>Helps users to protect against downtrends and amplify <span className='d-lg-block'>Rebase’s force multiplier effect and Real Yield’s</span></p>
                        </div>
                    </div>
                    <div className='d-lg-flex align-items-center justify-content-lg-around'>
                        <div className='position-relative'>
                            <img className='position-absolute sample' src={sample} alt="" />
                            <div className='innovation m-auto d-flex flex-column my-5'>
                                <span>
                                    <button className='px-3 py-2 ff_raleway fs_14 fw-normal text-white apy mt-3 ms-3    '>
                                        Innovation
                                    </button>
                                </span>
                                <img className='w-100' src={aaa} alt="aaaa" />
                                <div className='d-flex justify-content-between px-3'>
                                    <p className='ff_raleway fs_16 fw-normal text-white pb-3 m-0 opacity-75'>Projected Yield (APY)</p>
                                    <p className='ff_inter ff_raleway fs_16 fw-bold color_blue m-0'>7,777,777%</p>
                                </div>
                                <div className='d-flex justify-content-between px-3'>
                                    <p className='ff_raleway fs_16 fw-normal text-white pb-3 m-0 opacity-50'>Current Deposits</p>
                                    <p className='ff_inter ff_raleway fs_16 fw-medium text-white m-0'>0.00 AMPL</p>
                                </div>
                                <div className='ino_line pt-1 mx-3 '></div>
                                <div className='d-flex justify-content-between px-3 pt-3'>
                                    <p className='ff_raleway fs_16 fw-normal text-white pb-4 m-0 opacity-50'>Current Deposits</p>
                                    <p className='ff_inter ff_raleway fs_16 fw-medium text-white m-0'>0.00 AMPL</p>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <p className='ff_neue fs_38 fw-normal text-white m-0'>Elastic Vault</p>
                            <p className='ff_raleway fs_22 fw-medium text-white m-0 pt-4 mt-2'>Deposit Token</p>
                            <p className='ff_raleway fs_16 fw-normal text-white opacity-75 m-0 pt-4'> $AMPL</p>
                            <p className='ff_raleway fs_22 fw-medium text-white m-0 pt-3 mt-1'>Flagship Hedging Strategy</p>
                            <p className='ff_raleway fs_16 fw-normal text-white opacity-75 m-0 pt-3 mt-1'>This one-of-a-kind strategy combines the benefits of <span className='d-lg-block'>Rebase’s force multiplier effect and Real Yield’s</span> sustainability.</p>
                            <p className='ff_raleway fs_16 fw-normal text-white opacity-75 m-0 pt-3 mt-1'>Helps users to protect against downtrends and amplify <span className='d-lg-block'>Rebase’s force multiplier effect and Real Yield’s</span></p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Core