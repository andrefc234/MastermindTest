

interface NavbarProps {
  // Add any props you want to pass to the Navbar component
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="bg-gray-100 p-4 flex justify-between items-center">
      <img src="/icon.png" alt="College Mastermind Logo" className="h-10 mr-4" />
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="link text-gray-800 hover:text-gray-900 font-bold mr-4">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="link text-gray-800 hover:text-gray-900 font-bold mr-4">
            About
          </a>
        </li>
        <li>
          <a href="/services" className="link text-gray-800 hover:text-gray-900 font-bold mr-4">
            Services
          </a>
        </li>
        <li>
          <a href="/countries" className="link text-gray-800 hover:text-gray-900 font-bold mr-4">
            Countries
          </a>
        </li>
        <li>
          <a href="/partnership" className="link text-gray-800 hover:text-gray-900 font-bold mr-4">
            Partnership
          </a>
        </li>
        <li>
          <a href="/events" className="link text-gray-800 hover:text-gray-900 font-bold mr-4">
            Events
          </a>
        </li>
        <li>
          <a href="/contact" className="link text-gray-800 hover:text-gray-900 font-bold mr-4">
            Contact Us
          </a>
        </li>
        <li>
          <a href="/register" className="link text-gray-800 hover:text-gray-900 font-bold mr-4">
            Register
          </a>
        </li>
        <li>
          <a href="/login" className="login-button bg-indigo-500 text-white py-2 px-4 rounded-md">
            LOG IN
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;