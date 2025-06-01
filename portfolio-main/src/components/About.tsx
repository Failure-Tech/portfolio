import { useNavigate } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import pfp from "../assets/images/me.jpeg";
import pearlogo from "../assets/images/pear.png"; // Make sure this path is correct

const About = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* Fixed Navigation Bar */}
            <div className="fixed top-0 left-0 right-0 flex flex-wrap justify-between items-start z-20 px-6 md:px-10 py-10">
                <p onClick={() => navigate('/')} className="font-mono text-2xl text-white text-shadow-lg font-extrabold hover:text-blue-400 hover:cursor-pointer mb-4 md:mb-0">
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

            {/* Main content area for About page */}
            <div className="flex flex-col items-start pt-32 px-6 md:px-10 text-white z-10 relative">
                {/* Back to home link - moved up */}
                <p onClick={() => navigate('/')} className="text-gray-400 text-lg font-['aeonik-thin'] hover:text-blue-400 hover:cursor-pointer mb-6">
                    ← back to home
                </p>

                {/* About title - smaller */}
                <div className="w-full text-center mb-6">
                    <p className="text-5xl font-bold font-mono">about</p>
                </div>

                {/* Description text - larger */}
                <h2 className="text-5xl text-center font-['voyager-thin'] leading-tight px-4 md:px-20 lg:px-40 mb-12">
                    i'm gautham korrapati, an indian-american machine learning researcher + software engineer. currently studying cs @ college of the canyons.
                </h2>

                {/* Profile picture - slightly larger */}
                <div className="w-full flex justify-center mb-10">
                    <img src={pfp} alt="Gautham Korrapati" className="rounded-lg shadow-lg max-w-md w-full h-auto object-cover" />
                </div>

                {/* New paragraph below the image - centered and stretched */}
                <div className="w-full mb-8 text-white flex justify-center">
                    <p className="text-xl font-sans text-left max-w-3xl px-4">
                        My journey in software and building started at the age of 12 with designing my first <a className="underline" href="https://rubix-cube-tutorials.netlify.app/" target="_blank" rel="noopener noreferrer"> rubix cube tutorial page</a> since most of the ones on YouTube were too complicated for what was needed.
                        It didn't lead to much, but it was a great experience building.
                    </p>
                </div>

                {/* Second new paragraph with space */}
                <div className="w-full mb-8 text-white flex justify-center">
                    <p className="text-xl font-sans text-left max-w-3xl px-4">
                        This hobby of mine brewed a deeper passion to use software to impact others through products I developed. I grew curious about the backend archiecture of websites, not just the abstracted design elements.
                    </p>
                </div>

                <div className="w-full mb-8 text-white flex justify-center">
                    <p className="text-xl font-sans text-left max-w-3xl px-4">
                        At 14, I built my first startup, <a className="underline" href="https://github.com/Failure-Tech/Blaze" target="_blank" rel="noopener noreferrer">Blaze</a>, a UI toolkit dedicated to making entreprenuers focus on the core functionality of the product, not the UI. We gained over 50+ people on the waitlist, but sadly never got to fully launch.
                    </p>
                </div>

                <div className="w-full mb-8 text-white flex justify-center">
                    <p className="text-xl font-sans text-left max-w-3xl px-4">
                        At 15, I designed a, <a className="underline" href="https://github.com/Failure-Tech/restoration_map-1" target="_blank" rel="noopener noreferrer">polygon mesh rendering system to describe future agricultural growth</a> using a pair of differential equations and heatmaps; a database with over 1k+ plants and 5+ iterative features.
                    </p>
                </div>

                <div className="w-full mb-8 text-white flex justify-center">
                    <p className="text-xl font-sans text-left max-w-3xl px-4">
                        Later on, I co-founded Quest, a <a className="underline" href="https://questllc.netlify.app/" target="_blank" rel="noopener noreferrer">learning platform for competition math</a> as there was a gap in the market, and we gained 25k+ users and collabed with 6+ organizations (had a book written as well); and <a className="underline" href="dailysat.org" target="_blank" rel="noopener noreferrer">DailySat</a>, an SAT prep platform garnering 80k+ users and $3k+ in funding.
                    </p>
                </div>

                <div className="w-full mb-20 text-white flex justify-center">
                    <p className="text-xl font-sans text-left max-w-3xl px-4">
                        Now, I'm working on a stealth startup working on providing R&D Firms with readily available blueprints + software to easily manufacture products with little adjustment necessary. We are currently working on an autonomous system via the ChauffeurNet Model by WAYMO, implementing
                        agentic path prediction trajectories using heatmaps and collision losses to guide imitiation learning.
                    </p>
                </div>
            </div>

            {/* --- */}
            {/* Experience Section */}
            <div className="w-full max-w-4xl mx-auto px-6 md:px-10 pb-20 text-white">
                <p className="text-5xl font-bold font-mono text-center mb-8">experience</p>
                <div className="border-t border-gray-700 w-full mb-12"></div> {/* White line */}

                {/* Experience Entry 1: Lead AI Engineer */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
                    {/* Left side: Number, Title, Date */}
                    <div className="flex-shrink-0 mb-4 md:mb-0">
                        <p className="text-4xl font-mono text-gray-400 mb-2">01</p>
                        <p className="text-3xl font-bold font-mono">Lead AI Engineer</p>
                        <p className="text-xl font-mono text-gray-400">2024 (above)</p>
                    </div>

                    {/* Right side: Logo, Company Name, Description */}
                    <div className="flex flex-col items-start md:items-end text-left md:text-right">
                        <img src={pearlogo} alt="Pear AI Logo" className="h-12 w-auto mb-2" />
                        <p className="text-2xl font-bold font-mono mb-2">Pear AI</p>
                        <p className="text-xl font-sans max-w-lg">
                            Integrated Claude API to user endpoint. Backed by YC, raised $1M+ in funding.
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-800 w-full mb-12"></div> {/* More faded/darker gray line */}

                {/* You can add more experience entries here by repeating the flex container structure */}
            </div>


            {/* Social Media Links */}
            <div className="fixed bottom-10 right-10 flex flex-col space-y-4 z-20">
                <a
                    href="https://github.com/failure-tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    aria-label="GitHub"
                >
                    <FaGithub className="text-3xl" />
                </a>
                <a
                    href="https://www.instagram.com/gautham.korrapati/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    aria-label="Instagram"
                >
                    <FaInstagram className="text-3xl" />
                </a>
                <a
                    href="https://www.linkedin.com/in/gautham-korrapati-946369272/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    aria-label="LinkedIn"
                >
                    <FaLinkedinIn className="text-3xl" />
                </a>
            </div>
        </>
    )
}

export default About;