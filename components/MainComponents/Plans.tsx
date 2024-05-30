import { SetStateAction, useState } from "react";


interface Plan {
  title: string;
  description: string;
  icon: string;
}

const Plans: React.FC = () => {

    

    function PlanSelection() {
        const [selectedPlan, setSelectedPlan] = useState(null);
      
        const handlePlanSelect = (plan: any | SetStateAction<null>) => {
          setSelectedPlan(plan);
        };
      
        return (
          <div className="flex justify-center items-center  py-5 my-4">
            <div className="rounded-full bg-white shadow-md p-2 flex items-center justify-between space-x-2">
              <button
                className={`rounded-full py-3 px-3 text-base font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                  selectedPlan === 'View all' ? 'bg-blue-600' : ''
                }`}
                onClick={() => handlePlanSelect('View all')}
              >
                View all
              </button>
              <button
                className={`px-3 py-4 text-base font-medium text-gray-700 hover:text-gray-900 ${
                  selectedPlan === 'Starter' ? 'font-bold' : ''
                }`}
                onClick={() => handlePlanSelect('Starter')}
              >
                Starter
              </button>
              <button
                className={`px-3 py-4 text-base font-medium text-gray-700 hover:text-gray-900 ${
                  selectedPlan === 'Essential' ? 'font-bold' : ''
                }`}
                onClick={() => handlePlanSelect('Essential')}
              >
                Essential
              </button>
              <button
                className={`px-3 py-4 text-base font-medium text-gray-700 hover:text-gray-900 ${
                  selectedPlan === 'Premium' ? 'font-bold' : ''
                }`}
                onClick={() => handlePlanSelect('Premium')}
              >
                Premium
              </button>
              <button
                className={`px-3 py-4 text-base font-medium text-gray-700 hover:text-gray-900 ${
                  selectedPlan === 'VIP League' ? 'font-bold' : ''
                }`}
                onClick={() => handlePlanSelect('VIP League')}
              >
                VIP League
              </button>
            </div>
          </div>
        );
      }
  const plans: Plan[] = [
    {
      title: 'Essential',
      description: 'For students at the very top of the Typical Applicant Pool',
      icon: '/standard.png', // Replace with actual icon path
    },
    {
      title: 'Standard',
      description: 'For first generation students at top of Typical Applicant Pool',
      icon: '/standard.png', // Replace with actual icon path
    },
    {
      title: 'Premium',
      description: 'For students who are in the top 50% of the Typical Applicant Pool',
      icon: '/standard.png', // Replace with actual icon path
    },
    {
      title: 'VIP',
      description: 'For students in the bottom 50% of Typical Applicant Pool.',
      icon: '/standard.png', // Replace with actual icon path
    },
  ];
 

  
  return (
    <>
   
    <div className="container mx-auto px-4 py-6 ">
    <div className="my-10">

    <PlanSelection/>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center mb-4">
              <img src={plan.icon} alt={plan.title} className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">{plan.title}</h3>
            <p className="text-gray-600 text-center">{plan.description}</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Plans;