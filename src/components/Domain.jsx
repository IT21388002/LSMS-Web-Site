
import React, { useState } from 'react';
import python from '../assets/python.png';
import colab from '../assets/colab.png';
import vscode from '../assets/vscode.png';
import firebase from '../assets/firebase.png';

// ✅ Define TechLogo component
const TechLogo = ({ src, label }) => (
  <div className="flex flex-col items-center space-y-2">
    <img src={src} alt={label} className="h-12 object-contain" />
    <span className="text-sm text-center text-gray-700">{label}</span>
  </div>
);

// ✅ Technologies content
const technologiesContent = (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
    <TechLogo src={vscode} label="Visual Studio Code" />
    <TechLogo src={python} label="Python" />
    <TechLogo src={colab} label="Google Colaboratory" />
    <TechLogo src={firebase} label="Firebase" />
  </div>
);

// ✅ Section data
const sections = [
  { label: 'Literature Survey', key: 'literature', content: `Content for Literature Survey goes here.` },
  {
    label: 'Research Problem',
    key: 'problem',
    content: `The increasing number of legal papers in Sri Lanka poses a complex and varied challenge within the legal domain.
The matter at hand contains various interrelated facets, all of which contribute to the intricate nature and importance of the issue.

Within the legal framework of Sri Lanka, various entities assume crucial functions, encompassing government offices, courts, law firms, and corporations.
The precise identification and extraction of these items are crucial for improving search accuracy and enabling thorough comprehension.

The inclusion of a Legal Document Summarization function is of utmost importance in the advancement of a legal information retrieval system in Sri Lanka.
The utilization of automatic summarizing can greatly improve the usability and accessibility of legal material, considering the typically extensive and intricate character of legal documents.

The methodologies used for summarizing documents should be customized in order to effectively capture the essential elements of the content while preserving the important legal principles, precedent cases, and legal reasoning.

Another issue that arises is the absence of legal knowledge hubs in existing systems. Legal ontologies play a fundamental role in comprehending the semantic framework of legal data, hence facilitating accurate retrieval of legal information in the context of Sri Lanka.

A survey was undertaken among members of the legal community, specifically legal professionals such as law students and lawyers, to identify the unique issues they face in their day-to-day professional activities.`
  },
  { label: 'Research Gap', key: 'gap', content: `Content for Research Gap goes here.` },
  { label: 'Research Objective', key: 'objective', content: `Content for Research Objective goes here.` },
  { label: 'Methodology', key: 'methodology', content: `Content for Methodology goes here.` },
  { label: 'Technology', key: 'technology', content: technologiesContent }
];

// ✅ Main component
const ProjectDomain = () => {
  const [activeTab, setActiveTab] = useState('literature');

  return (
    <section id="domain" className="px-4 sm:px-6 lg:px-20 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-left">
            <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-wider">Domain</h2>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Project Domain</h2>
        </div>

        {/* ✅ Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
          {sections.map((section) => (
            <button
              key={section.key}
              className={`
                px-8 py-4 font-medium rounded-xl transition-all cursor-pointer
                ${activeTab === section.key
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-300 hover:bg-blue-700'
                  : 'bg-white text-gray-800 hover:text-blue-600 hover:shadow-lg hover:shadow-blue-300'}
              `}
              onClick={() => setActiveTab(section.key)}
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* ✅ Content Area */}
        <div className="bg-gray-100 p-6 sm:p-10 rounded-lg shadow-md text-justify whitespace-pre-line text-sm sm:text-base text-gray-800 leading-relaxed">
          {sections.find((section) => section.key === activeTab)?.content}
        </div>
      </div>
    </section>
  );
};

export default ProjectDomain;
