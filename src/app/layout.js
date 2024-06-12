'use client'

import { Merriweather } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";
import { CartProvider } from "./_components/cartContext";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
});


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <title>Face Store الصفحة الرسمية</title>
        <meta name="description" content="your store" />
      </head>

      <body className={merriweather.className}>
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
