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
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/png"
          sizes="32x32"
        />
      </Head>
      <body className={` bg-bg ${inter.className} dark overflow-hidden`}>
        <Providers>
          <Animators>{children}</Animators>
        </Providers>
      </body>
    </html>
  );
}
