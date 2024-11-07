import React from 'react';

function Header() {
  return (
    <header className="bg-teal-700 text-white p-5 flex justify-between items-center">
      <h1 className="text-3xl font-bold">YOUERN RIN</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:underline">About Me</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
