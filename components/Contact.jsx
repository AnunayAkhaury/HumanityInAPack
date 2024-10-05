import React, { useRef, useState } from 'react';

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(''); 

    const formData = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      message: form.current.message.value,
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Email sent successfully!');
        form.current.reset();
      } else {
        setMessage('Failed to send email.');
      }
    } catch (error) {
      setMessage('Failed to send email.');
    }

    setIsSubmitting(false);
  };

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
            We would love to hear from you! Reach out to us to learn more about our initiatives, volunteer opportunities, and how you can support our cause.
          </p>
        </div>
        <div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-black"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-black"
                required
              />
            </div>
            <div className="mt-6">
              <textarea
                name="message"
                placeholder="Leave us a message..."
                className="border border-gray-300 rounded-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-black"
                rows="4"
                required
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg transition-transform transform hover:scale-105"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
            {message && (
              <div className={`mt-4 p-3 rounded-md ${message.includes('successfully') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
