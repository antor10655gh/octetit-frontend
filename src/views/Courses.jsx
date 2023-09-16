import React from 'react';
import PageHeader from '../components/pageHeader/PageHeader';
import banner from '../assets/images/courses-banner.png';
import UnderConstruction from '../components/underConstruction/UnderConstruction';

const Courses = () => {
  return (
    <div>
      <PageHeader Breadcrumbs="Courses" banner={banner} />
      <UnderConstruction />
    </div>
  );
};

export default Courses;
