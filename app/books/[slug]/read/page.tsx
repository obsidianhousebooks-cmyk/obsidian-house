import AmazonButton from "@/components/analytics/AmazonButton"
import Link from "next/link"

import Image from "next/image"

import { books } from "@/lib/books"
import FloatingQuote from "@/components/cinematic/motion/FloatingQuote"

import ContinueReading from "@/components/cinematic/reading/ContinueReading"

import QuoteBlock from "@/components/cinematic/reading/QuoteBlock"

import ImmersionMode from "@/components/cinematic/reading/ImmersionMode"

import ReadingProgress from "@/components/cinematic/reading/ReadingProgress"

import AmbientSound from "@/components/cinematic/audio/AmbientSound"

import CinematicSection from "@/components/cinematic/core/CinematicSection"

interface ReadPageProps {

    params: Promise<{
        slug: string
    }>

}

export default async function ReadPage({
    params
}: ReadPageProps) {

    const { slug } = await params

    const book =
        books.find(
            (item) =>
                item.slug === slug
        )

    if (!book) {

        return (

            <main className="min-h-screen bg-black text-white flex items-center justify-center">

                <p className="uppercase tracking-[0.3em] text-sm text-neutral-500">
                    Book not found
                </p>

            </main>

        )

    }

    const firstChapter =
        book.chapters?.[0]

    return (

        <main className="bg-[#050505] text-[#f5efe6] overflow-hidden">

            <FloatingQuote
                quote="perhaps forever happened quietly"
                top="18%"
                left="6%"
                delay={0.4}
            />

            <FloatingQuote
                quote="love stopped feeling temporary"
                top="52%"
                left="72%"
                delay={0.8}
            />

            <FloatingQuote
                quote="two hearts stopped searching for exits"
                top="82%"
                left="8%"
                delay={1.2}
            />
            <ImmersionMode>

                <ReadingProgress />

                <AmbientSound />

                <ContinueReading slug={book.slug} />

                {/* HERO */}

                <section
                    className="
                    min-h-screen
                    border-b
                    border-white/[0.06]
                "
                >

                    <div
                        className="
                        grid
                        lg:grid-cols-2
                        min-h-screen
                    "
                    >

                        {/* COVER */}

                        <div
                            className="
                            relative
                            min-h-[100vh]
                            overflow-hidden
                        "
                        >

                            <div
                                className="
                                absolute
                                inset-0
                                scale-[1.04]
                            "
                            >

                                <Image
                                    src="/covers/lena-cover.jpg"
                                    alt={book.title}
                                    fill
                                    priority
                                    sizes="50vw"
                                    className="
                                    object-cover
                                    opacity-70
                                "
                                />

                            </div>

                            <div
                                className="
                                absolute
                                inset-0
                                bg-black/45
                            "
                            />

                            <div
                                className="
                                absolute
                                inset-0
                                opacity-[0.04]
                                mix-blend-screen
                            "
                                style={{
                                    backgroundImage:
                                        "url('https://grainy-gradients.vercel.app/noise.svg')"
                                }}
                            />

                        </div>

                        {/* TEXT */}

                        <div
                            className="
                            flex
                            items-center
                            border-l
                            border-white/[0.06]
                        "
                        >

                            <div
                                className="
                                w-full
                                px-8
                                md:px-16
                                py-24
                            "
                            >

                                <CinematicSection>

                                    <div
                                        className="
                                        uppercase
                                        tracking-[0.38em]
                                        text-[11px]
                                        text-[#b89565]
                                        mb-6
                                    "
                                    >

                                        Literary Experience

                                    </div>

                                    <div
                                        className="
        mt-8
        flex
        flex-wrap
        gap-4
    "
                                    >

                                        <AmazonButton
                                            book={book.slug}
                                            format="kindle"
                                            source="sample"
                                            url="https://www.amazon.com/Everything-Tender-Eventually-Breaks-Lena-ebook/dp/B0H73C3T26"
                                        >
                                            Read on Kindle
                                        </AmazonButton>

                                        <AmazonButton
                                            book={book.slug}
                                            format="paperback"
                                            source="sample"
                                            url="https://www.amazon.com/Everything-Tender-Eventually-Breaks-Lena/dp/B0H73RN4K3"
                                        >
                                            Buy Paperback
                                        </AmazonButton>

                                    </div>

                                </CinematicSection>

                                <CinematicSection delay={0.15}>

                                    <h1
                                        className="
                                        font-serif
                                        text-[clamp(4rem,8vw,7rem)]
                                        leading-[0.9]
                                        tracking-[-0.05em]
                                        max-w-[8ch]
                                        text-[#f8f3ed]
                                    "
                                        style={{
                                            textShadow:
                                                "0 0 24px rgba(184,149,101,0.08)"
                                        }}
                                    >

                                        {book.title}

                                    </h1>

                                </CinematicSection>

                                <CinematicSection delay={0.3}>

                                    <p
                                        className="
                                        mt-10
                                        max-w-2xl
                                        text-[clamp(1.5rem,2vw,2.3rem)]
                                        leading-[1.8]
                                        text-[#d7cec2]
                                    "
                                    >

                                        {book.premise}

                                    </p>

                                </CinematicSection>

                                <CinematicSection delay={0.45}>

                                    <blockquote
                                        className="
                                        mt-10
                                        border-l
                                        border-[#b89565]
                                        pl-6
                                        italic
                                        text-[clamp(1.8rem,2vw,3rem)]
                                        leading-[1.6]
                                        text-[#d2c5b6]
                                        max-w-3xl
                                    "
                                    >

                                        “There are certain kinds of loneliness that only become visible in the presence of another person.”

                                    </blockquote>

                                </CinematicSection>

                                <CinematicSection delay={0.6}>

                                    <div className="mt-10">

                                        <Link
                                            href="#chapter-preview"
                                            className="
                                            inline-flex
                                            items-center
                                            gap-4
                                            uppercase
                                            tracking-[0.28em]
                                            text-[11px]
                                            text-[#d6b07c]
                                            hover:text-[#fff]
                                            transition-all
                                            duration-500
                                        "
                                        >

                                            Start Reading

                                            <span>
                                                →
                                            </span>

                                        </Link>

                                    </div>

                                    <div
                                        className="
        mt-8
        flex
        flex-wrap
        gap-4
    "
                                    >

                                        <AmazonButton
                                            book={book.slug}
                                            format="kindle"
                                            source="sample"
                                            url="https://www.amazon.com/Everything-Tender-Eventually-Breaks-Lena-ebook/dp/B0H73C3T26"
                                        >
                                            Read on Kindle
                                        </AmazonButton>

                                        <AmazonButton
                                            book={book.slug}
                                            format="paperback"
                                            source="sample"
                                            url="https://www.amazon.com/Everything-Tender-Eventually-Breaks-Lena/dp/B0H73RN4K3"
                                        >
                                            Buy Paperback
                                        </AmazonButton>

                                    </div>

                                </CinematicSection>

                            </div>

                        </div>

                    </div>

                </section>

                {/* CHAPTER */}

                <section
                    id="chapter-preview"
                    className="
                    px-8
                    py-32
                "
                >

                    <div className="max-w-7xl mx-auto">

                        <div
                            className="
                            grid
                            lg:grid-cols-[420px_1fr]
                            gap-24
                        "
                        >

                            <CinematicSection>

                                <div className="sticky top-24">

                                    <div
                                        className="
                                        uppercase
                                        tracking-[0.32em]
                                        text-[11px]
                                        text-[#8f7a58]
                                        mb-8
                                    "
                                    >

                                        Chapter One

                                    </div>

                                    <h2
                                        className="
                                        font-serif
                                        text-[clamp(4rem,7vw,6rem)]
                                        leading-[0.92]
                                        tracking-[-0.05em]
                                        text-[#f4eee7]
                                    "
                                    >

                                        {firstChapter?.title || "Untitled Chapter"}

                                    </h2>

                                </div>

                            </CinematicSection>

                            <CinematicSection delay={0.2}>

                                <div
                                    className="
                                    space-y-12
                                    text-[clamp(2rem,2vw,2.4rem)]
                                    leading-[2]
                                    text-[#ddd3c7]
                                    font-light
                                    max-w-4xl
                                "
                                >


                                    <div className="space-y-24">

                                        <p className="whitespace-pre-line">

                                            {book.openingParagraph}

                                        </p>

                                        <QuoteBlock>

                                            perhaps forever was never a promise people made.

                                        </QuoteBlock>

                                    </div>



                                </div>

                            </CinematicSection>

                        </div>

                    </div>

                </section>

            </ImmersionMode>

        </main>

    )

}