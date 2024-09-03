import Image from 'next/image';
import blueBackground from '../public/bluebackround.png';  

export default function Home() {
  return (
    <section id="home">
    <div className="relative h-screen flex flex-col justify-center items-start bg-cover bg-center text-white">
      <Image
        src={blueBackground}
        alt="Background"
        layout="fill"               
        objectFit="cover"           
        quality={100}               
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-1"></div> 
      <div className="relative z-10 px-10 md:px-20">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Empowering the <br /> Homeless <br /> Community
        </h1>
        <p className="mt-4 text-lg md:text-2xl">
          Changing lives one care package at a time
        </p>
        <button className="mt-6 bg-blue-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300">
          Learn More
        </button>
      </div>
    </div>
    </section>
  );
}
