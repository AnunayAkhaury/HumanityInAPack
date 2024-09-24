// app/layout.js
import './globals.css';

export const metadata = {
  title: 'My App',
  description: 'App description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}  {/* No Stripe elements here, only global structure */}
      </body>
    </html>
  );
}
