import CinematicSection from "@/components/cinematic/core/CinematicSection"

export default function JournalPage() {

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
                    relative
                    border-b
                    border-white/[0.05]
                    overflow-hidden
                "
            >

                {/* BACKGROUND */}

                <div
                    className="
                        absolute
                        inset-0
                        opacity-[0.04]
                    "
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=2000&auto=format&fit=crop')",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                />

                <div className="absolute inset-0 bg-black/80" />

                {/* CONTENT */}

                <div
                    className="
                        relative
                        max-w-[1600px]
                        mx-auto
                        px-6
                        md:px-12
                        lg:px-[72px]
                        pt-24
                        md:pt-32
                        pb-24
                        md:pb-40
                    "
                >

                    <div className="max-w-[900px]">

                        <div
                            className="
                                mb-6
                                text-[11px]
                                uppercase
                                tracking-[0.4em]
                                text-[#8f7a58]
                            "
                        >
                            Obsidian Journal
                        </div>

                        <CinematicSection>

                            <h1
                                className="
                                    font-serif
                                    text-[clamp(4rem,8vw,7rem)]
                                    leading-[0.9]
                                    tracking-[-0.06em]
                                    max-w-[8ch]
                                "
                            >
                                Notes on silence,
                                intimacy and emotional fiction.
                            </h1>

                        </CinematicSection>

                        <CinematicSection delay={0.12}>

                            <p
                                className="
                                    mt-12
                                    max-w-[720px]
                                    text-[22px]
                                    leading-[2]
                                    text-[#a89f94]
                                "
                            >
                                Editorial reflections, literary atmosphere,
                                emotional realism and the architecture
                                behind Obsidian House stories.
                            </p>

                        </CinematicSection>

                    </div>

                </div>

            </section>

            {/* ARTICLES */}

            <section
                className="
                    max-w-[1600px]
                    mx-auto
                    px-6
                    md:px-12
                    lg:px-[72px]
                    py-24
                    md:py-40
                    grid
                    gap-20
                "
            >

                {[
                    {
                        title:
                            "Why quiet emotional fiction creates deeper psychological immersion",
                        category:
                            "Editorial Essay"
                    },
                    {
                        title:
                            "The architecture of loneliness in contemporary literary fiction",
                        category:
                            "Literary Analysis"
                    },
                    {
                        title:
                            "How emotional restraint creates tension stronger than plot twists",
                        category:
                            "Craft"
                    }
                ].map((article, index) => (

                    <CinematicSection
                        key={index}
                        delay={index * 0.08}
                    >

                        <article
                            className="
                                border-b
                                border-white/[0.05]
                                pb-16
                            "
                        >

                            <div
                                className="
                                    mb-5
                                    text-[10px]
                                    uppercase
                                    tracking-[0.35em]
                                    text-[#8f7a58]
                                "
                            >
                                {article.category}
                            </div>

                            <h2
                                className="
                                    font-serif
                                    text-[clamp(2.2rem,4vw,4rem)]
                                    leading-[1]
                                    tracking-[-0.04em]
                                    max-w-[14ch]
                                "
                            >
                                {article.title}
                            </h2>

                        </article>

                    </CinematicSection>

                ))}

            </section>

        </main>

    )

}