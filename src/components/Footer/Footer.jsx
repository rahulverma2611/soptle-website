import React from 'react'
import { useNavigate } from 'react-router-dom'

import logo from "../../assets/logo.png"
import androidIcon from "../../assets/android_3x.avif"
import appleIcon from "../../assets/apple_3x.avif"

const Footer = () => {
    const navigate = useNavigate()
    return (
        <section className="">
            <section>
                <footer className="text-center lg:text-left bg-gray-100 text-gray-600">
                    <div className="mx-6 py-14 text-center md:text-left">
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="flex flex-col items-center   lg:items-center  ">
                                <section className="">
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
                                                className='m-auto  w-[70%] md:w-[50%]'
                                                alt=""
                                                aria-hidden="true"
                                                src={logo}
                                                style={{
                                                    display: "block",
                                                    maxWidth: "100%",
                                                    // width: "70%",
                                                    // margin: "auto",
                                                    // width: "initial",
                                                    height: "initial",
                                                    background: "none",
                                                    opacity: 1,
                                                    border: 0,
                                                    // margin: 0,
                                                    padding: 0
                                                }}
                                            />
                                        </span>
                                        <noscript />
                                    </span>
                                    <p className="text-[20px] text-center  m-auto md:m-0 ">
                                        {" "}
                                        FMCG Distribution Redefined!
                                    </p>
                                </section>
                            </div>
                            <div className=" flex flex-col justify-center items-center">
                                <section>
                                    <p className="mb-4  ">
                                        <a className="text-gray-600 font-medium" onClick={() => navigate("/")}
                                            href="javascritp:void(0)">
                                            Manufacturers
                                        </a>
                                    </p>
                                    <p className="mb-4 ">
                                        <a className="text-gray-600 font-medium" onClick={() => navigate("/retailer")}
                                            href="javascritp:void(0)">
                                            Retailers
                                        </a>
                                    </p>
                                    <p className="mb-4">
                                        <a className="text-gray-600 font-medium" onClick={() => navigate("/about")}
                                            href="javascritp:void(0)">
                                            About Us
                                        </a>
                                    </p>
                                    <p className="Footer___StyledP-sc-1e9uxd1-4 bUTVBx mb-4">
                                        <a className="text-gray-600 font-medium">Log In</a>
                                    </p>
                                </section>
                            </div>
                            <section className="flex text-left justify-center items-center md:justify-around md:items-start gap-2 flex-col md:flex-col md:relative ">
                                <h3 className="font-bold text-sm md:text-[18px] ">
                                    DOWNLOAD OUR APP
                                </h3>
                                <section className="flex md:flex-row flex-col gap-3 items-center justify-center">
                                    <a
                                        target="_blank"
                                        href="https://play.google.com/store/apps/details?id=com.soptle.retail&utm_source=web&utm_campaign=app_download&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
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
                                                    display: "flex",
                                                    alignItems: "center",
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
                                                    className='w-[50%] md:w-[100%]'
                                                    alt=""
                                                    aria-hidden="true"
                                                    src={androidIcon}
                                                    style={{
                                                        display: "block",
                                                        maxWidth: "100%",
                                                        // width: "initial",
                                                        // height: "initial",
                                                        background: "none",
                                                        opacity: 1,
                                                        border: 0,
                                                        margin: 0,
                                                        padding: 0
                                                    }}
                                                />
                                            </span>
                                            <img
                                                className='w-[50%] md:w-[100%]'
                                                alt="play-store"
                                                src=""
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
                                                    // minWidth: "100%",
                                                    maxWidth: "100%",
                                                    // minHeight: "100%",
                                                    maxHeight: "100%",
                                                    objectFit: "contain"
                                                }}
                                                srcSet={androidIcon}
                                            />
                                            <noscript />
                                        </span>
                                    </a>
                                    <a
                                        target="_blank"
                                        href=""
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
                                                    display: "flex",
                                                    alignItems: "center",
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
                                                    className='w-[50%] md:w-[100%]'
                                                    aria-hidden="true"
                                                    src={appleIcon}
                                                    style={{
                                                        display: "block",
                                                        maxWidth: "100%",
                                                        background: "none",
                                                        opacity: 1,
                                                        border: 0,
                                                        margin: 0,
                                                        padding: 0
                                                    }}
                                                />
                                            </span>
                                            <img
                                                alt="apple-store"
                                                src={appleIcon}
                                                decoding="async"
                                                data-nimg="intrinsic"
                                                className='w-[50%] md:w-[100%]'
                                                style={{
                                                    // position: "absolute",
                                                    inset: 0,
                                                    boxSizing: "border-box",
                                                    padding: 0,
                                                    border: "none",
                                                    margin: "auto",
                                                    display: "block",
                                                    // width: 0,
                                                    height: 0,
                                                    // minWidth: "100%",
                                                    maxWidth: "100%",
                                                    // minHeight: "100%",
                                                    // maxHeight: "100%",
                                                    objectFit: "contain"
                                                }}
                                                srcSet={appleIcon}
                                            />
                                            <noscript />
                                        </span>
                                    </a>
                                </section>
                            </section>
                            <div className="flex flex-col justify-center items-center">
                                <section className="text-left">
                                    <p className="uppercase font-semibold mb-4 text-[16px] md:text-[18px]">
                                        Useful links
                                    </p>
                                    <a className="text-gray-600" href="https://www.linkedin.com/company/fransisco-technology/jobs/">
                                        <p className="mb-4  text-[18px] md:text-[20px] animate-bounce">
                                            We're hiring
                                        </p>
                                    </a>
                                    <p className="mb-4 text-[16px] md:text-[18px]">
                                        <a
                                            className="text-gray-600 text-[18px] md:text-[20px] "
                                            href="https://www.soptle.com/PrivacyPolicy.pdf"
                                        >
                                            Privacy Policy
                                        </a>
                                    </p>
                                </section>
                            </div>
                        </div>
                        <section className="flex justify-center items-center pt-10">
                            <a
                                target="_blank"
                                className="px-3 text-gray-600"
                                href="https://www.facebook.com/SoptleRetail/"
                            >
                                <svg
                                    focusable="false"
                                    className="Footer__SvgFb-sc-1e9uxd1-0 gQrpCS w-2.5"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                    />
                                </svg>
                            </a>
                            <a
                                target="_blank"
                                className="px-3 text-gray-600"
                                href="https://twitter.com/soptleofficial"
                            >
                                <svg
                                    focusable="false"
                                    data-prefix="fab"
                                    data-icon="twitter"
                                    className="Footer__SvgTw-sc-1e9uxd1-1 jjfQIK w-4"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                    />
                                </svg>
                            </a>
                            <a
                                target="_blank"
                                className="px-3 text-gray-600"
                                href="https://www.instagram.com/soptle.retail/?igshid=MTA0ZTI1NzA%3D"
                            >
                                <svg
                                    focusable="false"
                                    data-prefix="fab"
                                    data-icon="instagram"
                                    className="Footer__SvgIns-sc-1e9uxd1-2 blOKKH w-3.5"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                    />
                                </svg>
                            </a>
                            <a
                                target="_blank"
                                className="px-3 text-gray-600"
                                href="https://www.linkedin.com/company/fransisco-technology"
                            >
                                <svg
                                    focusable="false"
                                    data-prefix="fab"
                                    data-icon="linkedin-in"
                                    className="Footer__SvgLin-sc-1e9uxd1-3 jieeTC w-3.5"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                    />
                                </svg>
                            </a>
                        </section>
                    </div>
                    <div
                        className="text-center p-6 bg-gray-200  md:!mb-[0px]"
                        style={{ marginBottom: 60 }}
                    >
                        <p className="text-[12px]  font-normal  md:text-[14px] md:mt-0">
                            © 2021-22 Fransisco Technology Pvt. Ltd. All rights reserved.
                        </p>
                    </div>
                </footer>
            </section>
        </section>

    )
}

export default Footer