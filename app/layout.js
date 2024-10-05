import './globals.css';

export const metadata = {
  title: 'Humanity in a Pack',
  description: 'Humanity in a Pack',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}  
      </body>
    </html>
  );
}
