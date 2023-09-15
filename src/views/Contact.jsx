import React from 'react';
import ContactForm from '../components/contactForm/ContactForm';
import PageHeader from '../components/pageHeader/PageHeader';
import banner from '../assets/images/contact-banner.png';

const Contact = () => {
  return (
    <div>
      <PageHeader Breadcrumbs="Contact" banner={banner} />
      <ContactForm />
    </div>
  );
};

export default Contact;
