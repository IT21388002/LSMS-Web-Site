import React from 'react';
import { motion } from 'framer-motion';
import circle from '../assets/Circle.jpg';

const timelineData = [
  {
    title: 'HTML',
    date: '2023 - 2024',
    company: '[ Company Name ]',
    description:
      'MR Coder has 1 year of experience at [Company Name], specializing in HTML. They developed responsive, accessible web pages, optimized performance, and ensured cross-browser compatibility for enhanced user experiences.',
    image: circle,
    color: 'border-orange-500',
    textColor: 'text-orange-500',
  },
  {
    title: 'JavaScript',
    date: '2023 - 2024',
    company: '[ Company Name ]',
    description:
      'MR Coder has 1 year of experience at [Company Name], focusing on JavaScript. They developed interactive web applications, optimized code for performance, and implemented dynamic features to enhance user engagement.',
    image: circle,
    color: 'border-yellow-400',
    textColor: 'text-yellow-400',
  },
  {
    title: 'React Js',
    date: '2023 - 2024',
    company: '[ Company Name ]',
    description:
      'MR Coder has 1 year of experience at [Company Name] in React.js, building scalable single-page applications, creating reusable components, and managing state for improved performance and user experience.',
    image: circle,
    color: 'border-cyan-400',
    textColor: 'text-cyan-400',
  },
  {
    title: 'Node Js',
    date: '2023 - 2024',
    company: '[ Company Name ]',
    description:
      'MR Coder has 1 year of experience at [Company Name] in Node.js, developing server-side applications, creating RESTful APIs, and optimizing backend performance for efficient data handling and seamless integration.',
    image: circle,
    color: 'border-lime-600',
    textColor: 'text-lime-600',
  },
  {
    title: 'Express Js',
    date: '2023 - 2024',
    company: '[ Company Name ]',
    description:
      'MR Coder has 1 year of experience at [Company Name], focusing on Express.js. They built and maintained RESTful APIs, handled server-side routing, and ensured efficient application performance and scalability.',
    image: circle,
    color: 'border-gray-800',
    textColor: 'text-gray-800',
  },
  {
    title: 'MongoDB',
    date: '2023 - 2024',
    company: '[ Company Name ]',
    description:
      'MR Coder has 1 year of experience at [Company Name], working with MongoDB. They managed databases, designed schemas, and optimized queries to ensure efficient data storage and retrieval for applications.',
    image: circle,
    color: 'border-green-600',
    textColor: 'text-green-600',
  },
  {
    title: 'PHP',
    date: '2023 - 2024',
    company: '[ Company Name ]',
    description:
      'MR Coder has 1 year of experience at [Company Name], specializing in PHP. They developed server-side scripts, built dynamic web applications, and integrated databases to enhance functionality and user interaction.',
    image: circle,
    color: 'border-indigo-700',
    textColor: 'text-indigo-700',
  },
];

const Milestones = () => {
  return (
    <section id="milestones" className="px-4 sm:px-6 lg:px-20 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-left">
            <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-wider">milestones</h2>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Project Milestones</h2>
        </div>
        <div className="relative">
          {/* Vertical center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>

          <div className="flex flex-col gap-16">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } items-center md:items-start`}
              >
                {/* Line dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-blue-500 z-10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>

                {/* Content Box */}
                <div
                  className={`w-full md:w-1/2 mt-10 md:mt-0 md:px-6 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <div
                    className={`bg-white border-l-4 ${item.color} rounded-lg shadow-lg p-6`}
                  >
                    <h3 className={`text-xl font-bold mb-1 ${item.textColor}`}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      <span className="text-blue-600 font-semibold">{item.company}</span>{' '}
                      {item.date}
                    </p>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;