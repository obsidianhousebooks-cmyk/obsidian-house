"use client"

import Link from "next/link"

export default function Header() {

    return (

        <header
            className="
                fixed
                top-0
                left-0
                right-0
                z-50
                pointer-events-none
            "
        >

            <div
                className="
                    max-w-[1720px]
                    mx-auto

                    px-[72px]
                    pt-8

                    flex
                    items-center
                    justify-between
                "
            >

                {/* LEFT */}

                <div className="pointer-events-auto">

                    <Link href="/">

                        <span
                            className="
                                text-[10px]
                                uppercase
                                tracking-[0.38em]
                                text-[#a88f67]
                                opacity-90
                            "
                        >
                            Obsidian House
                        </span>

                    </Link>

                </div>

                {/* RIGHT */}

                <div
                    className="
                        flex
                        items-center
                        gap-14
                        pointer-events-auto
                    "
                >

                    {/* NAV */}

                    <nav
                        className="
                            flex
                            items-center
                            gap-12
                        "
                    >

                        <Link
                            href="/authors"
                            className="
                                text-[10px]
                                uppercase
                                tracking-[0.34em]
                                text-[#b19c79]
                                hover:text-[#f5efe6]
                                transition-all
                                duration-500
                            "
                        >
                            Authors
                        </Link>

                        <Link
                            href="/books"
                            className="
                                text-[10px]
                                uppercase
                                tracking-[0.34em]
                                text-[#b19c79]
                                hover:text-[#f5efe6]
                                transition-all
                                duration-500
                            "
                        >
                            Books
                        </Link>

                        <Link
                            href="/journal"
                            className="
                                text-[10px]
                                uppercase
                                tracking-[0.34em]
                                text-[#b19c79]
                                hover:text-[#f5efe6]
                                transition-all
                                duration-500
                            "
                        >
                            Journal
                        </Link>

                        <Link
                            href="/about"
                            className="
                                text-[10px]
                                uppercase
                                tracking-[0.34em]
                                text-[#b19c79]
                                hover:text-[#f5efe6]
                                transition-all
                                duration-500
                            "
                        >
                            About
                        </Link>

                    </nav>

                    {/* LOGO */}

                    <Link href="/">

                        <img
                            src="/logo.jpg"
                            alt="Obsidian House"
                            className="
                                w-[68px]
                                h-[68px]
                                object-cover
                                opacity-80
                            "
                        />

                    </Link>

                </div>

            </div>

        </header>

    )

}