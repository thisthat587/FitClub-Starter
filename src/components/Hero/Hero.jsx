import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import { motion } from 'framer-motion'
const Hero = () => {

    const transition = { type: 'spring', duration: 3 }

    return (
        <div className='hero'>
            <div className="blur hero-blur"></div>
            <div className='left-h'>
                <Header />
                {/* the best ad */}
                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: '238px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                    ></motion.div>
                    <span>the best fitness club in the town</span>
                </div>
                {/* hero heading */}
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div>
                        <span>
                            In here we will help you to shape and build your ideal body and live up your life to fullest.
                        </span>
                    </div>
                </div>
                {/* figures */}
                <div className="figures">
                    <div>
                        <span>+ 140</span>
                        <span>Expert Coaches</span>
                    </div>
                    <div>
                        <span>+ 978</span>
                        <span>Members Joined</span>
                    </div>
                    <div>
                        <span>+ 50</span>
                        <span>fitness Programs</span>
                    </div>
                </div>
                {/* hero buttons */}
                <div className="hero-buttons">
                    <button className="btn">
                        Get Started
                    </button>
                    <button className="btn">
                        Learn More
                    </button>
                </div>
            </div>
            <div className='right-h'>
                <button className='btn'>Join Now</button>
                <motion.div className="heart-rate"
                    initial={{ right: "-2rem" }}
                    whileInView={{ right: '4rem' }}
                    transition={transition}
                >
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>
                {/* hero images */}
                <img src={hero_image} alt="" className="hero-image" />
                <motion.img
                    src={hero_image_back}
                    alt=""
                    className="hero-image-back"
                    initial={{ right: "11rem" }}
                    whileInView={{ right: '20rem' }}
                    transition={transition}
                />
                {/* calories */}
                <motion.div
                    className='calories'
                    initial={{ right: "37rem" }}
                    whileInView={{ right: '28rem' }}
                    transition={transition}
                >
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories Burnt</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero