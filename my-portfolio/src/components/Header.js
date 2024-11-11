import React from 'react';
import { Link } from 'react-scroll';

function Header() {
  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-purple-900 p-6 fixed top-0 left-0 right-0 z-10">
      <nav className="flex justify-between items-center">
        <div className="text-blue-500 font-bold">
          <a href="#" className="hover:text-white">ONLINE PORTOFOLIO</a>
        </div>
        <ul className="flex space-x-6 text-white">
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
