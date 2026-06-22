import Image from "next/image"
import Link from "next/link"

import CinematicSection from "@/components/cinematic/core/CinematicSection"

const authors = [

    {
        name: "Lena Voss",
        status: "Published Author",
        slug: "lena-voss",
        image: "/authors/lena-voss/Lena Voss.png",
        description:
            "Psychological literary fiction exploring intimacy, memory, obsession and emotional transformation."
    },

    {
        name: "Adrian Veil",
        status: "Editorial Author",
        slug: "adrian-veil",
        image: "/authors/adrian-veil/adrian-veil.jpg",
        description:
            "Stories about power, emotional control and the hidden tensions inside ordinary relationships."
    },

    {
        name: "Clara Vale",
        status: "Editorial Author",
        slug: "clara-vale",
        image: "/authors/clara-vale/clara-vale.jpg",
        description:
            "Contemporary literature about love, attachment, vulnerability and the fragile architecture of intimacy."
    },

    {
        name: "Elias Moreau",
        status: "Editorial Author",
        slug: "elias-moreau",
        image: "/authors/elias-moreau/elias-moreau.jpg",
        description:
            "Stories exploring technology, perception, identity and the psychological effects of modern life."
    },

    {
        name: "Noa Arden",
        status: "Editorial Author",
        slug: "noa-arden",
        image: "/authors/noa-arden/noa-arden.jpg",
        description:
            "Quiet literary fiction about solitude, memory, meaning and inner transformation."
    }

]

const territories = [

    "Relationships",
    "Identity",
    "Love",
    "Memory",
    "Loneliness",
    "Psychology",
    "Technology",
    "Meaning",
    "Transformation"

]


export default function AuthorsPage() {

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
                    border-white/[0.05]
                "
            >

                <div
                    className="
                        max-w-[1600px]
                        mx-auto
                        px-6
                        md:px-12
                        lg:px-[72px]
                        py-32
                    "
                >

                    <div
                        className="
                            grid
                            lg:grid-cols-2
                            gap-24
                            items-end
                        "
                    >

                        <CinematicSection>

                            <div>

                                <div
                                    className="
                                        mb-8
                                        text-[11px]
                                        uppercase
                                        tracking-[0.42em]
                                        text-[#8f7a58]
                                    "
                                >
                                    Authors
                                </div>


                                <h1
                                    className="
                                        font-serif
                                        text-[clamp(4rem,8vw,7rem)]
                                        leading-[0.9]
                                        tracking-[-0.06em]
                                        max-w-[8ch]
                                    "
                                >

                                    Five voices.
                                    One vision.

                                </h1>

                            </div>

                        </CinematicSection>


                        <CinematicSection delay={0.15}>

                            <div
                                className="
                                    max-w-[560px]
                                    lg:ml-auto
                                "
                            >

                                <p
                                    className="
                                        text-[26px]
                                        leading-[1.9]
                                        text-[#b8ada1]
                                    "
                                >

                                    Stories about intimacy,
                                    memory, identity,
                                    contradiction and
                                    emotional truth.

                                </p>


                                <p
                                    className="
                                        mt-10
                                        text-[18px]
                                        leading-[2]
                                        text-[#8f9a94]
                                    "
                                >

                                    Obsidian House authors explore
                                    different territories of human
                                    experience while sharing a commitment
                                    to psychological depth.

                                </p>


                            </div>


                        </CinematicSection>


                    </div>


                </div>


            </section>



            {/* AUTHORS */}


            <section

                className="
                    max-w-[1500px]
                    mx-auto
                    px-6
                    md:px-12
                    lg:px-[72px]
                    py-32
                "

            >


                <div

                    className="
                        grid
                        md:grid-cols-2
                        xl:grid-cols-3
                        gap-16
                    "

                >


                    {authors.map((author) => (

                        <CinematicSection key={author.slug}>

                            <Link

                                href={`/authors/${author.slug}`}

                                className="
                                    group
                                    block
                                "

                            >


                                <div

                                    className="
                                        relative
                                        aspect-[4/5]
                                        overflow-hidden
                                        mb-8
                                        bg-black
                                    "

                                >


                                    <Image

                                        src={author.image}

                                        alt={author.name}

                                        fill

                                        className="
                                            object-cover
                                            grayscale
                                            group-hover:grayscale-0
                                            duration-700
                                            scale-100
                                            group-hover:scale-105
                                        "

                                    />


                                </div>



                                <div

                                    className="
                                        mb-4
                                        text-[10px]
                                        uppercase
                                        tracking-[0.35em]
                                        text-[#8f7a58]
                                    "

                                >

                                    {author.status}


                                </div>



                                <h2

                                    className="
                                        font-serif
                                        text-[42px]
                                        mb-6
                                    "

                                >

                                    {author.name}


                                </h2>



                                <p

                                    className="
                                        text-[18px]
                                        leading-[1.9]
                                        text-[#8f9a94]
                                    "

                                >

                                    {author.description}


                                </p>


                            </Link>


                        </CinematicSection>


                    ))}


                </div>


            </section>



            {/* TERRITORIES */}


            <section

                className="
                    max-w-[1500px]
                    mx-auto
                    px-6
                    md:px-12
                    lg:px-[72px]
                    pb-40
                "

            >


                <div

                    className="
                        mb-16
                        text-[10px]
                        uppercase
                        tracking-[0.38em]
                        text-[#8f7a58]
                    "

                >

                    Editorial Territories


                </div>



                <div

                    className="
                        grid
                        md:grid-cols-3
                        gap-y-8
                        gap-x-20
                    "

                >


                    {territories.map((item) => (

                        <div

                            key={item}

                            className="
                                border-t
                                border-white/[0.05]
                                pt-5
                            "

                        >


                            <span

                                className="
                                    text-[22px]
                                    text-[#d8c7af]
                                "

                            >

                                {item}


                            </span>


                        </div>


                    ))}


                </div>


            </section>


        </main>

    )

}