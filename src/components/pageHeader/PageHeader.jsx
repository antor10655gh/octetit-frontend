import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({ Breadcrumbs, banner }) => {
  const divStyle = {
    backgroundImage: `url(${banner})`
  };
  return (
    <div
      className="h-[150px] lg:h-[300px] bg-no-repeat bg-cover bg-center"
      style={divStyle}
    >
      <div className="h-[150px] lg:h-[300px] flex flex-col justify-center pl-10 mx-auto max-w-screen-xl">
        <h1 className="text-5xl text-white">{Breadcrumbs}</h1>
        <div className="text-white flex items-center text-lg">
          <Link to="/" className="opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>
          <span className="px-1">.</span>
          <Link to="#">{Breadcrumbs}</Link>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
