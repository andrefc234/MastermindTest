import Layout from "../MainComponents/Layout"
import PlanSelection from "../Tools/Selection"
import Overview from "../Tools/PageViewer";
import { useState } from "react";
import PremiumPackageButton from "../Tools/CardViewer";
export default function PremiumPage() {

    const plansBtn = [
        { id: "1", name: 'Overview' },
        { id: "2", name: 'Benefits' },
        { id: "3", name: 'Inclusions' },
        { id: "4", name: 'Reviews' },
        
      ];
      const benefits = [

        'They should have a very high GPA for the universities they would like to attend.',
      
        'They should have a high score on the SAT or ACT.',
      
        'They should have a strong extracurricular profile.',
      
        'They should have a strong essay profile.',
      
      ];
      const benefits2 = [

        "Premium: Our tailored approach is the key to our program's success. For the premium package, students come to us with their Value Credibility less-established than what would be needed to get accepted. They must go beyond typical teen extracurricular activities and leadership roles in order to truly be effective in getting into a selective college.",
      
        'They should have a high score on the SAT or ACT.',
      
        'They should have a strong extracurricular profile.',
      
        'They should have a strong essay profile.',
      
      ];
      const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

      const handlePlanChange = (id: string | null) => {
        setSelectedPlanId(id);
      };
      const renderOverviewProps = () => {
        switch (selectedPlanId) {
            case "1":
                return {
                    title: "Overview",
                    packageName: "Premium package",
                    description: "This is a great package for our first generation families who have a child who checks ALL of the following:",
                    benefits: benefits
                };
            case "2":
                // Return props for the "Benefits" section
                return {
                    title: "Benefits",
                    packageName: "Default Package",
                    description: "Default Description",
                    benefits: benefits2
                };
            case "3":
                // Return props for the "Inclusions" section
                return {
                    title: "Inclusions",
                    packageName: "Default Package",
                    description: "Default Description",
                    benefits: benefits
                };
            case "4":
                // Return props for the "Reviews" section
                return {
                    title: "Reviews",
                    packageName: "Default Package",
                    description: "Default Description",
                    benefits: benefits
                };
            default:
                // Return default props
                return {
                    title: "Default Title",
                    packageName: "Default Package",
                    description: "Default Description",
                    benefits: []
                };
        }
    };
  return (
    <>
    <Layout>
        <div>
            <PremiumPackageButton/>
        </div>
    <div className="my-3">
    <PlanSelection  plans={plansBtn} onPlanChange={handlePlanChange}/>
    </div>
    <div className="my-3">
                    <Overview {...renderOverviewProps()} />
                </div>

    </Layout>
    </>
  )
}
