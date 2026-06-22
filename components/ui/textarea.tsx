import * as React from "react"

import {

  cn

} from "@/lib/systems/utils"

/*
━━━━━━━━━━━━━━━━━━━
EDITORIAL TEXTAREA
━━━━━━━━━━━━━━━━━━━
*/

export interface TextareaProps

  extends

  React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

/*
━━━━━━━━━━━━━━━━━━━
COMPONENT
━━━━━━━━━━━━━━━━━━━
*/

const Textarea = React.forwardRef<

  HTMLTextAreaElement,

  TextareaProps

>(

  (

    {

      className,

      ...props

    },

    ref

  ) => {

    return (

      <textarea

        ref={ref}

        className={cn(

          `
                    w-full

                    bg-transparent

                    border-none
                    outline-none
                    ring-0

                    resize-none

                    text-[#1b1b1b]

                    placeholder:text-[#9a9288]

                    font-light

                    text-[1.08rem]

                    leading-[2.1]

                    tracking-[-0.01em]

                    antialiased

                    selection:bg-black
                    selection:text-white

                    transition-all
                    duration-500
                    `,

          className

        )}

        {...props}

      />

    )

  }

)

Textarea.displayName =
  "Textarea"

export {

  Textarea

}