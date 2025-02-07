import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer-1";

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

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="">
          <div className="sticky top-0 bg-[#F7F7F7]">
        <Header />
        </div>
        <div className="">
        <Hero />
        </div>
        <div className="sticky top-0 bg-[#F7F7F7]">
        <Footer/>
        </div>
        </div>
        {children}
      </body>
    </html>
  );
}
