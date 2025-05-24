
// import React from 'react';
// import linkedinIcon from '../assets/linkedin.png';
// import emailIcon from '../assets/email.png';

// const teamMembers = [
//   {
//     name: 'Dr. Janaka Wijekoon',
//     role: 'Supervisor',
//     institution: 'Sri Lanka Institute of Information Technology',
//     department: 'Information Systems Engineering',
//     gscholar: '#',
//     email: 'mailto:janaka@example.com',
//     image: '/src/assets/thamalik.jpg',
//   },
//   {
//     name: 'Poorna',
//     role: 'Co-Supervisor',
//     institution: 'Sri Lanka Institute of Information Technology',
//     department: 'Information Systems Engineering',
//     gscholar: '#',
//     email: 'mailto:poorna@example.com',
//     image: '/src/assets/poornap.jpeg',
//   },
//   {
//     name: 'Dr. Bandularathne',
//     role: 'External Supervisor',
//     institution: 'Sri Lanka Institute of Information Technology',
//     department: 'Information Systems Engineering',
//     gscholar: '#',
//     email: 'mailto:bandula@example.com',
//     image: '/src/assets/images (1).jpeg',
//   },
//   {
//     name: 'Vidhanaarachchi S.P',
//     role: 'Group Leader',
//     image: '/src/assets/images (1).jpeg',
//     linkedin: '#',
//     email: 'mailto:pawara@example.com',
//   },
//   {
//     name: 'Gunasekara R.P.T.I',
//     role: 'Group Member',
//     image: '/src/assets/images (1).jpeg',
//     linkedin: '#',
//     email: 'mailto:gunasekara@example.com',
//   },
//   {
//     name: 'Akalanka P.K.G.C',
//     role: 'Group Member',
//     image: '/src/assets/images (1).jpeg',
//     linkedin: '#',
//     email: 'mailto:akalanka@example.com',
//   },
//   {
//     name: 'Rajapaksha H.M.U.D',
//     role: 'Group Member',
//     image: '/src/assets/images (1).jpeg',
//     linkedin: '#',
//     email: 'mailto:rajapaksha@example.com',
//   },
// ];

// const About = () => {
//   return (
//     <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-12 text-left">
//           <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-wider">About Us</h2>
//           <h2 className="text-3xl md:text-4xl font-bold mt-2">Meet Our Team</h2>
//         </div>

//         {/* Supervisors */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//           {teamMembers.slice(0, 3).map((member, idx) => (
//             <div key={idx} className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition-all overflow-hidden text-center">
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-full h-80 object-cover"
//               />
//               <div className="p-6 space-y-2">
//                 <h3 className="text-lg font-semibold">{member.name}</h3>
//                 <span className="inline-block bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
//                   {member.role}
//                 </span>
//                 <p className="text-sm text-gray-600 mt-2">{member.institution}</p>
//                 <p className="text-sm text-gray-600">{member.department}</p>
//                 <div className="flex justify-center gap-4 mt-4">
//                   <a
//                     href={member.gscholar}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition"
//                   >
//                     G-Scholar
//                   </a>
//                   <a
//                     href={member.email}
//                     className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
//                   >
//                     <img src={emailIcon} alt="Email" className="w-5 h-5" />
//                     E-Mail
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Group Members */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {teamMembers.slice(3).map((member, idx) => (
//             <div key={idx} className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition-all overflow-hidden text-center">
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-full h-80 object-cover"
//               />
//               <div className="p-6 space-y-2">
//                 <h3 className="text-lg font-semibold">{member.name}</h3>
//                 <span className="inline-block bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
//                   {member.role}
//                 </span>
//                 <p className="text-sm text-gray-600 mt-2">Undergraduate</p>
//                 <p className="text-sm text-gray-600">Sri Lanka Institute of Information Technology</p>
//                 <p className="text-sm text-gray-600">Department of Software Engineering</p>
//                 <div className="flex justify-center gap-4 mt-4">
//                   <a
//                     href={member.linkedin}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
//                   >
//                     <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
//                     LinkedIn
//                   </a>
//                   <a
//                     href={member.email}
//                     className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
//                   >
//                     <img src={emailIcon} alt="Email" className="w-5 h-5" />
//                     E-Mail
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;




import React from 'react';
import linkedinIcon from '../assets/linkedin.png';
import emailIcon from '../assets/email.png';

const teamMembers = [
  {
    name: 'Dr. Janaka Wijekoon',
    role: 'Supervisor',
    institution: 'Sri Lanka Institute of Information Technology',
    department: 'Information Systems Engineering',
    gscholar: '#',
    email: 'mailto:janaka@example.com',
    image: '/src/assets/thamalik.jpg',
  },
  {
    name: 'Poorna',
    role: 'Co-Supervisor',
    institution: 'Sri Lanka Institute of Information Technology',
    department: 'Information Systems Engineering',
    gscholar: '#',
    email: 'mailto:poorna@example.com',
    image: '/src/assets/poornap.jpeg',
  },
  {
    name: 'Dr. Bandularathne',
    role: 'External Supervisor',
    institution: 'Sri Lanka Institute of Information Technology',
    department: 'Information Systems Engineering',
    gscholar: '#',
    email: 'mailto:bandula@example.com',
    image: '/src/assets/images (1).jpeg',
  },
  {
    name: 'Vidhanaarachchi S.P',
    role: 'Group Leader',
    image: '/src/assets/images (1).jpeg',
    linkedin: '#',
    email: 'mailto:pawara@example.com',
  },
  {
    name: 'Gunasekara R.P.T.I',
    role: 'Group Member',
    image: '/src/assets/images (1).jpeg',
    linkedin: '#',
    email: 'mailto:gunasekara@example.com',
  },
  {
    name: 'Akalanka P.K.G.C',
    role: 'Group Member',
    image: '/src/assets/images (1).jpeg',
    linkedin: '#',
    email: 'mailto:akalanka@example.com',
  },
  {
    name: 'Rajapaksha H.M.U.D',
    role: 'Group Member',
    image: '/src/assets/images (1).jpeg',
    linkedin: '#',
    email: 'mailto:rajapaksha@example.com',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-left">
          <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-wider">About Us</h2>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Meet Our Team</h2>
        </div>

        {/* Supervisors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.slice(0, 3).map((member, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition-all overflow-hidden text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <span className="inline-block bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
                  {member.role}
                </span>
                <p className="text-sm text-gray-600 mt-2">{member.institution}</p>
                <p className="text-sm text-gray-600">{member.department}</p>
                <div className="flex justify-center gap-4 mt-4">
                  <a
                    href={member.gscholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-purple-600 text-purple-600 px-4 py-2 rounded-full hover:bg-purple-50 transition-transform transform hover:scale-105"
                  >
                    G-Scholar
                  </a>
                  <a
                    href={member.email}
                    className="flex items-center gap-2 border border-green-600 text-green-600 px-4 py-2 rounded-full hover:bg-green-50 transition-transform transform hover:scale-105"
                  >
                    <img src={emailIcon} alt="Email" className="w-5 h-5" />
                    E-Mail
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Group Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.slice(3).map((member, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition-all overflow-hidden text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <span className="inline-block bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
                  {member.role}
                </span>
                <p className="text-sm text-gray-600 mt-2">Undergraduate</p>
                <p className="text-sm text-gray-600">Sri Lanka Institute of Information Technology</p>
                <p className="text-sm text-gray-600">Department of Software Engineering</p>
                <div className="flex justify-center gap-4 mt-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 transition-transform transform hover:scale-105"
                  >
                    <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
                    LinkedIn
                  </a>
                  <a
                    href={member.email}
                    className="flex items-center gap-2 border border-green-600 text-green-600 px-4 py-2 rounded-full hover:bg-green-50 transition-transform transform hover:scale-105"
                  >
                    <img src={emailIcon} alt="Email" className="w-5 h-5" />
                    E-Mail
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
