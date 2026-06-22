import Image from "next/image"
import Link from "next/link"

import { editorialBooks } from "@/lib/editorial/books"

export default function BooksPage() {

    const currentRelease = editorialBooks[0]

    return (

        <main
            className="
                min-h-screen
                bg-[#050505]
                text-[#f5efe6]
            "
        >

            {/* HERO */}

            <section
                className="
                    border-b
                    border-white/[0.06]
                    px-8
                    md:px-16
                    pt-24
                    pb-32
                "
            >

                <div className="max-w-7xl mx-auto">

                    <p
                        className="
                            text-[11px]
                            uppercase
                            tracking-[0.38em]
                            text-[#8f7a58]
                            mb-6
                        "
                    >
                        Obsidian House Library
                    </p>

                    <div
                        className="
                            grid
                            lg:grid-cols-2
                            gap-20
                            items-end
                        "
                    >

                        <div>

                            <h1
                                className="
                                    font-serif
                                    text-[clamp(4rem,9vw,8rem)]
                                    leading-[0.9]
                                    tracking-[-0.06em]
                                    max-w-[8ch]
                                "
                            >
                                Stories that remain after silence.
                            </h1>

                        </div>

                        <div>

                            <p
                                className="
                                    text-[clamp(1.2rem,1.8vw,1.6rem)]
                                    leading-[2]
                                    text-[#a79e92]
                                "
                            >
                                Psychological fiction.
                                Literary suspense.
                                Emotional realism.
                                Stories about attachment,
                                loneliness,
                                identity,
                                memory
                                and quiet emotional collapse.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* CURRENT RELEASE */}

            {currentRelease && (

                <section
                    className="
                        border-b
                        border-white/[0.06]
                        px-8
                        md:px-16
                        py-32
                    "
                >

                    <div
                        className="
                            max-w-7xl
                            mx-auto
                            grid
                            lg:grid-cols-12
                            gap-20
                            items-center
                        "
                    >

                        <div className="lg:col-span-5">

                            <div
                                className="
                                    overflow-hidden
                                    border
                                    border-white/[0.08]
                                    bg-[#080808]
                                "
                            >

                                <Image
                                    src={currentRelease.cover}
                                    alt={currentRelease.title}
                                    width={900}
                                    height={1400}
                                    className="w-full h-auto object-cover"
                                />

                            </div>

                        </div>

                        <div className="lg:col-span-7">

                            <p
                                className="
                                    text-[11px]
                                    uppercase
                                    tracking-[0.38em]
                                    text-[#8f7a58]
                                    mb-8
                                "
                            >
                                Current Release
                            </p>

                            <h2
                                className="
                                    font-serif
                                    text-[clamp(4rem,7vw,7rem)]
                                    leading-[0.92]
                                    tracking-[-0.05em]
                                    mb-8
                                "
                            >
                                {currentRelease.title}
                            </h2>

                            <p
                                className="
                                    text-[#c3b7a7]
                                    italic
                                    text-[1.4rem]
                                    mb-10
                                "
                            >
                                Lena Voss
                            </p>

                            <p
                                className="
                                    max-w-3xl
                                    text-[1.15rem]
                                    leading-[2]
                                    text-[#9f978c]
                                    mb-12
                                "
                            >
                                {currentRelease.description}
                            </p>

                            <div className="flex flex-wrap gap-5">

                                <Link
                                    href={`/books/${currentRelease.slug}`}
                                    className="
                                        px-7
                                        py-4
                                        bg-[#c6a15b]
                                        text-black
                                        uppercase
                                        tracking-[0.18em]
                                        text-[11px]
                                        font-medium
                                    "
                                >
                                    Enter Book
                                </Link>

                                <Link
                                    href={`/books/${currentRelease.slug}/read`}
                                    className="
                                        px-7
                                        py-4
                                        border
                                        border-white/[0.08]
                                        uppercase
                                        tracking-[0.18em]
                                        text-[11px]
                                    "
                                >
                                    Read Sample
                                </Link>

                            </div>

                        </div>

                    </div>

                </section>

            )}

            {/* EDITORIAL POSITIONING */}

            <section
                className="
                    border-b
                    border-white/[0.06]
                    px-8
                    md:px-16
                    py-32
                "
            >

                <div
                    className="
                        max-w-7xl
                        mx-auto
                        grid
                        lg:grid-cols-2
                        gap-20
                    "
                >

                    <div>

                        <p
                            className="
                                text-[11px]
                                uppercase
                                tracking-[0.38em]
                                text-[#8f7a58]
                                mb-6
                            "
                        >
                            Editorial Positioning
                        </p>

                        <h2
                            className="
                                font-serif
                                text-[clamp(3rem,5vw,5rem)]
                                leading-[1]
                                tracking-[-0.05em]
                                max-w-[8ch]
                            "
                        >
                            Why this story matters.
                        </h2>

                    </div>

                    <div>

                        <p
                            className="
                                text-[18px]
                                leading-[2]
                                text-[#9f978c]
                            "
                        >
                            At Obsidian House we are interested
                            in the emotional realities people carry
                            beneath ordinary life.
                            We publish stories about attachment,
                            longing, memory, loneliness and the
                            fragile structures that hold human
                            relationships together.
                        </p>

                        <p
                            className="
                                mt-8
                                text-[18px]
                                leading-[2]
                                text-[#9f978c]
                            "
                        >
                            Everything Tender Eventually Breaks
                            explores the quiet deterioration of intimacy,
                            emotional dependency and the invisible forms
                            of psychological violence that often remain
                            unnamed until it is too late.
                        </p>

                    </div>

                </div>

            </section>

            {/* THEMES */}

            <section
                className="
                    border-b
                    border-white/[0.06]
                    px-8
                    md:px-16
                    py-32
                "
            >

                <div className="max-w-7xl mx-auto">

                    <p
                        className="
                            text-[11px]
                            uppercase
                            tracking-[0.38em]
                            text-[#8f7a58]
                            mb-12
                        "
                    >
                        Central Themes
                    </p>

                    <div
                        className="
                            grid
                            md:grid-cols-2
                            lg:grid-cols-3
                            gap-6
                        "
                    >

                        {[
                            "Emotional Dependency",
                            "Attachment Instability",
                            "Domestic Paranoia",
                            "Urban Loneliness",
                            "Relationship Exhaustion",
                            "Invisible Violence"
                        ].map((theme) => (

                            <div
                                key={theme}
                                className="
                                    border
                                    border-white/[0.06]
                                    p-8
                                "
                            >

                                <p
                                    className="
                                        uppercase
                                        tracking-[0.28em]
                                        text-[11px]
                                        text-[#d6c6b2]
                                    "
                                >
                                    {theme}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* FROM THE AUTHOR */}

            <section
                className="
                    border-b
                    border-white/[0.06]
                    px-8
                    md:px-16
                    py-32
                "
            >

                <div className="max-w-5xl mx-auto">

                    <p
                        className="
                            text-[11px]
                            uppercase
                            tracking-[0.38em]
                            text-[#8f7a58]
                            mb-8
                        "
                    >
                        From The Author
                    </p>

                    <blockquote
                        className="
                            font-serif
                            text-[clamp(2.5rem,4vw,4.5rem)]
                            leading-[1.3]
                            tracking-[-0.04em]
                            text-[#f5efe6]
                        "
                    >
                        “I write about relationships when they stop
                        being beautiful and start becoming real.”
                    </blockquote>

                    <p
                        className="
                            mt-10
                            uppercase
                            tracking-[0.28em]
                            text-[11px]
                            text-[#8f7a58]
                        "
                    >
                        Lena Voss
                    </p>

                </div>

            </section>

            {/* MEET LENA VOSS */}

            <section
                className="
                    border-b
                    border-white/[0.06]
                    px-8
                    md:px-16
                    py-32
                "
            >

                <div
                    className="
                        max-w-7xl
                        mx-auto
                        grid
                        lg:grid-cols-2
                        gap-20
                        items-center
                    "
                >

                    <div>

                        <Image
                            src="/authors/lena-voss/Lena Voss.png"
                            alt="Lena Voss"
                            width={1200}
                            height={1400}
                            className="
                                w-full
                                h-auto
                                border
                                border-white/[0.08]
                            "
                        />

                    </div>

                    <div>

                        <p
                            className="
                                text-[11px]
                                uppercase
                                tracking-[0.38em]
                                text-[#8f7a58]
                                mb-6
                            "
                        >
                            About The Author
                        </p>

                        <h2
                            className="
                                font-serif
                                text-[clamp(3rem,5vw,5rem)]
                                leading-[1]
                                tracking-[-0.05em]
                                mb-8
                            "
                        >
                            Lena Voss
                        </h2>

                        <p
                            className="
                                text-[18px]
                                leading-[2]
                                text-[#9f978c]
                                mb-10
                            "
                        >
                            Lena Voss writes emotionally immersive
                            literary suspense focused on attachment,
                            emotional deterioration, invisible
                            psychological violence and the fragile
                            architecture of intimacy.
                        </p>

                        <Link
                            href="/authors/lena-voss"
                            className="
                                inline-flex
                                items-center
                                gap-4
                                uppercase
                                tracking-[0.28em]
                                text-[11px]
                                text-[#c6a15b]
                            "
                        >
                            Enter Author →
                        </Link>

                    </div>

                </div>

            </section>

            {/* UPCOMING AUTHORS */}

            <section
                className="
                    px-8
                    md:px-16
                    py-32
                "
            >

                <div className="max-w-7xl mx-auto">

                    <p
                        className="
                            text-[11px]
                            uppercase
                            tracking-[0.38em]
                            text-[#8f7a58]
                            mb-12
                        "
                    >
                        Editorial Voices
                    </p>

                    <div
                        className="
                            grid
                            md:grid-cols-2
                            lg:grid-cols-4
                            gap-8
                        "
                    >

                        {[
                            "Noa Arden",
                            "Elias Moreau",
                            "Clara Vale",
                            "Adrian Veil"
                        ].map((author) => (

                            <div
                                key={author}
                                className="
                                    border-t
                                    border-white/[0.06]
                                    pt-6
                                "
                            >

                                <h3
                                    className="
                                        font-serif
                                        text-3xl
                                        mb-4
                                    "
                                >
                                    {author}
                                </h3>

                                <p
                                    className="
                                        text-sm
                                        uppercase
                                        tracking-[0.24em]
                                        text-[#8f7a58]
                                    "
                                >
                                    Editorial Voice
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

        </main>

    )

}