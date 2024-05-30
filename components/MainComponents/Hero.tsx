import Image from 'next/image';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="bg-blue-100 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4 text-blue-900">
              Your path to the top universities admission starts with
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Our expertise lies in helping students secure admissions into
              their reach colleges, including the most selective universities in
              the United States.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Book Your Strategy Session!
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image
              src="/images/students-working.jpg"
              alt="Students working on laptops"
              width={600}
              height={400}
              className="rounded-lg"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <svg
                className="w-16 h-16 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 22"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1l.01.01"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;