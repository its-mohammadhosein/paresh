import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "@/components/jotaiProvider";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/Vazirmatn-FD-Thin.woff2",
  display: "swap",
});
const vazir = localFont({
  src: [
    { path: "./fonts/Vazirmatn-FD-Thin.woff2", weight: "100" },
    { path: "./fonts/Vazirmatn-FD-Light.woff2", weight: "200" },
    { path: "./fonts/Vazirmatn-FD-SemiBold.woff2", weight: "300" },
    { path: "./fonts/Vazirmatn-FD-Regular.woff2", weight: "400" },
    { path: "./fonts/Vazirmatn-FD-Medium.woff2", weight: "500" },
    { path: "./fonts/Vazirmatn-FD-ExtraBold.woff2", weight: "600" },
    { path: "./fonts/Vazirmatn-FD-Black.woff2", weight: "700" },
  ],
  variable: "--font-vazir",
  weight: "100 700",
  display: "swap",
});
const kahroba = localFont({
  src: "./fonts/Kahroba-VF-FD[wght,wdth,CNTR].woff2",
  variable: "--font-kahroba",
  weight: "100 700",
  display: "swap",
});

export const metadata = {
  title: "Blog",
  description: "Where you Can find about Paresh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${vazir.variable} ${kahroba.variable} font-vazir antialiased`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
