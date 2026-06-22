"use client"

import { useState } from "react"

interface ImmersionModeProps {

    children: React.ReactNode

}

export default function ImmersionMode({

    children

}: ImmersionModeProps) {

    const [immersive, setImmersive] =
        useState(false)

    return (

        <div
            className={`
                relative
                transition-all
                duration-700

                ${immersive
                    ? "bg-[#020202]"
                    : ""
                }
            `}
        >

            {/* TOGGLE */}

            <button
                onClick={() =>
                    setImmersive(!immersive)
                }
                className="
                    fixed
                    bottom-24
                    right-6
                    z-[999]

                    w-14
                    h-14

                    rounded-full

                    border
                    border-[#b89565]/30

                    bg-black/70
                    backdrop-blur-xl

                    text-[#d6c2a8]
                    text-[10px]

                    tracking-[0.28em]

                    flex
                    items-center
                    justify-center

                    hover:border-[#b89565]
                    hover:text-white
                    hover:scale-105

                    transition-all
                    duration-500
                "
            >

                {immersive
                    ? "EXIT"
                    : "READ"
                }

            </button>

            {/* CONTENT */}

            <div
                className={`
                    transition-all
                    duration-700

                    ${immersive
                        ? `
                            max-w-[760px]
                            mx-auto

                            text-[#efe7dc]

                            leading-[2.35]

                            tracking-[0.01em]
                          `
                        : ""
                    }
                `}
            >

                {children}

            </div>

            {/* CINEMATIC VIGNETTE */}

            {immersive && (

                <div
                    className="
                        fixed
                        inset-0

                        pointer-events-none

                        bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.55)_100%)]

                        z-[20]
                    "
                />

            )}

        </div>

    )

}