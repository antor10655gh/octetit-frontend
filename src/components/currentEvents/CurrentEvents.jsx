import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const CurrentEvents = () => {
  // const [currentEvents, setCurrentEvents] = useState([]);

  const currentEvents = [
    {
      id: 1,
      title: 'Web Design Basic Course for Beginners',
      date: 'Oct 16, 2023',
      time: '08:00 PM',
      location: 'Online'
    }
  ];

  return (
    <div className="bg-[#ECEFF1] py-6 lg:py-20 px-3 lg:px-0">
      <div className="mx-auto max-w-screen-xl">
        <div>
          <h1 className="text-2xl lg:text-4xl font-bold">Current Events</h1>
          <p className="py-2 text-sm lg:text-md text-gray-500">
            We found 1 event available for you
          </p>
        </div>
        <div>
          {currentEvents.map((event) => (
            <div
              key={event.id}
              className="current-events-card group flex flex-col lg:flex-row justify-between items-center my-8 p-8"
            >
              <div>
                <div className="flex justify-center lg:justify-start items-center">
                  <p className="py-2 text-sm lg:text-md text-gray-500 group-hover:text-white transition duration-300">
                    {event.date}
                  </p>
                  <div className="w-[2px] h-[20px] mx-2 bg-gray-500 group-hover:bg-white transition duration-300"></div>
                  <p className="py-2 text-sm lg:text-md text-gray-500 group-hover:text-white transition duration-300">
                    {event.time}
                  </p>
                  <div className="w-[2px] h-[20px] mx-2 bg-gray-500 group-hover:bg-white transition duration-300"></div>
                  <p className="py-2 text-sm lg:text-md text-gray-500 group-hover:text-white transition duration-300">
                    {event.location}
                  </p>
                </div>
                <h1 className="text-xl lg:text-2xl py-3 text-center lg:text-left">
                  {event.title}
                </h1>
              </div>
              <div>
                <Link
                  to={`/events/${event.id}`}
                  className="flex items-center text-[#F7941F] lg:text-black group-hover:text-white transition duration-300"
                >
                  <p className="group">View more</p>
                  <HiArrowNarrowRight className="group-hover:translate-x-1 transition duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrentEvents;
