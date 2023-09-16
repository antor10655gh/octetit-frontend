import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/Login';
import Signup from '../views/Signup';
import Contact from '../views/Contact';
import Courses from '../views/Courses';
import Blog from '../views/Blog';
import About from '../views/About';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default Routers;
