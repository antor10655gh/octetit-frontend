import React from 'react';
import './CourseBtn.css';
import { IoIosArrowForward } from 'react-icons/io';

const CourseBtn = () => {
  return (
    <button className="course-btn mt-4">
      <span className="circle1"></span>
      <span className="circle2"></span>
      <span className="circle3"></span>
      <span className="circle4"></span>
      <span className="circle5"></span>
      <span className="text">
        Know details <IoIosArrowForward className="arrow" />
      </span>
    </button>
  );
};

export default CourseBtn;
