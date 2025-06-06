import React, { useEffect, useRef, useState } from "react";
// import Marquee from "react-fast-marquee";
import { CardSpotlight } from "./ui/Card";
import { useNavigate } from "react-router-dom";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";
import whiteArrow from "/assets/images/iconArrowUprightWhite.png";

// const currProjects = [
//     {
//         name: "Using LLM interfaces and adaptable learning to build the easiest way to study for the SAT",
//         link: "https://www.dailysat.org/"
//     },
//     {
//         name: "Creating the ultimate competition math resource guide, using reccomendation algorithms",
//         link: "https://questllc.netlify.app/"
//     },
//     {
//         name: "Using multimodal input and iterative mesh voxels redesign for Fresno",
//         link: "https://www.apanagopoulos.com/projects"
//     }
// ];

const prevProjects = [
    {
        name: "dailysat",
        role: "chief tech officer",
        desc: "democratizing sat prep. 0 --> 80,000 users",
        link: "https://www.dailysat.org/"
    },
    {
        name: "pearai",
        role: "founding opensource dev",
        desc: "making anyone a builder, backed by yc. 0 --> $1m+ in funding",
        link: "https://trypear.ai/"
    },
    {
        name: "cmu",
        role: "ml researcher",
        desc: "redefining construction and elms with multimodal learning. nature pub",
        link: "http://safeai-lab.github.io/"
    },
    {
        name: "fresno",
        role: "dl researcher",
        desc: "generating easy-to-use pipeline for text to mesh rendering. 0 --> 10k+ labels",
        link: "https://www.apanagopoulos.com/projects"
    },
    {
        name: "robotics",
        role: "lead programmer",
        desc: "generated robot pose for auto-alignment system. backed by jpl, disney, warner bros, etc.",
        link: "https://team691.org/"
    },
    {
        name: "stealth startup",
        role: "co-founder",
        desc: "using agent trajectory path plotted by heatmaps for collisions. $4k+ in funding",
        link: ""
    }
];

const Hero: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        setIsMounted(true);
        const videoElement = videoRef.current;

        const handleCanPlay = () => {
            if (videoElement) {
                videoElement.play().catch((error) => {
                    console.log("video play no worky", error);
                })
            }
        };

        if (videoElement) {
            videoElement.addEventListener("canplay", handleCanPlay);
        }

        return () => {
            if (videoElement) {
                videoElement.removeEventListener("canplay", handleCanPlay);
            }
        }
    }, []);

    const blur = 5;
    const video = "../assets/images/homebg.mp4";

    return (
        <>
            <main className="flex min-h screen w-full bg-black flex-col items-center justify-center py-8 md:py-12 lg:py-16">
                <div className="z-[-1] w-full h-full flex items-center justify-center absolute top-0">
                    {isMounted && (
                        <video
                            className="absolute top-0 left-0 w-full object-cover"
                            style={{ filter: `blur(${blur}px)`, WebkitFilter: `blur(${blur}px)`}}
                            autoPlay
                            loop
                            muted
                            playsInline
                            id="video-id"
                            ref={videoRef}
                        >
                            <source src={video} type="video/mp4" />
                        </video>
                    )}
                </div>
                <div className="flex flex-col w-full max-w-[600px] mx-auto mt-14 md:mt-0 lg:pt-0 p-4 md:p-0 lg:p-0 justify-center text-6xl font-bold text-white gap-y-32">
                    <div className="flex flex-row w-full space-x-1 mt-24">
                        <div className="self-start mt-3">
                            <h1 className="tracking-tight font-voyager-thin text-[16px] md:text-[14px] lg:text-[14px] mr-1">►</h1>
                        </div>
                        <div className="flex flex-col w-full align-center justify-center space-y-6 md:space-y-6 items-start">
                            <div className="flex flex-row w-full mb-3 items-center">
                                <h1 className="tracking-tight font-voyager-thin text-[30px] md:text-[32px] lg:text-[30px]">hey, i'm gautham.</h1>
                            </div>
                            <div className="w-full font-aeonik-bold space-y-6 leading-[1.5] text-[21px] md:text-[18px] lg:text-[18px]">
                                <p>i'm a 16 y/o robotics + ml researcher studying CS at College of the Canyons. i'm learning how multimodal input + multi-agent systems can drive the future of agentic learning.</p>
                                <p>i've made beautiful, intersubjective software from 0 → 5+. nowadays, i spend my time reading up on the latest ml research papers and thinking about continous learning tradeoffs for model training.</p>
                                <p>currently based in la.</p>
                                <p>contact me via <a className="italic border-b hover:text-blue-400 transition-all duration-400 hvoer:border-blue-400" href="https://www.linkedin.com/in/gautham-korrapati-946369272/">linkedin</a> or email at <a className="border-b italic underline hover:text-blue-400 transition-all ease-in-out duration-400 hover:border-blue-400">grkorrapati@my.canyons.edu</a>.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full space-y-3 px-5">
                        <div className="flex flex-col space-y-20">
                            {prevProjects.map((project, index) => (
                                <div key={index} className="flex flex-col space-y-6">
                                    <div key={index} className="flex flex-col space-y-2">
                                        <a
                                            key={index}
                                            href={project.link || "#"}
                                            onClick={() => project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex flex-row space-x-1 group"
                                            onMouseEnter={() => setHoveredProject(project.name)}
                                            onMouseLeave={() => setHoveredProject(null)}
                                        >
                                            <p className="font-aeonik-bold text-[18px] group-hover:text-blue-400 transition duration-200 ease-in-out ">{project.name}</p>
                                            <div className="relative w-2 h-2 mt-1">
                                                <img
                                                    src={whiteArrow}
                                                    height={100}
                                                    width={100}
                                                    alt="white arrow up icon"
                                                    className={`absolute top-0 left-0 transition-opacity duration-200 ${
                                                        hoveredProject === project.name ? 'opacity-0' : 'opacity-100'
                                                    }`}
                                                />
                                                <img 
                                                    src={whiteArrow}
                                                    height={100}
                                                    width={100}
                                                    alt="blue arrow up icon"
                                                    className={`absolute top-0 left-0 transition-opacity duration-200 ${
                                                        hoveredProject === project.name ? 'opacity-100' : 'opacity-0'
                                                    }`}
                                                />
                                            </div>
                                        </a>
                                        <p className="opacity-90 font-aeonik-thin text-[18px] leading-[140%]">{project.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4 px-5">
                        <h1 className="tracking-tight font-voyager-thin text-[21px]">organizations</h1>
                        <div className="flex flex-col pb-20 md:pb-0 pt-6 md:pt-0 lg:pt-0 sm:flex-row w-full space-y-3 md:space-y-0 md:space-x-4">
                            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 w-full">
                                <CardSpotlight 
                                    href="https://team691.org/" 
                                    className="flex-1 opacity-80 hover:opacity-100 transition-all duration-400 rounded-xl border border-[#ffffff33] p-4 space-y-2 bg-black"
                                >
                                    <div className="flex flex-row w-full justify-between items-center">
                                        <p className="font-aeonik-medium text-[18px]">project 691</p>
                                        <img 
                                            src={whiteArrow}
                                            height={100}
                                            width={100}
                                            alt="white arrow icon"
                                            className={`w-3 h-3 transition-opacity duration-200 opacity-100`}
                                        />
                                    </div>
                                    <p className="opacity-70 font-aeonik-regular text-[14px] leading-[130%]">
                                        setting up computer vision pose algorithms and object detection. lead 50+ member team, helped raise $30k+.
                                        <br/><br/>
                                        4th place alliance at Aerospace Valley Regionals 2024
                                    </p>
                                </CardSpotlight>
                                <CardSpotlight
                                    href="https://www.dailysat.org/"
                                    className="flex-1 opacity-80 hover:opacity-100 transition-all duration-400 rounded-xl border border-[#ffffff33] p-4 space-y-2 bg-black"
                                >
                                    <div className="flex flex-row w-full justify-between items-center">
                                        <p className="font-aeonik-medium text-[18px]">dailysat</p>
                                        <img 
                                            src={whiteArrow}
                                            height={100}
                                            width={100}
                                            alt="white up arrow icon"
                                            className={`w-3 h-3 transition-opacity duration-200 opacity-100`}
                                        />
                                    </div>
                                    <p className="opacity-70 font-aeonik-regular text-[14px] leading-[130%]">
                                        0 to 80,000+ individuals using our custom sat prep platform, received $3k+ in funding from Harvard and impacted across 3+ regions over the past year.
                                        <br /><br />
                                        potential $2m+ eval
                                    </p>
                                </CardSpotlight>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4 px-5">
                        <h1 className="tracking-tight font-voyager-thin text-[21px]">explore below</h1>
                        <div className="flex flex-col pb-20 md:pb-0 pt-6 md:pt-0 lg:pt-0 sm:flex-row w-full space-y-3 md:space-y-0 md:space-x-4">
                            <HoverBorderGradient
                                containerClassName="rounded-xl w-full text-center md:text-left sm:w-auto"
                                link="/work"
                                as="button"
                                className="dark:bg-black bg-black text-white dark:text-white flex items-center space-x-2"
                                onClick={() => navigate('/work')}
                            ><p className="font-graebenbach-mono-regular hover:cursor-pointer">VIEW WORK</p>
                            </HoverBorderGradient>
                            <HoverBorderGradient
                                containerClassName="rounded-xl w-full text-center md:text-left sm:w-auto"
                                link="/work"
                                as="button"
                                className="dark:bg-black bg-black text-white dark:text-white flex items-center space-x-2"
                                onClick={() => navigate('/work')}
                            ><p className="font-graebenbach-mono-regular hover:cursor-pointer">ABOUT ME</p>
                            </HoverBorderGradient>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Hero;