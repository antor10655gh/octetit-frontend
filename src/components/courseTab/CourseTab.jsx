import React from 'react';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel
} from '@material-tailwind/react';
import CourseBtn from '../courseBtn/CourseBtn';

const CourseTab = () => {
  const [activeTab, setActiveTab] = React.useState('html');
  const data = [
    {
      label: 'HTML',
      value: 'html',
      courses: [
        {
          name: 'HTML-1',
          banner:
            'https://img.freepik.com/free-vector/programming-concept-illustration_114360-1670.jpg?w=826&t=st=1694766429~exp=1694767029~hmac=9ef60a2f3b556e1fd50df6dc868a885e7f2ceac9e6019297d0527b74c93186b3',
          desc: 'World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.'
        },
        {
          name: 'HTML-2',
          banner:
            'https://img.freepik.com/free-vector/programmer-concept-illustration_114360-2417.jpg',
          desc: 'World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.'
        },
        {
          name: 'HTML-3',
          banner:
            'https://img.freepik.com/free-vector/team-goals-concept-illustration_114360-5175.jpg',
          desc: 'World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.'
        },
        {
          name: 'HTML-4',
          banner:
            'https://img.freepik.com/free-vector/programmer-concept-illustration_114360-2417.jpg',
          desc: 'World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.'
        }
      ]
    },
    {
      label: 'CSS',
      value: 'css',
      courses: [
        {
          name: 'CSS-1',
          banner:
            'https://img.freepik.com/free-vector/signing-contract-concept-illustration_114360-4769.jpg',
          desc: 'World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.'
        },
        {
          name: 'CSS-2',
          banner:
            'https://img.freepik.com/free-vector/man-thinking-concept-illustration_114360-7920.jpg?t=st=1694767497~exp=1694768097~hmac=5c353ca02119099331d4ef7a6dbba20e33dc218a1e46c5714cda4c9bded7a0ab',
          desc: 'World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.'
        }
      ]
    },
    {
      label: 'React',
      value: 'react',
      courses: [
        {
          name: 'React-1',
          banner:
            'https://img.freepik.com/free-vector/mobile-payments-concept-illustration_114360-1691.jpg?t=st=1694766429~exp=1694767029~hmac=1571058c24bf58b1d5b93e52a7b63e7a9e07b34a42853ab37be54c50bc126024',
          desc: 'World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.'
        },
        {
          name: 'React-2',
          banner:
            'https://img.freepik.com/free-vector/lo-fi-concept-illustration_114360-9371.jpg?t=st=1694767053~exp=1694767653~hmac=175742184211152b1b5b796d4931ce3604f954eec13ff7f5b57f027f911e804d',
          desc: 'World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.'
        }
      ]
    },
    {
      label: 'Vue',
      value: 'vue',
      courses: [
        {
          name: 'Vue-1',
          banner:
            'https://img.freepik.com/free-vector/shrug-concept-illustration_114360-9375.jpg?t=st=1694767163~exp=1694767763~hmac=f90b4ce9af8578c9295d6f567c15dc1e49edb9ec9a98db4e9168ec3b01505b16',
          desc: 'World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.'
        },
        {
          name: 'Vue-2',
          banner:
            'https://img.freepik.com/free-vector/mental-health-concept-illustration_114360-2589.jpg',
          desc: 'World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.'
        }
      ]
    }
  ];

  const handleChange = (value) => {
    setActiveTab(value);
  };

  return (
    <Tabs className="py-6 lg:py-12" value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            'bg-transparent border-b-2 border-[#fd7718] shadow-none rounded-none'
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => handleChange(value)}
            className={`text-lg font-semibold ${
              activeTab === value ? 'text-[#fd7718]' : 'text-blue-gray-500'
            }`}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="mt-3 lg:mt-8">
        {data.map(({ value, courses }) => (
          <TabPanel key={value} value={value}>
            <ul className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {courses.map(({ name, banner, desc }) => (
                <li key={name} className="shadow-md rounded-md p-3">
                  <img src={banner} alt={name} />
                  <p className="font-bold">{name}</p>
                  <p>{desc}</p>
                  <CourseBtn />
                </li>
              ))}
            </ul>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export default CourseTab;
