// app/donate/page.js
"use client";

import React, { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '@/components/CheckoutForm';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const DonatePage = () => {
  const [clientSecret, setClientSecret] = useState('');
  const [amount, setAmount] = useState(''); // Start with an empty input field
  const [isProcessing, setIsProcessing] = useState(false);

  // Function to create a payment intent
  const createPaymentIntent = async (donationAmount) => {
    setIsProcessing(true); // Show loading state
    try {
      const res = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: donationAmount * 100 }), // Convert to cents for Stripe
      });
      const data = await res.json();
      setClientSecret(data.clientSecret);
    } catch (error) {
      console.error('Error creating payment intent:', error);
    }
    setIsProcessing(false); // Stop loading state
  };

  // Update the payment intent whenever the user changes the amount
  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value); // Set the amount in dollars

    // Only create a payment intent if a valid number is entered
    if (value && parseFloat(value) > 0) {
      createPaymentIntent(value);
    }
  };

  useEffect(() => {
    // Set a default payment intent with 1 USD as soon as the page loads
    createPaymentIntent(1);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Donate to Support Us</h1>
        <p className="text-center text-gray-600 mb-4">
          Your contributions make a difference! Thank you for your support.
        </p>

        {/* Donation amount input */}
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
            step="0.01" // Allow decimal values like 1.50
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
