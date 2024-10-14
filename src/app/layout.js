import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "@/components/jotaiProvider";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Blog",
  description: "Where you Can find about Paresh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
<Providers>
         <Navbar/>
        {children}
        <Footer/>
  </Providers> 

      </body>
    </html>
  );
}
