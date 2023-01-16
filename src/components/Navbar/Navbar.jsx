import React from 'react'
import { Colors } from '../../utils/theme'
import Dropdown from "../Dropdown/Dropdown"
import logo from "../../assets/logo.png"
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/RouterConfig'
import { useState } from 'react'

const Navbar = () => {

    const [shownav, setShownav] = useState(false)

    const navigate = useNavigate()

    const changeRoute = (route) => {
        navigate(route)
    }

    return (
        <nav className={`flex items-center justify-between flex-wrap bg-[#fff] p-6 z-10 relative`} style={{ backgroundColor: "rgb(242, 243, 247)" }}>
            <div className="flex items-center md:w-[15%] w-[65%] flex-shrink-0 text-white pr-6"
                onClick={() => changeRoute(ROUTES.Home)}
            >
                <img src={logo} alt="" className='w-40' />
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-[#000] border-[#000] hover:text-black hover:border-black"
                    onClick={() => setShownav(prev => !prev)}
                >
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className={shownav ? 'w-full left-0  absolute top-[100px]  lg:flex w-[100%]' : 'hidden w-full lg:flex w-[85%]'} >
                <div className='relative bg-[#F2F3F7] p-4 w-[100%] flex'
                style={{
                    zIndex: "2000"
                }}
                >
                <div className="w-full mr-auto block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">

                        <a href="javascript:void(0)" className="md:mb-0 mb-1 block md:mt-auto lg:inline-block lg:mt-0 text-[#000] hover:text-[#e5e5e5] mr-6  text-lg font-semibold" onClick={() => {changeRoute(ROUTES.Home); setShownav(false)}}>
                     Home
                    </a>
                        <a href="javascript:void(0)" className="md:mb-0 mb-1 block md:mt-auto lg:inline-block lg:mt-0 text-[#000] hover:text-[#e5e5e5] mr-6  text-lg font-semibold"
                            onClick={() => {changeRoute(ROUTES.Retailer); setShownav(false)}}
                        >
                            Retailer
                        </a>
                        
                        <a href="javascript:void(0)" className=" mb-1 md:mb-0 block md:mt-auto lg:inline-block lg:mt-0 text-[#000] hover:text-[#e5e5e5] mr-6 text-lg font-semibold"
                            onClick={() => {changeRoute(ROUTES.About); setShownav(false)}}
                        >
                            About Us
                        </a>
                    </div>

                </div>
                <a href="http://soptleconnect.com" className='flex'>
                    <button
                        className="m-auto flex justify-center items-center text-base font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  text-[18px] rounded-full min-w-[150px] md:min-w-[120px] min-h-[51px] lg:min-w-[170px] lg:min-h-[44px] md:min-h-[41px] "
                        style={{
                            color: "#e14444",
                            backgroundColor: "white",
                            boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 6px 0px"
                        }}
                    >
                        <section className="flex flex-row justify-center items-center">

                            <h2 className="text-[16px] md:text-[0.8rem] lg:text-[16px] font-semibold">
                                Get Started Now
                            </h2>
                        </section>
                    </button>
                </a>
            </div>
            </div>

        </nav>
    )
}

export default Navbar