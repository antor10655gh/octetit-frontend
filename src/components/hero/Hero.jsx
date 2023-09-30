import React from 'react';
import './Hero.css';
import banner from '../../assets/images/addBanner2.jpeg';
import probanner from '../../assets/images/probanner.png';
import graduate from '../../assets/images/graduate.json';
import Lottie from 'lottie-react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper';
import { Link } from 'react-router-dom';

const Hero = () => {
  const divStyle = {
    backgroundImage: `url(${probanner})`
  };

  return (
    <div
      className="hero-container bg-no-repeat bg-cover bg-center py-12"
      style={divStyle}
    >
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center lg:h-[100vh]">
          <div className="px-4 lg:px-0 relative py-[20px] lg:py-0">
            <Lottie
              animationData={graduate}
              loop={true}
              className="absolute -top-[19%] -left-[2%] lg:-top-[37%] lg:-left-[14%] w-[120px] h-[120px] lg:w-[220px] lg:h-[220px]"
            />
            <h1 className="text-2xl lg:text-5xl font-bold lg:leading-[60px]">
              Become a professional in IT & Rule the <br />{' '}
              <span className="text-[#F7941F]">Digital Realm.</span>
            </h1>
            <p className="py-3 lg:py-6 text-sm lg:text-md text-gray-500">
              With a goal of transforming individuals into valuable assets,
              OCTETit Institute is prepared to enrich your learning journey
              through experienced mentors and up-to-date course offerings.
            </p>
            <div className="mt-2">
              <button className="z-40 primary-btn">Get Started</button>
            </div>
          </div>
          <div>
            {/* <img src={banner} alt="" className="w-full h-full" /> */}
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
              pagination={{
                clickable: true
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 40
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 50
                }
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper w-[370px] lg:w-[450px]"
            >
              <SwiperSlide className="py-8 mb-5">
                <div class="relative flex w-full lg:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                  <div class="relative mx-4 -mt-6 h-56 lg:h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    <img
                      src={banner}
                      alt="img-blur-shadow"
                      layout="fill"
                      className="w-full h-full bg-no-repeat bg-cover bg-center"
                    />
                  </div>
                  <div class="p-6">
                    <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                      Web Design Basic Course for Beginners
                    </h5>

                    <h3 className="pt-5">
                      ✅ <span className="font-bold ">যা যা শিখতে পারবেন:</span>
                      <ul className="pt-2">
                        <li>
                          ১। স্বপ্ন প্রকাশ করার জন্য সুন্দর এবং ব্যবহারযোগ্য
                          Website তৈরি করতে পারবেন....
                        </li>
                      </ul>
                    </h3>
                  </div>
                  <div class="p-6 pt-0">
                    <Link to={`/events/${1}`}>
                      <button
                        class="select-none rounded-lg bg-orange-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                      >
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="py-8 mb-5">
                <div class="relative flex w-full lg:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                  <div class="relative mx-4 -mt-6 h-56 lg:h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    <img
                      src={banner}
                      alt="img-blur-shadow"
                      layout="fill"
                      className="w-full h-full bg-no-repeat bg-cover bg-center"
                    />
                  </div>
                  <div class="p-6">
                    <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                      Web Design Basic Course for Beginners
                    </h5>

                    <h3 className="pt-5">
                      ✅ <span className="font-bold ">যা যা শিখতে পারবেন:</span>
                      <ul className="pt-2">
                        <li>
                          ১। স্বপ্ন প্রকাশ করার জন্য সুন্দর এবং ব্যবহারযোগ্য
                          Website তৈরি করতে পারবেন....
                        </li>
                      </ul>
                    </h3>
                  </div>
                  <div class="p-6 pt-0">
                    <Link to={`/events/${1}`}>
                      <button
                        class="select-none rounded-lg bg-orange-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                      >
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
