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
import { HomeIcon } from '@heroicons/react/24/solid';
import {
  ArrowRight,
  EmailOutlined,
  Facebook,
  Instagram,
  LocalActivity,
  PhoneAndroid,
  Twitter
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

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
      <TimelineItem>
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
            <Link to="https://www.facebook.com/">
              <Facebook className="hover:cursor-pointer hover:text-[#f6cb04]" />
            </Link>
            <br />
            <Link to="https://www.instagram.com/">
              <Instagram className="hover:cursor-pointer hover:text-[#f6cb04]" />
            </Link>
            <br />
            <Link to="https://www.twitter.com/">
              <Twitter className="hover:cursor-pointer hover:text-[#f6cb04]" />
            </Link>
          </Typography>
        </TimelineBody>
      </TimelineItem>
    </Timeline>
  );
};

export default TimeLine;
