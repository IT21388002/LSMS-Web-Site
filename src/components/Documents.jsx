// import React from 'react';
// import { FaDownload } from 'react-icons/fa';

// const documents = [
//   {
//     title: 'Project Charter',
//     description: 'Initial Presentation with Overview of Research Problem',
//     icon: '💡📄',
//     link: 'https://drive.google.com/your-proposal-link',
//   },
//   {
//     title: 'Project Proposal',
//     description: '50% Project Completion',
//     icon: '📊 1️⃣',
//     link: 'https://drive.google.com/your-progress1-link',
//   },
//   {
//     title: 'Research Paper',
//     description: '90% Project Completion',
//     icon: '📈 2️⃣',
//     link: 'https://drive.google.com/your-progress2-link',
//   },
//   {
//     title: 'Final Thesis',
//     description: '100% Completion with deployed Solution',
//     icon: '🏁📦',
//     link: 'https://drive.google.com/your-final-link',
//   },
//   {
//     title: 'Status Document',
//     description: '100% Completion with deployed Solution',
//     icon: '🏁📦',
//     link: 'https://drive.google.com/your-final-link',
//   },
//   {
//     title: 'Research logbook',
//     description: '100% Completion with deployed Solution',
//     icon: '🏁📦',
//     link: 'https://drive.google.com/your-final-link',
//   },
// ];

// const Documents = () => {
//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="presantations">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-12 text-left">
//             <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-wider">Documents</h2>
//             <h2 className="text-3xl md:text-4xl font-bold mt-2">Project Documents</h2>
//         </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
//         {documents.map((item, index) => (
//           <div
//             key={index}
//             className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition-all transform hover:scale-102 text-center overflow-hidden"
//           >
//             <div className="p-6 space-y-2 flex flex-col items-center">
//               <div className="text-5xl mb-4">{item.icon}</div>
//               <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
//               <p className="text-sm text-gray-600">{item.description}</p>
//               <a
//                 href={item.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="mt-4 flex items-center gap-2 text-sm text-blue-600 border border-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 transition-all"
//               >
//                 <FaDownload /> Download
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//       </div>
//     </section>
//   );
// };

// export default Documents;





import React from 'react';
import { FaDownload, FaFileAlt, FaBook, FaClipboardList, FaFileContract, FaTasks, FaPenFancy } from 'react-icons/fa';

const documents = [
  {
    title: 'Project Charter',
    description: 'Defines the project scope and objectives',
    icon: <FaFileContract className="text-4xl text-blue-500" />,
    link: 'https://drive.google.com/your-charter-link',
  },
  {
    title: 'Project Proposal',
    description: 'Details the research problem and approach',
    icon: <FaPenFancy className="text-4xl text-purple-500" />,
    link: 'https://drive.google.com/your-proposal-link',
  },
  {
    title: 'Research Paper',
    description: 'Comprehensive write-up of findings',
    icon: <FaBook className="text-4xl text-green-600" />,
    link: 'https://drive.google.com/your-research-paper-link',
  },
  {
    title: 'Final Thesis',
    description: 'Full thesis document with results and analysis',
    icon: <FaClipboardList className="text-4xl text-indigo-600" />,
    link: 'https://drive.google.com/your-thesis-link',
  },
  {
    title: 'Status Document',
    description: 'Tracks current status and timelines',
    icon: <FaTasks className="text-4xl text-yellow-500" />,
    link: 'https://drive.google.com/your-status-doc-link',
  },
  {
    title: 'Research Logbook',
    description: 'Logs daily/weekly research progress',
    icon: <FaFileAlt className="text-4xl text-red-500" />,
    link: 'https://drive.google.com/your-logbook-link',
  },
];

const Documents = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="documents">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-left">
          <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-wider">Documents</h2>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Project Documents</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {documents.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition-all transform hover:scale-105 text-center overflow-hidden"
            >
              <div className="p-6 space-y-2 flex flex-col items-center">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center gap-2 text-sm text-blue-600 border border-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 transition-all"
                >
                  <FaDownload /> Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documents;
