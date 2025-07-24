import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shivam Tiles - Premium Tiles & Sanitary Products",
  description: "Discover premium tiles and sanitary products at Shivam Tiles. Quality materials, beautiful designs, and exceptional service.",
  keywords: "tiles, sanitary products, marble tiles, granite tiles, bathroom tiles, kitchen tiles, flooring",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  );
}
