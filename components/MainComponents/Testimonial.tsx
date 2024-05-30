

interface TestimonialCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 m-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <div className="text-gray-500">
          <span className="font-semibold">{role}</span>
        </div>
      </div>
      <p className="text-gray-700 text-base leading-relaxed">{description}</p>
      <img src={image} alt={name} className="mt-4" />
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Read More
      </button>
    </div>
  );
};

interface TestimonialSectionProps {}

const TestimonialSection: React.FC<TestimonialSectionProps> = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Our Clients' Experiences</h2>
      <div className="flex flex-wrap justify-center">
        <TestimonialCard
          name="Cynthia"
          role="Student"
          description="College Mastermind helped me get into UChicago, my TOP CHOICE!"
          image="/class-of-2024.png"
        />
        <TestimonialCard
          name="Ashley"
          role="Student"
          description="I got into 4 Top 30 universities, and I am off to Northwestern in the spring!"
          image="/class-of-2024.png"
        />
      
      </div>
    </div>
  );
};

export default TestimonialSection;