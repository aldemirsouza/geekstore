import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CartProvider } from '@/context/CartContext';
import { Toaster } from 'react-hot-toast';

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GeekStore",
  description: "A maior variedade de jogos, consoles e acessórios com os melhores preços do Brasil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} ${inter.variable} antialiased`}
      >
        <CartProvider>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              className: '',
              duration: 3000,
              style: {
                border: '1px solid #09235C',
                padding: '16px',
                color: '#09235C',
              },
            }}
          >
          </Toaster>
        </CartProvider>
      </body>
    </html>
  );
}
