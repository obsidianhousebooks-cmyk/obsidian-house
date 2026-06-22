"use client"

import {
    motion
} from "framer-motion"

interface QuoteBlockProps {

    children: React.ReactNode

}

export default function QuoteBlock({

    children

}: QuoteBlockProps) {

    return (

        <motion.blockquote

            initial={{

                opacity: 0,
                y: 50,
                scale: 1.02,
                filter:
                    "blur(16px)"

            }}

            whileInView={{

                opacity: 1,
                y: 0,
                scale: 1,
                filter:
                    "blur(0px)"

            }}

            viewport={{

                once: true,
                amount: 0.35

            }}

            transition={{

                duration: 1.6,

                ease: [
                    0.22,
                    1,
                    0.36,
                    1
                ]

            }}

            className="
                relative

                my-40

                px-8
                md:px-20

                max-w-5xl
                mx-auto

                will-change-transform
            "
        >

            {/* LIGHT LINE */}

            <div
                className="
                    absolute
                    left-0
                    top-0
                    bottom-0

                    w-px

                    bg-gradient-to-b
                    from-transparent
                    via-[#b89565]
                    to-transparent
                "
            />

            {/* TEXT */}

            <div
                className="
                    font-serif

                    text-[clamp(2.8rem,5vw,5.8rem)]

                    leading-[1.08]

                    tracking-[-0.05em]

                    text-[#efe7dc]

                    italic

                    drop-shadow-[0_0_40px_rgba(184,149,101,0.09)]
                "
            >

                {children}

            </div>

        </motion.blockquote>

    )

}

