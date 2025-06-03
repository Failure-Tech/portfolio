import React, { useState, useEffect, useRef } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/Sheet";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const navLinks = [
    {
        text: "ABOUT",
        link: "/about"
    },
    {
        text: "WORK",
        link: "/work"
    },
    // {
    //     text: "RESUME",
    //     link: "/resume" // fix later
    // },
    {
        text: "PLAY",
        link: "/play"
    },
    // {
    //     text: "CONTACT",
    //     link: "/contact"
    // }
]

const Navbar: React.FC<{ minimal?: boolean}> = () => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const hamburgerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                navRef.current &&
                !navRef.current.contains(e.target as Node) &&
                hamburgerRef.current &&
                !hamburgerRef.current.contains(e.target as Node)
            ) {
                setIsOpen(false);
            }
        }

        if (typeof window !== "undefined") {
            if (isOpen) {
                window.addEventListener("click", handleClickOutside);
            }

            return () => {
                window.removeEventListener("click", handleClickOutside);
            }
        }
    }, [isOpen]);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className="fixed-header-container">
                <header className="z-50 fixed top-0 w-full flex items-center justify-between">
                    <a onClick={() => navigate('/')}>
                        <p className="font-aeonik-bold text-[21px] md:text-[18px] tracking-tighter text-white absolute left-8 top-8 transition duration-200 ease-in-out hover:cursor-pointer hover:text-blue-400">GAUTHAM KORRAPATI</p>
                    </a>
                    {isMobile ? (
                        <>
                            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                                <SheetTrigger asChild>
                                    <div ref={hamburgerRef}>
                                        <RxHamburgerMenu 
                                            className="absolute right-9 top-9 text-white text-[21px] hover:cursor-pointer"
                                            onClick={toggleNavbar}
                                        />
                                    </div>
                                </SheetTrigger>
                                <SheetContent side="top" ref={navRef} className="bg-[#111111] border-none">
                                    <div className="grid gap-4 p-6">
                                        {navLinks.map((link) => (
                                            <a
                                                className="text-start no-underline text-white text-[32px] font-graebenbach-mono-regular transition duration-200 ease-in-out hover:text-white tracking-normal"
                                                href={link.link}
                                                key={`${link.link} + ${link.text}`}
                                                onClick={() => {
                                                    setIsOpen(false);
                                                }}
                                            >{link.text}</a>
                                        ))}
                                        <div className="flex flex-row space-x-4 pt-4 items-start">
                                            <a href="https://github.com/failure-tech" target="_blank" rel="noopener noreferrer">
                                                <div className="text-white text-2xl pb-2 transition duration-200 ease-in-out hover:text-blue-400">
                                                    <FaGithub />
                                                </div>
                                            </a>
                                            <a href="https://www.instagram.com/gautham.korrapati/" target="_blank" rel="noopener noreferrer">
                                                <div className="text-white text-2xl pb-2 tansition duration-200 ease-in-out hover:text-blue-400">
                                                    <FaInstagram />
                                                </div>
                                            </a>
                                            <a href="https://www.linkedin.com/in/gautham-korrapati-946369272/" target="_blank" rel="noopener noreferrer">
                                                <div className="text-white text-2xl pb-2 transition duration-200 ease-in-out hover:text-blue-400">
                                                    <FaLinkedin />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </>
                    ) : (
                        <nav className="absolute right-8 top-8 flex flex-col items-end" ref={navRef}>
                            {navLinks.map((link) => (
                                <a 
                                className="text-center no-underline text-[#ffffff80] text-base font-graebenbach-mono-regular transition duration-200 ease-in-out hover:text-white tracking-normal"
                                href={link.link}
                                key={`${link.link} + ${link.text}`}
                                onClick={() => navigate(link.link)}
                                >{link.text}</a>
                            ))}
                        </nav>
                    )}
                </header>
                {isMobile ? null: (
                    <div className="flex flex-col space-y-3.5 fixed right-8 bottom-8 items-end">
                        <a href="https://github.com/failure-tech" target="_blank" rel="noopener noreferrer">
                            <div className="text-[#ffffff80] text-xl pb-2 transition duration-200 ease-in-out hover:text-white">
                                <FaGithub />
                            </div>
                        </a>
                        <a href="https://www.instagram.com/gautham.korrapati/" target="_blank" rel="noopener noreferrer">
                            <div className="text-[#ffffff80] text-xl pb-2 transition duration-200 ease-in-out hover:text-white">
                                <FaInstagram />
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/gautham-korrapati-946369272/" target="_blank" rel="noopener noreferrer">
                            <div className="text-[#ffffff80] text-xl pb-2 transition duration-200 ease-in-out hover:text-white">
                                <FaLinkedin />
                            </div>
                        </a>
                    </div>
                )}
            </div>
        </>
    )
}

export default Navbar;