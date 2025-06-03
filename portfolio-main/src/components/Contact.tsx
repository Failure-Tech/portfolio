import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact:React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col bg-black pt-32 text-white scree min-h w-full items-start py-8 md:py-12 lg:py-16">
                <div className="flex flex-col w-full align-center justify-center space-y-4 items-center">
                        <a className="text-white w-full font-aeonik-thin tracking-regular space-y-3 text-sm mb-4 hover:cursor-pointer" onClick={() => navigate('/')}>
                            <p>← BACK TO HOME</p>
                        </a>
                        <div className="text-white flex flex-col w-full align-center justify-center space-y-4 items-center">
                            <p className="w-full font-aeonik-bold tracking-tight text-center leading-[100%] text-[21px] mb-3">ABOUT</p>
                            <h1 className="font-voyager-thin text-[44px] md:text-[54px] leading-[125%] text-center tracking-tight mb-3"> I'm Gautham Korrapati, an Indian-American machine learning researcher + engineer. Currently studying CS @ COC. </h1>
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
            </div>
            <Footer />
        </>
    )
}

export default Contact;