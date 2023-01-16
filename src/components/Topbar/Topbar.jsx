import React from 'react'

const Topbar = ({setShowTopbar}) => {
    return (
        <section className=" relative flex flex-row  justify-center items-center bg-[#000000]  py-2">
            <h2 className="md:text-[16px] text-[10px] text-center lg:text-[20px] text-[white]">
                🎉 Soptle is India's first SaaS-led B2B FMCG Retail Commerce Platform.🎉
            </h2>
            <div className='md:mt-3 md:w-[40%] w-[20%]    md:w-auto md:justify-end items-center md:mt-0 flex relative'>
            <a
                target="_blank"
                className="   md:block text-[white] md:pl-4 md:mr-10 mr-2 "
                href="https://economictimes.indiatimes.com/industry/services/retail/b2b-retail-commerce-platform-soptle-raises-funds-led-by-soonicorn-llp-and-a-clutch-of-logistics-leaders/articleshow/93873561.cms"
            >
                <button className="bg-[#e14444] rounded-lg p-2">
                    <p className="md:text-[18px] text-[8px]  lg:text-[20px] "
                    style={{
                        whiteSpace: "nowrap"
                    }}
                    > Read More</p>
                </button>
            </a>
            <button className="absolute right-0 text-sm" onClick={() => setShowTopbar(false)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="md:h-7 md:w-7 h-5 w-5 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </button>
            </div>
            
        </section>

    )
}

export default Topbar