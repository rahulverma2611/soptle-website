import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/RouterConfig'
import icon1 from "./images-removebg-preview.png"
import icon2 from "./factory-industry-clip-art-png-favpng-siUJ3MYjb5kG5VRM1cTEwbiV7__1_-removebg-preview.png"
import business from "./business today.png"
import aboutimg1 from "../../assets/Aboutus.png"
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import Bw from "../../assets/bw.jfif"
import theHindu from "../../assets/the hindu.png"
import businessToday from "../../assets/businesstoday.png"
import about1 from "../../assets/about1.avif"
import about2 from "../../assets/about2.avif"
import about3 from "../../assets/about3.avif"
import news1 from "../../assets/news1.avif"






const About = () => {

  const navigate = useNavigate()

  const changeDir = (dir) => {
    navigate(dir)

  }

  return (
    <div className='About'>
      <section className=" max-w-[1380px] m-auto">
        <section className=" mx-[25px] lg:mx-[30px] pt-[50px] lg:pt-[60px]">
          <section
            className=" flex flex-col-reverse  lg:flex-row  items-center lg:pt-[15px] relative"
            style={{ justifyContent: "space-between", paddingTop: 25 }}
          >
            <section className=" sm:max-w-[363px] md:max-w-[674px] z-[0] md:z-[1]">
              <section className="flex">
                <p className="pt-[10px]md:pt-[30px] sm:pb-3 font-semibold text-[16px]  md:text-[18px] ">
                  <span className="text-orange-500 md:text-2xl text-xl   relative top-[2px]">
                    |
                  </span>{" "}
                  About Us
                </p>
              </section>
              <h1 className="font-bold text-2xl md:text-[26px]  text-[15px] lg:text-[20px] pt-[20px]">
                Soptle’s SaaS-led approach has transformed the way in which Manufacturers,
                Distributors and Retailers carry out their business.
              </h1>
              <p className="pt-4 pb-4 text-[13px]  !font-normal  md:text-[16px] !leading-8 text-[#171717]">
              Soptle’s SaaS-led approach has transformed the way in 
              which Manufacturers, Distributors and Retailers carry out their business
              </p>
            </section>
            <section
              className="hidden lg:inline absolute "
              style={{ top: "-126px", right: 0 }}
            >
              <div className="">
                <div className="h-[500px] py-8 flex">
                  <img src={aboutimg1} className="h-[100%] m-auto" alt="" srcset="" />
                </div>{" "}
              </div>
            </section>
            <section className=" inline lg:hidden">
              <div className="">
                <div className="md:h-[400px] " style={{ height: 300 }}>
                  <img src={aboutimg1} className="h-[100%] m-auto" alt="" srcset="" />
                </div>
              </div>
            </section>
          </section>
        </section>
      </section>


      {/* Section 2 */}
      <div>
        <section className="flex md:mt-20  flex-col gap-[50px] md:gap-[5px] mx-[24px] md:mx-[35px] lg:mx-[85px]  mt-10 pb-10  items-center justify-center md:justify-between  md:items-start md:flex-row  ">
          <section className="flex flex-col items-center justify-center gap-3  md:ml-0">
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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: 'center',
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
                    src={about1}
                    className="md:w-[60%] w-[70%]"
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0
                    }}
                  />
                </span>
                {/* <img
                  alt="vision"
                  srcSet={about1}
                  src={about1}
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

                    minHeight: "100%",
                    maxHeight: "100%",
                    objectFit: "contain"
                  }}
                /> */}
                <noscript />
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 max-w-[350px] md:max-w-[290px] text-center">
              <h2 className="inline text-[20px] md:text-[24px] font-extrabold ">
                <span style={{ color: "#e14444" }}>Our</span> Vision
              </h2>
              <h3 className="pt-4 text-[14px] !md:text-[16px] !leading-7 md:text-base md:font-semibold text-[#646464]">
                Soptle's vision is to Empower and Digitize FMCG Manufacturers across the globe.

              </h3>
            </div>
          </section>
          <section className="flex flex-col items-center justify-center gap-3  md:ml-0">
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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: 'center',
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
                    src={about2}
                    className="md:w-[60%] w-[70%]"
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0
                    }}
                  />
                </span>
                {/* <img
                  alt="identity"
                  srcSet={about2}
                  src={about2}
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
                /> */}
                <noscript />
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 max-w-[350px] md:max-w-[290px] text-center">
              <h2 className="inline text-[20px] md:text-[24px] font-extrabold ">
                <span style={{ color: "#e14444" }}>Our</span> Identity
              </h2>
              <h3 className="pt-4 text-[11px] !md:text-[16px] !leading-7 md:text-base md:font-semibold text-[#646464]">
                We are an India based SaaS-led B2B Retail Commerce Platform headquartered at Gurugram.
              </h3>
            </div>
          </section>
          <section className="flex flex-col items-center justify-center gap-3  md:ml-0">
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
                    display: "flex",
                    justifyContent: "center",
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
                    src={about3}
                    className="md:w-[60%] w-[70%]"
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      // width: "70%",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0
                    }}
                  />
                </span>
                {/* <img
                  alt="purpose"
                  srcSet={about3}
                  src={about3}
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
                /> */}
                <noscript />
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 max-w-[350px] md:max-w-[290px] text-center">
              <h2 className="inline text-[20px] md:text-[24px] font-extrabold ">
                <span style={{ color: "#e14444" }}>Our</span> Purpose
              </h2>
              <h3 className="pt-4 text-[14px] !md:text-[16px] !leading-7 md:text-base md:font-semibold text-[#646464]">
                Soptle's purpose is to Digitizing and Incentivising the FMCG Manufacturers and to create a one-stop-hub for
                them.
              </h3>
            </div>
          </section>
        </section>
      </div>


      {/* Section 3 */}



      <section className="bg-[#FFFDF6]">
        <section className="mx-[20px] md:mx-[40px] lg:mx-[85px]">
          <section className=" flex flex-col justify-center items-center text-center pt-20">
            <h2 className="text-[28px] md:text-[36px] font-extrabold pb-5">
              <span style={{ color: "#e14444" }}>Our</span> Story
            </h2>
            <p className=" text-[11px] md:text-[17px] !leading-8 font-normal max-w-[960px] m-auto">
              Founded in Sep 2021,
              Soptle started to establish an integrated technology to the neglected regional FMCG Manufacturers in India with a B2B Retail
              Commmerce App. It uses tech and data to distribute at scale and use necessary components (existing Distributor/Wholesaler)
              in the FMCG Supply Chain to build a high growth and profitable business.
            </p>
          </section>
          <section className="pb-20 max-w-[1056px] m-auto">
            <section
              className="flex flex-col md:flex-row md:gap-5 gap-12  md:text-left text-center rounded-md  py-6 px-10 justify-between items-center mt-10 text-[#332d19]"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.06) 0px 0px 20px 0px",
                backgroundImage:
                  "linear-gradient(to right, rgb(250, 241, 210), rgb(254, 250, 236) 26%, rgb(253, 247, 226) 50%, rgb(253, 247, 226) 72%, rgb(255, 251, 235))"
              }}
            >
              <section className="flex flex-col items-center">
                <h2 className="text-[16px]">Launched in</h2>
                <h2 className="text-[36px] font-extrabold">
                  2021
                </h2>
              </section>
              <section className="flex flex-col items-center">
                <h2>Team</h2>
                <h2 className="text-[36px] font-extrabold">
                  <span><CountUp end={26} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp></span>+
                </h2>
              </section>
              <section className="flex flex-col items-center">
                <h2>Manufacturers</h2>
                <h2 className="text-[36px] font-extrabold">
                  <span><CountUp end={65} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp></span>+
                </h2>
              </section>
              <section className="flex flex-col items-center">
                <h2 className='text-center'>Retailers</h2>
                <h2 className="text-[36px] font-extrabold">
                  {" "}
                  <span><CountUp end={15000} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp></span>+
                </h2>
              </section>
            </section>
          </section>
        </section>
      </section>



      {/* Section 4 */}


      <section className="bg-[#f7f7f7]">
        <section className="mx-[20px] md:mx-[40px] lg:mx-[85px] pt-20">
          <section className="flex flex-col justify-center items-center max-w-[1000px] text-center m-auto">
            <h2 className="text-[18px] md:text-[24px] font-bold text-[#484848] pb-[20px]">
              <span style={{ color: "#e14444" }}>What</span>  We Do?
            </h2>
            <h2 className="text:[24px] md:text-[33px] text-[#212121] font-bold pb-4 md:pb-10">
              Our SaaS Platform-cum-Mobile App enables FMCG Manufacturers to serve their Supply Chain better and in a more efficient way.
            </h2>
          </section>
          <section className="flex flex-col md:flex-row justify-center items-center gap-[90px] md:gap-[40px] relative top-[60px]">
            <section
              className="relative flex flex-col justify-start pt-[40px] px-[35px] items-center min-w-[100px] min-h-[170px] md:min-h-[243px] lg:min-h-[180px] bg-[#fff7f3] rounded-lg border  cursor-pointer border-[#f6cbb6]"
              style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 20px 0px" }}
            >
              <section className=" absolute z-[2] -top-[26px] w-12 h-12 bg-[#e14444] rounded-full text-center">
                <h2 className="absolute right-[20px] top-[13px] text-[white]">1</h2>
              </section>
              <section className=" absolute  -top-[33px] w-16 h-16 bg-white rounded-full text-center" />
              <section className=" absolute  -top-[30px] w-14 h-14 bg-[#fef2ed] rounded-full text-center" />
              <div className=" text-center max-w-[290px]">
                <h2 className="mb-2 text-[16px] md:text-[17px] lg:text-[24px] font-semibold tracking-tight text-gray-900 ">
                  Vertical Digitisation
                </h2>
                <h2 className="mb-2 !leading-6  text-[14px] text-[#535353] font-semibold tracking-tight  pt-4">
                  We make a Manufacturer digital with Soptle Connect Platform also help them
                  manage their day-to-day activities form procurement to distribution at scale.
                </h2>
              </div>
            </section>
            <section
              className="relative flex flex-col justify-start pt-[40px] px-[35px] items-center min-w-[100px] min-h-[170px] md:min-h-[243px] lg:min-h-[180px] bg-[#fff7f3] rounded-lg border  cursor-pointer border-[#f6cbb6]"
              style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 20px 0px" }}
            >
              <section className=" absolute z-[2] -top-[26px] w-12 h-12 bg-[#e14444] rounded-full text-center">
                <h2 className="absolute right-[20px] top-[13px] text-[white]">2</h2>
              </section>
              <section className=" absolute  -top-[33px] w-16 h-16 bg-white rounded-full text-center" />
              <section className=" absolute  -top-[30px] w-14 h-14 bg-[#fef2ed] rounded-full text-center" />
              <div className=" text-center max-w-[290px]">
                <h2 className="mb-2 text-[16px] md:text-[17px] lg:text-[24px] font-semibold tracking-tight text-gray-900 ">
                  Geographical Expansion
                </h2>
                <h2 className="mb-2 !leading-6  text-[14px] text-[#535353] font-semibold tracking-tight  pt-4">
                  We enable the Manufacturers to serve at another
                  geographical location by providing access to country wide distribution at a scale through Soptle’s
                  existing tech enabled S&D channels (SDPs and SRPs) cum market linkages.
                </h2>
              </div>
            </section>
            <section
              className="relative flex flex-col justify-start pt-[40px] px-[35px] items-center min-w-[100px] min-h-[170px] md:min-h-[243px] lg:min-h-[180px] bg-[#fff7f3] rounded-lg border  cursor-pointer border-[#f6cbb6]"
              style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 20px 0px" }}
            >
              <section className=" absolute z-[2] -top-[26px] w-12 h-12 bg-[#e14444] rounded-full text-center">
                <h2 className="absolute right-[20px] top-[13px] text-[white]">3</h2>
              </section>
              <section className=" absolute  -top-[33px] w-16 h-16 bg-white rounded-full text-center" />
              <section className=" absolute  -top-[30px] w-14 h-14 bg-[#fef2ed] rounded-full text-center" />
              <div className=" text-center max-w-[290px]">
                <h2 className="mb-2 text-[16px] md:text-[17px] lg:text-[24px] font-semibold tracking-tight text-gray-900 ">
                  Finance and more
                </h2>
                <h2 className="mb-2 !leading-6  text-[14px] text-[#535353] font-semibold tracking-tight  pt-4">
                  We provide Fintech support [secured purchase Financing & Bill discounting] in between the transactions of key stakeholders in a supply chain.
                </h2>
              </div>
            </section>
          </section>
        </section>
      </section>


      {/* Section 5 */}

      <section>
        <section className="flex flex-col justify-center items-center pt-40 pb-20 ">
          <h2 className="text-[28px] md:text-[36px] font-extrabold pb-5"><span style={{ color: "#e14444" }}>In The</span> News</h2>
          <div className="md:grid grid-cols-3 gap-8 ">
            <section className="flex justify-center items-center max-h-[30px] ">
              <a
              className='mt-4 md:mt-0'
                target="_blank"
                href="https://economictimes.indiatimes.com/industry/services/retail/b2b-retail-commerce-platform-soptle-raises-funds-led-by-soonicorn-llp-and-a-clutch-of-logistics-leaders/articleshow/93873561.cms"
              >
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
                      src={news1}
                      style={{
                        display: "block",
                        maxWidth: "100%",
                        width: "200px",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        marginBottom: "10px",
                        border: 0,
                        margin: 0,
                        paddingBottom: "10px"
                        // padding: 0

                      }}
                    />
                  </span>
                  {/* <img
                    alt="economics-times-logo"
                    srcSet={news1}
                    src={news1}
                    decoding="async"
                    data-nimg="intrinsic"
                    style={{
                      position: "absolute",
                      inset: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      marginBottom: "10px",
                      border: "none",
                      margin: "auto",
                      display: "block",
                      width: 0,
                      height: 0,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                      objectFit: "cover"
                    }}
                  /> */}
                  <noscript />
                </span>
              </a>
            </section>
            <section className="flex justify-center items-center max-h-[30px]">
              <a
              className='mt-12 md:mt-4'

                target="_blank"
                href="https://www.thehindu.com/business/start-up-soptle-raises-funds-for-expansion/article65837490.ece"
              >
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
                      src={theHindu}
                      style={{
                        display: "block",
                        maxWidth: "100%",
                        width: "200px",
                        height: "auto",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        paddingBottom: "10px"
                      }}
                    />
                  </span>
                  {/* <img
                    alt="yourstory-logo"
                    srcSet={theHindu}
                    src={theHindu}
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
                      objectFit: "cover"
                    }}
                  /> */}
                  <noscript />
                </span>
              </a>
            </section>
            <section className="flex justify-center items-center max-h-[30px]">
              <a
              className='mt-14 md:mt-0'
                target="_blank"
                href="https://www.businesstoday.in/latest/trends/story/this-start-up-by-a-20-year-old-college-dropout-raises-angel-funding-345985-2022-08-30"
              >
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
                    maxWidth: "100%",
                    paddingBottom: "10px"

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
                      src={businessToday}
                      style={{
                        display: "block",
                        maxWidth: "100%",
                        width: "200px",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0
                      }}
                    />
                  </span>
                  {/* <img
                    alt="business-standard-logo"
                    srcSet={businessToday}
                    src={businessToday}
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
                  /> */}
                  <noscript />
                </span>
              </a>
            </section>
          </div>
          {/* <section className="inline md:hidden">
            <section className="mx-[50px]">
              <div className="carousel-root">
                <div className="carousel carousel-slider" style={{ width: "100%" }}>
                  <ul className="control-dots">
                    <li
                      className="dot"
                      value={0}
                      role="button"
                      tabIndex={0}
                      aria-label="slide item 1"
                    />
                    <li
                      className="dot"
                      value={1}
                      role="button"
                      tabIndex={0}
                      aria-label="slide item 2"
                    />
                    <li
                      className="dot"
                      value={2}
                      role="button"
                      tabIndex={0}
                      aria-label="slide item 3"
                    />
                    <li
                      className="dot"
                      value={3}
                      role="button"
                      tabIndex={0}
                      aria-label="slide item 4"
                    />
                    <li
                      className="dot"
                      value={4}
                      role="button"
                      tabIndex={0}
                      aria-label="slide item 5"
                    />
                    <li
                      className="dot"
                      value={5}
                      role="button"
                      tabIndex={0}
                      aria-label="slide item 6"
                    />
                    <li
                      className="dot selected"
                      value={6}
                      role="button"
                      tabIndex={0}
                      aria-label="slide item 7"
                    />
                  </ul>
                  <button
                    type="button"
                    aria-label="previous slide / item"
                    className="control-arrow control-prev"
                  />
                  <div className="slider-wrapper axis-horizontal">
                    <ul
                      className="slider animated"
                      style={{
                        transform: "translate3d(-600%, 0px, 0px)",
                        transitionDuration: "350ms"
                      }}
                    >
                      <li className="slide">
                        <section className="flex justify-center items-center">
                          <a
                            target="_blank"
                            href="https://economictimes.indiatimes.com/tech/funding/groyyo-gets-4-6-million-seed-funding-from-alpha-wave-others/articleshow/88665018.cms"
                          >
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
                                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27250%27/%3e"
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
                                alt="economics-times-logo"
                                srcSet="https://groyyo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FecTimes.5a610043.png&w=384&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FecTimes.5a610043.png&w=750&q=75 2x"
                                src="https://groyyo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FecTimes.5a610043.png&w=750&q=75"
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
                          </a>
                        </section>
                      </li>
                      <li className="slide">
                        <section className="flex justify-center items-center">
                          <a
                            target="_blank"
                            href="https://yourstory.com/2022/01/this-b2b-startup-is-connecting-small-manufacturers/amp"
                          >
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
                                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27250%27/%3e"
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
                                alt="yourstory-logo"
                                srcSet="https://groyyo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FyourStory.f01fdcbc.png&w=384&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FyourStory.f01fdcbc.png&w=750&q=75 2x"
                                src="https://groyyo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FyourStory.f01fdcbc.png&w=750&q=75"
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
                          </a>
                        </section>
                      </li>
                      <li className="slide">
                        <section className="flex justify-center items-center">
                          <a
                            target="_blank"
                            href="https://www.business-standard.com/article/companies/b2b-manufacturing-start-up-groyyo-raises-4-6-mn-led-by-alpha-wave-122010300367_1.html"
                          >
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
                                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27250%27/%3e"
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
                                alt="business-standard-logo"
                                srcSet="https://groyyo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbusiness_standard.0df58dfd.png&w=384&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbusiness_standard.0df58dfd.png&w=750&q=75 2x"
                                src="https://groyyo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbusiness_standard.0df58dfd.png&w=750&q=75"
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
                          </a>
                        </section>
                      </li>
                      <li className="slide">
                        <section className="flex justify-center items-center">
                          <a
                            target="_blank"
                            href="https://www.businessinsider.in/business/startups/news/groyyo-raises-4-6m-led-by-alpha-wave-incubation/articleshow/88661630.cms"
                          >
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
                                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27250%27/%3e"
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
                                alt="businessinsider-logo"
                                srcSet="https://groyyo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbi.6ced11fb.png&w=384&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbi.6ced11fb.png&w=750&q=75 2x"
                                src="https://groyyo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbi.6ced11fb.png&w=750&q=75"
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
                          </a>
                        </section>
                      </li>
                      <li className="slide">
                        <section className="flex justify-center items-center">
                          <a
                            target="_blank"
                            href="https://www.thehindubusinessline.com/info-tech/b2b-manufacturing-start-up-groyyo-raises-46-[…]nding-led-by-alpha-wave-incubation/article38097094.ece"
                          >
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
                                  src={theHindu}
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
                                alt="the-hindu-business-line-logo"
                                srcSet={theHindu}
                                src={theHindu}
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
                          </a>
                        </section>
                      </li>
                      <li className="slide">
                        <section className="flex justify-center items-center">
                          <a
                            target="_blank"
                            href="https://timesofindia.indiatimes.com/companies/b2b-startup-groyyo-raises-funds-to-expand-global-footprint/articleshow/88664877.cms?from=mdr"
                          >
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
                                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27250%27/%3e"
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
                                alt="times-of-india-logo"
                                srcSet="https://groyyo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftoi.35e8e422.png&w=384&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftoi.35e8e422.png&w=750&q=75 2x"
                                src="https://groyyo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftoi.35e8e422.png&w=750&q=75"
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
                          </a>
                        </section>
                      </li>
                      <li className="slide selected previous">
                        <section className="flex justify-center items-center">
                          <a
                            target="_blank"
                            href="https://www.vccircle.com/falcon-edge-s-alpha-wave-invests-4-6-mn-in-b2b-startup-groyyo"
                          >
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
                                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27250%27/%3e"
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
                                alt="vccircle-logo"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
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
                                  objectFit: "contain",
                                  filter: "blur(20px)",
                                  backgroundSize: "contain",
                                  backgroundImage: 'url("data:image/png',
                                  backgroundPosition: "0% 0%"
                                }}
                              />
                              <noscript />
                            </span>
                          </a>
                        </section>
                      </li>
                    </ul>
                  </div>
                  <button
                    type="button"
                    aria-label="next slide / item"
                    className="control-arrow control-next control-disabled"
                  />
                </div>
              </div>
            </section>
          </section> */}
        </section>
      </section>


      {/* Section 6 */}


      <section className="">
        <section className="flex flex-col md:flex-row  justify-evenly items-center">
          <section
            className="flex flex-col lg:flex-row  relative justify-start items-center min-w-[100%] md:min-w-[50%]  text-center bg-slate-400 md:gap-6  px-6 lg:px-16 min-h-[463px] lg:min-h-[263px] pt-10 lg:pt-0"
            style={{ backgroundColor: "rgb(252, 237, 194)" }}
          >
            <section className="flex flex-col lg:justify-end lg:pb-10 items-center lg:items-start  max-w-[320px] md:min-h-[350px] lg:min-h-[300px]  lg:text-left  lg:pt-0">
              <section className="pb-6 lg:pb-[43px]">
                <h2
                  className="font-extrabold text-3xl md:text-[30px] pb-[15px] md:pb-[10px]"
                  style={{ color: "rgb(65, 49, 0)" }}
                >
                  For Manufacturers
                </h2>
                <p
                  className="text-[16px] md:text-[18px]"
                  style={{ color: "rgb(65, 49, 0)" }}
                >
                  Digitize your day-to-day activities and expand to another geographies at zero fixed costs.
                </p>
              </section>
              <section className="!-z-1">
                <a href="http://soptleconnect.com/">
                  <button
                    className=" flex justify-center items-center text-base font-semibold transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 !text-white !bg-[#e14444] duration-300  text-[18px]  rounded-full min-w-[160px] md:min-w-[160px] min-h-[41px] lg:min-w-[170px] lg:min-h-[44px]"
                    style={{
                      backgroundColor: "white",
                      color: "rgb(211, 98, 24)",
                      boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 6px 0px"
                    }}
                  >
                    <section className="flex flex-row justify-center items-center">
                      <h2 className="text-[1rem] md:text-[1rem] lg:text-[1rem] font-semibold">
                        Explore Now
                      </h2>
                      <section style={{ paddingLeft: 15 }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="m14 5 7 7m0 0-7 7m7-7H3" />
                        </svg>
                      </section>
                    </section>
                  </button>
                </a>
              </section>
            </section>
            <section className="absolute -bottom-[7px] lg:right-[12px]">
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
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27210%27%20height=%27200%27/%3e"
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
                  alt="brands"
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
                    objectFit: "cover"
                  }}
                />
                <noscript />
              </span>
            </section>
          </section>
          <section
            className="flex flex-col lg:flex-row  relative justify-start items-center min-w-[100%] md:min-w-[50%]  text-center bg-slate-400 md:gap-6  px-6 lg:px-16 min-h-[463px] lg:min-h-[263px] pt-10 lg:pt-0"
            style={{ backgroundColor: "#f7cbcb" }}
          >
            <section className="flex flex-col lg:justify-end lg:pb-10 items-center lg:items-start  max-w-[320px] md:min-h-[350px] lg:min-h-[300px]  lg:text-left  lg:pt-0">
              <section className="pb-6 lg:pb-[43px]">
                <h2
                  className="font-extrabold text-3xl md:text-[30px] pb-[15px] md:pb-[10px]"
                  style={{ color: "rgb(65, 49, 0)" }}
                >
                  For Retailers
                </h2>
                <p
                  className="text-[16px] md:text-[18px]"
                  style={{ color: "rgb(65, 49, 0)" }}
                >
                  Procure vast range of product alternatives from India-wide Manufacturers at better margin.

                </p>
              </section>
              <section className="!-z-1">
                <a href="/retailer">
                  <button
                    className=" flex justify-center items-center text-base font-semibold transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 !text-white !bg-[#e14444] duration-300  text-[18px]  rounded-full min-w-[160px] md:min-w-[160px] min-h-[41px] lg:min-w-[170px] lg:min-h-[44px]"
                    style={{
                      backgroundColor: "white",
                      color: "rgb(211, 98, 24)",
                      boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 6px 0px"
                    }}
                  >
                    <section className="flex flex-row justify-center items-center">
                      <h2 className="text-[1rem] md:text-[1rem] lg:text-[1rem] font-semibold">
                        Explore Now
                      </h2>
                      <section style={{ paddingLeft: 15 }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="m14 5 7 7m0 0-7 7m7-7H3" />
                        </svg>
                      </section>
                    </section>
                  </button>
                </a>
              </section>
            </section>
            <section className="absolute -bottom-[7px] lg:right-[12px]">
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
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27210%27%20height=%27200%27/%3e"
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
                  alt="factories"
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
                    objectFit: "cover"
                  }}
                />
                <noscript />
              </span>
            </section>
          </section>
        </section>
      </section>








    </div>
  )
}

export default About