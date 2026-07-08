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
      style={{
        background: "#8f7a58",
        color: "#050505",
        padding: "12px 24px",
        border: "none",
        cursor: "pointer"
      }}
    >
      {children}
    </button>
  )
}