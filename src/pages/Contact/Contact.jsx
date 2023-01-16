import React from 'react'
import { useState } from 'react'
// import Mailto  from "react-mailto"

const Contact = () => {

    const [info, setInfo] = useState({
        "first_name": "",
        "last_name": "",
        "mobile": "",
        "email": ""
    })

    const handleChange = (e) => {
        const name = e.target.name;

        setInfo({ ...info, [name]: e.target.value })
    }

    const emailString = JSON.stringify(info)

    const sendMail = (e) => {
        window.location.href = `mailto:sunil@soptle.com?subject=Contact Info&body=${emailString}`;
        e.preventDefault();
    }

    return (
        <div className='contact'>

            <section className='flex flex-col items-center py-10'>
                <h3 className='text-xl mb-2 font-semibold'>Contact us to </h3>
                <h2 className=' pt-4 pb-4 md:w-[40%] text-[20px] w-[90%] text-center font-semibold'>Digitize, Analyse and Optimise</h2>
                <h3 className='md:w-[40%] w-[90%] text-center font-semibold mb-3'>Your FMCG manufacturing business</h3>
                <p className='w-[90%] md:w-[40%] text-center  text-[13px] font-semibold'>Please complete the short form below and our experts will be in touch.
                    Your data is safe and secure with us</p>
            </section>

            <section className='md:w-[50%] w-[90%] m-auto pb-20'>
                <div className='flex md:flex-row flex-col justify-between w-[100%]'>
                    <div className="flex flex-col w-[100%] md:w-[48%]">
                        {/* <label className="text-[black] mt-2">First name *</label> */}
                        <input
                            className="bg-[#f7f7f7] p-2 mt-2"
                            name="first_name"
                            type="text"
                            placeholder='First Name*'
                            onChange={(e) => handleChange(e)}
                        />
                        <div />
                    </div>
                    <div className="flex flex-col w-[100%] md:w-[48%]">
                        {/* <label className="text-[black] mt-2">Last Name *</label> */}
                        <input
                            className="bg-[#f7f7f7] p-2 mt-2"
                            name="last_name"
                            type="text"
                            placeholder='Last Name*'
                            onChange={(e) => handleChange(e)}
                        />
                        <div />
                    </div>
                </div>


                <div className='flex flex-col md:flex-row justify-between w-[100%] '>
                    <div className="flex flex-col w-[100%] md:w-[48%] mt-2">
                        {/* <label className="text-[black] mt-2">Mobile Number *</label> */}
                        <input
                            className=" bg-[#f7f7f7]  p-2 mt-2"
                            name="mobile"
                            type="text"
                            placeholder='Mobile Number*'
                            onChange={(e) => handleChange(e)}
                        />
                        <div />
                    </div>
                    <div className="flex flex-col w-[100%] mt-2  md:w-[48%]">
                        {/* <label className="text-[black] mt-2">Email Id *</label> */}
                        <input
                            className="bg-[#f7f7f7] p-2 mt-2"
                            name="email"
                            type="email"
                            placeholder='Email*'
                            onChange={(e) => handleChange(e)}
                        />
                        <div />
                    </div>
                </div>


                <div className='flex justify-between w-[100%] flex-col md:flex-row '>
                    <div className="flex flex-col w-[100%] md:w-[48%] mt-2">
                        {/* <label className="text-[black] mt-2">Designation *</label> */}
                        <input
                            className="bg-[#f7f7f7] p-2 mt-2"
                            name="designation"
                            type="text"
                            placeholder='Designation*'
                            onChange={(e) => handleChange(e)}

                        />
                        <div />
                    </div>
                    <div className="flex flex-col w-[100%] md:w-[48%] mt-2">
                        {/* <label className="text-[black] mt-2">Factory / Company Name*</label> */}
                        <input
                            className="bg-[#f7f7f7] p-2 mt-2"
                            name="company_name"
                            type="text"
                            placeholder='Factory / Comapany Name*'
                            onChange={(e) => handleChange(e)}

                        />
                        <div />
                    </div>
                </div>


                <div className='flex justify-between w-[100%] '>
                    <div className="flex flex-col w-[100%] mt-2">
                        {/* <label className="text-[black] mt-2">State *</label> */}
                        <input
                            className="bg-[#f7f7f7] p-2 mt-2"
                            name="firstName"
                            type="text"
                            placeholder='State*'

                        />
                        <div />
                    </div>
                </div>

                <div className='flex justify-between w-[100%] '>
                    <div className="flex flex-col w-[100%] mt-2">
                        {/* <label className="text-[black] mt-2">Comments *</label> */}
                        <textarea
                            className="bg-[#f7f7f7] p-2 mt-2"
                            name="firstName"
                            type="text"
                            placeholder='Comments*'

                        />
                        <div />
                    </div>
                </div>

                <div className='flex justify-between w-[100%]'>
                    <button className='bg-[#e14444] mt-6 text-white text-lg font-semibold py-2 w-[100%]' onClick={(e) => sendMail(e)}>Submit</button>
                    {/* <Mailto email="sunil@soptle.com" obfuscate={true} headers={info}>
                        Email me!
                    </Mailto> */}
                </div>

            </section>

        </div>
    )
}

export default Contact