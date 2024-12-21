import travelvideo from '../../public/travel.mp4.mp4';
import flatpointvideo from '../../public/flatpoint.mp4.mp4';

const Portfolio = () => {
  return (
    <div name="projects" className="bg-black text-white px-10 py-10 shadow-md shadow-slate-500 mt-3">
      <h1 className="text-4xl font-bold text-center mb-6">Portfolio</h1>
      <p className="text-center text-gray-400 mb-10">MERN STACK PROJECTS</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* Project 1 */}
        <div className="flex flex-col md:flex-row bg-gray-800 rounded-lg shadow-md shadow-slate-500 overflow-hidden hover:scale-105 transition-transform duration-300">
          <div className="w-full md:w-1/2">
            <video controls src={travelvideo} className="w-full h-full" />
          </div>
          <div className="p-6 flex flex-col justify-between">
            <h1 className="text-2xl font-bold">Travel Project</h1>
            <p className="text-gray-400 mt-2">
              Travel is the act of moving from one place to another, often over a long distance.
            </p>
            <div className="mt-4">
              <a
                href="https://traveling25.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                Live Preview
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="flex flex-col md:flex-row bg-gray-800 rounded-lg shadow-md shadow-slate-500 overflow-hidden hover:scale-105 transition-transform duration-300">
          <div className="w-full md:w-1/2">
            <video controls src={flatpointvideo} className="w-full h-full" />
          </div>
          <div className="p-6 flex flex-col justify-between">
            <h1 className="text-2xl font-bold">Flat Point Project</h1>
            <p className="text-gray-400 mt-2">
              A point on a regular surface where the osculating paraboloid degenerates to a plane.
            </p>
            <div className="mt-4">
              <a
                href="https://flatpoint.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                Live Preview
              </a>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-center mt-10 font-bold text-white mb-10">HTML + CSS + JAVASCRIPT</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* HTML + CSS + JS Project 1 */}
        <div className="flex flex-col md:flex-row bg-gray-800 rounded-lg shadow-md shadow-slate-500 overflow-hidden hover:scale-105 transition-transform duration-300">
          <div className="w-full md:w-1/2">
            <a href="https://krushnakasal.github.io/E-commerce" target="_blank" rel="noopener noreferrer">
              <img
                src="https://media.istockphoto.com/id/1060739400/photo/web-design-technology-browsing-programming-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=Rl2JLbZYjh37LOOyMg4UAlXYEtkX8zlWsGil5fA9A0Q="
                alt="E-commerce Project"
                className="w-full h-full object-cover"
              />
            </a>
          </div>
          <div className="p-6 flex flex-col justify-between">
            <h1 className="text-2xl font-bold">E-commerce Project</h1>
            <p className="text-gray-400 mt-2">
              An e-commerce website is an online store where customers can service.
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href="https://github.com/Krushnakasal/E-commerce"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                Code
              </a>
              <a
                href="https://krushnakasal.github.io/E-commerce"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                Live Preview
              </a>
            </div>
          </div>
        </div>

        {/* HTML + CSS + JS Project 2 */}
        <div className="flex flex-col md:flex-row bg-gray-800 rounded-lg shadow-md shadow-slate-500 overflow-hidden hover:scale-105 transition-transform duration-300">
          <div className="w-full md:w-1/2">
            <a href="https://krushnakasal.github.io/Flower.-Html/#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://media.istockphoto.com/id/1060739400/photo/web-design-technology-browsing-programming-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=Rl2JLbZYjh37LOOyMg4UAlXYEtkX8zlWsGil5fA9A0Q="
                alt="Flowers Project"
                className="w-full h-full object-cover"
              />
            </a>
          </div>
          <div className="p-6 flex flex-col justify-between">
            <h1 className="text-2xl font-bold">Flowers Project</h1>
            <p className="text-gray-400 mt-2">
              A good product description should consist of two equally important parts.
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href="https://github.com/Krushnakasal/Flower.-Html"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                Code
              </a>
              <a
                href="https://krushnakasal.github.io/Flower.-Html/#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                Live Preview
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
