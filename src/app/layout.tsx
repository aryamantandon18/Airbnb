import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import {Nunito} from 'next/font/google' 
import Modal from "./modals/Modal";
import RegisterModal from "./modals/RegisterModal";
import { AuthProvider } from "@/context/Auth.context";
import { ManagedUIContext } from "@/context/ui.context";

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
  title: "myAirbnb",
  description: "Airbnb Clone",
};

const font = Nunito({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${font.className } antialiased`}
      >
        <ManagedUIContext>
        <RegisterModal/>
        <Navbar/>
        <div className={`pt-32`}>
        {children}  
        </div>
        </ManagedUIContext>
      </body>
    </html>
  );
}
