import Link from "next/link"
import { notFound } from "next/navigation"

import { books } from "@/lib/books"

interface BookPageProps {

    params: Promise<{
        slug: string
    }>

}

export default async function BookPage({

    params

}: BookPageProps) {

    const {

        slug

    } = await params

    const book =
        books.find(

            item =>
                item.slug === slug

        )

    if (!book) {

        notFound()

    }

    return (

        <main className="min-h-screen bg-[#050505] text-[#f5efe6] overflow-hidden">

            {/* HERO */}

            <section className="relative overflow-hidden border-b border-white/[0.06]">

                {/* BACKGROUND */}

                <div className="absolute inset-0">

                    <div
                        className="
                            absolute
                            inset-0
                            bg-cover
                            bg-center
                            opacity-[0.10]
                            scale-105
                            blur-[2px]
                        "
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2000&auto=format&fit=crop')"
                        }}
                    />

                    <div className="absolute inset-0 bg-black/80" />

                    <div
                        className="
                            absolute
                            inset-0
                            bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)]
                        "
                    />

                </div>

                {/* CONTENT */}

                <div className="relative max-w-[1400px] mx-auto px-8 md:px-16 pt-28 pb-24">

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                        {/* COVER */}

                        <div className="lg:col-span-5 flex justify-center">

                            <div
                                className="
                                    overflow-hidden
                                    border
                                    border-white/[0.08]
                                    bg-[#0a0a0a]
                                    p-5
                                "
                            >

                                <img
                                    src="/covers/lena-cover.jpg"
                                    alt={book.title}
                                    className="
                                        w-full
                                        object-cover
                                    "
                                />

                            </div>

                        </div>

                        {/* INFO */}

                        <div className="lg:col-span-7">

                            <div className="max-w-3xl space-y-12">

                                {/* LABEL */}

                                <div className="uppercase tracking-[0.45em] text-[11px] text-[#c6aa7b]">

                                    Obsidian House

                                </div>

                                {/* TITLE */}

                                <div className="space-y-8">

                                    <h1
                                        className="
                                            font-serif
                                            text-[clamp(3.2rem,6vw,6.5rem)]
                                            leading-[0.9]
                                            tracking-[-0.06em]
                                            text-[#f8f4ee]
                                        "
                                    >

                                        {book.title}

                                    </h1>

                                    <p
                                        className="
                                            italic
                                            text-[clamp(1.2rem,2vw,2rem)]
                                            text-[#b7aa97]
                                        "
                                    >

                                        A novel by Lena Voss

                                    </p>

                                </div>

                                {/* OPENING */}

                                <div className="border-l border-[#c6aa7b]/30 pl-8">

                                    <p
                                        className="
                                            font-serif
                                            text-[clamp(1.5rem,2vw,2.4rem)]
                                            leading-[1.7]
                                            text-[#f0e7dc]
                                            whitespace-pre-line
                                        "
                                    >

                                        {book.openingParagraph}

                                    </p>

                                </div>

                                {/* PREMISE */}

                                <div className="max-w-2xl">

                                    <p
                                        className="
                                            text-[20px]
                                            leading-[1.8]
                                            text-[#ab9f90]
                                            whitespace-pre-line
                                        "
                                    >

                                        {book.premise}

                                    </p>

                                </div>

                                {/* BUTTONS */}

                                <div className="flex flex-wrap gap-5 pt-6">

    <Link
        href={`/books/${book.slug}/read`}
        className="
            px-8
            py-4
            bg-[#c6aa7b]
text-black
font-semibold
border border-[#c6aa7b]
            uppercase
            tracking-[0.24em]
            text-[11px]
            hover:bg-white
            transition-all
            duration-500
        "
    >
        Read Sample
    </Link>

    <a
  href="https://www.amazon.com/Everything-Tender-Eventually-Breaks-Lena-ebook/dp/B0H73C3T26/ref=tmm_kin_swatch_0"
  target="_blank"
  rel="noopener noreferrer"
  className="
    px-8
    py-4
    uppercase
tracking-[0.24em]
text-[11px]
    bg-[#c6a15b]
    text-black
    font-semibold
  "
>
  Read on Kindle
</a>

    <a
  href="https://www.amazon.com/Everything-Tender-Eventually-Breaks-Lena/dp/B0H73RN4K3/ref=tmm_pap_swatch_0"
  target="_blank"
  rel="noopener noreferrer"
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
  Buy Paperback
</a>

    <a
  href="https://www.amazon.com/stores/Lena-Voss/author/B0H75TLFLB?ref=ap_rdr&shoppingPortalEnabled=true&ccs_id=f4e2033f-44ce-4ae6-85bb-61be2fd6fc70"
  target="_blank"
  rel="noopener noreferrer"
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
  Amazon Author
</a>

</div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* EMOTIONAL CORE */}

            <section className="px-8 md:px-16 py-36 border-b border-white/[0.05]">

                <div className="max-w-[1500px] mx-auto">

                    <div className="mb-20">

                        <div className="uppercase tracking-[0.4em] text-[11px] text-[#c6aa7b]">

                            Emotional Core

                        </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                        {book.emotionalCore.map(

                            (item: string) => (

                                <div
                                    key={item}
                                    className="
                                        border
                                        border-white/[0.06]
                                        bg-white/[0.02]
                                        backdrop-blur-md
                                        p-8
                                    "
                                >

                                    <p
                                        className="
                                            font-serif
                                            text-[28px]
                                            leading-[1.6]
                                            text-[#f1e8dd]
                                        "
                                    >

                                        {item}

                                    </p>

                                </div>

                            )

                        )}

                    </div>

                </div>

            </section>

            {/* ATMOSPHERE */}

            <section className="px-8 md:px-16 py-36 border-b border-white/[0.05]">

                <div className="max-w-[1500px] mx-auto">

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">

                        {/* LEFT */}

                        <div className="lg:col-span-5 flex justify-center">

                            <div className="space-y-10">

                                <div className="uppercase tracking-[0.4em] text-[11px] text-[#c6aa7b]">

                                    The Atmosphere

                                </div>

                                <h2
                                    className="
                                        font-serif
                                        text-[clamp(2.5rem,4vw,5rem)]
                                        leading-[1.08]
                                        tracking-[-0.04em]
                                        text-[#f4ede3]
                                    "
                                >

                                    Rain against windows.
                                    Apartments filled with silence.
                                    Emotionally exhausted people
                                    surviving quietly.

                                </h2>

                            </div>

                        </div>

                        {/* RIGHT */}
                        
                        <div className="lg:col-span-7">

                            <div className="grid grid-cols-2 gap-5">

                                {book.atmosphere.map(

                                    (item: string) => (

                                        <div
                                            key={item}
                                            className="
                                                border
                                                border-white/[0.06]
                                                bg-white/[0.02]
                                                p-7
                                            "
                                        >

                                            <p
                                                className="
                                                    uppercase
                                                    tracking-[0.22em]
                                                    text-[11px]
                                                    text-[#d5c6b5]
                                                "
                                            >

                                                {item}

                                            </p>

                                        </div>

                                    )

                                )}

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* THEMES */}

            <section className="px-8 md:px-16 py-36">

                <div className="max-w-[1500px] mx-auto">

                    <div className="mb-20">

                        <div className="uppercase tracking-[0.4em] text-[11px] text-[#c6aa7b]">

                            Themes

                        </div>

                    </div>

                    <div className="flex flex-wrap gap-5">

                        {book.themes.map(

                            (theme: string) => (

                                <div
                                    key={theme}
                                    className="
                                        px-6
                                        py-4
                                        border
                                        border-white/[0.08]
                                        bg-white/[0.02]
                                    "
                                >

                                    <p
                                        className="
                                            uppercase
                                            tracking-[0.24em]
                                            text-[11px]
                                            text-[#d5c7b7]
                                        "
                                    >

                                        {theme}

                                    </p>

                                </div>

                            )

                        )}

                    </div>

                </div>

            </section>

        </main>

    )

}