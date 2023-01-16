import React, { useEffect } from 'react'
// import Faq from '../../Components/Faq/Faq'
import Slider from '../../components/Slider/Slider'
// import { SDP_DATA, SDP_Testimonial } from "../../Data/Data"
import "./Retailer.scss"
// import { sendAmplitudeData } from '../../utils/amplitude';

 const SDP_Testimonial = [
    {
      title: "50% zyada payment",
      description: "What makes us love Soptle (apart from their simple, yet elegant UI / UX, speed and convenience) is their friendlyapproach towards Founders.They understand our problems and quickly bring a solution!",
      name: "Nikhil",
      store: ""
    },
    {
      title: "Pura hissa humein milta hai",
      description: "Very very useful app. All products are at best price only. I have using this app from 9 months . I will buy products from this app for selling products in my shop.",
      name: "Mahesh",
      store: ""
    },
    {
      title: "Humein Bohot fayeda hota hai",
      description: "Soptle is the best b2b website for local business. It provides us number of products and variety. Also user friendly interface. But some time's it shows lag on the finding products.Replacement policy absolutely good.",
      name: "Vikky",
      store: ""
    }
  ]

function Retailer() {
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //     sendAmplitudeData("LANDED_BECOMESDP_BECOMESDP", {
    //         "ACTION": "LANDED",
    //         "LOCATION": "BECOMESDP",
    //         "SCREEN": "BECOMESDP",
    //         "PLATFORM": "WEB_STATIC"
    //     })
    // }, [])
    return (
        <div className='sdp'>
            <div className="banner">
                <div className="overlay"></div>
                <div className="content">
                    <h2>
                        Start your entrepreneurship journey today!
                    </h2>
                    <p>
                        Become a Soptle Retail Partner. Earn higher margin and vast range of product alternatives on Soptle app
                    </p>
                    <a href="#form_sdp">
                        <button className='bg-[#e14444] rounded-lg p-2'>
                            Join Now
                        </button>
                    </a>
                </div>

            </div>

            <div className="sec_3">
                <h2>
                    SRP🔥<br />
                    Benefits</h2>
                <div className="content">
                    <div className="item">
                        <img src="./Assets/parto-01.svg" alt="" />
                        <h2>
                            Easy to Get Started
                        </h2>
                        <p>
                           Procure wide range of unique SKUs from manufactures accros india in a single interface. 
                        </p>
                    </div>

                    <div className="item">
                        <img src="./Assets/parto-05.svg" alt="" />
                        <h2>
                            Wide Assortment to Sell
                        </h2>
                        <p>
                            Soptle lists popular brands across all categories that a kirana store sells.
                        </p>
                    </div>

                    <div className="item">
                        <img src="./Assets/parto-02.svg" alt="" />
                        <h2>
                            Generous Commission
                        </h2>
                        <p>
                            By taking all middle-men out of the transaction, Soptle guarantees generous commissions for its SDPs.
                        </p>
                    </div>

                    <div className="item">
                        <img src="./Assets/parto-04.svg" alt="" />
                        <h2>
                            Great Earning Potential
                        </h2>
                        <p>
                            Earn on each SKUs from every Manufacturer and you recruit plus fees for surveys, etc.
                        </p>
                    </div>

                    <div className="item">
                        <img src="./Assets/parto-03.svg" alt="" />
                        <h2>
                            Grow with Soptle
                        </h2>
                        <p>
                            Avail career growth training and opportunities within the Soptle team.
                        </p>
                    </div>

                    <div className="item">
                        <img src="./Assets/parto-06.svg" alt="" />
                        <h2>
                            Be your own Boss
                        </h2>
                        <p>
                            Plan your day, plan your targets, grow your business.
                        </p>
                    </div>

                </div>
            </div>

            <hr className='highlighted_divider' />

            

            <hr className='highlighted_divider' />
            <Slider data={SDP_Testimonial} heading={"What SRPs have to say about us"} />

            {/* <Faq />             */}

            <div className="form_section" id="form_sdp">
                <div className="left">
                    <h2>
                        Let’s Get <br />Started
                    </h2>

                    <img src="./Assets/Become_sd preview.png" alt />
                </div>
                <div className="right">
                    <div className="form_div">
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe91m-oXHeAamKZEWVKB46R5rYRibuaxSNbJLxoKHWHKyqHWA/viewform?embedded=true" width={640} height={915} frameBorder={0} marginHeight={0} marginWidth={0}>Loading…</iframe>
                    </div>
                </div>
            </div>

            <hr />

            {/*
            <div className="faq">
                <div className="left">
                    <h2>
                        SDP's <br />FAQ
                    </h2>
                </div>
                <div className="right">
                    <div className="faq-style-wrapper">
                        <Faq data={SDP_DATA} />
                    </div>
                </div>
            </div>
            */}




        </div>
    )
}

export default Retailer
