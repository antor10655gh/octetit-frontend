import React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography
} from '@material-tailwind/react';
import {
  ArrowRight,
  EmailOutlined,
  LocalActivity,
  PhoneAndroid
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaPinterestP } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';

const TimeLine = () => {
  return (
    <Timeline
      className="p-8 rounded-md"
      style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px' }}
    >
      <TimelineItem>
        <TimelineConnector />
        <TimelineHeader>
          <TimelineIcon className="p-2">
            <LocalActivity className="h-4 w-4" />
          </TimelineIcon>
          <Typography variant="h5" color="blue-gray">
            Our Office
          </Typography>
        </TimelineHeader>
        <TimelineBody className="pb-8">
          <Typography color="gary" className="font-normal text-gray-600">
            Mirpur-1216, Dhaka, Bangladesh
          </Typography>
        </TimelineBody>
      </TimelineItem>
      <TimelineItem>
        <TimelineConnector />
        <TimelineHeader>
          <TimelineIcon className="p-2">
            <EmailOutlined className="h-4 w-4" />
          </TimelineIcon>
          <Typography variant="h5" color="blue-gray">
            Email us directly
          </Typography>
        </TimelineHeader>
        <TimelineBody className="pb-8">
          <Typography color="gary" className="font-normal text-gray-600">
            hello@octetit.com
          </Typography>
        </TimelineBody>
      </TimelineItem>
      <TimelineItem>
        <TimelineHeader>
          <TimelineIcon className="p-2">
            <PhoneAndroid className="h-4 w-4" />
          </TimelineIcon>
          <Typography variant="h5" color="blue-gray">
            Phone
          </Typography>
        </TimelineHeader>
        <TimelineBody>
          <Typography color="gary" className="font-normal text-gray-600">
            +880 1711-973538 <br /> +880 1795-937735
          </Typography>
        </TimelineBody>
      </TimelineItem>
      <TimelineItem className="mt-5">
        <TimelineHeader>
          <TimelineIcon className="p-2">
            <ArrowRight className="h-4 w-4" />
          </TimelineIcon>
          <Typography variant="h5" color="blue-gray">
            Follow Us
          </Typography>
        </TimelineHeader>
        <TimelineBody>
          <Typography
            color="gary"
            className="font-normal text-gray-600 flex items-center gap-2"
          >
            <Link to="https://www.facebook.com/octetit.pro" target="_blank">
              <div className="bg-[#E9EFF5] p-[8px] rounded-[3px] group hover:bg-[#285da1] transition duration-300 ease-in-out">
                <FaFacebookF className="h-4 w-4 text-[#285DA1] group-hover:text-white transition duration-300 ease-in-out" />
              </div>
            </Link>
            <Link to="https://www.pinterest.com/octetitpro/" target="_blank">
              <div className="bg-[#feddb5] p-[8px] rounded-[3px] group hover:bg-[#f7941f] transition duration-300 ease-in-out">
                {' '}
                <FiInstagram className="h-4 w-4 text-[#f7941f] group-hover:text-white transition duration-300 ease-in-out" />
              </div>
            </Link>
            <Link to="https://www.instagram.com/octetit.pro/" target="_blank">
              <div className="bg-[#FBE8EC] p-[8px] rounded-[3px] group hover:bg-[#d8163f] transition duration-300 ease-in-out">
                {' '}
                <FaPinterestP className="h-4 w-4 text-[#DB294D] group-hover:text-white transition duration-300 ease-in-out" />
              </div>
            </Link>
          </Typography>
        </TimelineBody>
      </TimelineItem>
    </Timeline>
  );
};

export default TimeLine;
