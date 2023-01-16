import React from 'react'
import "./Slider.scss"

function Slider(props) {
    const slideLeft = () => {
        var slider = document.getElementById('slider-container');
        slider.scrollLeft = slider.scrollLeft - 300;
    }

    const slideRight = () => {
        var slider = document.getElementById('slider-container');
        slider.scrollLeft = slider.scrollLeft + 300;
    }

    return (
        <div className="testimonials">
            <div className="left">
                <img src="./Assets/speaker.svg" alt="" />
                <h2>{props.heading}</h2>
                <div className="controls">

                    <div className="prev round " onClick={() => slideLeft()}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </div>
                    <div className="next round" onClick={() => slideRight()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                    </div>
                </div>
            </div>
            <div className="right" id="slider-container">

                {
                    props.data?.map((data, key) => {
                        return <div className="item">
                            <h2>{data.title}</h2>
                            <p>"{data.description}"</p>
                            <i className='highlighted_text'>- {data.name}</i>
                            <h6>{data.store}</h6>
                        </div>
                    })
                }

                {/* 
                <div className="item">
                    <h2>“Good going guys, I am loving it."</h2>
                    <p>"I’ve been using this app for a few days now and I am shocked after seeing the offers and
                        that too with no upper limit. Also, the most amazing thing I feel is that there is a lot
                        less delivery charge for any order. Good going guys, I am loving it.”</p>
                    <i className='highlighted_text'>- Bhavna Gupta</i>
                </div>

                <div className="item">
                    <h2>“Good going guys, I am loving it."</h2>
                    <p>"I’ve been using this app for a few days now and I am shocked after seeing the offers and
                        that too with no upper limit. Also, the most amazing thing I feel is that there is a lot
                        less delivery charge for any order. Good going guys, I am loving it.”</p>
                    <i className='highlighted_text'>- Bhavna Gupta</i>
                </div>

                <div className="item">
                    <h2>“Good going guys, I am loving it."</h2>
                    <p>"I’ve been using this app for a few days now and I am shocked after seeing the offers and
                        that too with no upper limit. Also, the most amazing thing I feel is that there is a lot
                        less delivery charge for any order. Good going guys, I am loving it.”</p>
                    <i className='highlighted_text'>- Bhavna Gupta</i>
                </div>

                <div className="item">
                    <h2>“Good going guys, I am loving it."</h2>
                    <p>"I’ve been using this app for a few days now and I am shocked after seeing the offers and
                        that too with no upper limit. Also, the most amazing thing I feel is that there is a lot
                        less delivery charge for any order. Good going guys, I am loving it.”</p>
                    <i className='highlighted_text'>- Bhavna Gupta</i>
                </div>

                <div className="item">
                    <h2>“Good going guys, I am loving it."</h2>
                    <p>"I’ve been using this app for a few days now and I am shocked after seeing the offers and
                        that too with no upper limit. Also, the most amazing thing I feel is that there is a lot
                        less delivery charge for any order. Good going guys, I am loving it.”</p>
                    <i className='highlighted_text'>- Bhavna Gupta</i>
                </div> */}

            </div>
        </div>

    )
}

export default Slider