import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E Summit-24 || JU",
  description: "Jadavpur University Entrepreneurship Cell Welcomes you with the 9th edition of it's flagship event, the E-Summit",
};
// Not Wrapping Next-Auth Here Until most of the job is done
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
