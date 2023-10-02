import "./globals.css";
import type { Metadata } from "next";
import { Alatsi, Inter } from "next/font/google";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const alatsi = Alatsi({
  subsets: ["latin"],
  variable: "--font-alatsi",
  weight: "400",
});

export const metadata: Metadata = {
  title: "JaguarBox",
  description: "Need to save and safe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={alatsi.className}>
        <Navbar /> {children} <Footer />
      </body>
    </html>
  );
}
