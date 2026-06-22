import * as React from "react"

import { cn } from "@/lib/utils"

interface InputProps
  extends React.ComponentProps<"input"> {

  label?: string

}

/*
━━━━━━━━━━━━━━━━━━━
INPUT
━━━━━━━━━━━━━━━━━━━
*/

function Input({

  className,

  type,

  label,

  ...props

}: InputProps) {

  return (

    <div className="w-full">

      {/* LABEL */}

      {

        label && (

          <label

            className={cn(

              /*
              ━━━━━━━━━━━━━━━━━━━
              TYPOGRAPHY
              ━━━━━━━━━━━━━━━━━━━
              */

              "block",

              "mb-4",

              "text-[0.72rem]",

              "uppercase",

              "tracking-[0.18em]",

              "font-medium",

              /*
              ━━━━━━━━━━━━━━━━━━━
              COLOR
              ━━━━━━━━━━━━━━━━━━━
              */

              "text-[#6f685f]"

            )}

          >

            {label}

          </label>

        )

      }

      {/* INPUT */}

      <input

        type={type}

        data-slot="input"

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
          SIZE
          ━━━━━━━━━━━━━━━━━━━
          */

          "h-[64px]",

          /*
          ━━━━━━━━━━━━━━━━━━━
          SPACING
          ━━━━━━━━━━━━━━━━━━━
          */

          "px-6",

          /*
          ━━━━━━━━━━━━━━━━━━━
          SURFACE
          ━━━━━━━━━━━━━━━━━━━
          */

          "bg-[#fdfcf9]",

          "border border-black/[0.08]",

          /*
          ━━━━━━━━━━━━━━━━━━━
          TYPOGRAPHY
          ━━━━━━━━━━━━━━━━━━━
          */

          "text-[1rem]",

          "leading-[1.7]",

          "tracking-[-0.01em]",

          "font-normal",

          "text-[#111111]",

          "placeholder:text-[#938b82]",

          /*
          ━━━━━━━━━━━━━━━━━━━
          TRANSITIONS
          ━━━━━━━━━━━━━━━━━━━
          */

          "transition-colors duration-200",

          /*
          ━━━━━━━━━━━━━━━━━━━
          FOCUS
          ━━━━━━━━━━━━━━━━━━━
          */

          "focus:border-black/[0.18]",

          /*
          ━━━━━━━━━━━━━━━━━━━
          DISABLED
          ━━━━━━━━━━━━━━━━━━━
          */

          "disabled:pointer-events-none",

          "disabled:opacity-40",

          /*
          ━━━━━━━━━━━━━━━━━━━
          FILE INPUT
          ━━━━━━━━━━━━━━━━━━━
          */

          "file:border-0",

          "file:bg-transparent",

          "file:text-sm",

          className

        )}

        {...props}

      />

    </div>

  )

}

export { Input }