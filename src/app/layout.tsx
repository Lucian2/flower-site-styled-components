import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './_components/styled/Global';
import StyledComponentsRegistry from './_lib/registry';
import { lora } from './_fonts/fonts';
import { Header } from './_components/header/Header';
import { Footer } from './_components/footer/Footer';

export const metadata: Metadata = {
  title: 'Flora Flowers',
  description: 'Discover elegance at Flora Flowers',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <StyledComponentsRegistry>
        <GlobalStyle />
        <body className={lora.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
