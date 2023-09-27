import React from 'react';
import Hero from '../components/hero/Hero';
import Courses from '../components/courses/Courses';
import CurrentEvents from '../components/currentEvents/CurrentEvents';

const Home = () => {
  return (
    <div>
      <Hero />
      <Courses />
      <CurrentEvents />
    </div>
  );
};

export default Home;
