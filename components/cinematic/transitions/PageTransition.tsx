"use client"

import {
    AnimatePresence,
    motion
} from "framer-motion"

import {
    usePathname
} from "next/navigation"

import {
    ReactNode
} from "react"

interface PageTransitionProps {

    children: ReactNode

}

export default function PageTransition({

    children

}: PageTransitionProps) {

    const pathname =
        usePathname()

    return (

        <AnimatePresence
            mode="wait"
        >

            <motion.div

                key={pathname}

                initial={{

                    opacity: 0,
                    y: 26,
                    scale: 1.01,
                    filter:
                        "blur(14px)"

                }}

                animate={{

                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter:
                        "blur(0px)"

                }}

                exit={{

                    opacity: 0,
                    y: -12,
                    scale: 0.995,
                    filter:
                        "blur(10px)"

                }}

                transition={{

                    duration: 1.15,

                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ]

                }}

                className="
                    will-change-transform
                "
            >

                {children}

            </motion.div>

        </AnimatePresence>

    )

}

