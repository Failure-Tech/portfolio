import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const projects = [
    {
        name: "ContinousOccupancy",
        role: "Project Engineer",
        year: "2025",
        description: "Used discrete ricci flow, a technique found within differential geometry to discretize continous values within a generated mesh from an occupancy network. Built full infrastructure with Oliver-Ricci and PyTorch, rendered mesh higher qaulity, leading to a 10%+ in data reduction, increasing latency by 5%, and acheiving an 86% accuracy rate.",
        image: "./src/assets/images/diff_geo.png",
        link: "",
        linkText: "VIEW PROJECT",
        secondLink: false
    },
    {
        name: "RestoraMap",
        role: "Co-Founder",
        year: "2024",
        description: "With a pair of differential equations, used them to map out a restorative heatmap bijection for invasive species and other organisms as well. Used a heatmap + polygon coordinates to cross-sectionalize and map out specific areas, mapping growth over time. Led development, curated db with over 10k+ plants for users to learn about and incorporate into local gardens.",
        image: "./src/assets/images/restoramap.png",
        link: "https://github.com/Failure-Tech/restoration_map-1",
        linkText: "VIEW PROJECT",
        secondLink: false
    },
    {
        name: "DailySat",
        role: "Chief Tech Officer",
        year: "2024",
        description: "Helped create a full-stack digital SAT prep platform, garnering over 80k+ users, and using RAG to save user prompts to personalized AI tutor, backed by Groq. Helped onboard CollegeBoard API + built math section, and helped lead marketing growth as well.",
        image: "./src/assets/images/dailysat.png",
        link: "https://dailysat.org/",
        linkText: "VIEW PROJECT",
        secondLink: false
    },
    {
        name: "Teen Youth Journalism",
        role: "Co-Founder",
        year: "2024",
        description: "Democratizing big media with a small journalism platform, helping lead a 50+ member team for journalism, leading to over 450+ users using our site. Created full frontend + backend for site, using Firebase + React stack and currently working on fundraising for new ventures + hosting local competition.",
        image: "./src/assets/images/tyji.png",
        link: "https://tyji.org/",
        linkText: "VIEW PROJECT",
        secondLink: false
    },
    {
        name: "PearAI",
        role: "Founding/Lead Open Source Dev",
        year: "2023",
        description: "Giving suffrage to anyone who wants to build their own applications, building the ultimate AI code editor. Worked on Claude API implementation, and improving routing on landing page, as well as building a tiered subscription platform for individual APIs. Was featured on YT channels with 500k+ subs; backed by YC, raised $1m+ in funding for API tokens and developmental costs.",
        image: "./src/assets/images/pearai.png",
        link: "https://trypear.ai/",
        linkText: "VIEW PROJECT",
        secondLink: false
    },
    {
        name: "Blaze",
        role: "Founder",
        year: "2023",
        description: "First ever startup, attempted to build the ultimate startup product development pack, building out a full UI-toolkit meant for developers and entreprenuers to streamline development to focus on core product features and consumer integration, not UI. Ammased a 50+ member waitlist, developed a Stripe API endpoint + Firebase DB for allocating easy development, MailChimp for to keep recurring users, and React UI components for easy use. Sadly never got to launch fully, but it was a great learning experience to build my future startups.",
        image: "./src/assets/images/blaze.png",
        link: "https://github.com/Failure-Tech/Blaze",
        linkText: "VIEW PROJECT",
        secondLink: false
    }
]

const Work:React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
                <div className="bg-black flex w-full flex-col pt-32 items-start">
                    <div className="text-white flex flex-col w-full px:8 sm:px-8 md:px-16 lg:px-20 items-start justify-start text-6xl font-bold gap-y-4">
                        <div className="flex flex-col w-full md:justify-center space-y-4 items-start">
                            <a onClick={() => navigate('/')} className="w-full font-aeonik-thin tracking-regular hover:cursor-pointer space-y-3 text-sm mb-4">
                                <p>← BACK TO HOME</p>
                            </a>
                        </div>
                        <div className="flex flex-col w-full align-center justify-center space-y-4 items-start">
                            <p className="w-full font-aeonik-bold tracking-tight text-center leading-[100%] text-[21px] mb-3">PROJECTS</p>
                            <h1 className="w-full font-voyager-thin text-[44px] md:text-[54px] leading-[125%] text-center tracking-tight mb-3">Here's some of the cool stuff that I've built, engineered, and designed.</h1>
                            {projects.map((project) => (
                                <div key={project.name} className="flex flex-col md:flex-row md:space-x-5 py-6 md:py-10 items-start font-aeonik-thin tracking-regular space-y-3 text-sm">
                                    <div className="flex flex-col md:flex-row w-full md:w-1/2 lg:w-1/2">
                                        <img 
                                            src={project.image}
                                            height={700}
                                            width={600}
                                            alt={project.name + "image"}
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <div className="flex flex-row spcae-x-3 text-[23px] md:text-[32px]">
                                            <h1 className="font=voyager-thin italic mr-5"> {project.name} </h1>
                                            <h1 className="font-voyager-thin italic"> || </h1>
                                            <h1 className="font-voyager-thin ml-5"> {project.role} </h1>
                                        </div>
                                        <p className="pt-3">{project.year}</p>
                                        <div className="flex flex-row my=10 tracking-normal font-aeonik-regular text-[18px] leading-[125%]">
                                            <p>{project.description}</p>
                                        </div>
                                        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 text-center md:text-start mt-5">
                                            <button className="border border-white transition-all ease-in-out hover:cursor-pointer hover:bg-blue-400 hvoer:border-blue-400 rounded-xl h-10 px-8 py-2">
                                                <p className="text-sm font-graebenbach-mono-regular">{project.linkText}</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    )
}

export default Work;