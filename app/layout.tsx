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

    <html lang="en" data-scroll-behavior="smooth">

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