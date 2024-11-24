import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer"
import Header from "./components/Header"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Antima Portfolio",
  description: "I am antima singh a full stack software developer. I have 3 years of software developer exerience using react, nextjs, tailwind css, etc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="OoCHzNX3CgrX_IOMJEdLVLzJLw1qRVD2ABfp84DJ5FE" />
      </head>
      <body className={inter.className}>
        {/* <Header/> */}
        {children}
        {/* <Footer/> */}
        </body>
    </html>
  );
}
