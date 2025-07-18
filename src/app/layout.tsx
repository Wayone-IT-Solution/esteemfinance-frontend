import type { Metadata } from "next";
import {
  Alexandria,
  Cabin,
  Fustat,
  Plus_Jakarta_Sans,
  Poppins,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import OpenHour from "@/components/common/OpenHour";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cabin",
});

export const fustat = Fustat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fustat",
});

export const alexandria = Alexandria({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-alexandria",
});

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "ESTEEM FINANCE",
  description: "ESTEEM FINANCE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="WAJd0F2OJfgCfSUitRlrSH3rC8z1m-AjC4XVPLlN5JQ"
        />

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WKXNL2GK');
          `}
        </Script>
        {/* End Google Tag Manager */}

        {/* Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17057891149"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-2" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17057891149');
          `}
        </Script>
      </head>

      <body
        className={`${poppins.variable} ${alexandria.variable} ${fustat.variable} ${cabin.variable} ${plusJakartaSans.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WKXNL2GK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <div id="modal-root"></div>

        <Navbar />
        {children}
        <OpenHour />
        <ToastContainer
          rtl={false}
          autoClose={2000}
          newestOnTop={true}
          position="top-right"
          hideProgressBar={false}
          className={"z-[99999]"}
        />
        <Footer />
      </body>
    </html>
  );
}
