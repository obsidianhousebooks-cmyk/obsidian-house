"use client"

import { useState } from "react"

import Image from "next/image"

import {

    BookOpen,

    Loader2,

    Save

} from "lucide-react"

import { supabase } from "@/lib/supabase"

import { cn } from "@/lib/utils"

interface Props {

    title: string

    subtitle: string

}

export default function TitleCard({

    title,

    subtitle

}: Props) {

    const [cover, setCover] =
        useState("")

    const [saving, setSaving] =
        useState(false)

    const [loadingCover, setLoadingCover] =
        useState(false)

    const [loadingBook, setLoadingBook] =
        useState(false)

    const [loadingLabel, setLoadingLabel] =
        useState("")

    /*
    ━━━━━━━━━━━━━━━━━━━
    GENERATE COVER
    ━━━━━━━━━━━━━━━━━━━
    */

    async function generateCover() {

        try {

            setLoadingCover(true)

            setLoadingLabel(
                "Construindo identidade visual..."
            )

            const response =
                await fetch("/api/generate-cover", {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    body: JSON.stringify({

                        title,

                        subtitle

                    })

                })

            const data =
                await response.json()

            if (

                data.image

            ) {

                setCover(
                    data.image
                )

            }

        } catch (error) {

            console.error(error)

        } finally {

            setLoadingCover(false)

            setLoadingLabel("")

        }

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    GENERATE BOOK
    ━━━━━━━━━━━━━━━━━━━
    */

    async function generateBook() {

        try {

            setLoadingBook(true)

            setLoadingLabel(
                "Gerando obra..."
            )

            /*
            ━━━━━━━━━━━━━━━━━━━
            GENERATE BOOK
            ━━━━━━━━━━━━━━━━━━━
            */

            const response =
                await fetch("/api/generate-book", {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    body: JSON.stringify({

                        topic:
                            `${title} ${subtitle}`,

                        language:
                            "Português"

                    })

                })

            const data =
                await response.json()

            if (

                !data.success

            ) {

                throw new Error(
                    "Erro ao gerar livro"
                )

            }

            /*
            ━━━━━━━━━━━━━━━━━━━
            GENERATE PDF
            ━━━━━━━━━━━━━━━━━━━
            */

            const pdfResponse =
                await fetch("/api/generate-pdf", {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    body: JSON.stringify({

                        title:
                            data.title,

                        subtitle:
                            data.subtitle,

                        introduction:
                            data.introduction,

                        chapters:
                            data.chapters,

                        conclusion:
                            data.conclusion,

                        cover

                    })

                })

            const pdfData =
                await pdfResponse.json()

            /*
            ━━━━━━━━━━━━━━━━━━━
            DOWNLOAD
            ━━━━━━━━━━━━━━━━━━━
            */

            if (

                pdfData.url

            ) {

                const link =
                    document.createElement("a")

                link.href =
                    pdfData.url

                link.target =
                    "_blank"

                link.download =
                    `${title}.pdf`

                document.body.appendChild(
                    link
                )

                link.click()

                document.body.removeChild(
                    link
                )

            }

        } catch (error) {

            console.error(`

━━━━━━━━━━━━━━━━━━━
TITLE CARD ERROR
━━━━━━━━━━━━━━━━━━━

`, error)

        } finally {

            setLoadingBook(false)

            setLoadingLabel("")

        }

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    SAVE
    ━━━━━━━━━━━━━━━━━━━
    */

    async function saveProject() {

        try {

            setSaving(true)

            setLoadingLabel(
                "Salvando..."
            )

            await supabase

                .from("books")

                .insert({

                    title,

                    subtitle,

                    cover

                })

        } catch (error) {

            console.error(error)

        } finally {

            setSaving(false)

            setLoadingLabel("")

        }

    }

    return (

        <div className="w-full border border-black/[0.06] bg-[#fdfcf9]">

            {/* COVER */}

            {

                cover && (

                    <div className="border-b border-black/[0.06]">

                        <Image

                            src={cover}

                            alt={title}

                            width={1200}

                            height={1800}

                            className="w-full h-auto object-cover"

                        />

                    </div>

                )

            }

            {/* CONTENT */}

            <div className="px-10 py-12">

                <div className="max-w-[760px]">

                    <h1 className="text-[3.2rem] leading-[0.95] tracking-[-0.06em] text-[#111111]">

                        {title}

                    </h1>

                    {

                        subtitle && (

                            <p className="mt-8 text-[1.08rem] leading-[2rem] text-[#5f5a54]">

                                {subtitle}

                            </p>

                        )

                    }

                </div>

                {/* ACTIONS */}

                <div className="mt-14 flex flex-wrap gap-4">

                    <button

                        onClick={generateBook}

                        disabled={loadingBook}

                        className={cn(

                            "flex items-center gap-3",

                            "px-6 py-4",

                            "bg-[#111111]",

                            "text-white",

                            "text-[0.78rem]",

                            "tracking-[0.16em]",

                            "uppercase"

                        )}

                    >

                        {

                            loadingBook
                                ? (
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                )
                                : (
                                    <BookOpen className="w-4 h-4" />
                                )

                        }

                        {

                            loadingBook
                                ? "Gerando"
                                : "Gerar obra"

                        }

                    </button>

                    <button

                        onClick={generateCover}

                        disabled={loadingCover}

                        className={cn(

                            "flex items-center gap-3",

                            "px-6 py-4",

                            "border border-black/[0.08]",

                            "text-[0.78rem]",

                            "tracking-[0.16em]",

                            "uppercase"

                        )}

                    >

                        {

                            loadingCover
                                ? (
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                )
                                : null

                        }

                        {

                            loadingCover
                                ? "Gerando capa"
                                : "Criar capa"

                        }

                    </button>

                    <button

                        onClick={saveProject}

                        disabled={saving}

                        className={cn(

                            "flex items-center gap-3",

                            "px-6 py-4",

                            "border border-black/[0.08]",

                            "text-[0.78rem]",

                            "tracking-[0.16em]",

                            "uppercase"

                        )}

                    >

                        {

                            saving
                                ? (
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                )
                                : (
                                    <Save className="w-4 h-4" />
                                )

                        }

                        {

                            saving
                                ? "Salvando"
                                : "Salvar"

                        }

                    </button>

                </div>

                {

                    loadingLabel && (

                        <div className="mt-10 text-[0.92rem] text-[#746d64]">

                            {loadingLabel}

                        </div>

                    )

                }

            </div>

        </div>

    )

}