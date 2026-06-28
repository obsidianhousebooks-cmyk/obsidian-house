import {
    generateBook
} from "@/lib/ai/generateBook"

import {
    publishingPipeline,
    PublishingPipelineResult
} from "@/lib/publishing/publishingPipeline"

import {
    exportMarkdown
} from "@/lib/export/exportMarkdown"

/*
━━━━━━━━━━━━━━━━━━━
INPUT
━━━━━━━━━━━━━━━━━━━
*/

export interface EditorialOrchestratorInput {


    title: string

    subtitle?: string

    genre: string

    tone?: string

    mood?: string

    pacing?: string

    atmosphere?: string

    market?: string

    language?: string

    premise?: string

    emotionalCore?: string


}

/*
━━━━━━━━━━━━━━━━━━━
RESULT
━━━━━━━━━━━━━━━━━━━
*/

export interface EditorialOrchestratorResult {


    success: boolean

    book?: {

        title: string

        author: string

        chapters: number

        literaryScore: number

    }

    publishing?: PublishingPipelineResult

    export?: {

        downloadUrl: string

        fileName: string

    }

    error?: string


}

/*
━━━━━━━━━━━━━━━━━━━
ORCHESTRATOR
━━━━━━━━━━━━━━━━━━━
*/

export async function editorialOrchestrator(


    input: EditorialOrchestratorInput


): Promise<EditorialOrchestratorResult> {


    try {

        const book =
            await generateBook({

                title:
                    input.title,

                subtitle:
                    input.subtitle,

                genre:
                    input.genre,

                tone:
                    input.tone,

                mood:
                    input.mood,

                pacing:
                    input.pacing,

                atmosphere:
                    input.atmosphere,

                market:
                    input.market,

                language:
                    input.language,

                premise:
                    input.premise,

                emotionalCore:
                    input.emotionalCore

            })

        /*
        ━━━━━━━━━━━━━━━━━━━
        LITERARY SCORE
        ━━━━━━━━━━━━━━━━━━━
        */

        const literaryScore =
            Math.floor(

                book.chapters.reduce(

                    (
                        total,
                        chapter
                    ) =>

                        total +

                        (
                            chapter.review?.score || 0
                        ),

                    0

                ) /

                Math.max(
                    book.chapters.length,
                    1
                )

            )

        /*
        ━━━━━━━━━━━━━━━━━━━
        ADAPT BOOK
        ━━━━━━━━━━━━━━━━━━━
        */

        const publishingBook = {

            title:
                book.title,

            subtitle:
                book.subtitle,

            genre:
                book.genre,

            atmosphere:
                input.atmosphere || "Literary Fiction",

            emotionalCore:
                input.emotionalCore || "Human Vulnerability",

            language:
                input.language || "English",

            author: {

                id:
                    "editorial-author",

                name:
                    book.author

            },

            averageScore:
                literaryScore,

            introduction:
                "",

            chapters:
                book.chapters,

            conclusion:
                ""

        }

        /*
        ━━━━━━━━━━━━━━━━━━━
        PUBLISHING
        ━━━━━━━━━━━━━━━━━━━
        */

        const publishing =
            await publishingPipeline({

                book:
                    publishingBook as any

            })

        /*
        ━━━━━━━━━━━━━━━━━━━
        EXPORT
        ━━━━━━━━━━━━━━━━━━━
        */

        const exported =
            await exportMarkdown(
                book as any
            )

        return {

            success: true,

            book: {

                title:
                    book.title,

                author:
                    book.author,

                chapters:
                    book.chapters.length,

                literaryScore

            },

            publishing,

            export: {

                downloadUrl:
                    exported,

                fileName:
                    exported
                        .split(/[\\/]/)
                        .pop() || exported

            }

        }

    } catch (error) {

        console.error(

            `
        

━━━━━━━━━━━━━━━━━━━
EDITORIAL ORCHESTRATOR ERROR
━━━━━━━━━━━━━━━━━━━
`,
            error


        )

        return {

            success: false,

            error:
                error instanceof Error
                    ? error.message
                    : "Failed to orchestrate editorial pipeline."

        }

    }


}
