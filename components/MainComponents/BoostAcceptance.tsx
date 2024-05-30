// components/BoostAcceptance.js
const BoostAcceptance = () => {
    return (
      <div className="flex justify-center items-center  py-10 px-5">
        <div className="bg-white flex flex-col md:flex-row justify-between items-center p-8 rounded-lg  max-w-4xl w-full">
          <div className="md:mr-8 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Packages are the Best Way to Boost Your Chances of Acceptance</h2>
            <p className="text-lg text-gray-700 mb-6">You and your family will have everything you need...</p>
            <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
              BOOK YOUR STRATEGY SESSION!
            </button>
          </div>
          <div className="mt-6 md:mt-0">
      <div className="relative bg-blue-400 p-6 rounded-lg shadow-lg max-w-4xl mx-auto mt-10">
        {/* Background SVG */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="800" height="800" fill="#E3F2FD"/>
          <path d="M0 550L800 550L800 800L0 800Z" fill="#42A5F5"/>
        </svg>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <img src="/person.png" alt="Person" className="w-202 h-102 mt-6"/>
         
        </div>
      </div>
    </div>
        </div>
      </div>
    );
  };
  
  export default BoostAcceptance;
  