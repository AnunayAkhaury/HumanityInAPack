import Image from 'next/image';
import homelessPerson from '../public/grey.png';  

export default function About() {
  return (
    <section id='about' className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-10">
          <h2 className="text-blue-500 text-sm font-semibold uppercase tracking-wide mb-4">
            About
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Mission
          </h3>
          <p className="text-gray-600 mb-4">
            At “Humanity in a Pack”, our mission is to aid and support the homeless community in the Reno-Sparks area through distributing handmade care packages containing essential items that promote the well-being and sanitation of individuals in need.
          </p>
          <p className="text-gray-600">
            Through our efforts, we strive to make a positive impact on the lives of those who are often overlooked, creating a sense of hope and humanity in every pack we distribute.
          </p>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <Image src={homelessPerson} alt="Homeless person" className="object-cover w-full h-full" />
        </div>
      </div>
    </section>
  );
}
