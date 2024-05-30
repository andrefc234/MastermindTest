import React from 'react';

interface OverviewProps {
  title: string;
  packageName: string;
  description: string;
  benefits: string[];
}

const Overview: React.FC<OverviewProps> = ({ title, packageName, description, benefits }) => {
  return (
    <div className=" p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-2">
          <span className="text-blue-500">{packageName}:</span> {description}
        </h3>
        <ul className="list-disc ml-6">
          {benefits.map((benefit, index) => (
            <div className='my-6 py-4 px-5 rounded-lg bg-slate-200 shadow-md'>
                <li key={index} className="flex items-center">
              <svg
                className="w-4 h-4 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {benefit}
            </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Overview;
