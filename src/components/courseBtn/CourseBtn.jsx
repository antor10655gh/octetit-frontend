import React from 'react';
import './CourseBtn.css';
import { IoIosArrowForward } from 'react-icons/io';

const CourseBtn = () => {
  return (
    <button className="course-btn mt-4">
      <span class="circle1"></span>
      <span class="circle2"></span>
      <span class="circle3"></span>
      <span class="circle4"></span>
      <span class="circle5"></span>
      <span class="text">
        Know details <IoIosArrowForward className="arrow" />
      </span>
    </button>
  );
};

export default CourseBtn;
