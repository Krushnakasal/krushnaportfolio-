

const Experience = () => {
  return (
    <section name="experience" className="bg-gray-900 shadow-md shadow-slate-500 text-white mt-3 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-extrabold text-center mb-8">Experience</h2>
        <p className="text-lg text-center text-gray-300 mb-8">
          I have more than 1.5 years of experience in the following technologies:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* HTML */}
          <div className="flex flex-col items-center rounded-full">
            <img
              src="https://shubhamportfoliopage.netlify.app/assets/html-BcydiEZz.png"
              alt="HTML"
              className="h-28 rounded-[70%] w-28 mb-3 border shadow-md shadow-slate-100 transition duration-300 transform hover:scale-110"
            />
            <span className="text-sm text-white">HTML</span>
          </div>

          {/* CSS */}
          <div className="flex flex-col items-center">
            <img
              src="https://shubhamportfoliopage.netlify.app/assets/css-Bb6Ht6-L.jpg"
              alt="CSS"
              className="h-28 rounded-[70%] w-28 mb-3 border shadow-md shadow-slate-100 transition duration-300 transform hover:scale-110"
            />
            <span className="text-sm text-white">CSS</span>
          </div>

          {/* JavaScript */}
          <div className="flex flex-col items-center">
            <img
              src="https://shubhamportfoliopage.netlify.app/assets/javascript-BhRT2qxn.png"
              alt="JavaScript"
              className="h-28 rounded-[70%] w-28 mb-3 border shadow-md shadow-slate-100 transition duration-300 transform hover:scale-110"
            />
            <span className="text-sm text-white">JavaScript</span>
          </div>

          {/* MongoDB */}
          <div className="flex flex-col items-center">
            <img
              src="https://shubhamportfoliopage.netlify.app/assets/mongodb-DTN_LJLV.jpg"
              alt="MongoDB"
              className="h-28 rounded-[70%] w-28 mb-3 border shadow-md shadow-slate-100 transition duration-300 transform hover:scale-110"
            />
            <span className="text-sm text-white">MongoDB</span>
          </div>

          {/* Express.js */}
          <div className="flex flex-col items-center">
            <img
              src="https://shubhamportfoliopage.netlify.app/assets/express-DPO64ptq.png"
              alt="Express.js"
              className="h-28 rounded-[70%] w-28 mb-3 border shadow-md shadow-slate-100 transition duration-300 transform hover:scale-110"
            />
            <span className="text-sm text-white">Express.js</span>
          </div>

          {/* React.js */}
          <div className="flex flex-col items-center">
            <img
              src="https://shubhamportfoliopage.netlify.app/assets/reactjs-Bzfgxuvh.png"
              alt="React.js"
              className="h-28 rounded-[70%] w-28 mb-3 border shadow-md shadow-slate-100 transition duration-300 transform hover:scale-110"
            />
            <span className="text-sm text-white">React.js</span>
          </div>

          {/* Node.js */}
          <div className="flex flex-col items-center">
            <img
              src="https://shubhamportfoliopage.netlify.app/assets/node-BJaXeH92.png"
              alt="Node.js"
              className="h-28 rounded-[70%] w-28 mb-3 border shadow-md shadow-slate-100 transition duration-300 transform hover:scale-110"
            />
            <span className="text-sm text-white">Node.js</span>
          </div>

          {/* GitHub */}
          <div className="flex flex-col items-center">
            <img
              src="data:image/png;base64,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"
              alt="GitHub"
              className="h-28 rounded-[70%] w-28 mb-3 border shadow-md shadow-slate-100 transition duration-300 transform hover:scale-110"
            />
            <span className="text-sm text-white">GitHub</span>
          </div>

          {/* Git */}
          <div className="flex flex-col items-center">
            <img
              src="data:image/png;base64,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"
              alt="Git"
              className="h-28 rounded-[70%] w-28 mb-3 border  shadow-md shadow-slate-100 transition duration-300 transform hover:scale-110"
            />
            <span className="text-sm text-white">Git</span>
          </div>

          {/* Postman */}
          <div className="flex flex-col items-center">
            <img
              src="https://shubhamportfoliopage.netlify.app/assets/Git-DN98zLS5.svg"
              alt="Postman"
              className="h-28 rounded-[70%] w-28 mb-3 border shadow-md shadow-slate-100 transition duration-300 transform hover:scale-110"
            />
            <span className="text-sm text-white">Postman</span>
          </div>

          {/* VS Code */}
          <div className="flex flex-col items-center">
            <img
              src="https://yt3.googleusercontent.com/SrR4yedn6iaf431Y8ciCu6m_NTu0xqPyAYTps0WV0QgQO9NA2JUZDdJMg4435wI-wR8peEW59A=s900-c-k-c0x00ffffff-no-rj"
              alt="VS Code"
              className="h-28 rounded-[70%] w-28 mb-3 border shadow-md shadow-slate-100 transition duration-300 transform hover:scale-110 "
            />
            <span className="text-sm text-white">VS Code</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
