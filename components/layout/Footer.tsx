import Link from "next/link"

export default function Footer() {

    return (

        <footer className="border-t border-white/[0.05] bg-black">

            <div className="max-w-[1600px] mx-auto px-10 py-20">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

                    {/* BRAND */}

                    <div>

                        <div className="mb-6">

                            <img
                                src="/logo.jpg"
                                alt="Obsidian House"
                                className="w-[90px] opacity-80"
                            />

                        </div>

                        <p
                            className="
                text-[15px]
                leading-[1.9]
                text-[#7d7468]
                max-w-[320px]
              "
                        >
                            Quiet literary fiction for emotionally
                            observant readers.
                        </p>

                    </div>

                    {/* NAV */}

                    <div>

                        <div className="mb-5 text-[11px] uppercase tracking-[0.32em] text-[#8f7a58]">
                            Navigation
                        </div>

                        <div className="flex flex-col gap-4">

                            <Link href="/authors" className="text-[#b8b0a4] hover:text-white">
                                Authors
                            </Link>

                            <Link href="/books" className="text-[#b8b0a4] hover:text-white">
                                Books
                            </Link>

                            <Link href="/journal" className="text-[#b8b0a4] hover:text-white">
                                Journal
                            </Link>

                            <Link href="/about" className="text-[#b8b0a4] hover:text-white">
                                About
                            </Link>

                        </div>

                    </div>

                    {/* ATMOSPHERE */}

                    <div>

                        <div className="mb-5 text-[11px] uppercase tracking-[0.32em] text-[#8f7a58]">
                            Obsidian House
                        </div>

                        <p
                            className="
                text-[#7d7468]
                leading-[2]
                max-w-[320px]
              "
                        >
                            Stories about intimacy, emotional collapse,
                            silence, memory and psychological realism.
                        </p>

                    </div>

                </div>

                <div
                    className="
            mt-20
            pt-8
            border-t border-white/[0.04]
            text-[#5f5a52]
            text-sm
          "
                >
                    © 2026 Obsidian House. All rights reserved.
                </div>

            </div>

        </footer>

    )

}