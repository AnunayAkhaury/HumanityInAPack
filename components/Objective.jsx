import Image from 'next/image';
import circle from '../public/circle.png';  
import check from '../public/check.png';  
import square from '../public/square.png';  

export default function Objective() {
  return (
    <section id='objective' className="py-20 bg-white text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-blue-500 text-sm font-semibold uppercase tracking-wide mb-4">
          Services
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-10 text-gray-900">
          Our Approach
        </h3>
        <div className="flex flex-col md:flex-row justify-around items-center space-y-12 md:space-y-0">

          <div className="max-w-xs text-center">
            <div className="flex justify-center mb-4">
              <Image src={circle} alt="Care Package Distribution" width={64} height={64} />
            </div>
            <h4 className="text-xl font-bold mb-2 text-gray-900">Care Package Distribution</h4>
            <p className="text-gray-600">
              We are dedicated to distributing care packages to the homeless community in Reno, providing them with essential items to improve their quality of life.
            </p>
          </div>

          <div className="max-w-xs text-center">
            <div className="flex justify-center mb-4">
              <Image src={check} alt="Community Outreach" width={64} height={64} />
            </div>
            <h4 className="text-xl font-bold mb-2 text-gray-900">Community Outreach</h4>
            <p className="text-gray-600">
              We engage with local centers and organizations to understand the needs of the homeless community and ensure our assistance reaches those who need it the most.
            </p>
          </div>

          <div className="max-w-xs text-center">
            <div className="flex justify-center mb-4">
              <Image src={square} alt="Advocacy" width={64} height={64} />
            </div>
            <h4 className="text-xl font-bold mb-2 text-gray-900">Advocacy</h4>
            <p className="text-gray-600">
              Advocating for the rights and well-being of the homeless, we work towards creating a positive impact and raising awareness about homelessness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
