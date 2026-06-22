"use client"

import * as React from "react"

import * as DialogPrimitive from "@radix-ui/react-dialog"

import { X } from "lucide-react"

import { cn } from "@/lib/utils"

/*
━━━━━━━━━━━━━━━━━━━
ROOT
━━━━━━━━━━━━━━━━━━━
*/

const Dialog =
  DialogPrimitive.Root

const DialogTrigger =
  DialogPrimitive.Trigger

const DialogPortal =
  DialogPrimitive.Portal

const DialogClose =
  DialogPrimitive.Close

/*
━━━━━━━━━━━━━━━━━━━
OVERLAY
━━━━━━━━━━━━━━━━━━━
*/

function DialogOverlay({

  className,

  ...props

}: React.ComponentProps<
  typeof DialogPrimitive.Overlay
>) {

  return (

    <DialogPrimitive.Overlay

      data-slot="dialog-overlay"

      className={cn(

        /*
        ━━━━━━━━━━━━━━━━━━━
        LAYOUT
        ━━━━━━━━━━━━━━━━━━━
        */

        "fixed inset-0 z-50",

        /*
        ━━━━━━━━━━━━━━━━━━━
        SURFACE
        ━━━━━━━━━━━━━━━━━━━
        */

        "bg-black/[0.16]",

        className

      )}

      {...props}

    />

  )

}

/*
━━━━━━━━━━━━━━━━━━━
CONTENT
━━━━━━━━━━━━━━━━━━━
*/

function DialogContent({

  className,

  children,

  ...props

}: React.ComponentProps<
  typeof DialogPrimitive.Content
>) {

  return (

    <DialogPortal>

      <DialogOverlay />

      <DialogPrimitive.Content

        data-slot="dialog-content"

        className={cn(

          /*
          ━━━━━━━━━━━━━━━━━━━
          LAYOUT
          ━━━━━━━━━━━━━━━━━━━
          */

          "fixed left-1/2 top-1/2 z-50",

          "w-full max-w-[760px]",

          "-translate-x-1/2 -translate-y-1/2",

          /*
          ━━━━━━━━━━━━━━━━━━━
          SURFACE
          ━━━━━━━━━━━━━━━━━━━
          */

          "bg-[#fdfcf9]",

          "border border-black/[0.08]",

          /*
          ━━━━━━━━━━━━━━━━━━━
          SPACING
          ━━━━━━━━━━━━━━━━━━━
          */

          "p-12",

          /*
          ━━━━━━━━━━━━━━━━━━━
          OUTLINE
          ━━━━━━━━━━━━━━━━━━━
          */

          "outline-none",

          className

        )}

        {...props}

      >

        {children}

        {/* CLOSE */}

        <DialogPrimitive.Close

          className={cn(

            /*
            ━━━━━━━━━━━━━━━━━━━
            LAYOUT
            ━━━━━━━━━━━━━━━━━━━
            */

            "absolute top-6 right-6",

            /*
            ━━━━━━━━━━━━━━━━━━━
            COLOR
            ━━━━━━━━━━━━━━━━━━━
            */

            "text-[#6f685f]",

            /*
            ━━━━━━━━━━━━━━━━━━━
            INTERACTION
            ━━━━━━━━━━━━━━━━━━━
            */

            "hover:text-[#111111]",

            /*
            ━━━━━━━━━━━━━━━━━━━
            ACCESSIBILITY
            ━━━━━━━━━━━━━━━━━━━
            */

            "outline-none"

          )}

        >

          <X className="w-4 h-4" />

        </DialogPrimitive.Close>

      </DialogPrimitive.Content>

    </DialogPortal>

  )

}

/*
━━━━━━━━━━━━━━━━━━━
HEADER
━━━━━━━━━━━━━━━━━━━
*/

function DialogHeader({

  className,

  ...props

}: React.HTMLAttributes<HTMLDivElement>) {

  return (

    <div

      data-slot="dialog-header"

      className={cn(

        "mb-10",

        className

      )}

      {...props}

    />

  )

}

/*
━━━━━━━━━━━━━━━━━━━
FOOTER
━━━━━━━━━━━━━━━━━━━
*/

function DialogFooter({

  className,

  ...props

}: React.HTMLAttributes<HTMLDivElement>) {

  return (

    <div

      data-slot="dialog-footer"

      className={cn(

        "mt-10 flex items-center gap-4",

        className

      )}

      {...props}

    />

  )

}

/*
━━━━━━━━━━━━━━━━━━━
TITLE
━━━━━━━━━━━━━━━━━━━
*/

function DialogTitle({

  className,

  ...props

}: React.ComponentProps<
  typeof DialogPrimitive.Title
>) {

  return (

    <DialogPrimitive.Title

      data-slot="dialog-title"

      className={cn(

        /*
        ━━━━━━━━━━━━━━━━━━━
        TYPOGRAPHY
        ━━━━━━━━━━━━━━━━━━━
        */

        "text-[2rem]",

        "leading-[1.05]",

        "tracking-[-0.04em]",

        "font-medium",

        /*
        ━━━━━━━━━━━━━━━━━━━
        COLOR
        ━━━━━━━━━━━━━━━━━━━
        */

        "text-[#111111]",

        className

      )}

      {...props}

    />

  )

}

/*
━━━━━━━━━━━━━━━━━━━
DESCRIPTION
━━━━━━━━━━━━━━━━━━━
*/

function DialogDescription({

  className,

  ...props

}: React.ComponentProps<
  typeof DialogPrimitive.Description
>) {

  return (

    <DialogPrimitive.Description

      data-slot="dialog-description"

      className={cn(

        /*
        ━━━━━━━━━━━━━━━━━━━
        SPACING
        ━━━━━━━━━━━━━━━━━━━
        */

        "mt-5",

        /*
        ━━━━━━━━━━━━━━━━━━━
        TYPOGRAPHY
        ━━━━━━━━━━━━━━━━━━━
        */

        "text-[1rem]",

        "leading-[1.9]",

        "tracking-[-0.01em]",

        /*
        ━━━━━━━━━━━━━━━━━━━
        COLOR
        ━━━━━━━━━━━━━━━━━━━
        */

        "text-[#5f5951]",

        className

      )}

      {...props}

    />

  )

}

export {

  Dialog,

  DialogPortal,

  DialogOverlay,

  DialogTrigger,

  DialogClose,

  DialogContent,

  DialogHeader,

  DialogFooter,

  DialogTitle,

  DialogDescription

}