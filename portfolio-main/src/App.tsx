import { BrowserRouter as Router, useNavigate, Routes, Route } from "react-router-dom";

import Spline from '@splinetool/react-spline';
import { MdArrowOutward } from "react-icons/md"; // Assuming react-icons is installed
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa"; // Import social media icons
import About from "./components/About";
import Work from "./components/Work";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="absolute top-0 left-0 right-0 flex flex-wrap justify-between items-start z-20 px-6 md:px-10 py-10">
        <p className="font-mono text-2xl text-white text-shadow-lg font-extrabold hover:text-blue-400 hover:cursor-pointer mb-4 md:mb-0">
          GAUTHAM KORRAPATI
        </p>
        {/* Navigation links container - still vertically stacked and aligned to the right */}
        <div className="flex flex-col space-y-1 text-xl font-mono items-end">
          <a onClick={() => navigate('/about')} className="relative text-gray-400 text-xl hover:cursor-pointer font-normal after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:after:cursor-pointer hover:text-white">
            ABOUT
          </a>
          <a onClick={() => navigate('/work')} className="relative text-gray-400 text-xl hover:cursor-pointer font-normal after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:text-white">
            WORK
          </a>
          <a onClick={() => navigate('/resume')} className="relative text-gray-400 text-xl font-normal hover:cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:text-white">
            RESUME
          </a>
          <a onClick={() => navigate('/play')} className="relative text-gray-400 text-xl font-normal hover:cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:text-white">
            PLAY
          </a>
          <a onClick={() => navigate('/contact')} className="relative text-gray-400 text-xl font-normal hover:cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:text-white">
            CONTACT
          </a>
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center overflow-y-auto z-10 pt-40 p-4">
        <div className="max-w-2xl text-left px-8 pb-32">
          <h2 className="text-4xl text-white font-mono font-semibold mb-8">► hey, i'm gautham.</h2>
          <p className="text-white font-sans text-xl mb-6">
            i'm a 16 y/o studying computer science and ml research at College of the Canyons. currently studying how multimodal input + human feedback can drive human-ai interaction and autonomous systems.
          </p>
          <p className="text-white font-sans text-xl mb-6">
            currently crafting interactive software for 0 → 3+ autonomous and human feedback agents. also spend my time researching into how agents and iterative rl optimization can reduce barrier to entry for consumer habits and mesh generation.
          </p>
          <p className="text-white font-sans text-xl mb-6">
            currently sectioned in la.
          </p>
          <p className="text-white font-sans text-xl">
            reach out to me{' '}
            <a className="italic underline hover:text-blue-400 hover:cursor-pointer">here</a> or email at{' '}
            <a
              href="mailto:grkorrapati@my.canyons.edu"
              className="italic underline hover:text-blue-400 hover:cursor-pointer"
            >
              <u>grkorrapati@my.canyons.edu</u>
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-y-10 max-w-2xl w-full px-8 pb-20">
          {[
            {
              title: 'dailysat',
              url: 'https://dailysat.org',
              desc: 'study for the digital sat easily. 0 → 80,000 users',
            },
            {
              title: 'quest',
              url: 'https://questllc.netlify.app/',
              desc: 'best resource hub for competition math. 0 → 25,000 users',
            },
            {
              title: 'cmu safe ai lab',
              url: 'https://safeai-lab.github.io/',
              desc: 'multimodal input for elms. currently working on iterative rl design for voxels.',
            },
            {
              title: 'pear ai',
              url: 'https://trypear.ai/',
              desc: 'generate full-scale software in minutes. integrated claude api to user endpoint. backed by yc, raised $1m+ in funding.',
            },
            {
              title: 'fresno aiis lab',
              url: 'https://www.apanagopoulos.com/projects',
              desc: 'working on learning user behavior from chauffeurnet autonomous architecture. worked on ciwa project',
            },
          ].map((project) => (
            <div key={project.title}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white text-2xl font-mono mt-10 font-extrabold hover:text-blue-400"
              >
                {project.title} <MdArrowOutward />
              </a>
              <p className="text-gray-300 text-lg mt-5 font-mono">{project.desc}</p>
            </div>
          ))}
        </div>

        {/* "organizations" section title */}
        {/* Aligned with max-w-2xl and px-8 for consistent left margin */}
        <div className="max-w-2xl w-full px-8 mr-50 mt-20 mb-5"> {/* Added mb-10 for spacing below the title */}
          <h3 className="text-2xl text-white font-mono font-normal">organizations</h3> {/* Changed font-semibold to font-normal and text-3xl to text-2xl */}
        </div>

        {/* New Boxes Section - Always horizontally stacked with black background and consistent font sizing */}
        {/* Removed flex-wrap to ensure they stay side-by-side. */}
        {/* justify-center to center the boxes, gap-8 for spacing */}
        {/* max-w-4xl and px-8 for consistent overall horizontal alignment */}
        <div className="flex flex-row justify-center gap-8 max-w-4xl w-full px-8 pb-20">
          {[
            {
              title: 'nasa rocksatx',
              url: 'https://www.canyons.edu/academics/nasa/nasa-rocksatx.php', // Replace with actual URL
              description: 'attempt to capture orbital information via tof and intell-real sense controllers. used a kalman filter system.',
              subDescription: 'launched with nasa, won asg grant',
            },
            {
              title: 'project 691',
              url: 'https://team691.org/', // Replace with actual URL
              description: 'industrial-grade robots, led team of 50+ members. raised $30k+ in funding, worked on robot pose automation and teleop controls.',
              subDescription: 'featured in scv signal, backed by raytheon, jpl, warner bros',
            },
          ].map((box) => (
            <a
              key={box.title}
              href={box.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex flex-col justify-between p-6 border border-white/30 rounded-lg shadow-lg bg-black text-white w-full max-w-sm hover:shadow-xl transition-all duration-300 overflow-hidden" // Removed md:max-w-md to keep consistent max-w
            >
              {/* Arrow icon at top right */}
              <MdArrowOutward className="absolute top-4 right-4 text-gray-400 text-2xl" /> {/* Removed group-hover */}

              {/* Title */}
              <h4 className="text-xl font-mono font-bold mb-3 pr-8">
                {box.title}
              </h4>

              {/* Main Description */}
              <p className="text-lg font-sans mb-4">
                {box.description}
              </p>

              {/* Sub-description */}
              <p className="text-lg font-sans text-gray-400">
                {box.subDescription}
              </p>
            </a>
          ))}
        </div>
        {/* "see more" section title */}
        <div className="max-w-2xl w-full px-8 mr-50 mt-20 mb-5">
          <h3 className="text-2xl text-white font-mono font-normal">see more</h3>
        </div>

        {/* Buttons for "see more" section */}
        <div className="flex flex-col md:flex-row gap-4 max-w-2xl w-full mr-50 px-8 pb-20">
          <button onClick={() => navigate('/about')} className="relative px-6 py-3 text-white text-lg font-mono rounded-2xl overflow-hidden bg-black
                               border border-gray-700 hover:border-blue-400 transition-all duration-300
                               before:content-[''] before:absolute before:inset-0 before:bg-blue-400 before:scale-x-0
                               before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100
                               group">
            <span className="relative z-10 group-hover:text-white">view projects</span>
          </button>
          <button onClick={() => navigate('/work')} className="relative px-6 py-3 text-white text-lg font-mono rounded-2xl overflow-hidden bg-black
                               border border-gray-700 hover:border-blue-400 transition-all duration-300
                               before:content-[''] before:absolute before:inset-0 before:bg-blue-400 before:scale-x-0
                               before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100
                               group">
            <span className="relative z-10 group-hover:text-white">about me</span>
          </button>
        </div>
      </div>

      {/* SOCIAL MEDIA LINKS AT ABSOLUTE BOTTOM RIGHT */}
      {/* Positioned absolutely at the bottom-right of the screen */}
      <div className="absolute bottom-10 right-10 flex flex-col space-y-4 z-20">
        <a
          href="https://github.com/failure-tech" // Replace with your GitHub URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
          aria-label="GitHub"
        >
          <FaGithub className="text-3xl" />
        </a>
        <a
          href="https://www.instagram.com/gautham.korrapati/" // Replace with your Instagram URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
          aria-label="Instagram"
        >
          <FaInstagram className="text-3xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/gautham-korrapati-946369272/" // Replace with your LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn className="text-3xl" />
        </a>
      </div>
    </>
  );
};

const Background = () => {
  // Spline component for the 3D background (change model)
  return <Spline scene="https://prod.spline.design/OCOcsZRIXeNhkfw7/scene.splinecode" />;
};

const HomeScreen = () => {
  return (
    // Main app container, full screen, overflow hidden to prevent body scroll
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background Spline component, z-index 0 to be at the very back */}
      <div className="absolute inset-0 z-0">
        <Background />
      </div>
      {/* Home component (content overlay), z-index 10 to be above the background */}
      <div className="absolute inset-0 z-10">
        <Home />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </Router>
  )
}

export default App;