import React from 'react';
import { Link, useParams } from 'react-router-dom';
import banner from '../../assets/images/courses-banner.png';
import PageHeader from '../pageHeader/PageHeader';
import addBanner from '../../assets/images/addBanner.jpg';
import sponsorsImg from '../../assets/images/sponsors.png';
import teacherImg from '../../assets/images/avatar.jpg';
import { BsCheckCircle, BsTags } from 'react-icons/bs';
import { MdTimer, MdTimerOff, MdOutlineLocationOn } from 'react-icons/md';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { FaFacebookF, FaPinterestP } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';

const EventDetails = () => {
  const { id } = useParams();
  return (
    <div className="bg-white">
      <PageHeader Breadcrumbs="Event Details" banner={banner} />
      <div className="mx-auto max-w-screen-xl py-6 lg:py-12 lg:py-[80px] p-4 lg:p-0">
        <h1 className="text-2xl lg:text-4xl font-bold">
          Free Web Design Class for Beginners
        </h1>
        <div className="flex lg:flex-row lg:items-center gap-12 mt-4">
          <div className="flex items-center">
            <img src={teacherImg} className="w-16 h-16 rounded-full" alt="" />
            <div className="ml-2">
              <p className="text-gray-800">Teacher</p>
              <p className="font-[600]">AM Antor</p>
            </div>
          </div>
          <div>
            <p className="text-gray-800">Time</p>
            <p className="font-[600]">08:00 PM</p>
          </div>
          <div>
            <p className="text-gray-800">Location</p>
            <p className="font-[600]">Online</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12 mt-8">
          <div className="col-span-2">
            <img
              src={addBanner}
              alt=""
              className="rounded-md"
              style={{
                boxShadow:
                  'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
              }}
            />
            <h3 className="text-2xl font-bold pt-5">Description</h3>
            <p className="py-2 text-justify">
              Web design is the process of creating and arranging visual
              elements, content, and interactive features on a web page or
              website to deliver a compelling and user-friendly experience. It
              encompasses a wide range of disciplines, including graphic design,
              user interface (UI) design, user experience (UX) design, and
              front-end web development. Effective web design is crucial for
              achieving the goals of a website, whether those goals are to
              inform, entertain, sell products, provide services, or engage
              users in various ways.
            </p>
            <h3 className="text-2xl pt-3 font-bold ">
              This event will allow participants to:
            </h3>
            <ul className="pt-3">
              <li className="flex items-center">
                <BsCheckCircle className="text-[#f7941f] mr-2" />
                <p>What is Web Design</p>
              </li>
              <li className="flex items-center">
                <BsCheckCircle className="text-[#f7941f] mr-2" />
                <p>How do you learn Web Design</p>
              </li>
              <li className="flex items-center">
                <BsCheckCircle className="text-[#f7941f] mr-2" />
                <p>What is the benefit of Web Design</p>
              </li>
            </ul>
            <div className="w-full h-[1px] bg-[#d2d3d7] my-5"></div>
            <div className="flex items-center">
              <sup>
                <BsTags className="w-4 h-4" />
              </sup>
              <Link className="hover:text-[#f7941f] transition duration-300 px-1">
                Web Design,
              </Link>
              <Link className="hover:text-[#f7941f] transition duration-300 px-1">
                HTML,
              </Link>
              <Link className="hover:text-[#f7941f] transition duration-300 px-1">
                CSS
              </Link>
            </div>
          </div>
          <div className="my-12 lg:mt-0">
            <div
              className="p-6 rounded-sm"
              style={{
                boxShadow:
                  'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-3">
                  <p className="text-2xl font-[600]">1000৳</p>
                  <p className="text-sm line-through">1200 ৳</p>
                </div>
                <div className="bg-[#f7961f46] px-2 py-1 rounded-sm">
                  <p className="text-[#f7941f]">68% off</p>
                </div>
              </div>
              <div className="py-10">
                <div className="flex items-center">
                  <MdTimer className="w-6 h-6 mr-2 text-[#ff9801]" />
                  <p className="mr-1 font-[600]">Start:</p>
                  <p className="text-gray-800">Sep 28, 2023 12:30 am</p>
                </div>
                <div className="w-full h-[1px] bg-[#d2d3d7] my-4"></div>
                <div className="flex items-center">
                  <MdTimerOff className="w-6 h-6 mr-2 text-[#ff9801]" />
                  <p className="mr-1 font-[600]">End:</p>
                  <p className="text-gray-800">Sep 30, 2023 12:30 am</p>
                </div>
                <div className="w-full h-[1px] bg-[#d2d3d7] my-4"></div>
                <div className="flex items-center">
                  <MdOutlineLocationOn className="w-6 h-6 mr-2 text-[#ff9801]" />
                  <p className="mr-1 font-[600]">Location:</p>
                  <p className="text-gray-800">Online</p>
                </div>
              </div>
              <div>
                <button className="w-full p-3 bg-[#f7941f] text-white flex items-center justify-center rounded-md">
                  Enroll
                  <HiArrowNarrowRight className="animated-arrow w-5 h-5" />
                </button>
              </div>
            </div>
            <div
              className="p-6 rounded-sm mt-12"
              style={{
                boxShadow:
                  'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'
              }}
            >
              <div>
                <h3 className="text-2xl font-[600]">Sponsors</h3>
                <img src={sponsorsImg} alt="" className="py-3" />
              </div>
              <div className="pb-5">
                <h3 className="text-md font-[600]">Shaheen Reza</h3>
                <p className="text-gray-800">
                  <span className="font-[500] text-black">Email:</span>{' '}
                  support@educal.com
                </p>
              </div>
              <div className="flex items-center">
                <h3 className="font-[600] text-lg">Share:</h3>
                <div className="flex items-center gap-2 ml-3">
                  <Link
                    to="https://www.facebook.com/octetit.pro"
                    target="_blank"
                  >
                    <div className="bg-[#E9EFF5] p-[12px] rounded-[3px] group hover:bg-[#285da1] transition duration-300 ease-in-out">
                      <FaFacebookF className="h-4 w-4 text-[#285DA1] group-hover:text-white transition duration-300 ease-in-out" />
                    </div>
                  </Link>
                  <Link
                    to="https://www.pinterest.com/octetitpro/"
                    target="_blank"
                  >
                    <div className="bg-[#feddb5] p-[12px] rounded-[3px] group hover:bg-[#f7941f] transition duration-300 ease-in-out">
                      {' '}
                      <FiInstagram className="h-4 w-4 text-[#f7941f] group-hover:text-white transition duration-300 ease-in-out" />
                    </div>
                  </Link>
                  <Link
                    to="https://www.instagram.com/octetit.pro/"
                    target="_blank"
                  >
                    <div className="bg-[#FBE8EC] p-[12px] rounded-[3px] group hover:bg-[#d8163f] transition duration-300 ease-in-out">
                      {' '}
                      <FaPinterestP className="h-4 w-4 text-[#DB294D] group-hover:text-white transition duration-300 ease-in-out" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
