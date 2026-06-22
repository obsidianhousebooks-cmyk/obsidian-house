"use client"

import {
    motion,
    useScroll,
    useTransform
} from "framer-motion"

export default function ReadingFocus() {

    const {
        scrollY
    } = useScroll()

    const opacity =
        useTransform(
            scrollY,
            [0, 400, 1200],
            [0.15, 0.28, 0.18]
        )

    return (

        <motion.div

            style={{
                opacity
            }}

            className="
                fixed
                inset-0

                pointer-events-none

                z-[8]
            "
        >

            {/* TOP DARKNESS */}

            <div
                className="
                    absolute
                    top-0
                    left-0

                    w-full
                    h-[22vh]

                    bg-gradient-to-b
                    from-black/70
                    to-transparent
                "
            />

            {/* BOTTOM DARKNESS */}

            <div
                className="
                    absolute
                    bottom-0
                    left-0

                    w-full
                    h-[22vh]

                    bg-gradient-to-t
                    from-black/75
                    to-transparent
                "
            />

            {/* SIDE VIGNETTE */}

            <div
                className="
                    absolute
                    inset-0

                    bg-[radial-gradient(circle_at_center,transparent_38%,rgba(0,0,0,0.35)_100%)]
                "
            />

        </motion.div>

    )

}