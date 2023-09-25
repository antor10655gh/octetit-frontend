import React from 'react';
import './Hero.css';
import banner from '../../assets/images/banner1.png';
import bookGif from '../../assets/images/book.gif';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center lg:h-[100vh]">
          <div className="px-4 lg:px-0 relative py-[20px] lg:py-0">
            <img
              src={bookGif}
              alt=""
              className="absolute top-1/2 left-1/2 transform -translate-x-[440px] -translate-y-[370px] hidden lg:block"
            />
            <h1 className="text-2xl lg:text-5xl font-bold lg:leading-[60px]">
              Empowering <span className="text-xl">Businesses</span> Through
              Innovation <br /> <span className="text-xl">and</span> Precision.
            </h1>
            <p className="py-3 lg:py-6 text-sm lg:text-md text-gray-500">
              Innovating the future with tech solutions that harmonize precision
              and efficiency,ensuring your business stays ahead in the digital
              landscape. Elevate your possibilities with Octetit.
            </p>
            <div className="mt-2">
              <button className="primary-btn">Get Started</button>
            </div>
          </div>
          <div>
            <img
              src={banner}
              alt="Woman enjoying food, meals in storage container, and food bowls on a table"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
