import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-blue-500 py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="flex flex-col">
          <h2 className="text-white font-bold text-2xl mb-4">Quick Link</h2>
          <ul className="space-y-2">
            <li className="text-white hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer">Home</li>
            <li className="text-white hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer">About</li>
            <li className="text-white hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer">Services</li>
            <li className="text-white hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer">Partnership</li>
            <li className="text-white hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer">Packages</li>
            <li className="text-white hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer">Meet Our Team</li>
            <li className="text-white hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer">Contact US</li>
          </ul>
        </div>
        <div className="flex flex-col ml-10 md:ml-20">
          <h2 className="text-white font-bold text-2xl mb-4">Services</h2>
          <ul className="space-y-2">
            <li className="text-white hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer">5-Day Intensive</li>
            <li className="text-white hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer">Test Prep</li>
            <li className="text-white hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer">Admissions Service</li>
            <li className="text-white hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer">Scholarships</li>
            <li className="text-white hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer">internship</li>
            <li className="text-white hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer">Events</li>
            <li className="text-white hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer">FAQs</li>
          </ul>
        </div>
        <div className="flex flex-col ml-10 md:ml-20">
          <h2 className="text-white font-bold text-2xl mb-4">Countries</h2>
          <ul className="space-y-2">
            <li className="text-white hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer">Saudi Arabia</li>
            <li className="text-white hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer">UAE</li>
            <li className="text-white hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer">Qatar</li>
            <li className="text-white hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer">Oman</li>
            <li className="text-white hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer">Kuwait</li>
            <li className="text-white hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer">Bahrain</li>
          </ul>
        </div>
        <div className="flex flex-col ml-10 md:ml-20">
          <h2 className="text-white font-bold text-2xl mb-4">Subscribe Our Newsletter</h2>
          <input type="email" placeholder="Email" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <div className="flex items-center mt-4">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="mr-4">
              <Image src="/facebook.svg" alt="Facebook" width={24} height={24} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="mr-4">
              <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="mr-4">
              <Image src="/youtube.svg" alt="YouTube" width={24} height={24} />
            </a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="mr-4">
              <Image src="/tiktok.svg" alt="TikTok" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex justify-center mt-8">
        <div className="flex space-x-4 text-white">
          <a href="#" className="hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer">Privacy Policy</a>
          <a href="#" className="hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer">Legal Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;