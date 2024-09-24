'use client';
import Logo from '@/public/humanity in pack.svg';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-blue-700 bg-opacity-75 fixed w-full top-0 left-0 z-50 py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
      <div className="flex items-center">
          <Image 
            src={Logo} 
            alt="Humanity in a Pack Logo" 
            width={50} // Adjust size as necessary
            height={50} // Adjust size as necessary
            className="mr-2" // Add some spacing between the logo and the title
          />
          <span className="text-xl font-bold text-white">
            Humanity in a Pack
          </span>
        </div>
        <ul className="flex space-x-6 text-white">
          <li><a href="#home">Home</a></li>
          <li><a href="#objective">Objective</a></li>
          <li><a href="#impact">Impact</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#stories">Stories</a></li>
          <li><a href="#supporters">Supporters</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
