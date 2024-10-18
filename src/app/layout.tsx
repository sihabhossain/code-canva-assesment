import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeCanva",
  description: "Created by sihab hossain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#000811]">{children}</body>
    </html>
  );
}
