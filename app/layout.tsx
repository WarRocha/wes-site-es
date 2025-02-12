import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';


export const metadata = {
  title: 'Aulas de espanhol online',
  description: 'Ofereço aulas de espanhol ao vivo e personalizadas, focadas nas suas necessidades',
  other: {
    'google-site-verification': 'AszpHctdDA5TCxs-Wfcl58cIZ9lNEkLKSoOWH3OB-KU',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="br">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
