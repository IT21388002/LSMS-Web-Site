
import React, { useState } from 'react';
import python from '../assets/python.png';
import colab from '../assets/colab.png';
import vscode from '../assets/vscodeLogo.png';
import firebase from '../assets/firebase.png';
import fastapilogo from '../assets/fastApi.png';
import googlevisioapi from '../assets/googleVision.jpg';
import github from '../assets/github.png';
import android from '../assets/Android Studio.png';
import dart from '../assets/Dart.jpeg';


// ✅ Define TechLogo component
const TechLogo = ({ src, label }) => (
  <div className="flex flex-col items-center space-y-2">
    <img src={src} alt={label} className="h-12 object-contain" />
    <span className="text-sm text-center text-gray-700">{label}</span>
  </div>
);

// ✅ Technologies content
const technologiesContent = (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 place-items-center">
    <TechLogo src={vscode} label="Visual Studio Code" />
    <TechLogo src={python} label="Python" />
    <TechLogo src={colab} label="Google Colaboratory" />
    <TechLogo src={firebase} label="Firebase" />
    <TechLogo src={fastapilogo} label="Fast API" />
    <TechLogo src={googlevisioapi} label="Google Vision API" />
    <TechLogo src={github} label="Git Hub" />
    <TechLogo src={android} label="Android Studio" />
    <TechLogo src={dart} label="Dart" />
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
  {
    label: 'Research Objective',
    key: 'objective',
    content: (
      <div className="space-y-4">
        <p><strong><u>Main Objective</u></strong></p>
        <p>
          The main objective of this research is to develop an intelligent <strong>Lifestyle Management System (LMS)</strong> that helps individuals predict disease risks and manage their health more effectively using personal data such as blood test results, height, and weight. The system aims to automate data extraction from medical reports using OCR and apply machine learning algorithms to generate personalized meal plans, exercise routines, and stress management recommendations, specifically tailored for individuals aged 18 to 40.
        </p>

        <p><strong><u>Specific Objectives</u></strong></p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong><u>Identifying Diseases</u></strong><br />
            In this process, the user's blood test data is used to identify various disease risk levels. The user is informed in detail about the disease risk level by analyzing various parameters (e.g., cholesterol level, sugar level, hemoglobin). This provides basic information to take preventive measures and assists in scheduling tests and obtaining advice.
          </li>

          <li>
            <strong><u>Getting an Exercise Schedule</u></strong><br />
            This section involves setting up an exercise schedule most suitable for the user based on BMI (body mass index) and calorie burn. According to the user's physical condition and health needs, the exercise type, time, and dose are suggested. This helps maintain body stability and promote healthy strengthening.
          </li>

          <li>
            <strong><u>Get a Meal Plan Recipe</u></strong><br />
            In this section, the user is given a personalized meal plan based on their preferences and health needs, based on their height, weight, and blood pressure data. This helps provide the user with the right amount of nutrition and reduces the risk of health problems. The meal plan is updated daily, weekly, and monthly, providing a comfortable way for the user.
          </li>

          <li>
            <strong><u>Managing Stress</u></strong><br />
            In this section, the user's stress level is measured, notified, and advised accordingly. Various data collection methods are used to identify the stress level. The user is given the right stress management strategies, relaxation techniques, and stress-reducing activities. This is necessary for leading a healthy and peaceful life.
          </li>
        </ul>
      </div>
    )
  },


  { label: 'Methodology',
     key: 'methodology',
     content: `METHODOLOGY

     The methodology of this project focuses on developing an intelligent, user-friendly mobile application that integrates machine learning and OCR technologies to predict disease risk, suggest personalized meal plans and exercise schedules, and provide stress management support. The system architecture follows a modular Model-View-Controller (MVC) design, ensuring maintainability and scalability. Initially, a thorough requirement analysis and literature review were conducted to identify gaps in existing systems, such as reliance on manual data input, lack of multi-disease prediction, and limited personalization. Publicly available datasets related to diabetes, cardiovascular diseases, and anemia were collected from sources like Kaggle and the UCI Repository. These datasets included key health indicators such as blood glucose, cholesterol, hemoglobin, blood pressure, BMI, and age.
     
     Data preprocessing involved handling missing values, outlier removal, normalization, and categorical encoding. Statistical methods like the Chi-square test and ANOVA were used for feature selection. Multiple machine learning models including Logistic Regression, Random Forest, K-Nearest Neighbors, Support Vector Machine, and Decision Tree were trained and tested using an 80/20 train-test split. Random Forest delivered the highest accuracy and was used for final deployment. The disease prediction model was integrated with the Google Cloud Vision API, which extracts data from uploaded blood report images or PDFs using OCR. This eliminated the need for manual data entry and improved accessibility. Extracted data was parsed, validated, and fed into the trained model to assess disease risk levels in real-time, which are presented to users in a simple, interpretable format.` 
  },
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
