"use client"

import {
    motion
} from "framer-motion"

interface FloatingQuoteProps {

    quote: string

    top?: string

    left?: string

    delay?: number

}

export default function FloatingQuote({

    quote,

    top = "20%",

    left = "10%",

    delay = 0

}: FloatingQuoteProps) {

    return (

        <motion.div

            initial={{

                opacity: 0,
                y: 30,
                filter: "blur(14px)"

            }}

            whileInView={{

                opacity: 0.16,
                y: 0,
                filter: "blur(0px)"

            }}

            viewport={{

                once: true,
                amount: 0.4

            }}

            transition={{

                duration: 2.4,
                delay,

                ease: [
                    0.22,
                    1,
                    0.36,
                    1
                ]

            }}

            style={{

                top,
                left

            }}

            className="
                absolute
                z-[1]

                hidden
                xl:block

                max-w-[320px]

                pointer-events-none
            "
        >

            <motion.div

                animate={{

                    y: [
                        0,
                        -12,
                        0
                    ]

                }}

                transition={{

                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"

                }}

                className="
                    font-serif

                    italic

                    text-[26px]

                    leading-[1.5]

                    tracking-[-0.03em]

                    text-[#f3e6d2]

                    opacity-20

                    drop-shadow-[0_0_25px_rgba(255,220,170,0.08)]
                "
            >

                “{quote}”

            </motion.div>

        </motion.div>

    )

}