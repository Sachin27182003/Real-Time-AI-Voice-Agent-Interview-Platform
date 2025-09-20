import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";

const MonaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrepWise",
  description: "An AI Powered platform for preparing for mock interview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${MonaSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
