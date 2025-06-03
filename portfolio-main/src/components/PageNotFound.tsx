import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const PageNotFound:React.FC = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <div className="flex flex-col bg-black text-white justify-center items-center w-full min-h-screen overflow-y-clip">
                <div className="flex flex-col w-full px:8 sm:px-8 md:px-16 lg:px-20 items-start justify-start text-6xl font-bold gap-y-4">
                    <div className="flex flex-col w-full md:justify-center items-center">
                        <h1 className="w-full text-center font-aeonik-bold tracking-tight space-y-3 text-6xl mb-20">PAGE NOT FOUND</h1>
                            <button className="border border-white transition-all justify-center ease-in-out hover:cursor-pointer hover:bg-blue-400 hover:border-blue-400 rounded-xl h-10 px-8 py-2 space-y-2">
                                <p onClick={() => navigate("/")} className="text-2xl font-graebenbach-mono-regular">back to home</p>
                            </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageNotFound;