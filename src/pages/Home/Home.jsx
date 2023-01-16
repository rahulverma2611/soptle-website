import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/RouterConfig'
import Carousel from "../../components/TestimonialCarousel"
import BrandCarousel from "../../components/BrandCarousel"
import  "./Home.scss"
import soptle from "./soptle44.jpg"
import map from "./mapindia.png"
import icon1 from "./43-removebg-preview.png"
import icon2 from "./icon2-removebg-preview.png"
import icon4 from "./icon4-removebg-preview (2).png"
import icon3 from "./icon3-removebg-preview.png"

import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import hm1 from "../../assets/hm1.png"
import hm2 from "../../assets/hm2.png"
import hm3 from "../../assets/hm3.png"
import hm4 from "../../assets/hm4.png"
import homeBanner from "../../assets/hmBanner.png"

import "./Home.scss"


const Home = () => {

  const navigate = useNavigate()

  const changeDir = (dir) => {
    navigate(dir)
  }


  return (
    <div className='Home' style={{ backgroundColor: "rgb(242, 243, 247)" }}>

      {/* Section 1 */}

      <section className="max-w-[1380px] m-auto">
        <section className=" mx-[25px] lg:mx-[35px]  lg:pt-[120px] sm:pt-[0px] md:pt-[10px]">
          <section
            className=" flex flex-col-reverse  lg:flex-row  items-center lg:pt-[15px] relative"
            style={{ justifyContent: "space-between", paddingTop: 25 }}
          >
            <section
              className=" sm:max-w-[363px] md:max-w-[674px] z-[0] md:z-[1]"
              style={{ position: "relative", top: "-80px" }}
            >
              <h1 className="font-bold text-2xl md:text-[26px] lg:text-[36px] pt-[20px]">
                {" "}
                India’s leading B2B FMCG Manufacturing Growth Platform
              </h1>
              <p className="pt-4 pb-4 text-[14px] w-[90%]  !font-normal  md:text-[18px] !leading-8 text-[#171717]">
                {" "}
                Our Goal is to make FMCG Distribution equitable and more financially rewarding for the FMCG manufacturer community.
              </p>
              <section className="flex">
                <p className="pt-[20px] sm:pb-3 font-[600] text-[16px]  md:text-[18px] ">
                  <span className="text-#e14444-500 md:text-2xl text-xl   relative top-[2px]">
                    |
                  </span>{" "}
                  Explore Soptle solutions
                </p>
              </section>
              <section className="md:flex items-center gap-6 pt-[20px]  ">
                <section className='mb-4 md:mb-0'>
                  <a href="javascript:void(0)">
                    <button
                      className=" flex justify-center items-center text-base font-semibold transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 hover:!text-white hover:!bg-[#e14444] duration-300  text-[18px]  rounded-full min-w-[200px] min-h-[51px]"
                      style={{
                        backgroundColor: "white",
                        color: "#e14444",
                        boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 6px 0px"
                      }}
                    >
                      <section className="flex flex-row justify-center items-center" onClick={() => { navigate("/") }}>
                        <h2 className="text-base font-semibold" >For Manufacturers</h2>
                      </section>
                    </button>
                  </a>
                </section>
                <section>
                  <a href="javascript:void(0)">
                    <button
                      className=" flex justify-center items-center text-base font-semibold transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 hover:!text-white hover:!bg-[#e14444] duration-300  text-[18px]  rounded-full min-w-[200px] min-h-[51px]"
                      style={{
                        backgroundColor: "white",
                        color: "#e14444",
                        boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 6px 0px"
                      }}
                    >
                      <section className="flex flex-row justify-center items-center" onClick={() => { navigate("/retailer") }}>
                        <h2 className="text-base font-semibold">For Retailers</h2>
                      </section>
                    </button>
                  </a>
                </section>


              </section>
            </section>
            <section
              className="hidden flex lg:inline absolute  "
              style={{ top: "-130px", right: 86 }}
            >

              <img className='w-[90%] ml-auto' src={homeBanner} alt="" />

              {/* <video
                width={450}
                autoPlay
                loop
                src="https://groyyo.com/_next/static/videos/tetsvid1-ec3718145f1be835a252a86a3c3e67b8.mp4"
              /> */}
            </section>
            <section
              className="inline lg:hidden sm:bg-red-200"
              style={{ right: 86, paddingBottom: "100px" }}
            >
              <img className='w-[100%] mb-3' src={homeBanner} alt="" />

              {/* <video
                width={400}
                autoPlay
                loop
                src="https://groyyo.com/_next/static/videos/tetsvid1-ec3718145f1be835a252a86a3c3e67b8.mp4"

              /> */}
            </section>
          </section>
        </section>
      </section>


      {/* Section 2 */}

      <section className="bg-white my-10 px-10 flex items-between justify-center" style={{ boxShadow: "rgba(0, 0, 0, 0.06) 0px 3px 6px 0px" }}>
        <section className=" max-w-[1380px] w-[100%] m-auto py-4">
          <section className=" flex  flex-col gap-[20px] mx-[25px] lg:mx-[30px]  mt-4 pb-2  items-start md:flex-row justify-between md:items-center  ">
            <section className="flex items-center md:w-[24%] w-[100%]  m-auto justify-center  flex-col md:flex-row  md:ml-0">
              <div>
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: "relative",
                    maxWidth: "100%"
                  }}
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      maxWidth: "100%"
                    }}
                  >
                    <img
                      alt=""
                      aria-hidden="false"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27100%27%20height=%27100%27/%3e"
                      style={{
                        display: "block",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0
                      }}
                    />
                  </span>
                  <img
                    alt="Partner"
                    srcSet={icon1}
                    src={icon1}
                    decoding="async"
                    data-nimg="intrinsic"
                    style={{
                      position: "absolute",
                      inset: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "none",
                      margin: "auto",
                      display: "block",
                      width: 0,
                      height: 0,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                      objectFit: "contain"
                    }}
                  />
                  <noscript />
                </span>
              </div>
              <div className="flex flex-col items-baseline gap-1 ml-3">
                <div className=" flex w-[100%] font-extrabold">
                  <h2 className="inline w-[100%] text-center md:text-start text-[28px] md:text-4xl font-extrabold text-[#1d1d1d]">
                    <span><CountUp end={65} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp> </span>+
                  </h2>
                </div>
                <h3 className="text-[14px] md:text-base md:font-semibold">
                  Soptle Manufacturing Partners
                </h3>
              </div>
            </section>
            <section className="flex flex-col md:flex-row md:w-[24%] w-[100%] m-auto md:m-0 items-center justify-center   md:ml-0">
              <div>
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: "relative",
                    maxWidth: "100%"
                  }}
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      maxWidth: "100%"
                    }}
                  >
                    <img
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27100%27%20height=%27100%27/%3e"
                      style={{
                        display: "block",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0
                      }}
                    />
                  </span>
                  <img
                    alt="Partner"
                    srcSet={icon2}
                    src={icon2}
                    decoding="async"
                    data-nimg="intrinsic"
                    style={{
                      position: "absolute",
                      inset: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "none",
                      margin: "auto",
                      display: "block",
                      width: 0,
                      height: 0,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                      objectFit: "contain"
                    }}
                  />
                  <noscript />
                </span>
              </div>
              <div className="flex flex-col items-baseline gap-1 md:ml-3">
                <div className="font-extrabold flex md:block w-[100%]">
                  <h2 className="inline text-center md:text-start w-[100%] text-[28px] md:text-4xl font-extrabold text-[#1d1d1d]">
                    <span><CountUp end={550} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp> </span>+
                  </h2>
                </div>
                <h3 className="text-[14px] md:text-base md:font-semibold">
                  Soptle Distribution Partners
                </h3>
              </div>
            </section>
            <section className="flex flex-col md:flex-row md:w-[24%] w-[100%] m-auto md:m-0 items-center justify-center   md:ml-0">
              <div>
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: "relative",
                    maxWidth: "100%"
                  }}
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      maxWidth: "100%"
                    }}
                  >
                    <img
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27100%27%20height=%27100%27/%3e"
                      style={{
                        display: "block",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0
                      }}
                    />
                  </span>
                  <img
                    alt="Product"
                    srcSet={icon3}
                    src={icon3}
                    decoding="async"
                    data-nimg="intrinsic"
                    style={{
                      position: "absolute",
                      inset: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "none",
                      margin: "auto",
                      display: "block",
                      width: 0,
                      height: 0,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                      objectFit: "contain"
                    }}
                  />
                  <noscript />
                </span>
              </div>
              <div className="flex  flex-col items-baseline gap-1 md:ml-3">
                <div className="font-extrabold flex w-[100%]">
                  <h2 className="inline text-center md:text-start w-[100%] text-[28px] md:text-4xl font-extrabold text-[#1d1d1d]">
                    <span><CountUp end={15000} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp> </span>+
                  </h2>
                </div>
                <h3 className="text-[14px] md:text-base md:font-semibold">
                  Soptle Retail Partners
                </h3>
              </div>
            </section>
            <section className="flex flex-col md:flex-row m-auto md:w-[24%] w-[100%] md:m-0 items-center justify-center   md:ml-0">
              <div>
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: "relative",
                    maxWidth: "100%"
                  }}
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      maxWidth: "100%"
                    }}
                  >
                    <img
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27100%27%20height=%27100%27/%3e"
                      style={{
                        display: "block",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0
                      }}
                    />
                  </span>
                  <img
                    alt="Efficiency"
                    srcSet={icon4}
                    src={icon4}
                    decoding="async"
                    data-nimg="intrinsic"
                    style={{
                      position: "absolute",
                      inset: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "none",
                      margin: "auto",
                      display: "block",
                      width: 0,
                      height: 0,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                      objectFit: "contain"
                    }}
                  />
                  <noscript />
                </span>
              </div>
              <div className="flex flex-col items-baseline gap-1 md:ml-3">
                <div className="font-extrabold flex w-[100%]">
                  <h2 className="inline text-[28px] text-center md:text-start w-[100%] md:text-4xl font-extrabold text-[#1d1d1d]">
                    <span><CountUp end={1200} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp> </span>+
                  </h2>
                </div>
                <h3 className="text-[14px] md:text-base md:font-semibold">
                  Unique SKUs
                </h3>
              </div>
            </section>
          </section>
        </section>
      </section>


      {/* SECTION 3 */}

      <section className=' bg-black px-10 w-100  py-16'>
        <div className=' flex flex-col md:flex-row max-w-[1380px] w-[100%]'>
          <div className="md:w-[50%] w-[100%] flex-col pr-3">
            <h2  className=' text-white text-center mb-6 text-3xl w-[100%]  pb-4'>Creating a capital-efficient and seamless FMCG Distribution</h2>
           
   
            <p   
                className='text-white w-[100%] text-center md:w-[80%] text-lg '>A technology platform that
              powers Manufacturers, Distributors/Wholesalers, Retailers
              with innovative
              products and trade services.</p>
          </div>

          <div className="ms:w-[50%] w-[100%] flex md:flex-row flex-col justify-between">
            <div className="md:w-[40%] w-[100%] my-4 md:my-0 h-350">
              <div className="card bg-[#f7f7f7] flex-col">
                <div className="card-header py-4 flex items-center bg-[#e14444] w-[100%]">
                  <h2 className='text-white text-center text-xl font-semibold w-[100%]'>Soptle Connect</h2>
                </div>
                <div className="card-body flex flex-col items-center justify-center px-3 py-3">
                  <p className='text-black text-center my-3 text-base font-medium opacity-80'>Digitize your Existing Business and Supply chain.
                  </p>
                  <a  href = 'soptleconnect.com' className='text-[#e14444] text-base font-semibold pb-1'>soptleconnect.com</a>
                  <button className='py-1 px-5 text-base font-semibold my-3 border-solid border-2 border-[#e14444]'>Start Digitizing</button>

                </div>
              </div>
            </div>
            <div className="md:w-[40%] w-[100%] my-4 md:my-0">
              <div className="card bg-[#f7f7f7] flex-col">
                <div className="card-header py-4 flex items-center bg-[#e14444] w-[100%]">
                  <h2 className='text-white text-center text-xl font-semibold w-[100%]'>Soptle App</h2>
                </div>
                <div className="card-body flex flex-col items-center justify-center px-3 py-3">
                  <p className='text-black text-center my-3 text-base font-medium opacity-80'>Increase your income by switiching your Businnes to Soptle App
                  </p>
                
                  <a href = 'https://play.google.com/store/apps/details?id=com.soptle.retail&utm_source=web&utm_campaign=app_download&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' target="_blank" rel="noreferrer">
                  
                  <button   className='py-1 px-5 text-base font-semibold  my-3 border-solid border-2 border-[#e14444]'>Download Now</button>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="flex relative h-[100%] overflow-hidden flex-col items-center justify-center w-[100%] bg-[#000348]">
        <div className='w-[100%] flex items-center flex-col py-6'>

          <p className='text-lg text-white w-[90%] text-center mt-6'>A new age tech-enabled SaaS-Led Distribution Platform </p>
          <h3  style = {{ fontSize: 23,}}className='text-3xl md:w-[50%] w-[90%]  text-center my-10 text-white'>
            Enables FMCG Manufacturers to serve their Supply Chain better by providing access to Day-to-Day activities </h3>

        </div>

        <div className="flex flex-col w-[100%]">
          <div className="icon-div flex md:flex-row flex-col justify-between w-[70%] m-auto">
            <div
              
              className="icon bg-[#000352] md:h-[200px] h-[150px] md:w-[20%] w-[100%] my-3 flex align-center md:rounded-t-3xl rounded-3xl flex flex-col">
              <img src={hm1} alt="" className='md:w-[50%] w-[30%] h-auto m-auto' />
              {   <p className='text-center mb-3 text-lg text-white'>Production</p>}
            
            </div>
            <div
              className="icon bg-[#000352] md:h-[200px] h-[150px] md:w-[20%] w-[100%] my-3 flex align-center md:rounded-t-3xl rounded-3xl flex-col flex">
              <img src={hm2} alt="" className='md:w-[50%] w-[30%] h-auto m-auto' />
              {<p className='text-white text-center mb-3 text-lg'>Logistics</p>}
            </div>
            <div
              className="icon bg-[#000352] md:h-[200px] h-[150px] md:w-[20%] w-[100%] my-3 flex align-center md:rounded-t-3xl rounded-3xl flex flex-col">
              <img src={hm3} alt="" className='md:w-[50%] w-[30%] h-auto m-auto' />
              { <p className='text-white text-center mb-3 text-lg'>Distribution</p> }
            </div>
            <div
              className="icon bg-[#000352] md:h-[200px] h-[150px] md:w-[20%] w-[100%] my-3 flex align-center md:rounded-t-3xl rounded-3xl flex flex-col">
              <img src={hm4} alt="" className='md:w-[50%] w-[30%] h-auto m-auto' />
              { <p className='text-white text-center mb-3 text-lg'>Cash Collection</p> }
              
            </div>
            
          </div>
          <div className='bg-white flex md:flex-row flex-col w-[85%]  m-auto rounded-3xl px-8 py-6 mb-6 justify-between'>
            <div className="md:w-[48%] w-[100%]">
              <h2 className='text-[#e14444] font-semibold text-2xl w-[90%]'><span style={{color:'black'}}>Vertical Digitization of Manufacturing</span> Execution System and Automation (MESA)</h2>
              <h3 className='font-bold mt-2 text-xl text-[#e14444] mt-5'>Procurement  <span style={{color:'black'}}>Tracking</span></h3>
              <div >
              <p  className='mt-1 text-sm font-semibold text-justify'>Real Time Tracking of Procurement input and KPIs. Quickly access a specific sample or purchase order and analyze the procurement status directly from our interface.</p>

              </div>
             
              <h3 className='font-bold mt-2 text-xl mt-5'><span style={{color:'#e14444'}}>Production</span> Tracking</h3>
              <p  className='mt-3 text-sm font-semibold text-justify'>Track real-time production at factories and maintain smooth material flow between departments.</p>
              <h3 className='font-bold mt-2 text-xl mt-5'><span style={{color:'#e14444'}}>Demand</span> Generation</h3>
              <p  className='mt-3 text-sm font-semibold text-justify'>Generate demand from existing supply chain [Distributor/Wholesaler] through Soptle tech enabled mobile application and decrease work time and increase efficiency by identifying the real machine of demand generation.</p>

            </div>
            <div className="md:w-[48%] w-[100%]">
              <img src="" alt="" />
              <h3 className='font-bold mt-2 text-xl mt-5'><span style={{color:'#e14444'}}>Order</span> Fulfillment</h3>
              <p  className='mt-3 text-sm font-semibold text-justify'>Track orders across the supply chain from Distributor/Wholesaler to Retailer and proactively plan, predict & produce fresh and get rid of logistics & delivery promise challenges.</p>
              <h3 className='font-bold mt-2 text-xl mt-5'><span style={{color:'#e14444'}}>Cash Collection</span> & Reconciliation</h3>
              <p   className='mt-3 text-sm font-semibold text-justify'>Configure multiple payable and receivable in the factory to get real-time input of each and every transaction easily.</p>

            </div>

          </div>
        </div>

        <div className='bg[#f7f7f7] h-[300px] w-[100%] absolute'></div>
        {/* <img alt="Banner image"
          // style="position: absolute; width: 100%; height: 100%; left: 0px; transition-duration: 0.3s; opacity: 1;" 
          src={soptle} /> */}

      </section>

      {/* SECTION 5 */}
      {/* <section className="flex relative h-[100%] overflow-hidden flex-row w-[100%]">
        <img src="https://dj7u9rvtp3yka.cloudfront.net/layout/banners/promotions/ZilingoRevamp/Banner6-2p301-w2880p0-h1252p0-en_v6.png" className='absolute w-[100]%' alt="" />
        <div className="w-[50%]"></div>
        <div className='w-[50%] px-20 py-16 z-[100]'>
          <h2>Source custom-made apparel,
            fabric, yarn and more</h2>
          <h3>
            Source from our trusted manufacturers and suppliers in Bangladesh,
            India, Sri Lanka, Thailand, Indonesia, Vietnam & more regions
          </h3>
          <ul className='list-inside list-disc'>
            <li>Brands can launch collection faster with less hassle</li>
            <li>Brands can launch collection faster with less hassle</li>
            <li>Brands can launch collection faster with less hassle</li>
            <li>Brands can launch collection faster with less hassle</li>

          </ul>
          <p>Low MDQ | Quick Turnaround Time | Wide Price Range | Multiple Categories</p>

          <button className='font-bold'>
            Source Now
          </button>
        </div>
      </section> */}


      {/* SECTION 6 */}

      <section className="flex flex-col px-2 md:px-10 py-16">
        <h2 className='text-center font-semibold text-[#e14444] text-4xl pb-10'>Our <span style={{ color: 'black' }}>Presence</span></h2>

        <div className="flex md:w-[80%] w-[100%] flex-row justify-between m-auto">
          <div className="md:w-[10%] w-[100%] justify-between flex flex-col">
            <div className="items-center flex flex-col my-3 md:my-0">
              <h2 className=' text-lg md:text-3xl  font-semibold'>65+</h2>
              <p className='font-medium'>Manufactures</p>
            </div>
            <div className="items-center flex flex-col my-3 md:my-0">
              <h2 className='text-lg text-center md:text-3xl font-semibold md:absolute'>30000+ / months</h2>
              <p className='font-medium md:absolute md:mt-10'>Order processed</p>
            </div>
            <div className="items-center flex flex-col my-3 md:my-0">
              <h2 className='text-lg md:text-3xl font-semibold'>5+</h2>
              <p className='font-medium text-sm md:text-base md:absolute md:mt-10 '>Logistic Partner</p>
            </div>
          </div>
          <div className="flex items-center flex-col md:w-[80%] w-[100%] my-3 md:my-0">
            <div className="flex flex-col justify-between mb-6">
              <h2 className='text-lg md:text-3xl font-semibold'>15000+</h2>
              <p className='font-medium text-sm md:text-base'>Retailers</p>
            </div>
            <div className='d-flex relative '>
              <img className='md:w-[80%] w-[100%] m-auto md:mr-[-30px]' src={map} alt="" />

            </div>
          </div>
          <div className="md:w-[10%] w-[100%] justify-between flex flex-col">
            <div className="flex flex-col items-center my-3 md:my-0">
              <h2 className='text-lg md:text-3xl font-semibold'>550+</h2>
              <p className='font-medium text-center text-sm md:text-base ' >Distribution Partners
              </p>
            </div>
            <div className="flex flex-col items-center my-3 md:my-0">
              <h2 className=' font-semibold text-lg md:text-3xl'>1200+</h2>
              <p className='font-medium text-sm md:text-base'>Unique SKUs</p>
            </div>
            <div className="flex flex-col items-center my-3 md:my-0">
              <h2 className=' font-semibold text-lg md:text-3xl'>56+</h2>
              <p className='font-medium text-sm md:text-base'>Cities</p>
            </div>
          </div>
        </div>

      </section>


      {/* SECTION 7 */}
      <section>
      </section>

      {/* SECTION 8 */}

      <section>
        <section className='flex flex-col py-16'>
          <h2 className='text-center font-semibold text-[black] text-4xl pb-10'>
            <span style={{  color: '#e14444' }}>Our</span>  Customers
          </h2>
          <div>
            <BrandCarousel>
              <img src='./brands.jpg' alt='imagem' title='imagem' />
            </BrandCarousel>
          </div>
        </section>
      </section>



      {/* Section 9 */}
      <section className='flex flex-col py-20'>
        <h2 style = {{ fontSize: 23, }} className='text-center font-semibold text-[#e14444] text-3xl pb-10'>

          Powering innovation at  <span style={{ color: 'black', fontSize: 23 }}>65+</span> manufacturers countrywide

        </h2>
        <div>
          <Carousel />
        </div>
      </section>

      {/* Section 10 */}

      <section className='flex flex-col md:flex-row px-10 py-10 justify-between bg-black'>

        <h2 className='text-white text-3xl md:mb-0 mb-3'>Ready to get started? Let's Talk</h2>

        <button className='bg-[#e14444] text-white py-2 px-5 text-lg font-semibold' onClick={() => changeDir("/contact")}>Contact Us</button>

      </section>

    </div>
  )
}


export default Home


