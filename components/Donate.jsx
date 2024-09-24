"use client";
import React from 'react';
import Link from 'next/link';

const DonateButton = () => {
  return (
    <>
      <Link href="/Donate">
        <button
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            padding: '15px 20px',
            cursor: 'pointer',
            zIndex: 1000,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
        >
          Donate
        </button>
      </Link>
    </>
  );
};

export default DonateButton;
