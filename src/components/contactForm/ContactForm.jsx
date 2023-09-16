import React, { useRef, useState } from 'react';
import { Input, Textarea } from '@material-tailwind/react';
import TimeLine from '../timeLine/timeLine';
import './ContactForm.css';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Now you can access the form data in the formData object
    console.log(formData);
    toast.success('Message Send Successfully!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light'
    });

    // Clear all input fields by resetting the formData state
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-10 lg:my-20 gap-20 px-10 lg:px-0">
      <div>
        <div className="pb-5 lg:pb-10">
          <h1 className="text-2xl lg:text-4xl font-bold">Get In Touch!</h1>
          <p className="pt-1 text-sm lg:text-md text-gray-500">
            Have a question or just want to say hi? We'd love to hear from you.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <Input
              label="Your Name"
              color="yellow"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              label="Your Email"
              color="yellow"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="my-5">
            <Input
              label="Subject"
              color="yellow"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div>
            <Textarea
              label="Message"
              color="yellow"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="mt-3">
            <button type="submit" className="primary-btn">
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div>
        <TimeLine />
      </div>
    </div>
  );
};

export default ContactForm;
