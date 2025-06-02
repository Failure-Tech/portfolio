import React from 'react';
interface ButtonProps {
    text: string;
    link: string;
    newTab?: boolean;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({text, link, newTab = false, className}) => {

    return (
        <a href={link}>
            <a target={newTab ? "_blank" : "_self"} 
               rel={newTab ? "noopener noreferrer" : undefined} 
               className={`border border-white transition duration-500 cursor-pointer ease-in-out hover:bg-blue-600 hover:border-blue-600 rounded-xl h-10 px-8 py-2 ${className}`}
               >
                <p className="text-sm font-graebenbach-mono-regular">{text}</p>
            </a>
        </a>
    )
}

export default Button;