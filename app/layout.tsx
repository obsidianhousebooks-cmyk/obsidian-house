import Script from "next/script"
import "./globals.css"

import type { Metadata } from "next"

import {
  AmbientAudioProvider
} from "@/components/cinematic/audio/AmbientAudioProvider"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: "Obsidian House",
  description:
    "Quiet literary fiction for emotionally observant readers.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (

    <html lang="en">

      <head>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0F2TKYDZ8G"
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'G-0F2TKYDZ8G');
          `}
        </Script>

      </head>

      <body className="bg-[#050505] text-[#f5efe6] antialiased">

        <AmbientAudioProvider>

          <Header />

          <main className="pt-[96px]">

            {children}

          </main>

          <Footer />

        </AmbientAudioProvider>

      </body>

    </html>

  )

}