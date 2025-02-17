import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import Script from 'next/script'; // Import the Script component

export const metadata = {
  title: 'Aulas de espanhol online',
  description: 'Ofereço aulas de espanhol ao vivo e personalizadas, focadas nas suas necessidades',
  other: {
    'google-site-verification': 'AszpHctdDA5TCxs-Wfcl58cIZ9lNEkLKSoOWH3OB-KU',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Add the Google Analytics script */}
        <Script
          strategy="afterInteractive" // Load the script after the page becomes interactive
          src="https://www.googletagmanager.com/gtag/js?id=G-SPBFT274SL"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-SPBFT274SL');
          `}
        </Script>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}