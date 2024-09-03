import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <section id='contact' className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

        <div>
          <h2 className="text-blue-500 text-sm font-semibold uppercase tracking-wide mb-4">
            Contact Us
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h3>
          <p className="text-gray-600 mb-6">
            We'd love to hear from you! Reach out to us to learn more about our initiatives, volunteer opportunities, and how you can support our cause.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FontAwesomeIcon icon={faTiktok} size="2x" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
          </div>
        </div>
        <div>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              />
            </div>
            <div className="mt-6">
              <input
                type="text"
                placeholder="Your Message *"
                className="border border-gray-300 rounded-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              />
            </div>
            <div className="mt-6">
              <textarea
                placeholder="Leave us a message..."
                className="border border-gray-300 rounded-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                rows="4"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg transition-transform transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
