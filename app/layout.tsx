import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
// import Header from "@/components/Header";
// import Provider from "@/components/Provider";
// import { Session } from "inspector";
// import { auth } from "@/lib/auth";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Summit 2024 | JU E-Cell",
  description: "Jadavpur University Entrepreneurship Cell Welcomes you with the 4th edition of it's flagship event, the E-Summit, including a plethora of events, workshops, and competitions.",
};
// Not Wrapping Next-Auth Here Until most of the job is done
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const session = await auth();

  return (
    <html lang="en">
      <body className={GeistSans.className}>
        {/* <Provider session={session}>
          <Header />
        </Provider> */}
        <main>{children}</main>
      </body>
    </html>
  );
}
