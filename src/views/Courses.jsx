import React from 'react';
import PageHeader from '../components/pageHeader/PageHeader';
import banner from '../assets/images/courses-banner.png';
import UnderConstruction from '../components/underConstruction/UnderConstruction';
import EventDetails from '../components/eventDetails/EventDetails';

const Courses = () => {
  return (
    <div>
      <EventDetails breadcrumbs={'Courses'} />
    </div>
  );
};

export default Courses;
