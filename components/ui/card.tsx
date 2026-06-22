import * as React from "react"

import { cn } from "@/lib/utils"

/*
━━━━━━━━━━━━━━━━━━━
CARD
━━━━━━━━━━━━━━━━━━━
*/

function Card({

    className,

    ...props

}: React.HTMLAttributes<HTMLDivElement>) {

    return (

        <div

            data-slot="card"

            className={cn(

                /*
                ━━━━━━━━━━━━━━━━━━━
                SURFACE
                ━━━━━━━━━━━━━━━━━━━
                */

                "bg-[#fdfcf9]",

                "border border-black/[0.06]",

                /*
                ━━━━━━━━━━━━━━━━━━━
                LAYOUT
                ━━━━━━━━━━━━━━━━━━━
                */

                "w-full",

                /*
                ━━━━━━━━━━━━━━━━━━━
                SPACING
                ━━━━━━━━━━━━━━━━━━━
                */

                "p-10",

                className

            )}

            {...props}

        />

    )

}

/*
━━━━━━━━━━━━━━━━━━━
CARD HEADER
━━━━━━━━━━━━━━━━━━━
*/

function CardHeader({

    className,

    ...props

}: React.HTMLAttributes<HTMLDivElement>) {

    return (

        <div

            data-slot="card-header"

            className={cn(

                /*
                ━━━━━━━━━━━━━━━━━━━
                SPACING
                ━━━━━━━━━━━━━━━━━━━
                */

                "mb-10",

                className

            )}

            {...props}

        />

    )

}

/*
━━━━━━━━━━━━━━━━━━━
CARD TITLE
━━━━━━━━━━━━━━━━━━━
*/

function CardTitle({

    className,

    ...props

}: React.HTMLAttributes<HTMLHeadingElement>) {

    return (

        <h3

            data-slot="card-title"

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
CARD DESCRIPTION
━━━━━━━━━━━━━━━━━━━
*/

function CardDescription({

    className,

    ...props

}: React.HTMLAttributes<HTMLParagraphElement>) {

    return (

        <p

            data-slot="card-description"

            className={cn(

                /*
                ━━━━━━━━━━━━━━━━━━━
                TYPOGRAPHY
                ━━━━━━━━━━━━━━━━━━━
                */

                "mt-5",

                "text-[1.02rem]",

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

/*
━━━━━━━━━━━━━━━━━━━
CARD CONTENT
━━━━━━━━━━━━━━━━━━━
*/

function CardContent({

    className,

    ...props

}: React.HTMLAttributes<HTMLDivElement>) {

    return (

        <div

            data-slot="card-content"

            className={cn(

                className

            )}

            {...props}

        />

    )

}

/*
━━━━━━━━━━━━━━━━━━━
CARD FOOTER
━━━━━━━━━━━━━━━━━━━
*/

function CardFooter({

    className,

    ...props

}: React.HTMLAttributes<HTMLDivElement>) {

    return (

        <div

            data-slot="card-footer"

            className={cn(

                /*
                ━━━━━━━━━━━━━━━━━━━
                SPACING
                ━━━━━━━━━━━━━━━━━━━
                */

                "mt-10",

                /*
                ━━━━━━━━━━━━━━━━━━━
                LAYOUT
                ━━━━━━━━━━━━━━━━━━━
                */

                "flex items-center gap-4",

                className

            )}

            {...props}

        />

    )

}

export {

    Card,

    CardHeader,

    CardFooter,

    CardTitle,

    CardDescription,

    CardContent

}