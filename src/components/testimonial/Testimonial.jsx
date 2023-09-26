import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper';
import { FaQuoteRight } from 'react-icons/fa';
import avatar from '../../assets/images/avatar.jpg';
import './Testimonial.css';

// import required modules

const Testimonial = () => {
  // const [testimonials, setTestimonials] = useState([]);

  const testimonials = [
    {
      id: 1,
      name: 'Ruhul Amin',
      designation: 'Entrepreneur',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 2,
      name: 'Abdur Jobbar',
      designation: 'Entrepreneur',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 3,
      name: 'Jamil Chowdhury',
      designation: 'Entrepreneur',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 4,
      name: 'Mr Milon',
      designation: 'Entrepreneur',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 5,
      name: 'Abdur Rahim',
      designation: 'Entrepreneur',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 6,
      name: 'Abdul Karim',
      designation: 'Entrepreneur',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ];
  return (
    <>
      <div className="bg-white py-24">
        <div className="mx-auto max-w-screen-xl">
          <div className="mb-12 px-5 lg:px-0">
            <h1 className="text-2xl lg:text-4xl font-bold">
              Our Happy Clients
            </h1>
            <p className="py-2 text-sm lg:text-md text-gray-500">
              There are some valuable reviews from our happy clients.
            </p>
          </div>
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
                slidesPerView: 2,
                spaceBetween: 40
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 50
              }
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide
                key={testimonial.id}
                className="p-8 testimonial-card mb-12"
              >
                <div className="flex flex-col gap-5">
                  <div>
                    <FaQuoteRight className="text-2xl text-[#F7941F]" />
                  </div>
                  <div>
                    <p>{testimonial.description}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full w-12 h-12">
                      <img
                        className="rounded-full w-12 h-12"
                        src={avatar}
                        alt=""
                      />
                    </div>
                    <div>
                      <h3 className="font-[600]">{testimonial.name}</h3>
                      <p className="text-sm">{testimonial.designation}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
