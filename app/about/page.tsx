import CinematicSection from "@/components/cinematic/core/CinematicSection"
import AmazonButton from "@/components/analytics/AmazonButton"
export default function AboutPage() {

    const territories = [
        "Relationships",
        "Identity",
        "Love",
        "Loneliness",
        "Memory",
        "Psychology",
        "Contemporary Life",
        "Meaning",
        "Transformation"
    ]

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
                    pt-24
                    md:pt-32
                    pb-24
                    md:pb-40
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

                        {/* LEFT */}

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
                                    About Obsidian House
                                </div>

                                <h1
                                    className="
                                    font-serif
                                    text-[clamp(3.6rem,6.5vw,5.8rem)]
                                    leading-[0.9]
                                    tracking-[-0.06em]
                                    max-w-[8ch]
                                "
                                >
                                    Human-centered
                                    contemporary
                                    literature.
                                </h1>

                            </div>

                        </CinematicSection>

                        {/* RIGHT */}

                        <CinematicSection delay={0.15}>

                            <div
                                className="
                                max-w-[540px]
                                lg:ml-auto
                            "
                            >

                                <p
                                    className="
                                    text-[28px]
                                    leading-[1.8]
                                    text-[#b8ada1]
                                "
                                >
                                    Stories about relationships,
                                    identity, loneliness, love,
                                    memory and emotional
                                    transformation.
                                    Literature for readers interested
                                    in the complexity of being human.
                                </p>

                                <div
                                    className="
                                    mt-10
                                    h-px
                                    bg-white/[0.08]
                                "
                                />

                                <p
                                    className="
                                    mt-10
                                    text-[18px]
                                    leading-[2]
                                    text-[#8f9a94]
                                "
                                >
                                    We publish contemporary literature
                                    focused on the emotional realities
                                    that shape everyday human life.
                                </p>

                            </div>

                        </CinematicSection>

                    </div>

                </div>

            </section>

            {/* CONTENT */}

            <section
                className="
                max-w-[1500px]
                mx-auto
                px-6
                md:px-12
                lg:px-[72px]
                py-24
                md:py-40
                grid
                md:grid-cols-2
                gap-20
                md:gap-32
            "
            >

                <CinematicSection>

                    <div>

                        <div
                            className="
                            mb-5
                            text-[10px]
                            uppercase
                            tracking-[0.35em]
                            text-[#8f7a58]
                        "
                        >
                            Philosophy
                        </div>

                        <p
                            className="
                            text-[24px]
                            leading-[2]
                            text-[#b8ada1]
                        "
                        >
                            Obsidian House publishes contemporary
                            literature about relationships,
                            identity, love, loneliness, memory
                            and emotional transformation.

                            <br /><br />

                            We are interested in the realities
                            people carry beneath ordinary life —
                            the conversations left unfinished,
                            the attachments that linger and the
                            quiet crises that shape who we become.

                            <br /><br />

                            Our stories are not built around
                            spectacle.

                            They are built around people.
                        </p>

                    </div>

                </CinematicSection>

                <CinematicSection delay={0.15}>

                    <div>

                        <div
                            className="
                            mb-5
                            text-[10px]
                            uppercase
                            tracking-[0.35em]
                            text-[#8f7a58]
                        "
                        >
                            Editorial Vision
                        </div>

                        <p
                            className="
                            text-[22px]
                            leading-[2]
                            text-[#8f9a94]
                        "
                        >
                            We believe literature remains
                            one of the few places where
                            complexity can survive.

                            <br /><br />

                            Our authors explore intimacy,
                            perception, attachment,
                            longing, grief and meaning
                            through distinct literary voices
                            united by a common commitment
                            to psychological depth and
                            emotional truth.

                            <br /><br />

                            Every Obsidian House book
                            begins with a simple question:

                            <br /><br />

                            What does it mean to be human today?
                        </p>

                    </div>

                </CinematicSection>

            </section>

            {/* EDITORIAL TERRITORIES */}

            <section
                className="
                max-w-[1500px]
                mx-auto
                px-6
                md:px-12
                lg:px-[72px]
                pb-32
                md:pb-40
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
                                font-light
                            "
                            >
                                {item}
                            </span>

                        </div>

                    ))}

                </div>

            </section>
            <section
                className="
        border-t
        border-white/[0.05]
        py-24
    "
            >

                <div
                    className="
            max-w-[1500px]
            mx-auto
            px-6
            md:px-12
            lg:px-[72px]
        "
                >

                    <div
                        className="
                max-w-[900px]
            "
                    >

                        <div
                            className="
                    text-[10px]
                    uppercase
                    tracking-[0.38em]
                    text-[#8f7a58]
                    mb-6
                "
                        >
                            Current Release
                        </div>

                        <h2
                            className="
                    font-serif
                    text-[clamp(2.5rem,4vw,4rem)]
                    leading-[0.95]
                    mb-6
                "
                        >
                            Everything Tender Eventually Breaks
                        </h2>

                        <p
                            className="
                    text-[20px]
                    leading-[1.9]
                    text-[#b8ada1]
                    mb-10
                    max-w-[700px]
                "
                        >
                            A psychological literary novel about
                            emotional dependence, loneliness and
                            invisible emotional violence.
                        </p>

                        <div
                            className="
                    flex
                    flex-wrap
                    gap-4
                "
                        >

                            <AmazonButton
                                book="everything-tender-eventually-breaks"
                                format="kindle"
                                source="about"
                                url="https://www.amazon.com/Everything-Tender-Eventually-Breaks-Lena-ebook/dp/B0H73C3T26/ref=tmm_kin_swatch_0"
                            >
                                Read on Kindle
                            </AmazonButton>

                            <AmazonButton
                                book="everything-tender-eventually-breaks"
                                format="paperback"
                                source="about"
                                url="https://www.amazon.com/Everything-Tender-Eventually-Breaks-Lena/dp/B0H73RN4K3"
                            >
                                Buy Paperback
                            </AmazonButton>

                        </div>

                    </div>

                </div>

            </section>
        </main>

    )

}
