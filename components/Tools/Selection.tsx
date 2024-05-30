import React, { useState } from "react";

interface PlanSelectionProps {
  plans: { id: string; name: string }[];
  onPlanChange: (id: string | null) => void; // Callback function type
}

const PlanSelection: React.FC<PlanSelectionProps> = ({ plans, onPlanChange }) => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handlePlanSelect = (id: string) => {
    setSelectedPlan(id);
    onPlanChange(id); // Call the callback function with the selected plan ID
  };

  return (
    <div className="flex justify-center items-center py-5 my-4">
      <div className="rounded-full bg-white shadow-md p-2 px-20 flex items-center justify-between space-x-2">
        {plans.map((plan) => (
          <button
            key={plan.id}
            className={`px-8 py-4 text-base font-medium text-gray-700 hover:text-gray-900 ${
              selectedPlan === plan.id ? 'font-bold bg-blue-500 rounded-full' : 'text-gray-700'
            }`}
            onClick={() => handlePlanSelect(plan.id)}
          >
            {plan.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PlanSelection;
