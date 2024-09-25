'use client';
import { useState } from 'react';
import Logo from '@/public/humanity-in-pack.png';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-700 bg-opacity-75 fixed w-full top-0 left-0 z-50 py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex items-center">
          <Image
            src={Logo}
            alt="Humanity in a Pack Logo"
            width={50}
            height={50}
            className="mr-2"
          />
          <span className="text-xl font-bold text-white">
            Humanity in a Pack
          </span>
        </div>
        
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-6 text-white">
          <li><a href="#home">Home</a></li>
          <li><a href="#objective">Objective</a></li>
          <li><a href="#impact">Impact</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#stories">Stories</a></li>
          <li><a href="#supporters">Supporters</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <ul className={`flex-col items-center absolute top-full left-0 w-full bg-blue-700 bg-opacity-90 md:hidden transition-transform duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
          <li className="py-2"><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li className="py-2"><a href="#objective" onClick={toggleMenu}>Objective</a></li>
          <li className="py-2"><a href="#impact" onClick={toggleMenu}>Impact</a></li>
          <li className="py-2"><a href="#about" onClick={toggleMenu}>About</a></li>
          <li className="py-2"><a href="#stories" onClick={toggleMenu}>Stories</a></li>
          <li className="py-2"><a href="#supporters" onClick={toggleMenu}>Supporters</a></li>
          <li className="py-2"><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
