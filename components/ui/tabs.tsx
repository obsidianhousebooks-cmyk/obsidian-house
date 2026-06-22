"use client"

import * as React from "react"

import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

/*
━━━━━━━━━━━━━━━━━━━
ROOT
━━━━━━━━━━━━━━━━━━━
*/

function Tabs({

  className,

  orientation = "horizontal",

  ...props

}: React.ComponentProps<
  typeof TabsPrimitive.Root
>) {

  return (

    <TabsPrimitive.Root

      data-slot="tabs"

      data-orientation={orientation}

      className={cn(

        /*
        ━━━━━━━━━━━━━━━━━━━
        LAYOUT
        ━━━━━━━━━━━━━━━━━━━
        */

        "w-full",

        "flex gap-10",

        "data-[orientation=horizontal]:flex-col",

        "data-[orientation=vertical]:flex-row",

        className

      )}

      {...props}

    />

  )

}

/*
━━━━━━━━━━━━━━━━━━━
LIST
━━━━━━━━━━━━━━━━━━━
*/

function TabsList({

  className,

  ...props

}: React.ComponentProps<
  typeof TabsPrimitive.List
>) {

  return (

    <TabsPrimitive.List

      data-slot="tabs-list"

      className={cn(

        /*
        ━━━━━━━━━━━━━━━━━━━
        LAYOUT
        ━━━━━━━━━━━━━━━━━━━
        */

        "flex items-center gap-8",

        /*
        ━━━━━━━━━━━━━━━━━━━
        SPACING
        ━━━━━━━━━━━━━━━━━━━
        */

        "pb-6",

        /*
        ━━━━━━━━━━━━━━━━━━━
        BORDER
        ━━━━━━━━━━━━━━━━━━━
        */

        "border-b border-black/[0.08]",

        className

      )}

      {...props}

    />

  )

}

/*
━━━━━━━━━━━━━━━━━━━
TRIGGER
━━━━━━━━━━━━━━━━━━━
*/

function TabsTrigger({

  className,

  children,

  ...props

}: React.ComponentProps<
  typeof TabsPrimitive.Trigger
>) {

  return (

    <TabsPrimitive.Trigger

      data-slot="tabs-trigger"

      className={cn(

        /*
        ━━━━━━━━━━━━━━━━━━━
        TYPOGRAPHY
        ━━━━━━━━━━━━━━━━━━━
        */

        "uppercase",

        "tracking-[0.16em]",

        "text-[0.72rem]",

        "font-medium",

        /*
        ━━━━━━━━━━━━━━━━━━━
        COLOR
        ━━━━━━━━━━━━━━━━━━━
        */

        "text-[#756d64]",

        /*
        ━━━━━━━━━━━━━━━━━━━
        SPACING
        ━━━━━━━━━━━━━━━━━━━
        */

        "pb-3",

        /*
        ━━━━━━━━━━━━━━━━━━━
        INTERACTION
        ━━━━━━━━━━━━━━━━━━━
        */

        "transition-colors duration-200",

        "hover:text-[#111111]",

        /*
        ━━━━━━━━━━━━━━━━━━━
        ACTIVE
        ━━━━━━━━━━━━━━━━━━━
        */

        "data-[state=active]:text-[#111111]",

        "data-[state=active]:border-b",

        "data-[state=active]:border-black",

        /*
        ━━━━━━━━━━━━━━━━━━━
        ACCESSIBILITY
        ━━━━━━━━━━━━━━━━━━━
        */

        "outline-none",

        className

      )}

      {...props}

    >

      {children}

    </TabsPrimitive.Trigger>

  )

}

/*
━━━━━━━━━━━━━━━━━━━
CONTENT
━━━━━━━━━━━━━━━━━━━
*/

function TabsContent({

  className,

  ...props

}: React.ComponentProps<
  typeof TabsPrimitive.Content
>) {

  return (

    <TabsPrimitive.Content

      data-slot="tabs-content"

      className={cn(

        /*
        ━━━━━━━━━━━━━━━━━━━
        LAYOUT
        ━━━━━━━━━━━━━━━━━━━
        */

        "w-full",

        "outline-none",

        /*
        ━━━━━━━━━━━━━━━━━━━
        SPACING
        ━━━━━━━━━━━━━━━━━━━
        */

        "pt-8",

        className

      )}

      {...props}

    />

  )

}

export {

  Tabs,

  TabsList,

  TabsTrigger,

  TabsContent

}