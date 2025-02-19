import type { Metadata } from "next";
import "./globals.css";
import PrivacyBanner from "./components/PrivacyBanner";

export const metadata: Metadata = {
  title: "Pitahaya Labs",
  description: "Empowering businesses with innovative software solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-poppins antialiased">
        {children}
        <PrivacyBanner />
      </body>
    </html>
  );
}
