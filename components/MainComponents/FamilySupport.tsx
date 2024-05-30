import React from 'react';

const FamilySupport = () => {
  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-semibold text-center mb-4">You and your family will have everything you need...</h2>
      <ul className="space-y-2">
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✔️</span>
          <span>A start-to-finish plan that will give your child their best shot at their top universities</span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">✔️</span>
          <span>Accountability and structure to keep everything on track and never miss a deadline</span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">✔️</span>
          <span>Milestones to reduce the stress around the process</span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">✔️</span>
          <span>Monthly meetings with your Family Support Manager to get your questions answered</span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">✔️</span>
          <span>Feedback and progress reports</span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">✔️</span>
          <span>Expert mentorship and guidance for every step of the College Mastermind Approach</span>
        </li>
      </ul>
    </div>
  );
};

export default FamilySupport;
