import React from 'react'

const NavbarNew = () => {
    return (
        <section className="">
            <header style={{ backgroundColor: "white", minHeight: 80 }}>
                <section className="bg-white md:hidden shadow-xl text-center fixed w-[100%] z-[1111] ">
                    <a href="/">
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
                                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27120%27%20height=%2760%27/%3e"
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
                                alt="logo"
                                srcSet="https://groyyo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-black.831cf2aa.png&w=128&q=75 1x, https://groyyo/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-black.831cf2aa.png&w=256&q=75 2x"
                                src="https://groyyo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-black.831cf2aa.png&w=256&q=75"
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
                    <div>
                        <div
                            className="bm-overlay"
                            style={{
                                position: "fixed",
                                zIndex: 1000,
                                width: "100%",
                                height: "100%",
                                background: "rgba(0, 0, 0, 0.3)",
                                opacity: 0,
                                transform: "translate3d(100%, 0px, 0px)",
                                transition: "opacity 0.3s ease 0s, transform 0s ease 0.3s"
                            }}
                        />
                        <div>
                            <div className="bm-burger-button" style={{ zIndex: 1000 }}>
                                <button
                                    type="button"
                                    id="react-burger-menu-btn"
                                    style={{
                                        position: "absolute",
                                        left: 0,
                                        top: 0,
                                        zIndex: 1,
                                        width: "100%",
                                        height: "100%",
                                        margin: 0,
                                        padding: 0,
                                        border: "none",
                                        fontSize: 0,
                                        background: "transparent",
                                        cursor: "pointer"
                                    }}
                                >
                                    Open Menu
                                </button>
                                <span>
                                    <span
                                        className="bm-burger-bars"
                                        style={{
                                            position: "absolute",
                                            height: "20%",
                                            left: 0,
                                            right: 0,
                                            top: "0%",
                                            opacity: 1
                                        }}
                                    />
                                    <span
                                        className="bm-burger-bars"
                                        style={{
                                            position: "absolute",
                                            height: "20%",
                                            left: 0,
                                            right: 0,
                                            top: "40%",
                                            opacity: 1
                                        }}
                                    />
                                    <span
                                        className="bm-burger-bars"
                                        style={{
                                            position: "absolute",
                                            height: "20%",
                                            left: 0,
                                            right: 0,
                                            top: "80%",
                                            opacity: 1
                                        }}
                                    />
                                </span>
                            </div>
                        </div>
                        <div
                            id=""
                            className="bm-menu-wrap"
                            aria-hidden="true"
                            hidden="true"
                            style={{
                                position: "fixed",
                                right: "inherit",
                                zIndex: 1100,
                                width: 300,
                                height: "100%",
                                transform: "translate3d(-100%, 0px, 0px)",
                                transition: "transform 0.4s ease 0s"
                            }}
                        >
                            <div
                                id="bm-morph-shape"
                                className="bm-morph-shape"
                                style={{
                                    position: "absolute",
                                    width: "100%",
                                    height: "100%",
                                    right: 0,
                                    left: "inherit",
                                    transform: "rotateY(0deg)"
                                }}
                            >
                                <svg
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 100 800"
                                    preserveAspectRatio="none"
                                >
                                    <path d="M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z" />
                                    <desc>Created with Snap</desc>
                                    <defs />
                                </svg>
                            </div>
                            <div
                                className="bm-menu"
                                style={{
                                    height: "100%",
                                    boxSizing: "border-box",
                                    overflow: "auto",
                                    position: "fixed",
                                    transition:
                                        "opacity 0s cubic-bezier(0.17, 0.67, 0.1, 1.27) 0.3s, transform 0s cubic-bezier(0.17, 0.67, 0.1, 1.27) 0.3s",
                                    opacity: 0
                                }}
                            >
                                <nav className="bm-item-list" style={{ height: "100%" }}>
                                    <section
                                        className="bm-item !flex !flex-col gap-6 text-left"
                                        tabIndex={-1}
                                        style={{
                                            display: "block",
                                            transition:
                                                "opacity 0s cubic-bezier(0.17, 0.67, 0.1, 1.27) 0.3s, transform 0s cubic-bezier(0.17, 0.67, 0.1, 1.27) 0.3s",
                                            opacity: 0
                                        }}
                                    >
                                        <section className="">
                                            <h2 className="text-[24px] !font-bold">For Brands</h2>
                                            <section className="">
                                                <a className=" py-2 px-4 block" href="/brands">
                                                    <section className="flex pl-5 flex-row justify-start items-center gap-4">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-6 w-6"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                                            />
                                                        </svg>
                                                        <h2 className="Hamburger___StyledH-sc-1v4dlch-0 fbfRTf">
                                                            Explore our offerings and browse trending catalog
                                                        </h2>
                                                    </section>
                                                </a>
                                            </section>
                                        </section>
                                        <section className="">
                                            <h2 className="text-[24px] !font-bold">
                                                For Garment Manufacturers
                                            </h2>
                                            <section>
                                                <a className="py-2 px-4 block" href="/fabric">
                                                    <section className="flex pl-5 flex-row justify-start items-center gap-4">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-6 w-6"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                                            />
                                                        </svg>
                                                        <h2 className="">Order Raw Materials</h2>
                                                    </section>
                                                </a>
                                                <a className="py-2 px-4 block" href="/factory">
                                                    <section className="flex pl-5 flex-row justify-start items-center gap-4">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-6 w-6"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                                            />
                                                        </svg>
                                                        <h2 className="">Groyyo Digital Factory</h2>
                                                    </section>
                                                </a>
                                            </section>
                                        </section>
                                        <section className="">
                                            <h2 className="text-[24px] !font-bold">
                                                For Raw Material Suppliers
                                            </h2>
                                            <section>
                                                <a className="py-2 px-4 block " href="/fabric#fabric-last">
                                                    <section className="flex pl-5 flex-row justify-start items-center gap-4">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-6 w-6"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                                            />
                                                        </svg>
                                                        <h2 className="">Supply fabric</h2>
                                                    </section>
                                                </a>
                                            </section>
                                        </section>
                                    </section>
                                </nav>
                            </div>
                            <div
                                style={{
                                    transition:
                                        "opacity 0s cubic-bezier(0.17, 0.67, 0.1, 1.27) 0.3s, transform 0s cubic-bezier(0.17, 0.67, 0.1, 1.27) 0.3s",
                                    opacity: 0
                                }}
                            >
                                <div
                                    className="bm-cross-button"
                                    style={{
                                        position: "absolute",
                                        width: 24,
                                        height: 24,
                                        right: 8,
                                        top: 8
                                    }}
                                >
                                    <button
                                        type="button"
                                        id="react-burger-cross-btn"
                                        tabIndex={-1}
                                        style={{
                                            position: "absolute",
                                            left: 0,
                                            top: 0,
                                            zIndex: 1,
                                            width: "100%",
                                            height: "100%",
                                            margin: 0,
                                            padding: 0,
                                            border: "none",
                                            fontSize: 0,
                                            background: "transparent",
                                            cursor: "pointer"
                                        }}
                                    >
                                        Close Menu
                                    </button>
                                    <span style={{ position: "absolute", top: 6, right: 14 }}>
                                        <span
                                            className="bm-cross"
                                            style={{
                                                position: "absolute",
                                                width: 3,
                                                height: 14,
                                                transform: "rotate(45deg)"
                                            }}
                                        />
                                        <span
                                            className="bm-cross"
                                            style={{
                                                position: "absolute",
                                                width: 3,
                                                height: 14,
                                                transform: "rotate(-45deg)"
                                            }}
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    style={{
                        top: 0,
                        width: "100%",
                        position: "fixed",
                        zIndex: 10000,
                        backgroundColor: "rgba(58, 53, 53, 0.36)"
                    }}
                >
                    <nav className=" mx-[25px] lg:mx-[30px] hidden  pt-5 md:flex   justify-center items-center md:gap-4 lg:gap-16 -mt-[22px]">
                        <section className="cursor-pointer">
                            <a href="/">
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
                                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27120%27%20height=%2760%27/%3e"
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
                                        alt="logo"
                                        srcSet="https://groyyo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-white.3838e85c.png&w=128&q=75 1x, https://groyyo/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-white.3838e85c.png&w=256&q=75 2x"
                                        src="https://groyyo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-white.3838e85c.png&w=256&q=75"
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
                        <div className="grow " style={{ color: "white" }}>
                            <ul className="flex font-semibold items-center font-heading relative md:top-[5px] lg:top-[5px] z-[100]">
                                <nav>
                                    <ul className="menus">
                                        <li className="menus-items">
                                            <button
                                                type="button"
                                                aria-haspopup="menu"
                                                aria-expanded="false"
                                            >
                                                Products <span className="arrow_nav" />
                                            </button>
                                            <ul className="dropdown_menu  ">
                                                <li className="menus-items">
                                                    <a href="/brands">For Brands</a>
                                                </li>
                                                <li className="menus-items">
                                                    <button
                                                        type="button"
                                                        aria-haspopup="menu"
                                                        aria-expanded="false"
                                                    >
                                                        {" "}
                                                        For Garment Manufacturers <span>»</span>
                                                    </button>
                                                    <ul className="dropdown_menu dropdown-submenu ">
                                                        <li className="menus-items">
                                                            <a href="/fabric">Order Raw Materials</a>
                                                        </li>
                                                        <li className="menus-items">
                                                            <a href="/factory">Groyyo Digital Factory</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="menus-items">
                                                    <button
                                                        type="button"
                                                        aria-haspopup="menu"
                                                        aria-expanded="false"
                                                    >
                                                        {" "}
                                                        For Raw Material Suppliers <span>»</span>
                                                    </button>
                                                    <ul className="dropdown_menu dropdown-submenu ">
                                                        <li className="menus-items">
                                                            <a href="/fabric#fabric-last">Supply Fabric</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menus-items">
                                            <a href="/about">About Us</a>
                                        </li>
                                    </ul>
                                </nav>
                            </ul>
                        </div>
                        <section className=" flex lg:gap-10 md:gap-1 justify-center items-center">
                            <a target="_blank" href="https://console.groyyo.com/">
                                <button
                                    className=" flex justify-center items-center text-base font-semibold transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 !text-white !bg-[#e14444] duration-300  text-[18px]  rounded-full min-w-[140px] md:min-w-[140px] min-h-[41px] lg:min-w-[150px] lg:min-h-[44px]"
                                    style={{
                                        backgroundColor: "white",
                                        color: "#e14444",
                                        boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 6px 0px"
                                    }}
                                >
                                    <section className="flex flex-row justify-center items-center">
                                        <h2 className="text-[0.7rem] md:text-[0.8rem] lg:text-[1.2rem] font-semibold">
                                            Go to console
                                        </h2>
                                    </section>
                                </button>
                            </a>
                        </section>
                    </nav>
                </section>
            </header>
        </section>

    )
}

export default NavbarNew