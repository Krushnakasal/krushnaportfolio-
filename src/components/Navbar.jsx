import { useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // Import from react-scroll

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-slate-900 shadow-md shadow-slate-100 text-white w-full fixed top-0 z-50">
      <div className="mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-2xl font-bold tracking-wide cursor-pointer hover:text-gray-400"
            >
              KRUSHNA KASAL
            </ScrollLink>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-lg font-medium cursor-pointer hover:text-gray-400"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-lg font-medium cursor-pointer hover:text-gray-400"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-lg font-medium cursor-pointer hover:text-gray-400"
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="experience"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-lg font-medium cursor-pointer hover:text-gray-400"
            >
              Experience
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-lg font-medium cursor-pointer hover:text-gray-400"
            >
              Contact
            </ScrollLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden mr-5">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black space-y-1 px-2 pt-2 pb-3">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            className="block text-lg text-white cursor-pointer hover:text-gray-400"
            onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            className="block text-lg text-white cursor-pointer hover:text-gray-400"
            onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
          >
            About
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            className="block text-lg text-white cursor-pointer hover:text-gray-400"
            onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="experience"
            smooth={true}
            duration={500}
            offset={-70}
            className="block text-lg text-white cursor-pointer hover:text-gray-400"
            onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
          >
            Experience
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="block text-lg text-white cursor-pointer hover:text-gray-400"
            onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
          >
            Contact
          </ScrollLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
  