"use client"

import {
    motion,
    AnimatePresence
} from "framer-motion"

import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react"

const ImmersionContext =
    createContext(false)

export function useImmersion() {

    return useContext(
        ImmersionContext
    )

}

interface DeepImmersionProps {

    children: React.ReactNode

}

export default function DeepImmersion({

    children

}: DeepImmersionProps) {

    const [
        immersive,
        setImmersive
    ] = useState(false)

    useEffect(() => {

        let timeout:
            NodeJS.Timeout

        function activate() {

            clearTimeout(timeout)

            setImmersive(false)

            timeout =
                setTimeout(() => {

                    setImmersive(true)

                }, 3500)

        }

        activate()

        window.addEventListener(
            "mousemove",
            activate
        )

        window.addEventListener(
            "scroll",
            activate
        )

        return () => {

            clearTimeout(timeout)

            window.removeEventListener(
                "mousemove",
                activate
            )

            window.removeEventListener(
                "scroll",
                activate
            )

        }

    }, [])

    return (

        <ImmersionContext.Provider
            value={immersive}
        >

            <div className="relative">

                {children}

                <AnimatePresence>

                    {immersive && (

                        <motion.div

                            initial={{
                                opacity: 0
                            }}

                            animate={{
                                opacity: 1
                            }}

                            exit={{
                                opacity: 0
                            }}

                            transition={{
                                duration: 1.4
                            }}

                            className="
                                fixed
                                inset-0

                                pointer-events-none

                                z-[60]

                                bg-[radial-gradient(circle,transparent_55%,rgba(0,0,0,0.35)_100%)]
                            "
                        />

                    )}

                </AnimatePresence>

            </div>

        </ImmersionContext.Provider>

    )

}