import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

import { books } from "@/lib/books"
import AmazonButton from "@/components/analytics/AmazonButton"

interface PageProps {
    params: Promise<{
        slug: string
    }>
}

export default async function BookPage({
    params
}: PageProps) {

    const { slug } = await params

    const book = books.find(
        (item) => item.slug === slug
    )

    if (!book) {
        notFound()
    }

    return (

        <main className="bg-white text-neutral-900">

            {/*
            ━━━━━━━━━━━━━━━━━━━
            HERO
            ━━━━━━━━━━━━━━━━━━━
            */}

            <section className="border-b border-neutral-200">

                <div className="mx-auto max-w-7xl px-6 py-20">

                    <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

                        <div>

                            <div className="mb-5 inline-flex items-center rounded-full border border-neutral-300 px-4 py-2 text-xs uppercase tracking-[0.25em] text-neutral-600">

                                Obsidian House

                            </div>

                            <h1 className="mb-6 text-5xl font-light leading-tight md:text-6xl">

                                {book.title}

                            </h1>

                            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-neutral-500">

                                {book.genre}
                            </p>

                            <div className="mb-8 h-px w-24 bg-neutral-300" />

                            <p className="max-w-2xl whitespace-pre-line text-lg leading-8 text-neutral-700">

                                {book.premise}

                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">

                                <Link
                                    href={`/books/${book.slug}/read`}
                                    className="rounded-full bg-black px-8 py-4 text-sm font-medium text-white transition hover:opacity-90"
                                >
                                    Read Sample
                                </Link>

                                <AmazonButton
                                    book={book.slug}
                                    format="kindle"
                                    source="book"
                                    url="https://www.amazon.com/Everything-Tender-Eventually-Breaks-Lena-ebook/dp/B0H73C3T26/ref=tmm_kin_swatch_0"
                                >
                                    Kindle Edition
                                </AmazonButton>

                                <AmazonButton
                                    book={book.slug}
                                    format="paperback"
                                    source="book"
                                    url="https://www.amazon.com/Everything-Tender-Eventually-Breaks-Lena/dp/B0H73RN4K3/ref=tmm_pap_swatch_0"
                                >
                                    Paperback
                                </AmazonButton>

                            </div>

                        </div>

                        <div className="mx-auto w-full max-w-md">

                            <div className="overflow-hidden rounded-3xl border border-neutral-200 shadow-2xl">

                                <Image
                                    src="/covers/lena-cover.jpg"
                                    alt={book.title}
                                    width={900}
                                    height={1400}
                                    className="h-auto w-full object-cover"
                                    priority
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/*
            ━━━━━━━━━━━━━━━━━━━
            OPENING PARAGRAPH
            ━━━━━━━━━━━━━━━━━━━
            */}

            <section className="border-b border-neutral-200">

                <div className="mx-auto max-w-4xl px-6 py-20">

                    <p className="mb-6 text-xs uppercase tracking-[0.3em] text-neutral-500">

                        Opening Paragraph

                    </p>

                    <div className="h-px w-20 bg-neutral-300 mb-8" />

                    <div className="whitespace-pre-line text-xl leading-10 text-neutral-700">

                        {book.openingParagraph}

                    </div>

                </div>

            </section>

            {/*
            ━━━━━━━━━━━━━━━━━━━
            WHY READERS STAY
            ━━━━━━━━━━━━━━━━━━━
            */}

            <section className="border-b border-neutral-200">

                <div className="mx-auto max-w-5xl px-6 py-20">

                    <h2 className="mb-10 text-4xl font-light">

                        Why Readers Stay With This Story
                    </h2>

                    <div className="grid gap-6 md:grid-cols-3">

                        <div className="rounded-3xl border border-neutral-200 p-8">

                            <h3 className="mb-4 text-lg font-medium">

                                Emotional Precision

                            </h3>

                            <p className="leading-8 text-neutral-700">

                                Every interaction carries emotional weight.
                                The story focuses on subtle shifts that slowly
                                transform ordinary moments into life-changing
                                experiences.

                            </p>

                        </div>

                        <div className="rounded-3xl border border-neutral-200 p-8">

                            <h3 className="mb-4 text-lg font-medium">

                                Psychological Intimacy

                            </h3>

                            <p className="leading-8 text-neutral-700">

                                Rather than relying on spectacle, the novel
                                explores vulnerability, attachment and the
                                dangerous comfort of being deeply understood.

                            </p>

                        </div>

                        <div className="rounded-3xl border border-neutral-200 p-8">

                            <h3 className="mb-4 text-lg font-medium">

                                Quiet Suspense

                            </h3>

                            <p className="leading-8 text-neutral-700">

                                The tension grows through emotional dependency,
                                uncertainty and invisible psychological
                                escalation.

                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/*
            ━━━━━━━━━━━━━━━━━━━
            EMOTIONAL CORE
            ━━━━━━━━━━━━━━━━━━━
            */}

            <section className="border-b border-neutral-200">

                <div className="mx-auto max-w-6xl px-6 py-20">

                    <h2 className="mb-12 text-4xl font-light">

                        Emotional Core

                    </h2>

                    <div className="grid gap-4 md:grid-cols-2">

                        {book.emotionalCore.map((item) => (

                            <div
                                key={item}
                                className="rounded-2xl border border-neutral-200 p-6"
                            >

                                <p className="capitalize text-neutral-800">

                                    {item}

                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/*
            ━━━━━━━━━━━━━━━━━━━
            ATMOSPHERE
            ━━━━━━━━━━━━━━━━━━━
            */}

            <section className="border-b border-neutral-200 bg-neutral-50">

                <div className="mx-auto max-w-6xl px-6 py-20">

                    <h2 className="mb-12 text-4xl font-light">

                        Atmosphere
                    </h2>

                    <div className="grid gap-4 md:grid-cols-4">

                        {book.atmosphere.map((item) => (

                            <div
                                key={item}
                                className="rounded-2xl bg-white p-6 shadow-sm"
                            >

                                <p className="capitalize text-neutral-700">

                                    {item}

                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/*
            ━━━━━━━━━━━━━━━━━━━
            THEMES
            ━━━━━━━━━━━━━━━━━━━
            */}

            <section className="border-b border-neutral-200">

                <div className="mx-auto max-w-6xl px-6 py-20">

                    <h2 className="mb-12 text-4xl font-light">

                        Themes

                    </h2>

                    <div className="flex flex-wrap gap-4">

                        {book.themes.map((theme) => (

                            <span
                                key={theme}
                                className="rounded-full border border-neutral-300 px-5 py-3 text-sm"
                            >
                                {theme}
                            </span>

                        ))}

                    </div>

                </div>

            </section>

            {/*
            ━━━━━━━━━━━━━━━━━━━
            FIRST CHAPTER
            ━━━━━━━━━━━━━━━━━━━
            */}

            <section className="border-b border-neutral-200">

                <div className="mx-auto max-w-4xl px-6 py-20 text-center">

                    <p className="mb-4 text-xs uppercase tracking-[0.25em] text-neutral-500">

                        First Chapter

                    </p>

                    <h2 className="mb-6 text-4xl font-light">

                        {book.chapters?.[0]?.title}

                    </h2>

                    <Link
                        href={`/books/${book.slug}/read`}
                        className="inline-flex rounded-full bg-black px-8 py-4 text-white"
                    >
                        Start Reading
                    </Link>

                </div>

            </section>

            {/*
            ━━━━━━━━━━━━━━━━━━━
            MEET LENA VOSS
            ━━━━━━━━━━━━━━━━━━━
            */}

            <section className="border-b border-neutral-200">

                <div className="mx-auto max-w-4xl px-6 py-20 text-center">

                    <p className="mb-4 text-xs uppercase tracking-[0.25em] text-neutral-500">

                        Author

                    </p>

                    <h2 className="mb-8 text-4xl font-light">

                        Meet Lena Voss

                    </h2>

                    <p className="mx-auto max-w-3xl text-lg leading-9 text-neutral-700">

                        Lena Voss writes emotionally immersive literary fiction
                        exploring attachment, vulnerability, loneliness and
                        psychological intimacy. Her stories focus on the
                        invisible emotional forces that quietly reshape lives.

                    </p>

                    <div className="mt-10">

                        <AmazonButton
                            book={book.slug}
                            format="author_page"
                            source="book"
                            url="https://www.amazon.com/stores/Lena-Voss/author/B0H75TLFLB?ref=ap_rdr&shoppingPortalEnabled=true&ccs_id=e740412d-d926-442f-b826-c805ecda0930"
                        >
                            Visit Amazon Author Page
                        </AmazonButton>

                    </div>

                </div>

            </section>

            {/*
            ━━━━━━━━━━━━━━━━━━━
            FINAL CTA
            ━━━━━━━━━━━━━━━━━━━
            */}

            <section>

                <div className="mx-auto max-w-5xl px-6 py-24 text-center">

                    <h2 className="mb-6 text-5xl font-light">

                        Continue The Story

                    </h2>

                    <p className="mx-auto mb-12 max-w-3xl text-lg leading-8 text-neutral-700">

                        Begin with the sample chapter, then continue the journey
                        through one of Obsidian House's most emotionally
                        immersive novels.

                    </p>

                    <div className="flex flex-wrap justify-center gap-4">

                        <Link
                            href={`/books/${book.slug}/read`}
                            className="rounded-full bg-black px-8 py-4 text-white"
                        >
                            Read Sample
                        </Link>

                        <AmazonButton
                            book={book.slug}
                            format="kindle"
                            source="book"
                            url="https://www.amazon.com/Everything-Tender-Eventually-Breaks-Lena-ebook/dp/B0H73C3T26/ref=tmm_kin_swatch_0"
                        >
                            Buy Kindle
                        </AmazonButton>

                        <AmazonButton
                            book={book.slug}
                            format="paperback"
                            source="book"
                            url="https://www.amazon.com/Everything-Tender-Eventually-Breaks-Lena/dp/B0H73RN4K3/ref=tmm_pap_swatch_0"
                        >
                            Buy Paperback
                        </AmazonButton>

                    </div>

                </div>

            </section>

        </main>

    )

}