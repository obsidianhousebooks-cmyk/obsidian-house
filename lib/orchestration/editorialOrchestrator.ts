/*
━━━━━━━━━━━━━━━━━━━
EDITORIAL ORCHESTRATOR
━━━━━━━━━━━━━━━━━━━

Central operational pipeline
for Obsidian House.

Focused on:

- book generation
- publishing preparation
- export orchestration

Clean architecture.
No artificial scoring systems.
No abandoned editorial abstractions.

━━━━━━━━━━━━━━━━━━━
*/

import {

    generateBook

} from "@/lib/ai/generateBook"

import {

    publishingPipeline

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

    publishing?: {

        metadata: {

            title: string

            subtitle?: string

            description: string

            language: string

        }

        seo: {

            longTailKeywords: string[]

        }

        kdp: {

            primaryCategories: any[]

            lowCompetitionCategories: any[]

            premiumCategories: any[]

        }

    }

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

        /*
        ━━━━━━━━━━━━━━━━━━━
        BOOK
        ━━━━━━━━━━━━━━━━━━━
        */

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

                ) / book.chapters.length

            )

        /*
        ━━━━━━━━━━━━━━━━━━━
        PUBLISHING
        ━━━━━━━━━━━━━━━━━━━
        */

        const publishing =
            await publishingPipeline({

                title:
                    book.title,

                subtitle:
                    input.subtitle || "",

                description:
                    book.fullText.slice(0, 4000),

                genre:
                    input.genre,

                language:
                    input.language || "English"

            })

        /*
        ━━━━━━━━━━━━━━━━━━━
        EXPORT
        ━━━━━━━━━━━━━━━━━━━
        */

        const exported =
            await exportMarkdown({

                title:
                    book.title,

                author:
                    book.author,

                content:
                    book.fullText

            })

        /*
        ━━━━━━━━━━━━━━━━━━━
        RETURN
        ━━━━━━━━━━━━━━━━━━━
        */

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
                    exported.downloadUrl,

                fileName:
                    exported.fileName

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
                "Failed to orchestrate editorial pipeline."

        }

    }

}