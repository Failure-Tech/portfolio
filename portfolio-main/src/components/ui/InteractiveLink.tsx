import React from 'react';

interface InteractiveLinkProps {
  href: string;
  children: React.ReactNode;
  underline?: boolean;
  newTab?: boolean;
}

// This is a Client Component
export default function InteractiveLink({ href, children, underline = false, newTab = false }: InteractiveLinkProps) {
  const linkStyle = {
    textDecoration: underline ? 'underline' : 'underline'
  };

  const linkAttributes = newTab ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <a href={href} {...linkAttributes} style={linkStyle}>
      {children}
    </a>
  );
}