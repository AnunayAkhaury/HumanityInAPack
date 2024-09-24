
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { amount } = await req.json(); 

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, 
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
    });

    // Send the clientSecret to the frontend
    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
