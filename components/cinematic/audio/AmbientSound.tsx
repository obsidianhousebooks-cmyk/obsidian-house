"use client"

import { useEffect, useRef, useState } from "react"

export default function AmbientSound() {

    const audioRef =
        useRef<HTMLAudioElement | null>(null)

    const [enabled, setEnabled] =
        useState(false)

    useEffect(() => {

        const audio =
            audioRef.current

        if (!audio) return

        audio.volume = 0.08
        audio.loop = true

    }, [])

    async function toggleSound() {

        const audio =
            audioRef.current

        if (!audio) return

        try {

            if (!enabled) {

                await audio.play()

                setEnabled(true)

            } else {

                audio.pause()

                setEnabled(false)

            }

        } catch (error) {

            console.log(error)

        }

    }

    return (

        <>
            <audio
                ref={audioRef}
                src="/audio/ambient-rain.mp3"
            />

            <button
                onClick={toggleSound}
                className="
                    fixed
                    bottom-6
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
                    tracking-[0.3em]

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

                {enabled ? "ON" : "OFF"}

            </button>
        </>

    )

}