import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/Login';
import Signup from '../views/Signup';
import Contact from '../views/Contact';
import Courses from '../views/Courses';
import Blog from '../views/Blog';
import About from '../views/About';
import GoToTop from '../components/goToTop/GoToTop';
import EventDetails from '../components/eventDetails/EventDetails';
import ScrollToTop from '../shared/ScrollToTop';

const Routers = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <GoToTop />
    </>
  );
};

export default Routers;
