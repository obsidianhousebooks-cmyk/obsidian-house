"use client"

import {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState
} from "react"

import {
    audioLibrary
} from "./audioLibrary"

type AudioTrack =
    keyof typeof audioLibrary

interface AmbientAudioContextType {

    currentTrack: AudioTrack

    playTrack: (
        trackId: AudioTrack
    ) => void

    stopTrack: () => void

    isPlaying: boolean

}

const AmbientAudioContext =
    createContext<AmbientAudioContextType | null>(null)

export function AmbientAudioProvider({

    children

}: {

    children: React.ReactNode

}) {

    const audioRef =
        useRef<HTMLAudioElement | null>(null)

    const fadeInterval =
        useRef<NodeJS.Timeout | null>(null)

    const [currentTrack, setCurrentTrack] =
        useState<AudioTrack>("silence")

    const [isPlaying, setIsPlaying] =
        useState(false)

    /*
    ━━━━━━━━━━━━━━━━━━━
    INITIALIZE AUDIO
    ━━━━━━━━━━━━━━━━━━━
    */

    useEffect(() => {

        const audio =
            new Audio()

        audio.loop = true

        audio.preload = "auto"

        audioRef.current = audio

        return () => {

            audio.pause()

            audio.src = ""

        }

    }, [])

    /*
    ━━━━━━━━━━━━━━━━━━━
    TRACK CHANGES
    ━━━━━━━━━━━━━━━━━━━
    */

    useEffect(() => {

        const audio =
            audioRef.current

        if (!audio)
            return

        const track =
            audioLibrary[currentTrack]

        if (!track || !track.src) {

            fadeOut(audio)

            return

        }

        changeTrack(
            audio,
            track.src,
            track.volume || 0.22
        )

    }, [currentTrack])

    /*
    ━━━━━━━━━━━━━━━━━━━
    TRACK TRANSITION
    ━━━━━━━━━━━━━━━━━━━
    */

    async function changeTrack(

        audio: HTMLAudioElement,

        src: string,

        targetVolume: number

    ) {

        clearFade()

        fadeOut(audio)

        setTimeout(async () => {

            audio.src = src

            audio.volume = 0

            try {

                await audio.play()

                setIsPlaying(true)

                fadeIn(
                    audio,
                    targetVolume
                )

            } catch {

                setIsPlaying(false)

            }

        }, 900)

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    FADE IN
    ━━━━━━━━━━━━━━━━━━━
    */

    function fadeIn(

        audio: HTMLAudioElement,

        target: number

    ) {

        clearFade()

        fadeInterval.current =
            setInterval(() => {

                if (audio.volume < target) {

                    audio.volume += 0.01

                } else {

                    clearFade()

                }

            }, 80)

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    FADE OUT
    ━━━━━━━━━━━━━━━━━━━
    */

    function fadeOut(
        audio: HTMLAudioElement
    ) {

        clearFade()

        fadeInterval.current =
            setInterval(() => {

                if (audio.volume > 0.02) {

                    audio.volume -= 0.02

                } else {

                    audio.pause()

                    audio.volume = 0

                    clearFade()

                }

            }, 60)

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    CLEAR FADE
    ━━━━━━━━━━━━━━━━━━━
    */

    function clearFade() {

        if (fadeInterval.current) {

            clearInterval(
                fadeInterval.current
            )

        }

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    CONTROLS
    ━━━━━━━━━━━━━━━━━━━
    */

    function playTrack(
        trackId: AudioTrack
    ) {

        if (
            trackId === currentTrack
        ) return

        setCurrentTrack(trackId)

    }

    function stopTrack() {

        const audio =
            audioRef.current

        if (!audio)
            return

        fadeOut(audio)

        setIsPlaying(false)

        setCurrentTrack("silence")

    }

    return (

        <AmbientAudioContext.Provider
            value={{

                currentTrack,

                playTrack,

                stopTrack,

                isPlaying

            }}
        >

            {children}

        </AmbientAudioContext.Provider>

    )

}

export function useAmbientAudio() {

    const context =
        useContext(
            AmbientAudioContext
        )

    if (!context) {

        throw new Error(
            "useAmbientAudio must be used inside AmbientAudioProvider"
        )

    }

    return context

}