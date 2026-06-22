"use client"

import {
    motion,
    useScroll,
    useTransform
} from "framer-motion"

export default function ScrollAtmosphere() {

    const {
        scrollY
    } = useScroll()

    const y1 =
        useTransform(
            scrollY,
            [0, 3000],
            [0, -180]
        )

    const y2 =
        useTransform(
            scrollY,
            [0, 3000],
            [0, 120]
        )

    const opacity =
        useTransform(
            scrollY,
            [0, 1200],
            [0.08, 0.18]
        )

    return (

        <div
            className="
                fixed
                inset-0

                overflow-hidden

                pointer-events-none

                z-[1]
            "
        >

            <motion.div

                style={{
                    y: y1,
                    opacity
                }}

                className="
                    absolute

                    top-[10%]
                    left-[-10%]

                    w-[800px]
                    h-[800px]

                    rounded-full

                    blur-3xl

                    bg-[radial-gradient(circle,rgba(201,162,103,0.10),transparent_70%)]
                "
            />

            <motion.div

                style={{
                    y: y2,
                    opacity
                }}

                className="
                    absolute

                    bottom-[-10%]
                    right-[-10%]

                    w-[900px]
                    h-[900px]

                    rounded-full

                    blur-3xl

                    bg-[radial-gradient(circle,rgba(89,105,145,0.10),transparent_72%)]
                "
            />

        </div>

    )

}