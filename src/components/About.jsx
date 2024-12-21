

const About = () => {
  return (
    <section name="about"  className="bg-gray-900 shadow-md shadow-slate-500 text-white mt-3 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-extrabold text-center mb-8">About Me</h2>
        <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-16">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-lg text-gray-300 mb-6">
              Hello, I am <span className="text-teal-400">Krushna kasal</span>, a passionate web developer with a keen eye for the MERN stack. With a background in IT, I strive to create impactful and visually stunning software solutions that leave a lasting impression.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              <strong>Education & Training:</strong>
              <ul className="list-disc pl-5 text-gray-400">
                <li><strong>BCA</strong> from Abasaheb Kakade College of IT, Shevgaon (Expected Graduation: 2025)</li>
                <li><strong>HSC</strong> from babuji avhad uchh mahavidhyaly pathardi  (Completed: 2022)</li>
              </ul>
            </p>
            <p className="text-lg text-gray-300 mb-6">
              <strong>Skills & Expertise:</strong>
              <ul className="list-disc pl-5 text-gray-400">
                <li>Proficient in various programming languages</li>
                <li>Experienced with modern software tools and technologies</li>
                <li>Strong grasp of design principles and concepts</li>
                <li>Excellent problem-solving skills</li>
              </ul>
            </p>
            <p className="text-lg text-gray-300 mb-6">
              <strong>Mission Statement:</strong> My mission is to leverage my skills and creativity to deliver innovative web development solutions that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.
            </p>
          </div>          
        </div>
      </div>
    </section>
  );
};

export default About;
