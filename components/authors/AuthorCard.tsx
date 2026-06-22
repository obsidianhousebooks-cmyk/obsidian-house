import Link from "next/link"

interface AuthorCardProps {

    author: any

}

export default function AuthorCard({

    author

}: AuthorCardProps) {

    return (

        <Link
            href={`/authors/${author.slug}`}
            className="group block"
        >

            <article
                className="
                    relative
                    overflow-hidden

                    min-h-[520px]

                    border
                    border-white/[0.06]

                    bg-white/[0.02]
                    backdrop-blur-xl

                    px-10
                    py-12

                    transition-all
                    duration-700

                    hover:-translate-y-[4px]
                    hover:border-[#c6b08a]/20
                    hover:bg-white/[0.03]
                "
            >

                {/* ATMOSPHERIC GLOW */}

                <div
                    className="
                        absolute
                        inset-0
                        opacity-0
                        transition-opacity
                        duration-700
                        group-hover:opacity-100
                    "
                >

                    <div
                        className="
                            absolute
                            -top-24
                            left-1/2
                            -translate-x-1/2

                            w-[420px]
                            h-[420px]

                            rounded-full
                            bg-[#c6b08a]/[0.035]

                            blur-3xl
                        "
                    />

                </div>

                {/* FILM GRAIN */}

                <div
                    className="
                        absolute
                        inset-0
                        opacity-[0.015]
                        mix-blend-soft-light
                        pointer-events-none
                    "
                />

                {/* CONTENT */}

                <div className="relative z-10 flex flex-col h-full">

                    {/* TOP */}

                    <div className="space-y-8">

                        {/* BRAND */}

                        <div
                            className="
                                uppercase
                                tracking-[0.42em]
                                text-[10px]
                                text-[#8f8578]
                            "
                        >

                            {author.brand}

                        </div>

                        {/* NAME */}

                        <div className="space-y-5">

                            <h2
                                className="
                                    font-serif
                                    text-[3rem]
                                    leading-[0.92]
                                    tracking-[-0.05em]
                                    text-[#f6f1e8]
                                    max-w-[8ch]
                                "
                            >

                                {author.name}

                            </h2>

                            {/* ARCHETYPE */}

                            <p
                                className="
                                    italic
                                    text-[1.05rem]
                                    leading-relaxed
                                    text-[#b7aa97]
                                    max-w-[24ch]
                                "
                            >

                                {author.archetype}

                            </p>

                        </div>

                    </div>

                    {/* BODY */}

                    <div className="mt-16">

                        <p
                            className="
                                text-[15px]
                                leading-[2]
                                text-[#c6bbaf]
                            "
                        >

                            {author.voice?.slice(0, 260)}...

                        </p>

                    </div>

                    {/* THEMES */}

                    <div
                        className="
                            mt-auto
                            pt-16

                            flex
                            flex-wrap
                            gap-3
                        "
                    >

                        {author.themes
                            ?.slice(0, 4)
                            .map((theme: string) => (

                                <span
                                    key={theme}
                                    className="
                                        border
                                        border-white/[0.07]

                                        bg-white/[0.015]

                                        px-4
                                        py-2

                                        uppercase
                                        tracking-[0.24em]
                                        text-[10px]

                                        text-[#93887c]
                                    "
                                >

                                    {theme}

                                </span>

                            ))}

                    </div>

                    {/* CTA */}

                    <div
                        className="
                            pt-14
                            mt-14
                            border-t
                            border-white/[0.05]
                        "
                    >

                        <div
                            className="
                                flex
                                items-center
                                justify-between
                            "
                        >

                            <span
                                className="
                                    uppercase
                                    tracking-[0.28em]
                                    text-[10px]
                                    text-[#bca17f]
                                "
                            >

                                Enter Author

                            </span>

                            <span
                                className="
                                    text-[#bca17f]
                                    text-xl
                                    transition-transform
                                    duration-500
                                    group-hover:translate-x-[4px]
                                "
                            >

                                →

                            </span>

                        </div>

                    </div>

                </div>

            </article>

        </Link>

    )

}
