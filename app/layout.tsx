import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Delia McHale",
  description: "Delia McHale's portfolio and personal site.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/lga6rvz.css"/>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
