import Image from "next/image"

import { currentRelease } from "@/lib/editorial/releases/currentRelease"

export default function CurrentRelease() {

    return (

        <section
            className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-black
                my-24
            "
        >

            {/* BACKGROUND */}

            <div
                className="
                    absolute
                    inset-0
                    z-0
                "
            >

                <Image
                    src={currentRelease.background}
                    alt={currentRelease.title}
                    fill
                    priority
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    className="
                        object-cover
                        opacity-20
                    "
                />

                <div
                    className="
                        absolute
                        inset-0
                        bg-black/70
                    "
                />

            </div>

            {/* CONTENT */}

            <div
                className="
                    relative
                    z-10
                    grid
                    lg:grid-cols-2
                    gap-16
                    items-center
                    px-8
                    py-16
                    lg:px-16
                "
            >

                {/* LEFT */}

                <div
                    className="
                        text-white
                    "
                >

                    <p
                        className="
                            uppercase
                            tracking-[0.3em]
                            text-sm
                            text-zinc-400
                            mb-5
                        "
                    >
                        Current Release
                    </p>

                    <h2
                        className="
                            text-5xl
                            lg:text-6xl
                            font-semibold
                            leading-tight
                            mb-6
                        "
                    >
                        {currentRelease.title}
                    </h2>

                    <p
                        className="
                            text-zinc-300
                            text-lg
                            leading-relaxed
                            mb-10
                            max-w-2xl
                        "
                    >
                        {currentRelease.description}
                    </p>

                    <div
                        className="
                            flex
                            flex-wrap
                            gap-4
                        "
                    >

                        {
                            currentRelease.amazonUrl && (
                                <a
                                    href={currentRelease.amazonUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
        inline-flex
        items-center
        justify-center
        px-6
        py-4
        rounded-xl
        border
        border-[#C6A15B]
        bg-[#C6A15B]
        text-black
        font-semibold
        tracking-wide
        transition-all
        duration-300
        hover:bg-[#d4af68]
        hover:border-[#d4af68]
        hover:shadow-[0_0_30px_rgba(198,161,91,0.25)]
    "
                                >
                                    Read on Amazon
                                </a>
                            )
                        }

                        {
                            currentRelease.authorUrl && (
                                <a
                                    href={currentRelease.authorUrl}
                                    className="
                                        px-6
                                        py-4
                                        rounded-xl
                                        border
                                        border-white/20
                                        text-white
                                        hover:bg-white/10
                                        transition
                                    "
                                >
                                    Meet the Author
                                </a>
                            )
                        }

                    </div>

                </div>

                {/* RIGHT */}

                <div
                    className="
                        relative
                        flex
                        justify-center
                    "
                >

                    <div
                        className="
                            relative
                            w-[320px]
                            h-[500px]
                        "
                    >

                        <Image
                            src={currentRelease.cover}
                            alt={currentRelease.title}
                            fill
                            priority
                            sizes="320px"
                            className="
                                object-cover
                                rounded-2xl
                                shadow-2xl
                            "
                        />

                    </div>

                </div>

            </div>

        </section>

    )

}