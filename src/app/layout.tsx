import React from 'react';
import type { Metadata } from 'next';
// eslint-disable-next-line camelcase
import { Roboto_Mono } from 'next/font/google';

import './global.css';
import 'ui-kit-conf/dist/variables.css';
import 'ui-kit-conf/dist/index.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Providers } from './providers';

const robotoMono = Roboto_Mono({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Конверенции IT',
  description: 'Самые большой портал всех it конференций',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
