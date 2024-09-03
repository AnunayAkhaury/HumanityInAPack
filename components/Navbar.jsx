'use client';

export default function Navbar() {
  return (
    <nav className="bg-blue-700 bg-opacity-75 fixed w-full top-0 left-0 z-50 py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="text-xl font-bold text-white">
          Humanity in a Pack
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
