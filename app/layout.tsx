import type { Metadata } from "next";
import { DM_Sans, Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  subsets:["latin"],
  weight:["400","500","700"],
  variable:"--font-heading"
})

const dmSans = DM_Sans({
  subsets:["latin"],
  weight:["400","500","700"],
  variable:"--font-body"
})

export const metadata: Metadata = {
  title: "Tarun Guduru | Portfolio",
  description: "Software Developer @ FlyingFox Labs | MERN Stack Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
