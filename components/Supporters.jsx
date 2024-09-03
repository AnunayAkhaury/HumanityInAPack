import Image from 'next/image';
import chaLogo from '../public/community.png';  
import rsgmLogo from '../public/renogospel.png';  

export default function Supporters() {
  return (
    <section id='supporters' className="bg-gray-100 py-16 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-gray-800 text-sm font-semibold uppercase tracking-wide mb-12">
          Our Supporters
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="w-64">
            <Image src={chaLogo} alt="Community Health Alliance" layout="responsive" />
          </div>
          <div className="w-64">
            <Image src={rsgmLogo} alt="Reno-Sparks Gospel Mission" layout="responsive" />
          </div>
        </div>
      </div>
    </section>
  );
}
