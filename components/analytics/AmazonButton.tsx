"use client"

import React from "react"

interface AmazonButtonProps {
  book: string
  format: "kindle" | "paperback" | "author_page"
  source:
    | "home"
    | "books"
    | "book"
    | "sample"
    | "author"
    | "journal"
    | "about"
  url: string
  children: React.ReactNode
  className?: string
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export default function AmazonButton({
  book,
  format,
  source,
  url,
  children,
  className = ""
}: AmazonButtonProps) {

  const handleClick = () => {

    window.gtag?.(
      "event",
      "amazon_click",
      {
        book,
        format,
        source
      }
    )

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    )
  }

  return (
    <button
      onClick={handleClick}
      className={`
        px-6
        py-3
        bg-[#8f7a58]
        text-[#050505]
        hover:opacity-90
        transition
        ${className}
      `}
    >
      {children}
    </button>
  )
}