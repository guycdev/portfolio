import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Animators from "./animators";
import { Metadata } from "next";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "guy.dev",
  description: "Your friendly neighbourhood software engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Favicon for most browsers */}
        <link rel="icon" href="/favicon.ico" />

        {/* Favicon for iOS and Android */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        {/* Manifest for web app information */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Safari pinned tab icon */}
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body
        className={`h-screen bg-bg ${inter.className} dark overflow-hidden`}
      >
        <Animators>
          <Providers>{children}</Providers>
        </Animators>
      </body>
    </html>
  );
}
