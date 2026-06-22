import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

import {
    editorialAuthors
} from "@/lib/editorial/authors/selector"

import {
    currentRelease
} from "@/lib/editorial/releases/currentRelease"

interface Props {

    params: Promise<{
        slug: string
    }>

}

const authorImages: Record<string, string> = {

    "lena-voss":
        "/authors/lena-voss/Lena Voss1.png",

    "clara-vale":
        "/authors/clara-vale/clara-vale1.jpg",

    "adrian-veil":
        "/authors/adrian-veil/adrian-veil1.jpg",

    "elias-moreau":
        "/authors/elias-moreau/elias-moreau1.jpg",

    "noa-arden":
        "/authors/noa-arden/noa-arden1.jpg"

}

export default async function AuthorPage({

    params

}: Props) {

    const { slug } = await params

    const author =
        editorialAuthors.find(
            (item) =>
                item.slug === slug
        )

    if (!author) {

        notFound()

    }

    const otherAuthors =
        editorialAuthors.filter(
            item =>
                item.slug !== author.slug
        )

    return (

        <main
            className="
                min-h-screen
                bg-[#050505]
                text-[#f5efe6]
                overflow-hidden
            "
        >

            {/* HERO */}

            <section
                className="
                    border-b
                    border-white/[0.06]
                "
            >

                <div
                    className="
                        max-w-[1700px]
                        mx-auto
                        px-6
                        md:px-12
                        lg:px-16
                        pt-24
                        pb-24
                        grid
                        lg:grid-cols-2
                        gap-20
                        items-center
                    "
                >

                    <div className="max-w-[760px]">

                        <div
                            className="
                                uppercase
                                tracking-[0.42em]
                                text-[11px]
                                text-[#b89f7a]
                                mb-8
                            "
                        >
                            Obsidian House Author
                        </div>

                        <h1
                            className="
                                font-serif
                                text-[clamp(5rem,9vw,8rem)]
                                leading-[0.88]
                                tracking-[-0.07em]
                                mb-8
                            "
                        >
                            {author.name}
                        </h1>

                        <p
                            className="
                                text-[28px]
                                italic
                                text-[#b8aa96]
                                mb-12
                            "
                        >
                            {author.marketPosition ||
                                author.brand}
                        </p>

                        <div
                            className="
                                space-y-8
                                text-[20px]
                                leading-[2]
                                text-[#988d82]
                            "
                        >

                            <p
                                className="
                                    whitespace-pre-line
                                "
                            >
                                {author.voice}
                            </p>

                        </div>

                        <div
                            className="
                                flex
                                flex-wrap
                                gap-5
                                mt-14
                            "
                        >

                            <a
                                href={currentRelease.amazonUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    px-8
                                    py-4
                                    rounded-full
                                    bg-[#c6a15b]
                                    text-black
                                    font-semibold
                                    hover:opacity-90
                                    transition
                                "
                            >
                                Read the Novel
                            </a>

                            <Link
                                href={`/books/${currentRelease.slug}/read`}
                                className="
                                    px-8
                                    py-4
                                    rounded-full
                                    border
                                    border-white/15
                                    hover:bg-white/5
                                    transition
                                "
                            >
                                Read Sample
                            </Link>

                        </div>

                    </div>

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
                                w-full
                                max-w-[620px]
                                aspect-[0.8]
                                overflow-hidden
                                rounded-[36px]
                                border
                                border-white/[0.08]
                                bg-[#080808]
                            "
                        >

                            <Image
                                src={
                                    authorImages[
                                    author.slug || ""
                                    ] ||
                                    "/authors/lena-voss/Lena Voss1.png"
                                }
                                alt={author.name}
                                fill
                                priority
                                className="
                                    object-cover
                                "
                            />

                            <div
                                className="
                                    absolute
                                    inset-0
                                    bg-gradient-to-t
                                    from-black/50
                                    via-transparent
                                    to-transparent
                                "
                            />

                        </div>

                    </div>

                </div>

            </section>

            {/* THEMES */}

            {
                author.themes?.length && (

                    <section
                        className="
                            border-b
                            border-white/[0.06]
                        "
                    >

                        <div
                            className="
                                max-w-[1400px]
                                mx-auto
                                px-6
                                md:px-12
                                lg:px-16
                                py-24
                            "
                        >

                            <div
                                className="
                                    uppercase
                                    tracking-[0.35em]
                                    text-[11px]
                                    text-[#b89f7a]
                                    mb-10
                                "
                            >
                                Literary Territory
                            </div>

                            <div
                                className="
                                    flex
                                    flex-wrap
                                    gap-4
                                "
                            >

                                {
                                    author.themes.map(

                                        theme => (

                                            <div
                                                key={theme}
                                                className="
                                                    px-5
                                                    py-3
                                                    rounded-full
                                                    border
                                                    border-white/[0.08]
                                                    text-[#d2c5b7]
                                                "
                                            >
                                                {theme}
                                            </div>

                                        )

                                    )
                                }

                            </div>

                        </div>

                    </section>

                )
            }

            {/* WORLDVIEW */}

            {
                author.worldview?.length && (

                    <section
                        className="
                            border-b
                            border-white/[0.06]
                        "
                    >

                        <div
                            className="
                                max-w-[1400px]
                                mx-auto
                                px-6
                                md:px-12
                                lg:px-16
                                py-24
                            "
                        >

                            <div
                                className="
                                    uppercase
                                    tracking-[0.35em]
                                    text-[11px]
                                    text-[#b89f7a]
                                    mb-10
                                "
                            >
                                Editorial DNA
                            </div>

                            <div
                                className="
                                    grid
                                    lg:grid-cols-2
                                    gap-20
                                "
                            >

                                <div>

                                    <h3
                                        className="
                                            font-serif
                                            text-3xl
                                            mb-8
                                        "
                                    >
                                        Worldview
                                    </h3>

                                    <div
                                        className="
                                            space-y-6
                                        "
                                    >

                                        {
                                            author.worldview.map(

                                                item => (

                                                    <p
                                                        key={item}
                                                        className="
                                                            text-[#988d82]
                                                            leading-relaxed
                                                        "
                                                    >
                                                        {item}
                                                    </p>

                                                )

                                            )
                                        }

                                    </div>

                                </div>

                                {
                                    author.humanPhilosophy?.length && (

                                        <div>

                                            <h3
                                                className="
                                                    font-serif
                                                    text-3xl
                                                    mb-8
                                                "
                                            >
                                                Human Philosophy
                                            </h3>

                                            <div
                                                className="
                                                    space-y-6
                                                "
                                            >

                                                {
                                                    author.humanPhilosophy.map(

                                                        item => (

                                                            <p
                                                                key={item}
                                                                className="
                                                                    text-[#988d82]
                                                                    leading-relaxed
                                                                "
                                                            >
                                                                {item}
                                                            </p>

                                                        )

                                                    )
                                                }

                                            </div>

                                        </div>

                                    )
                                }

                            </div>

                        </div>

                    </section>

                )
            }

            {/* READER EXPERIENCE */}

            {
                author.readerExperience && (

                    <section
                        className="
                            border-b
                            border-white/[0.06]
                        "
                    >

                        <div
                            className="
                                max-w-[1200px]
                                mx-auto
                                px-6
                                md:px-12
                                lg:px-16
                                py-24
                            "
                        >

                            <div
                                className="
                                    uppercase
                                    tracking-[0.35em]
                                    text-[11px]
                                    text-[#b89f7a]
                                    mb-10
                                "
                            >
                                Reader Experience
                            </div>

                            <div
                                className="
                                    text-[22px]
                                    leading-[2]
                                    text-[#a89d91]
                                    whitespace-pre-line
                                "
                            >

                                {
                                    Array.isArray(
                                        author.readerExperience
                                    )
                                        ? author.readerExperience.join(
                                            "\n"
                                        )
                                        : author.readerExperience
                                }

                            </div>

                        </div>

                    </section>

                )
            }

            {/* CURRENT RELEASE */}

            <section
                className="
                    border-b
                    border-white/[0.06]
                "
            >

                <div
                    className="
                        max-w-[1600px]
                        mx-auto
                        px-6
                        md:px-12
                        lg:px-16
                        py-28
                        grid
                        lg:grid-cols-2
                        gap-24
                        items-center
                    "
                >

                    <div>

                        <div
                            className="
                                uppercase
                                tracking-[0.35em]
                                text-[11px]
                                text-[#b89f7a]
                                mb-6
                            "
                        >
                            Current Release
                        </div>

                        <h2
                            className="
                                font-serif
                                text-[clamp(3rem,6vw,5rem)]
                                leading-[0.95]
                                tracking-[-0.05em]
                                mb-8
                            "
                        >
                            {currentRelease.title}
                        </h2>

                        <p
                            className="
                                text-[20px]
                                leading-[2]
                                text-[#9b8f82]
                                max-w-[700px]
                                mb-12
                            "
                        >
                            {currentRelease.description}
                        </p>

                        <Link
                            href={`/books/${currentRelease.slug}/read`}
                            className="
                                inline-flex
                                px-8
                                py-4
                                rounded-full
                                bg-[#c6a15b]
                                text-black
                                font-semibold
                            "
                        >
                            Start Reading
                        </Link>

                    </div>

                    <div
                        className="
                            flex
                            justify-center
                        "
                    >

                        <div
                            className="
                                relative
                                w-[340px]
                                h-[540px]
                            "
                        >

                            <Image
                                src={currentRelease.cover}
                                alt={currentRelease.title}
                                fill
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

            {/* OTHER AUTHORS */}

            <section>

                <div
                    className="
                        max-w-[1600px]
                        mx-auto
                        px-6
                        md:px-12
                        lg:px-16
                        py-24
                    "
                >

                    <div
                        className="
                            uppercase
                            tracking-[0.35em]
                            text-[11px]
                            text-[#b89f7a]
                            mb-12
                        "
                    >
                        Discover Other Voices
                    </div>

                    <div
                        className="
                            grid
                            md:grid-cols-2
                            xl:grid-cols-4
                            gap-8
                        "
                    >

                        {
                            otherAuthors.map(

                                item => (

                                    <Link
                                        key={item.id}
                                        href={`/authors/${item.slug}`}
                                        className="
                                            p-8
                                            border
                                            border-white/[0.08]
                                            rounded-3xl
                                            hover:border-[#c6a15b]/40
                                            transition
                                        "
                                    >

                                        <h3
                                            className="
                                                font-serif
                                                text-3xl
                                                mb-4
                                            "
                                        >
                                            {item.name}
                                        </h3>

                                        <p
                                            className="
                                                text-[#988d82]
                                                leading-relaxed
                                            "
                                        >
                                            {
                                                item.marketPosition ||
                                                item.brand
                                            }
                                        </p>

                                    </Link>

                                )

                            )
                        }

                    </div>

                </div>

            </section>

        </main>

    )

}