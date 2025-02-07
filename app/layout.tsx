import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';


export const metadata = {
  title: 'Aulas de espanhol online',
  description: 'Ofereço aulas de espanhol ao vivo e personalizadas, focadas nas suas necessidades',
  other: {
    'google-site-verification': 'ERieQYkIjOEuZmSNmGnu9Czz2y_3mo2boN5WvoqQEmY',
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
