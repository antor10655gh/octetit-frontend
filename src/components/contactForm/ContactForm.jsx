import React from 'react';
import { Input, Textarea } from '@material-tailwind/react';
import PrimaryBtn from '../primaryBtn/PrimaryBtn';
import TimeLine from '../timeLine/timeLine';

const ContactForm = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-20 gap-20">
      <div>
        <div className="pb-5 lg:pb-10">
          <h1 className="text-2xl lg:text-4xl font-bold">Get In Touch!</h1>
          <p className="pt-1 text-sm lg:text-md text-gray-500">
            Have a question or just want to say hi? We'd love to hear from you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <Input label="Your Name" color="yellow" />
          <Input label="Your Email" color="yellow" />
        </div>
        <div className="my-5">
          <Input label="Subject" color="yellow" />
        </div>
        <div>
          <Textarea label="Message" color="yellow" />
        </div>
        <div className="mt-3">
          <PrimaryBtn text="Send Message" />
        </div>
      </div>
      <div>
        <TimeLine />
      </div>
    </div>
  );
};

export default ContactForm;
