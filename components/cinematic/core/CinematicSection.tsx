"use client"

import {
    motion
} from "framer-motion"

import {
    ReactNode
} from "react"

interface CinematicSectionProps {

    children: ReactNode

    delay?: number

    y?: number

}

export default function CinematicSection({

    children,

    delay = 0,

    y = 40

}: CinematicSectionProps) {

    return (

        <motion.div

            initial={{

                opacity: 0,
                y,
                scale: 1.015,
                filter:
                    "blur(12px)"

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
                amount: 0.12

            }}

            transition={{

                duration: 1.5,

                delay,

                ease: [
                    0.16,
                    1,
                    0.3,
                    1
                ]

            }}

            className="
                will-change-transform
            "
        >

            {children}

        </motion.div>

    )

}

