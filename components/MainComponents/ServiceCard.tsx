import React from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title }) => {
  return (
    <div className="rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-shadow duration-200 ease-in-out">
      <div className="flex items-center justify-center mb-4">
        <img src={icon} alt={title} className="w-24 h-24" />
      </div>
      <h3 className="text-lg font-medium text-gray-800 mb-2">{title}</h3>
    </div>
  );
};

interface ServicesProps {}

const Services: React.FC<ServicesProps> = () => {
  const servicesData = [
    {
      icon: '/service.png',
      title: 'Essays',
    },
    {
      icon: '/service.png',
      title: 'Test Prep',
    },
    {
      icon: '/service.png',
      title: 'Test Prep',
    },
    {
      icon: '/service.png',
      title: 'Application Services',
    },
    {
      icon: '/service.png',
      title: 'Scholarships',
    },
    {
      icon: '/service.png',
      title: 'Academic Support and Coaching',
    },
    {
      icon: '/service.png',
      title: 'Value Credibility Project Planning',
    },
    {
      icon: '/service.png',
      title: 'Project Focuses',
    },
    {
      icon: '/service.png',
      title: 'Project Types',
    },
    {
      icon: '/service.png',
      title: 'Project Focuses',
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {servicesData.map((service) => (
          <ServiceCard key={service.title} icon={service.icon} title={service.title} />
        ))}
      </div>
    </div>
  );
};

export default Services;