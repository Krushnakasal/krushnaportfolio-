import { Link } from "react-scroll";

const Herosection = () => {
    return (
      <section  className="bg-gray-900 shadow-md shadow-slate-500 mt-14 text-white h-screen flex items-center">
        <div name="home" className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-4 sm:px-8 lg:px-16">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-snug">
              Hi, I am <span className="text-teal-400">Krushna Kasal</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0">
              A passionate <span className="text-teal-400">Web Developer</span> creating modern and user-friendly web applications. 
              Lets build something extraordinary together!
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link to="projects"
               smooth={true}
               duration={500}
               offset={-70}
                className="bg-teal-500 hover:bg-teal-400 text-white py-3 px-8 rounded-lg font-semibold text-base sm:text-lg lg:text-xl shadow-lg transform transition hover:scale-110"
              >
                View My Work
              </Link>
              <Link to="contact"
               smooth={true}
               duration={500}
               offset={-70}
                className="bg-gray-700 hover:bg-gray-600 text-white py-3 px-8 rounded-lg font-semibold text-base sm:text-lg lg:text-xl shadow-lg transform transition hover:scale-110"
              >
                Contact Me
              </Link>
            </div>
          </div>
  
          {/* Right Content */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="https://media.istockphoto.com/id/1060739400/photo/web-design-technology-browsing-programming-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=Rl2JLbZYjh37LOOyMg4UAlXYEtkX8zlWsGil5fA9A0Q="
              alt="Hero Section Illustration"
              className="w-4/5 sm:w-3/4 lg:w-3/4 max-w-lg rounded-full shadow-2xl border-4 border-teal-400"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Herosection;
  