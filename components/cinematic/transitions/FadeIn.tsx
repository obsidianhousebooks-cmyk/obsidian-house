"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface FadeInProps {

    children: ReactNode

    delay?: number

    y?: number

    duration?: number

    className?: string

}

export default function FadeIn({

    children,

    delay = 0,

    y = 40,

    duration = 1.4,

    className

}: FadeInProps) {

    return (

        <motion.div

            initial={{

                opacity: 0,
                y

            }}

            whileInView={{

                opacity: 1,
                y: 0

            }}

            viewport={{

                once: true,
                margin: "-80px"

            }}

            transition={{

                duration,
                delay,
                ease: [0.22, 1, 0.36, 1]

            }}

            className={className}

        >

            {children}

        </motion.div>

    )

}