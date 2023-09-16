import React from 'react';
import PageHeader from '../components/pageHeader/PageHeader';
import banner from '../assets/images/blog-banner.png';
import UnderConstruction from '../components/underConstruction/UnderConstruction';

const Blog = () => {
  return (
    <div>
      <PageHeader Breadcrumbs="Blog" banner={banner} />
      <UnderConstruction />
    </div>
  );
};

export default Blog;
