"use client"

import {
    useEffect
} from "react"

import {
    usePathname
} from "next/navigation"

import {
    useAmbientAudio
} from "./AmbientAudioProvider"

export default function PageAudio() {

    const pathname =
        usePathname()

    const {
        playTrack
    } = useAmbientAudio()

    useEffect(() => {

        /*
        ━━━━━━━━━━━━━━━━━━━
        HOME
        ━━━━━━━━━━━━━━━━━━━
        */

        if (
            pathname === "/"
        ) {

            playTrack(
                "obsidianAmbient"
            )

            return

        }

        /*
        ━━━━━━━━━━━━━━━━━━━
        JOURNAL
        ━━━━━━━━━━━━━━━━━━━
        */

        if (
            pathname.startsWith(
                "/journal"
            )
        ) {

            playTrack(
                "readingRoom"
            )

            return

        }

        /*
        ━━━━━━━━━━━━━━━━━━━
        ABOUT
        ━━━━━━━━━━━━━━━━━━━
        */

        if (
            pathname.startsWith(
                "/about"
            )
        ) {

            playTrack(
                "obsidianAmbient"
            )

            return

        }

        /*
        ━━━━━━━━━━━━━━━━━━━
        READING EXPERIENCE
        ━━━━━━━━━━━━━━━━━━━
        */

        if (
            pathname.includes(
                "/read"
            )
        ) {

            playTrack(
                "readingRoom"
            )

            return

        }

    }, [

        pathname,
        playTrack

    ])

    return null

}