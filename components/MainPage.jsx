
"use client";
import Navbar from '@/components/Navbar';  
import Home from '@/components/Home';
import Objective from '@/components/Objective';
import Impact from '@/components/Impact';
import About from '@/components/About';
import Stories from '@/components/Stories';
import Supporters from '@/components/Supporters';
import Contact from '@/components/Contact'; 
import Donate from '@/components/Donate';

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Objective />
      <Impact />
      <About />
      <Stories />
      <Supporters />
      <Contact /> 
      <Donate />
    </div>
  );
};

export default MainPage;
