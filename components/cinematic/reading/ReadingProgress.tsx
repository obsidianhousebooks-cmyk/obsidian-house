"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export default function ReadingProgress() {

    const { scrollYProgress } =
        useScroll()

    const scaleX =
        useSpring(scrollYProgress, {

            stiffness: 90,
            damping: 20,
            mass: 0.2,

        })

    return (

        <motion.div
            style={{ scaleX }}
            className="
                fixed
                top-0
                left-0

                right-0

                h-[2px]

                origin-left

                z-[9999]

                bg-gradient-to-r
                from-[#b89565]
                via-[#e7d2b2]
                to-[#b89565]

                shadow-[0_0_14px_rgba(184,149,101,0.45)]
            "
        />

    )

}