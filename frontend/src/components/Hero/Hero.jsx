import React from 'react'
import "./Hero.scss";
import KYC from "../../assets/kyc.png"
import Aos from "aos"
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Hero = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    });

  return (
    <section className="hero">
        <div className="hero__container wrapper">
            <div className="hero__left" data-aos="fade-right">
                <img src={KYC} alt="hero" />
            </div>

            <div className="hero__right" data-aos="zoom-in-up">
                <h1>Building Trust, One Verification at a Time</h1>
                <p>
                    Unlock the future of Identity Verification with our interaive KYC platform
                </p>
                <a href="#" className="btn">Try Now</a>
            </div>
        </div>
    </section>
  )
}

export default Hero