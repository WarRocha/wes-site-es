import '../globals.css';
import NavbarEs from '../components/NavbarEs/index';
import FooterEs from '../components/FooterEs/index';

export const metadata = {
  title: 'Portugués para Hispanohablantes: Aprende de Forma Rápida y Eficaz',
  description: 'Eres hispanohablante y quieres aprender portugués? ¡Estás en el lugar correcto! Nuestro curso de Portugués para Hispanohablantes está diseñado especialmente para ti',
};

export default function LayoutEs({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
     
      </head>
      <body>
        <NavbarEs/>
          {children}
        <FooterEs/>
      </body>
    </html>
  );
}