import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pitahaya Labs",
  description: "Pitahaya Labs - Building the future of technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins antialiased">
        {children}
      </body>
    </html>
  );
}
