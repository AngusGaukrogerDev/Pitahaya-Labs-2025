import type { Metadata } from "next";
import "./globals.css";
import PrivacyBanner from "./components/PrivacyBanner";

export const metadata: Metadata = {
  title: "Pitahaya Labs",
  description: "Empowering businesses with innovative software solutions",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
  },
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
