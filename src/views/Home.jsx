import React from 'react';
import Hero from '../components/hero/Hero';
import Courses from '../components/courses/Courses';
import CurrentEvents from '../components/currentEvents/CurrentEvents';
import Testimonial from '../components/testimonial/Testimonial';

const Home = () => {
  return (
    <div>
      <Hero />
      <Courses />
      <CurrentEvents />
      <Testimonial />
    </div>
  );
};

export default Home;
