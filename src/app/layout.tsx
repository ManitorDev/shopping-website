import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Head from "next/head";
import { Header } from "@/components/header";
import "animate.css";
import Footer from "@/components/footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "FASHION | Shopping Website",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="images/vector.png" type="image/png" />
      </Head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
      <Script
        src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
        crossOrigin=""
      ></Script>

      <Script
        src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
        crossOrigin=""
      ></Script>

      <Script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin=""
      ></Script>
    </html>
  );
}
