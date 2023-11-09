import React from 'react'

const Contact = () => {
    return (
        <div className='bg_contact pb-5'>
            <div className='custom_container pt-4'>
                <h3 className=' ff_neue fs_46 fw-bold m-0 text-white pt-5 mt-3 text-center '>Contact Us</h3>
                <p className='ff_raleway fs_16 fw-normal text-white opacity-75 m-0 pt-3 mt-1 text-center '>Have a question or want to contribute? Reach out to us.</p>
                <div className='d-flex'>
                    <input className='w-100 ff_raleway fs_16 fw-normal text-white me-4 ' type="text" placeholder='First Name' />
                    <input className='w-100 ff_raleway fs_16 fw-normal text-white ms-4 ' type="text" placeholder='First Name' />
                </div>
                <div className='d-flex'>
                    <input className='w-100 ff_raleway fs_16 fw-normal text-white me-4 ' type="email" placeholder='Email' />
                    <input className='w-100 ff_raleway fs_16 fw-normal text-white ms-4 ' type="number" placeholder='Phone Number' />
                </div>
                <div >
                    <textarea className='mt-5 w-100 massege mb-3' name="massege" placeholder='Massege'></textarea>
                    </div>
                <div className='d-flex justify-content-center mt-5'>
                    <button type='submit' className='ff_raleway fs_20 fw-medium text-white m-0 submit'>SUBMIT'</button>
                </div>
            </div>
        </div>
    )
}

export default Contact