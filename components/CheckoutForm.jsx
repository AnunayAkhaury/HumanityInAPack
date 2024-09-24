// components/CheckoutForm.jsx
import React, { useState } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    setLoading(true);
    setErrorMessage(''); // Clear any previous error messages

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    // Use stripe.confirmPayment to handle the payment submission
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Return URL after payment confirmation (adjust this to your success page)
        return_url: 'https://humanity-in-a-pack-lcjtzolvd-anunayakhaurys-projects.vercel.app',
      },
    });

    if (error) {
      // Show error to your customer
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement />
      {errorMessage && <div className="text-red-600 text-sm mt-2">{errorMessage}</div>}
      <button
        type="submit"
        disabled={!stripe || loading}
        className={`w-full py-3 mt-4 text-white rounded-md ${
          loading
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300'
        }`}
      >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
};

export default CheckoutForm;
