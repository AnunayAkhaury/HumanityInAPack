# Humanity in a Pack

Single-page Next.js application for the non-profit organization HumanityInAPack, featuring Stripe integration for donations and Resend email integration for communication.


## API Reference

#### Send Email

```http
  POST /api/send-email
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `user_name` | `string` | **Required**. Name of the user |
| `user_email` | `string` | **Required**. Email of user |
| `message` | `string` | **Required**. Message Content |

#### Stripe Payment

```http
 POST /api/create-payment-intent
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `amount`      | `int` | **Required**. Amount to charge |

#### Creates a payment intent using Stripe API.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`

`STRIPE_SECRET_KEY`

`RESEND_API_KEY`

## Tech Stack

**Client:** React, TailwindCSS

**Server:** Next.js
