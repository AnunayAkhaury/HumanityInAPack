"use client"

import React from 'react';
import Navbar from '@/components/Navbar';  // Correct import path
import Home from '@/components/Home'
import Objective from '@/components/Objective';
import Impact from '@/components/Impact';
import About from '@/components/About';
import Stories from '@/components/Stories';
import Supporters from '@/components/Supporters';
import Contact from '@/components/Contact';
import MapComponent from '@/components/MapComponent';
const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Home/ >
      <Objective />
      <Impact />
      <About />
      <Stories />
      <Supporters />
      <Contact />
      <MapComponent />
    </div>
  );
};

export default MainPage;
