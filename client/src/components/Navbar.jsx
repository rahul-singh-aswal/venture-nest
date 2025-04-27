import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      <div className="text-2xl font-bold">LOGO</div>
      <div className="hidden md:flex space-x-6">
        <Link to="/">Events</Link>
        <Link to="/programs">Programs</Link>
        <Link to="/investors">Investors</Link>
        <Link to="/startups">Startups</Link>
        <Link to="/cofounder">Find a Co-Founder</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="hidden md:flex space-x-4">
        <Link to="/login" className="text-black">Login</Link>
        <Link to="/join" className="bg-black text-white px-4 py-2 rounded">Join Us</Link>
      </div>

      {/* Hamburger for Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4">
          <Link to="/">Events</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/investors">Investors</Link>
          <Link to="/startups">Startups</Link>
          <Link to="/cofounder">Find a Co-Founder</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/login" className="text-black">Login</Link>
          <Link to="/join" className="bg-black text-white px-4 py-2 rounded">Join Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

