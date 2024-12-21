import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-3">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-center">

          {/* Social Links */}
          <div className="flex space-x-6 mb-6 lg:mb-0">
            <a
              href="https://www.linkedin.com/in/krushna-kasal-25a936273"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-500 transition-colors duration-300"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/Krushnakasal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-500 transition-colors duration-300"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/x_krushnakasal_0808"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-500 transition-colors duration-300"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 lg:flex justify-between">
          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <p className="text-sm text-gray-400 mb-2">
              <span className="text-teal-400">Email: </span>
              krushnakasal97@gmail.com
            </p>
            <p className="text-sm text-gray-400">
              <span className="text-teal-400">Phone: </span>
              +91 8262806501
            </p>
          </div>

          {/* Copyright Section */}
          <div className="text-center lg:text-right mt-8 lg:mt-0">
            <p className="text-sm text-gray-400">
              &copy; 2024 Krushna Kasal. All rights reserved. <br />
              <span> Supportive person ❤️ Shubham Chavhan</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
