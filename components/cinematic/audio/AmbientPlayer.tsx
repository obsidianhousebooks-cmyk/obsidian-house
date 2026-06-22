"use client"

import {
    useEffect,
    useRef,
    useState
} from "react"

interface AmbientPlayerProps {

    src: string

    volume?: number

}

export default function AmbientPlayer({

    src,

    volume = 0.2

}: AmbientPlayerProps) {

    const audioRef =
        useRef<HTMLAudioElement | null>(null)

    const [enabled, setEnabled] =
        useState(false)

    useEffect(() => {

        if (!audioRef.current)
            return

        audioRef.current.volume = volume

    }, [volume])

    function toggleAudio() {

        if (!audioRef.current)
            return

        if (!enabled) {

            audioRef.current.play()

            setEnabled(true)

        } else {

            audioRef.current.pause()

            setEnabled(false)

        }

    }

    return (

        <>

            <audio
                ref={audioRef}
                loop
                preload="auto"
            >

                <source
                    src={src}
                    type="audio/mpeg"
                />

            </audio>

            <button
                onClick={toggleAudio}
                className="
                    fixed
                    bottom-6
                    left-6
                    z-[999]
                    w-14
                    h-14
                    rounded-full
                    border
                    border-white/10
                    bg-black/60
                    backdrop-blur-xl
                    text-[#f5efe6]
                    text-sm
                    tracking-[0.2em]
                    uppercase
                    hover:bg-white/10
                    transition-all
                "
            >

                {enabled ? "II" : "N"}

            </button>

        </>

    )

}