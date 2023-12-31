import React from 'react';
import underConstructionBanner from '../../assets/images/underconstruction.png';
import './UnderConstruction.css';

const UnderConstruction = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col items-center py-12 lg:py-24 px-10 mx-auto max-w-screen-xl">
        <img
          src={underConstructionBanner}
          alt=""
          className="w-full lg:w-1/2 moving-image"
        />
        <h1 className="text-2xl lg:text-4xl text-[#F7941F] font-bold mt-6 lg:mt-12">
          Our website is almost ready!
        </h1>
        <p className="text-sm lg:text-md text-gray-500">
          We are preparing something exciting & amazing for you.
        </p>
      </div>
    </div>
  );
};

export default UnderConstruction;
