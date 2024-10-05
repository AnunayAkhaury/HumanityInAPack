// app/donate/page.js
"use client";

import React, { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '@/components/CheckoutForm';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const DonatePage = () => {
  const [clientSecret, setClientSecret] = useState('');
  const [amount, setAmount] = useState(''); 
  const [isProcessing, setIsProcessing] = useState(false);

  const createPaymentIntent = async (donationAmount) => {
    setIsProcessing(true); 
    try {
      const res = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: donationAmount * 100 }), 
      });
      const data = await res.json();
      setClientSecret(data.clientSecret);
    } catch (error) {
      console.error('Error creating payment intent:', error);
    }
    setIsProcessing(false); 
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value); 

    if (value && parseFloat(value) > 0) {
      createPaymentIntent(value);
    }
  };

  useEffect(() => {
    createPaymentIntent(1);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Donate to Support Us</h1>
        <p className="text-center text-gray-600 mb-4">
          Your contributions make a difference! Thank you for your support.
        </p>

        <div className="mb-6">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
            Enter Donation Amount (USD)
          </label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={handleAmountChange}
            className="mt-1 p-3 border border-gray-300 rounded-md w-full text-gray-900 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
            placeholder="Enter amount (min: 1)"
            min="1"
            step="0.01" 
          />
        </div>

        {isProcessing && (
          <div className="text-blue-600 text-center mb-4">Processing...</div>
        )}

        {clientSecret && (
          <div className="mt-6">
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <CheckoutForm />
            </Elements>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonatePage;
