import { SetStateAction, useState } from "react";
import PlanSelection from "../Tools/Selection";

interface Plan {
  title: string;
  description: string;
  icon: string;
}

const Plans: React.FC = () => {

    
    const plansBtn = [
        { id: "1", name: 'View all' },
        { id: "2", name: 'Starter' },
        { id: "3", name: 'Essential' },
        { id: "4", name: 'Premium' },
        { id: "5", name: 'VIP League' }
      ];
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
 
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

  const handlePlanChange = (id: string | null) => {
    setSelectedPlanId(id);
  };
  
  return (
    <>
   
    <div className="container mx-auto px-4 py-6 ">
    <div className="my-10">

    <PlanSelection plans={plansBtn} onPlanChange={handlePlanChange}/>
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