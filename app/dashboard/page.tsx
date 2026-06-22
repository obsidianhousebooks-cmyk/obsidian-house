"use client"

import { useEffect, useState } from "react"

import { motion } from "framer-motion"

import {
    BookOpen,
    Sparkles
} from "lucide-react"

import { supabase } from "@/lib/supabase"

interface Book {
    id: string
    title: string
    subtitle: string
    cover: string
    created_at: string
}

export default function DashboardPage() {

    const [books, setBooks] = useState<Book[]>([])

    const [loading, setLoading] = useState(true)

    async function loadBooks() {

        try {

            const { data } = await supabase
                .from("books")
                .select("*")
                .order("created_at", {
                    ascending: false
                })

            setBooks(data || [])

        } catch (error) {

            console.log(error)

        } finally {

            setLoading(false)

        }

    }

    useEffect(() => {

        loadBooks()

    }, [])

    return (

        <main className="
            min-h-screen
            bg-black
            text-white
            overflow-hidden
            relative
        ">

            {/* BACKGROUND */}

            <div className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_top,#3b2f0a,transparent_40%)]
                opacity-40
            " />

            {/* CONTENT */}

            <section className="
                relative
                z-10
                max-w-7xl
                mx-auto
                px-6
                py-20
            ">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    <div className="
                        inline-flex
                        items-center
                        gap-3
                        border
                        border-yellow-500/20
                        bg-yellow-500/10
                        px-5
                        py-2
                        rounded-full
                        mb-8
                    ">

                        <Sparkles className="
                            w-4
                            h-4
                            text-yellow-400
                        " />

                        <span className="
                            text-sm
                            text-yellow-100
                            tracking-wide
                        ">

                            KDP MACHINE AI • LIBRARY

                        </span>

                    </div>

                    <h1 className="
                        text-6xl
                        md:text-7xl
                        font-black
                        leading-tight
                        max-w-5xl
                    ">

                        Sua
                        <span className="text-yellow-400">
                            {" "}biblioteca IA
                        </span>

                    </h1>

                    <p className="
                        text-zinc-400
                        text-xl
                        max-w-3xl
                        mt-8
                        leading-relaxed
                    ">

                        Todos os seus livros, projetos,
                        PDFs e capas gerados por inteligência artificial.

                    </p>

                </motion.div>

                {/* GRID */}

                {
                    loading ? (

                        <div className="
                            text-zinc-400
                            mt-20
                        ">

                            Carregando biblioteca...

                        </div>

                    ) : (

                        <div className="
                            grid
                            md:grid-cols-3
                            gap-8
                            mt-20
                        ">

                            {
                                books.map((book) => (

                                    <motion.div
                                        key={book.id}
                                        initial={{
                                            opacity: 0,
                                            y: 30
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0
                                        }}
                                        transition={{
                                            duration: 0.5
                                        }}
                                        className="
                                            group
                                            bg-white/5
                                            border
                                            border-white/10
                                            rounded-[32px]
                                            p-6
                                            backdrop-blur-xl
                                            hover:border-yellow-400/40
                                            transition-all
                                            duration-500
                                            hover:scale-[1.02]
                                            hover:shadow-[0_0_80px_rgba(255,215,0,0.12)]
                                        "
                                    >

                                        {
                                            book.cover ? (

                                                <div className="
                                                    flex
                                                    justify-center
                                                    mb-6
                                                ">

                                                    <img
                                                        src={book.cover}
                                                        alt={book.title}
                                                        className="
                                                            w-[80%]
                                                            rounded-2xl
                                                            shadow-2xl
                                                            border
                                                            border-white/10
                                                        "
                                                    />

                                                </div>

                                            ) : (

                                                <div className="
                                                    h-[320px]
                                                    rounded-2xl
                                                    bg-zinc-900
                                                    flex
                                                    items-center
                                                    justify-center
                                                    mb-6
                                                ">

                                                    <BookOpen className="
                                                        w-12
                                                        h-12
                                                        text-zinc-600
                                                    " />

                                                </div>

                                            )
                                        }

                                        <h2 className="
                                            text-2xl
                                            font-black
                                            leading-tight
                                        ">

                                            {book.title}

                                        </h2>

                                        <p className="
                                            text-zinc-400
                                            mt-4
                                            leading-relaxed
                                        ">

                                            {book.subtitle}

                                        </p>

                                        <div className="
                                            mt-6
                                            text-sm
                                            text-zinc-500
                                        ">

                                            {
                                                new Date(
                                                    book.created_at
                                                ).toLocaleDateString("pt-BR")
                                            }

                                        </div>

                                    </motion.div>

                                ))
                            }

                        </div>

                    )
                }

            </section>

        </main>

    )

}