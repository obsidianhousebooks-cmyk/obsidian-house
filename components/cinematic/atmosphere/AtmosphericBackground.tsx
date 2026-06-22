"use client"

import {
    motion,
    useScroll,
    useTransform
} from "framer-motion"

export default function AtmosphericBackground() {

    const {
        scrollYProgress
    } = useScroll()

    /*
     * DYNAMIC ATMOSPHERE
     */

    const goldOpacity =
        useTransform(
            scrollYProgress,
            [0, 1],
            [0.10, 0.22]
        )

    const blueOpacity =
        useTransform(
            scrollYProgress,
            [0, 1],
            [0.08, 0.02]
        )

    const amberOpacity =
        useTransform(
            scrollYProgress,
            [0, 1],
            [0.05, 0.14]
        )

    const vignetteOpacity =
        useTransform(
            scrollYProgress,
            [0, 1],
            [0.15, 0.42]
        )

    return (

        <div
            className="
                fixed
                inset-0

                overflow-hidden

                pointer-events-none

                z-0
            "
        >

            {/* GOLD ATMOSPHERE */}

            <motion.div

                style={{

                    opacity: goldOpacity

                }}

                animate={{

                    scale: [
                        1,
                        1.06,
                        1
                    ],

                    x: [
                        0,
                        30,
                        0
                    ],

                    y: [
                        0,
                        -20,
                        0
                    ]

                }}

                transition={{

                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"

                }}

                className="
                    absolute

                    top-[-10%]
                    left-[5%]

                    w-[1000px]
                    h-[1000px]

                    rounded-full

                    bg-[radial-gradient(circle,rgba(184,149,101,0.25),transparent_72%)]

                    blur-3xl
                "
            />

            {/* BLUE MELANCHOLY */}

            <motion.div

                style={{

                    opacity: blueOpacity

                }}

                animate={{

                    scale: [
                        1,
                        1.08,
                        1
                    ],

                    x: [
                        0,
                        -40,
                        0
                    ],

                    y: [
                        0,
                        40,
                        0
                    ]

                }}

                transition={{

                    duration: 28,
                    repeat: Infinity,
                    ease: "easeInOut"

                }}

                className="
                    absolute

                    bottom-[-20%]
                    right-[-10%]

                    w-[1100px]
                    h-[1100px]

                    rounded-full

                    bg-[radial-gradient(circle,rgba(90,110,160,0.20),transparent_72%)]

                    blur-3xl
                "
            />

            {/* AMBER INTIMACY */}

            <motion.div

                style={{

                    opacity: amberOpacity

                }}

                animate={{

                    scale: [
                        1,
                        1.05,
                        1
                    ]

                }}

                transition={{

                    duration: 24,
                    repeat: Infinity,
                    ease: "easeInOut"

                }}

                className="
                    absolute

                    top-[30%]
                    left-1/2

                    -translate-x-1/2

                    w-[700px]
                    h-[700px]

                    rounded-full

                    bg-[radial-gradient(circle,rgba(255,180,120,0.16),transparent_70%)]

                    blur-3xl
                "
            />

            {/* CINEMATIC VIGNETTE */}

            <motion.div

                style={{

                    opacity: vignetteOpacity

                }}

                className="
                    absolute
                    inset-0

                    bg-[radial-gradient(circle,transparent_45%,rgba(0,0,0,0.92)_100%)]
                "
            />

        </div>

    )

}