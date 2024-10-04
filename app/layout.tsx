import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Head from "next/head";
// import Header from "@/components/Header";
// import Provider from "@/components/Provider";
// import { Session } from "inspector";
// import { auth } from "@/lib/auth";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Summit 2024 | JU E-Cell",
  description: "Jadavpur University Entrepreneurship Cell Welcomes you with the 4th edition of it's flagship event, the E-Summit, including a plethora of events, workshops, and competitions.",
  metadataBase: new URL('https://esummit.juecell.com'),
    keywords: ['esummit','juecell','esummit ju','ju esummit', 'esummit juecell','juecell esummit', 'entrepreneuship', 'ju','shark tank', 'pitching', 'case study','product marketing', 'fest', 'ju-ecell', 'technology', 'events', 'games', 'coding', 'esummit24', 'techfest', 'ai', 'management', 'jadavpur university', 'kolkata', 'puja', 'durga puja'],
    authors: [{ name: ' JU E-Cell', url: 'https://esummit.juecell.com' }],
    creator: ' JU E-Cell',
    publisher: ' JU E-Cell',
    openGraph: {
        title: "E-Summit 2024 | JU E-Cell",
        description: "Jadavpur University Entrepreneurship Cell Welcomes you with the 4th edition of it's flagship event, the E-Summit, including a plethora of events, workshops, and competitions.",
        url: 'https://esummit.juecell.com',
        siteName: "E-Summit 2024 | JU E-Cell",
        images: [
          {
            url: 'https://ibb.co/Lxd4Nm8', // Must be an absolute URL
            width: 1200,
            height: 640,
          },
        ],
        locale: 'en_US',
        type: 'website',
      }
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
      <Head>
    <meta
        name='description'
        content="Jadavpur University Entrepreneurship Cell Welcomes you with the 4th edition of it's flagship event, the E-Summit, including a plethora of events, workshops, and competitions."
    />
    <meta
        name='keywords'
        content=' E-Summit, entrepreneuship,esummit ju,ju esummit,esummit juecell,juecell esummit, ju,shark tank, pitching, case study,product marketing, fest, ju-ecell, technology, events, games, coding, esummit24, techfest, ai, management, jadavpur university,Kolkata, West Bengal,puja, durga puja'
    />
    <meta name='author' content='JU E-Cell' />

    <meta property='og:locale' content='en_US' />
    <meta property='og:type' content='article' />
    <meta
        property='og:title'
        content="E-Summit 2024 | JU E-Cell"
    />
    <meta
        property='og:description'
        content="Jadavpur University Entrepreneurship Cell Welcomes you with the 4th edition of it's flagship event, the E-Summit, including a plethora of events, workshops, and competitions."
    />
    <meta property='og:url' content='https://esummit.juecell.com' />
    <meta
        property='og:site_name'
        content="E-Summit 2024 | JU E-Cell"
    />
    <meta
        property="og:image"
        itemProp="image"
        content="/E-SummitSEO.png"
    />
    <link
        rel='shortcut icon'
        href='favicon.ico'
        type='image/x-icon'
    />
    <link rel='icon' type='image/x-icon' href='favicon.ico' />
     </Head>
      <body className={GeistSans.className}>
        {/* <Provider session={session}>
          <Header />
        </Provider> */}
        <main>{children}</main>
      </body>
    </html>
  );
}