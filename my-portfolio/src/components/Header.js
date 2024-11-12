import React, { useState } from 'react';
import { Link } from 'react-scroll';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-purple-900 p-4 md:p-6 fixed top-0 left-0 right-0 z-10">
      <nav className="flex justify-between items-center">
        <div className="text-blue-500 font-bold text-xs md:text-base">
          <a href="#" className="hover:text-white">ONLINE PORTOFOLIO</a>
        </div>
        <div className="md:hidden relative">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? '✖' : '☰'}
          </button>
          {isOpen && (
            <ul className="absolute right-0 mt-2 bg-purple-650 text-white rounded shadow-lg p-4 space-y-2">
              <li><Link to="home" smooth={true} duration={500} className="hover:text-blue-500 cursor-pointer">HOME</Link></li>
              <li><Link to="about" smooth={true} duration={500} className="hover:text-blue-500 cursor-pointer">ABOUT ME</Link></li>
              <li><Link to="education" smooth={true} duration={500} className="hover:text-blue-500 cursor-pointer">EDUCATION</Link></li>
              <li><Link to="experience" smooth={true} duration={500} className="hover:text-blue-500 cursor-pointer">EXPERIENCE</Link></li>
              <li><Link to="projects" smooth={true} duration={500} className="hover:text-blue-500 cursor-pointer">PROJECT</Link></li>
              <li><Link to="contact" smooth={true} duration={500} className="hover:text-blue-500 cursor-pointer">CONTACT</Link></li>
            </ul>
          )}
        </div>
        <ul className="hidden md:flex md:flex-row space-x-6 text-white text-xs md:text-base">
          <li><Link to="home" smooth={true} duration={500} className="hover:text-blue-500 cursor-pointer">HOME</Link></li>
          <li><Link to="about" smooth={true} duration={500} className="hover:text-blue-500 cursor-pointer">ABOUT ME</Link></li>
          <li><Link to="education" smooth={true} duration={500} className="hover:text-blue-500 cursor-pointer">EDUCATION</Link></li>
          <li><Link to="experience" smooth={true} duration={500} className="hover:text-blue-500 cursor-pointer">EXPERIENCE</Link></li>
          <li><Link to="projects" smooth={true} duration={500} className="hover:text-blue-500 cursor-pointer">PROJECT</Link></li>
          <li><Link to="contact" smooth={true} duration={500} className="hover:text-blue-500 cursor-pointer">CONTACT</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;