import React from 'react';
import PageHeader from '../components/pageHeader/PageHeader';
import banner from '../assets/images/about-banner.png';
import UnderConstruction from '../components/underConstruction/UnderConstruction';

const About = () => {
  return (
    <div>
      <PageHeader Breadcrumbs="About" banner={banner} />
      <UnderConstruction />
    </div>
  );
};

export default About;
