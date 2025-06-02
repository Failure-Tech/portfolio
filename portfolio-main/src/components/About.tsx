import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InteractiveLink from "./ui/InteractiveLink";
import { useNavigate } from "react-router-dom";
import aboutMe from "../assets/images/me.jpeg";

const awards = [
    {
        name: "National Oceanic and Atmospheric Recognition",
        desc: "Recognition for building a closed system for generating electricity from soil by NOAA",
        year: "2023",
    },
    {
        name: "La Science Fair 3rd Place",
        desc: "Placed for a generative-ai drug-rendering sequential RNN based model for pulmonary fibrosis",
        year: "2024"
    },
    {
        name: "Cerebras Fellow",
        desc: "Using state-of-the-art machine learning tools to develop LLM interfaces, recognized for strong research background",
        year: "2024"
    },
    {
        name: "Honorable Mention at Stanford Math Tournament",
        desc: "Recieved honorable mention for Guts Round for a national-level mathematics competition",
        year: "2025"
    },
    {
        name: "fr8.so Startup Incubator Finalist",
        desc: "Finalist/Waitlisted for fr8, a startup incubator granting $20k+ in funding for startups and different projects"
    }
];

const education = [
    {
        name: "AA in Mathematics at College of the Canyons",
        desc: "Learning about vector spaces, partial derivatives, and help host AMATYC exam",
        year: "2023-2027"
    },
    {
        name: "AA in Physics at College of the Canyons",
        desc: "Helping build data and computer vision algorithms at NASA Rocksatx, help host F=MA exam at highschool",
        year: "2023-2027"
    },
    {
        name: "Academy of the Canyons Middle College Highschool",
        desc: "Help lead some cool stuff, host local mathematics competition (backed by Jane Street + Roots) with 50+ competitors",
        year: "2023-2027"
    }
]

const experiences = [
    {
        number: "01",
        position: "FOUNDING/LEAD OPEN-SOURCE DEV",
        year: "2023",
        companyName: "PearAI",
        link: "https://www.trypear.ai",
        imageName: "../assets/images/pear.png",
        roleDescription: "Worked on integrating Claude Sonnet 3.5 into developer chat, driving user retention & engagement to grow from <1% pre-launch to 5% of market. Worked on 3 sprints."
    },
    {
        number: "02",
        position: "ML RESEARCH INTERN",
        year: "2024",
        companyName: "Cmu",
        link: "https://safeai-lab.github.io/",
        imageName: "../assets/images/cmu_safe_ai.jpeg",
        roleDescription: "Worked on evaluating multimodal input to ELM models, using a 2 step process for model training and evaluation. Used 5+ datasets, and worked on implementing encoder-free VLMs such as Fuyu-8B."
    },
    {
        number: "03",
        position: "AI RESEARCHER",
        year: "2024",
        companyName: "Fresno",
        link: "https://www.apanagopoulos.com/projects",
        imageName: "../assets/images/fresno.jpg",
        roleDescription: "Helped create a CNN based model and cross-referenced with other architectures to process in data infra for farmers. Currently building a iterative mesh reconstruction mechanism with reinforcement learning."
    },
    {
        number: "04",
        position: "SOFTWARE ENGINEER",
        year: "2025",
        companyName: "Coc RocksatX",
        link: "https://www.canyons.edu/academics/nasa/nasa-rocksatx.php",
        imageName: "../assets/images/rsx_work.jpg",
        roleDescription: "Used an Intel-Realsense camera for saving data streams into bag files, using a customized computer-vision algorithm for object detection on space debris. Working on a ToF sensor to track depth perception through distance."
    }
]

const About: React.FC = () => {
    const groupedExperiences = [];
    for (let i = 0; i < experiences.length; i+=2) {
        groupedExperiences.push(experiences.slice(i, i+2));
    }
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <div className="flex w-full flex-col pt-32 items-start overflow-x-clip bg-black">
                <div className="flex flex-col w-full px-8 md:px-22 lg:px-20 items-start justify-center text-6xl font-bold gap-y-4">
                    <div className="flex flex-col w-full align-center justify-center space-y-4 items-center">
                        <a className="text-white w-full font-aeonik-thin tracking-regular space-y-3 text-sm mb-4 hover:cursor-pointer" onClick={() => navigate('/')}>
                            <p>← BACK TO HOME</p>
                        </a>
                        <div className="text-white flex flex-col w-full align-center justify-center space-y-4 items-center">
                            <p className="w-full font-aeonik-bold tracking-tight text-center leading-[100%] text-[21px] mb-3">ABOUT</p>
                            <h1 className="font-voyager-thin text-[44px] md:text-[54px] leading-[125%] text-center tracking-tight mb-3"> I'm Gautham Korrapati, an Indian-American machine learning researcher + engineer. Currently studying CS @ COC. </h1>
                            <img
                                src={aboutMe}
                                height={600}
                                width={400}
                                alt="Photo of me at bike trail"
                                className="py-10"
                            />
                            <div className="w-full md:w-2/3 font-aeonik-thin tracking-[0.015em] space-y-10 text-[21px] md:text-[21px]">
                                <p className="leading-[150%]">My journey in software and building started at the age of 12 with designing my first rubix cube tutorial page. It led to around 
                                        5 daily active users and <InteractiveLink href="https://rubix-cube-tutorials.netlify.app/">skills to use for my next projects</InteractiveLink>.
                                </p>
                                <p className="leading-[150%]">This hobby of mine brewed a deeper passion to use software to impact others through products I developed. I grew curious about the 
                                        backend archiecture of websites, not just the abstracted design elements.
                                </p>
                                <p className="leading-[150%]">At 14, I built my first startup, <InteractiveLink href="https://github.com/Failure-Tech/Blaze">Blaze</InteractiveLink>, a UI toolkit dedicated
                                        to making entreprenuers focus on the core functionality of the product, not the UI. We gained over 50+ people on the waitlist, but sadly never got to fully launch.
                                </p>
                                <p className="leading-[150%]">At 15, I designed a <InteractiveLink href="https://github.com/Failure-Tech/restoration_map-1">polygon mesh rendering system to describe future agricultural growth, RestoraMap,</InteractiveLink> 
                                        using a pair of differential equations and heatmaps; a database with over 1k+ plants and 5+ iterative features.
                                </p>
                                <p className="leading-[150%]"> Later on, I co-founded Quest, a <InteractiveLink href="https://questllc.netlify.app">learning platform for competition math</InteractiveLink> as there was a gap in the market, and we gained 
                                    25k+ users and collabed with 6+ organizations (had a book written as well); and <InteractiveLink href="https://dailysat.org/">DailySat</InteractiveLink>, an SAT prep platform garnering over 80k+
                                    users and $3k+ in funding.
                                </p>
                                <p className="leading-[150%]">Now, I'm working on a stealth startup working on providing R&D Firms with readily available blueprints + software to easily manufacture products with little adjustment necessary. Have $24k+ in 
                                    potential funding and 1 contract with R&D firm.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full py-20">
                        <p className="font-aeonik-thin tracking-widest text-[18px] border-b text-white border-gray-400 pb-3">EXPERIENCE</p>
                        {groupedExperiences.map((group, index) => (
                            <div key={index} className="flex flex-col md:flex-row w-full justify-between md:space-x-10 border-b pb-10 border-gray-800">
                                {group.map((exp, idx) => (
                                    <div key={idx} className="w-full py-10 font-aeonik-regular">
                                        <InteractiveLink href={exp.link as string}>
                                            <div className="flex flex-row items-start align-start">
                                                <div className="flex flex-col w-1/6">
                                                    <p className="text-sm pb-5 text-gray-500">{exp.number}</p>
                                                    <img 
                                                        src={exp.imageName}
                                                        height={118}
                                                        width={118}
                                                        alt="Description for expereinces"
                                                    />
                                                </div>
                                                <div className="ml-10 w-9/12 items-start">
                                                    <p className="text-sm pb-5 text-gray-500">{exp.position}</p>
                                                    <p className="font-voyager-thin tracking-tight text-[36px] mb-3">{exp.companyName}</p>
                                                    <p className="text-[18px] mt-4 leading-[150%] text-gray-400">{exp.roleDescription}</p>
                                                </div>
                                                <div className="flex flex-col w-1/2 items-end">
                                                    <p className="text-sm pb-5 tex-gray-500">{exp.year}</p>
                                                </div>
                                            </div>
                                        </InteractiveLink>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="w-full text-white py-20">
                        <p className="font-aeonik-thin tracking-widest text-[18px] border-b border-gray-400 pb-3">EDUCATION</p>
                        {education.map((education) => (
                            <div className="flex flex-col md:flex-row justify-between md:items-end w-full border-b border-gray-800 pt-10">
                                <div>
                                    <p className="font-voyager-thin tracking-tight text-[36px] mb-3">{education.name}</p>
                                    <p className="font-aeonik-thin tracking-tight text-gray-400 text-[18px] md:text-[21px] mb-3">{education.desc}</p>
                                </div>
                                <p className="font-aeonik-thin tracking-tight text-[18px] md:text-[21px] mb-3">{education.year}</p>
                            </div>
                        ))}
                    </div>
                    <div className="w-full py-20 text-white">
                        <p className="font-aeonik-thin tracking-widest text-[18px] border-b border-gray-400 pb-3">AWARDS</p>
                        {awards.map((award) => (
                            <div className="flex flex-col md:flex-row justify-between md:items-end w-full border-b border-gray-800 pt-10">
                                <div>
                                    <p className="font-voyager-thin tracking-tight text-[36px] mb-3">{award.name}</p>
                                    <p className="font-voyager-thin text-gray-400 tracking-tight text-[18px] md:text-[21px] mb-3">{award.desc}</p>
                                </div>
                                <p className="font-aeonik-thin tracking-tight text-[18px] md:text-[21px] mb-3">{award.year}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About;