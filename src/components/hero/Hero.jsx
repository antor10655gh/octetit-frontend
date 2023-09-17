import React from 'react';
import './Hero.css';
import banner from '../../assets/images/banner1.png';

const Hero = () => {
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
        <div className="px-4 lg:px-0">
          <h1 className="text-2xl lg:text-4xl font-bold lg:leading-[40px]">
            Empowering Businesses <br /> Through Innovation <br /> and
            Precision.
          </h1>
          <p className="py-3 lg:py-6 text-sm lg:text-md text-gray-500">
            Innovating the future with tech solutions that harmonize precision
            and efficiency,ensuring your business stays ahead in the digital
            landscape. Elevate your possibilities with Octetit.
          </p>
          <div className="mt-2"></div>
        </div>
        <div className="hidden lg:block">
          <img
            className=""
            src={banner}
            alt="Woman enjoying food, meals in storage container, and food bowls on a table"
            className="hero-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
