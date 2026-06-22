"use client"

import {
    AnimatePresence,
    motion
} from "framer-motion"

import {
    usePathname
} from "next/navigation"

export default function SceneTransition() {

    const pathname =
        usePathname()

    return (

        <AnimatePresence
            mode="wait"
        >

            <motion.div

                key={pathname}

                initial={{

                    opacity: 0

                }}

                animate={{

                    opacity: 0

                }}

                exit={{

                    opacity: 1

                }}

                transition={{

                    duration: 0.9,
                    ease: [0.65, 0, 0.35, 1]

                }}

                className="
                    fixed
                    inset-0

                    z-[9999]

                    pointer-events-none
                "
            >

                {/* BLACK CINEMATIC LAYER */}

                <motion.div

                    initial={{

                        opacity: 0

                    }}

                    exit={{

                        opacity: 1

                    }}

                    transition={{

                        duration: 0.8

                    }}

                    className="
                        absolute
                        inset-0

                        bg-black
                    "
                />

                {/* SOFT GOLD LIGHT */}

                <motion.div

                    initial={{

                        opacity: 0,
                        scale: 1.1

                    }}

                    exit={{

                        opacity: 0.18,
                        scale: 1

                    }}

                    transition={{

                        duration: 1.2

                    }}

                    className="
                        absolute

                        inset-0

                        bg-[radial-gradient(circle,rgba(184,149,101,0.18),transparent_70%)]

                        blur-3xl
                    "
                />

                {/* FILM BLUR */}

                <motion.div

                    initial={{

                        backdropFilter:
                            "blur(0px)"

                    }}

                    exit={{

                        backdropFilter:
                            "blur(12px)"

                    }}

                    transition={{

                        duration: 0.8

                    }}

                    className="
                        absolute
                        inset-0
                    "
                />

            </motion.div>

        </AnimatePresence>

    )

}