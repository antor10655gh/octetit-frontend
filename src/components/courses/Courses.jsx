import React from 'react';
import CourseTab from '../courseTab/CourseTab';

const Courses = () => {
  return (
    <div className="px-4 lg:px-0">
      <div>
        <h1 className="text-2xl lg:text-4xl font-bold">
          Find The Right Online <br /> Course For You!{' '}
        </h1>
        <p className="pt-3 text-sm lg:text-md text-gray-500">
          You don't have tostruggle alone, you've got our assistance and help.
        </p>
      </div>
      <CourseTab />
    </div>
  );
};

export default Courses;
