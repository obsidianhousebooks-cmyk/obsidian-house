import * as React from "react"

import {

  Slot

} from "@radix-ui/react-slot"

import {

  cva,

  type VariantProps

} from "class-variance-authority"

import {

  cn

} from "@/lib/systems/utils"

/*
━━━━━━━━━━━━━━━━━━━
EDITORIAL BUTTONS
━━━━━━━━━━━━━━━━━━━
*/

const buttonVariants = cva(

  `
    inline-flex
    items-center
    justify-center
    whitespace-nowrap

    transition-all
    duration-500

    disabled:pointer-events-none
    disabled:opacity-40

    uppercase
    tracking-[0.18em]

    text-[11px]

    border

    select-none
    `,

  {

    variants: {

      variant: {

        /*
        ━━━━━━━━━━━━━━━━━━━
        PRIMARY
        ━━━━━━━━━━━━━━━━━━━
        */

        default:

          `
                    bg-[#1b1b1b]
                    text-[#f5f1ea]

                    border-black/[0.08]

                    hover:bg-black
                    hover:text-white
                    `,

        /*
        ━━━━━━━━━━━━━━━━━━━
        SECONDARY
        ━━━━━━━━━━━━━━━━━━━
        */

        secondary:

          `
                    bg-[#ece6dc]

                    text-[#1b1b1b]

                    border-black/[0.06]

                    hover:bg-[#e4ddd2]
                    `,

        /*
        ━━━━━━━━━━━━━━━━━━━
        OUTLINE
        ━━━━━━━━━━━━━━━━━━━
        */

        outline:

          `
                    bg-transparent

                    text-[#1b1b1b]

                    border-black/[0.12]

                    hover:bg-black/[0.03]
                    `

      },

      size: {

        default:

          `
                    h-[54px]
                    px-8
                    `,

        lg:

          `
                    h-[58px]
                    px-10
                    `

      }

    },

    defaultVariants: {

      variant:
        "default",

      size:
        "default"

    }

  }

)

/*
━━━━━━━━━━━━━━━━━━━
PROPS
━━━━━━━━━━━━━━━━━━━
*/

export interface ButtonProps

  extends

  React.ButtonHTMLAttributes<HTMLButtonElement>,

  VariantProps<typeof buttonVariants> {

  asChild?: boolean

}

/*
━━━━━━━━━━━━━━━━━━━
COMPONENT
━━━━━━━━━━━━━━━━━━━
*/

const Button = React.forwardRef<

  HTMLButtonElement,

  ButtonProps

>(

  (

    {

      className,

      variant,

      size,

      asChild = false,

      ...props

    },

    ref

  ) => {

    const Comp =

      asChild

        ? Slot

        : "button"

    return (

      <Comp

        className={cn(

          buttonVariants({

            variant,
            size

          }),

          className

        )}

        ref={ref}

        {...props}

      />

    )

  }

)

Button.displayName =
  "Button"

export {

  Button,

  buttonVariants

}