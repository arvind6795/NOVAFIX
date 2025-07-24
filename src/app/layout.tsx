import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import DarkModeProvider from '../components/DarkModeProvider';

const inter = Inter({ subsets: ['latin'], display: 'swap' }); // Optimize font display

export const metadata: Metadata = {
  title: 'NovaFix - Fast Device Repairs',
  description: 'On-site smartphone and laptop repairs within 60 minutes.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <DarkModeProvider>{children}</DarkModeProvider>
      </body>
    </html>
  );
}