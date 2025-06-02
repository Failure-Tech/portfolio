import React from "react";

const Footer: React.FC = () => {
    return (
        <>
            <footer className="bg-black flex flex-col px-8 lg:px-24 pb-5 lg:pb-10 items-start text-white">
                <div className="flex flex-col gap-y-[0] w-full">
                    <h1 className="tracking-tight font-aeonik-bold text-[29px] md:text-[75px] leading-[110%]">WHAT'S UP.</h1>
                    <div className="flex justify-between px-4 md:px-10 w-full">
                        <h1 className="tracking-tight font-aeonik-bold text-[29px] md:text-[75px] leading-[70%]">SEND ME</h1>
                        <h1 className="tracking-tight font-aeonik-bold text-[29px] md:text-[75px] leading-[70%]">AN EMAIL</h1>
                    </div>
                    <h1 className="tracking-tight font-aeonik-bold text-[29px] md:text-[75px] text-end leading-none">GRKORRAPATI@MY.CANYONS.EDU</h1>
                </div>
                {/* <div className="flex flex-col px-8 lg:px-24 pb-5 lg:pb-10 items-start">
                    <h1 className="tracking-tight font-aeonik-regular text-[15px] md:text-[30px] leading-[100%]">credits to carter cote for the design</h1>
                </div> */}
            </footer>
        </>
    )
}

export default Footer;