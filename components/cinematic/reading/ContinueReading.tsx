"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

interface ContinueReadingProps {

    slug: string

}

export default function ContinueReading({

    slug

}: ContinueReadingProps) {

    const [visible, setVisible] =
        useState(false)

    useEffect(() => {

        function handleScroll() {

            if (window.scrollY > 900) {

                setVisible(true)

            } else {

                setVisible(false)

            }

        }

        window.addEventListener(
            "scroll",
            handleScroll
        )

        return () =>
            window.removeEventListener(
                "scroll",
                handleScroll
            )

    }, [])

    return (

        <AnimatePresence>

            {visible && (

                <motion.div

                    initial={{
                        opacity: 0,
                        y: 30,
                        filter: "blur(10px)"
                    }}

                    animate={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)"
                    }}

                    exit={{
                        opacity: 0,
                        y: 20,
                        filter: "blur(10px)"
                    }}

                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1]
                    }}

                    className="
                        fixed

                        bottom-6
                        left-6

                        z-[999]

                        w-[320px]

                        border
                        border-white/[0.08]

                        bg-black/70
                        backdrop-blur-2xl

                        p-6

                        shadow-[0_0_40px_rgba(0,0,0,0.45)]
                    "
                >

                    <div
                        className="
                            uppercase
                            tracking-[0.28em]
                            text-[10px]
                            text-[#8f7a58]
                            mb-4
                        "
                    >

                        Continue Reading

                    </div>

                    <div
                        className="
                            text-[18px]
                            leading-[1.8]
                            text-[#ddd2c5]
                            mb-6
                        "
                    >

                        Return to the quiet emotional architecture of this story.

                    </div>

                    <Link
                        href={`/books/${slug}/read`}
                        className="
                            inline-flex
                            items-center
                            gap-3

                            uppercase
                            tracking-[0.24em]
                            text-[10px]

                            text-[#d6b07c]

                            hover:text-white

                            transition-all
                            duration-500
                        "
                    >

                        Resume Reading

                        <span>
                            →
                        </span>

                    </Link>

                </motion.div>

            )}

        </AnimatePresence>

    )

}