/*
━━━━━━━━━━━━━━━━━━━
GENERATE BOOK SYSTEM
━━━━━━━━━━━━━━━━━━━
*/

import {

    generateTitles

} from "@/lib/ai/generateTitles"

import {

    generateOutline

} from "@/lib/ai/generateOutline"

import {

    generateChapter

} from "@/lib/ai/generateChapter"

import {

    publishingPipeline

} from "@/lib/publishing/publishingPipeline"

import {

    renderBook

} from "@/lib/render/renderBook"

import {

    editorialIdentity

} from "@/lib/editorial/editorialIdentity"

import {

    narrativeBible

} from "@/lib/editorial/narrativeBible"

import {

    editorialQA

} from "@/lib/editorial/editorialQA"

import {

    retentionEngine

} from "@/lib/editorial/retentionEngine"

import {

    autoRevision

} from "@/lib/editorial/autoRevision"

import {

    coverIntelligence

} from "@/lib/publishing/coverIntelligence"

import {

    createStoryMemory,

    buildStoryMemorySummary,

    registerChapterMemory,

    increaseTension,

    increaseParanoia,

    increaseEmotionalDensity,

    registerCallback,

    registerSymbol,

    validateStoryConsistency

} from "@/lib/editorial/storyMemory"

/*
━━━━━━━━━━━━━━━━━━━
TYPES
━━━━━━━━━━━━━━━━━━━
*/

interface GeneratedChapter {

    title: string

    description: string

    emotionalShift: string

    psychologicalProgression: string

    callbackSeed: string

    content: string

}

export interface GenerateBookSystemInput {

    topic: string

    language: string

    cover?: string

}

export interface GenerateBookSystemResult {

    book: {

        title: string

        subtitle: string

        introduction: string

        conclusion: string

        chapters: GeneratedChapter[]

    }

    publishing: any

    qa: any

    retention: any

    coverAnalysis: any

    html: string

    analytics: {

        totalChapters: number

        estimatedPages: number

        estimatedWords: number

        overallScore: number

        bestsellerPotential: boolean

        premiumReady: boolean

        editorialApproved: boolean

        retentionScore: number

        coverScore: number

    }

}

/*
━━━━━━━━━━━━━━━━━━━
UTILS
━━━━━━━━━━━━━━━━━━━
*/

function estimateWordCount(

    text: string

) {

    return text

        .split(/\s+/)

        .filter(Boolean)

        .length

}

function estimatePages(

    words: number

) {

    return Math.ceil(
        words / 250
    )

}

function sanitizeChapterContent(

    content: string

) {

    return content

        .replace(

            /(respiração contida[\s,.]*){2,}/gi,

            "respiração contida "

        )

        .replace(

            /(silêncio desconfortável[\s,.]*){2,}/gi,

            "silêncio desconfortável "

        )

        .replace(

            /(vidro fosco[\s,.]*){2,}/gi,

            "vidro fosco "

        )

        .replace(

            /(ele observou[\s,.]*){2,}/gi,

            "ele observou "

        )

        .replace(/\n{3,}/g, "\n\n")

        .replace(/\s{2,}/g, " ")

        .trim()

}

/*
━━━━━━━━━━━━━━━━━━━
SYSTEM
━━━━━━━━━━━━━━━━━━━
*/

export async function generateBookSystem({

    topic,

    language,

    cover

}: GenerateBookSystemInput):

    Promise<GenerateBookSystemResult> {

    /*
    ━━━━━━━━━━━━━━━━━━━
    GENERATE TITLES
    ━━━━━━━━━━━━━━━━━━━
    */

    const generatedTitles =

        await generateTitles(

            topic,

            language

        )

    if (

        !generatedTitles.length

    ) {

        throw new Error(

            "Falha ao gerar títulos."

        )

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    SELECT BEST TITLE
    ━━━━━━━━━━━━━━━━━━━
    */

    const selectedBook =

        generatedTitles

            .sort(

                (a, b) =>

                    b.score - a.score

            )[0]

    /*
    ━━━━━━━━━━━━━━━━━━━
    GENERATE OUTLINE
    ━━━━━━━━━━━━━━━━━━━
    */

    const outline =

        await generateOutline(

            selectedBook.title,

            selectedBook.subtitle

        )

    /*
    ━━━━━━━━━━━━━━━━━━━
    STORY MEMORY
    ━━━━━━━━━━━━━━━━━━━
    */

    const storyMemory =

        createStoryMemory()

    /*
    ━━━━━━━━━━━━━━━━━━━
    GENERATE CHAPTERS
    ━━━━━━━━━━━━━━━━━━━
    */

    const generatedChapters:
        GeneratedChapter[] = []

    let previousChapterSummary =

        outline.introduction

    for (

        let index = 0;

        index < outline.chapters.length;

        index++

    ) {

        const chapter =
            outline.chapters[index]

        /*
        ━━━━━━━━━━━━━━━━━━━
        MEMORY SUMMARY
        ━━━━━━━━━━━━━━━━━━━
        */

        const memorySummary =

            buildStoryMemorySummary(
                storyMemory
            )

        /*
        ━━━━━━━━━━━━━━━━━━━
        GENERATE CHAPTER
        ━━━━━━━━━━━━━━━━━━━
        */

        const rawContent =

            await generateChapter({

                bookTitle:
                    selectedBook.title,

                bookSubtitle:
                    selectedBook.subtitle,

                chapterTitle:
                    chapter.title,

                chapterDescription:
                    chapter.description,

                previousChapterSummary:

                    `
${previousChapterSummary}

${memorySummary}
`,

                emotionalProgression:
                    chapter.psychologicalProgression,

                callbackSeed:
                    chapter.callbackSeed

            })

        /*
        ━━━━━━━━━━━━━━━━━━━
        AUTO REVISION
        ━━━━━━━━━━━━━━━━━━━
        */

        const revisedContent =

            await autoRevision({

                content:
                    rawContent,

                chapterTitle:
                    chapter.title

            })

        /*
        ━━━━━━━━━━━━━━━━━━━
        CLEAN CONTENT
        ━━━━━━━━━━━━━━━━━━━
        */

        const cleanedContent =

            sanitizeChapterContent(

                revisedContent
                    .content || rawContent

            )

        /*
        ━━━━━━━━━━━━━━━━━━━
        STORY MEMORY
        ━━━━━━━━━━━━━━━━━━━
        */

        registerChapterMemory(

            storyMemory,

            {

                chapterNumber:
                    index + 1,

                title:
                    chapter.title,

                emotionalTone:
                    chapter.emotionalShift,

                majorEvents: [

                    chapter.description

                ],

                revelations: [

                    chapter.psychologicalProgression

                ],

                unresolvedTension: [

                    chapter.callbackSeed

                ],

                symbolicMoments: []

            }

        )

        /*
        ━━━━━━━━━━━━━━━━━━━
        CALLBACKS
        ━━━━━━━━━━━━━━━━━━━
        */

        if (

            chapter.callbackSeed

        ) {

            registerCallback(

                storyMemory,

                chapter.callbackSeed,

                "payoff emocional futuro",

                index + 1

            )

        }

        /*
        ━━━━━━━━━━━━━━━━━━━
        SYMBOL TRACKING
        ━━━━━━━━━━━━━━━━━━━
        */

        if (

            cleanedContent
                .toLowerCase()
                .includes("vidro")

        ) {

            registerSymbol(

                storyMemory,

                "vidro",

                "fragilidade emocional",

                index + 1,

                8

            )

        }

        if (

            cleanedContent
                .toLowerCase()
                .includes("relógio")

        ) {

            registerSymbol(

                storyMemory,

                "relógio",

                "controle psicológico",

                index + 1,

                7

            )

        }

        if (

            cleanedContent
                .toLowerCase()
                .includes("silêncio")

        ) {

            registerSymbol(

                storyMemory,

                "silêncio",

                "tensão reprimida",

                index + 1,

                6

            )

        }

        /*
        ━━━━━━━━━━━━━━━━━━━
        TENSION SYSTEM
        ━━━━━━━━━━━━━━━━━━━
        */

        increaseTension(
            storyMemory,
            6
        )

        increaseParanoia(
            storyMemory,
            5
        )

        increaseEmotionalDensity(
            storyMemory,
            4
        )

        /*
        ━━━━━━━━━━━━━━━━━━━
        CONSISTENCY
        ━━━━━━━━━━━━━━━━━━━
        */

        const consistency =

            validateStoryConsistency(
                storyMemory
            )

        if (

            !consistency.consistent

        ) {

            console.log(`

━━━━━━━━━━━━━━━━━━━
STORY MEMORY WARNINGS
━━━━━━━━━━━━━━━━━━━

`)

            console.log(
                consistency.warnings
            )

        }

        /*
        ━━━━━━━━━━━━━━━━━━━
        SAVE CHAPTER
        ━━━━━━━━━━━━━━━━━━━
        */

        generatedChapters.push({

            title:
                chapter.title,

            description:
                chapter.description,

            emotionalShift:
                chapter.emotionalShift,

            psychologicalProgression:
                chapter.psychologicalProgression,

            callbackSeed:
                chapter.callbackSeed,

            content:
                cleanedContent

        })

        /*
        ━━━━━━━━━━━━━━━━━━━
        UPDATE MEMORY
        ━━━━━━━━━━━━━━━━━━━
        */

        previousChapterSummary = `

Capítulo:
${chapter.title}

Transformação emocional:
${chapter.emotionalShift}

Progressão psicológica:
${chapter.psychologicalProgression}

Resumo:
${cleanedContent.slice(0, 2200)}

`

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    WORD COUNT
    ━━━━━━━━━━━━━━━━━━━
    */

    const totalWords =

        estimateWordCount(

            `
${outline.introduction}

${generatedChapters
                .map(c => c.content)
                .join("\n")}

${outline.conclusion}
`

        )

    const estimatedPages =

        estimatePages(
            totalWords
        )

    /*
    ━━━━━━━━━━━━━━━━━━━
    PUBLISHING
    ━━━━━━━━━━━━━━━━━━━
    */

    const publishing =

        await publishingPipeline({

            title:
                selectedBook.title,

            subtitle:
                selectedBook.subtitle,

            description:
                outline.introduction,

            language

        })

    /*
    ━━━━━━━━━━━━━━━━━━━
    EDITORIAL QA
    ━━━━━━━━━━━━━━━━━━━
    */

    const qa =

        editorialQA({

            title:
                selectedBook.title,

            subtitle:
                selectedBook.subtitle,

            introduction:
                outline.introduction,

            chapters:
                generatedChapters.map(
                    chapter => ({
                        title:
                            chapter.title,

                        content:
                            chapter.content
                    })
                ),

            conclusion:
                outline.conclusion

        })

    /*
    ━━━━━━━━━━━━━━━━━━━
    RETENTION ANALYSIS
    ━━━━━━━━━━━━━━━━━━━
    */

    const retention =

        retentionEngine({

            title:
                selectedBook.title,

            subtitle:
                selectedBook.subtitle,

            chapters:
                generatedChapters.map(
                    chapter => ({
                        title:
                            chapter.title,

                        content:
                            chapter.content
                    })
                )

        })

    /*
    ━━━━━━━━━━━━━━━━━━━
    COVER ANALYSIS
    ━━━━━━━━━━━━━━━━━━━
    */

    const coverAnalysis =

        coverIntelligence({

            title:
                selectedBook.title,

            subtitle:
                selectedBook.subtitle,

            genre:
                narrativeBible.genre,

            coverStyle:

                editorialIdentity
                    .coverDirection,

            image:
                cover

        })

    /*
    ━━━━━━━━━━━━━━━━━━━
    RENDER HTML
    ━━━━━━━━━━━━━━━━━━━
    */

    const html =

        renderBook({

            title:
                selectedBook.title,

            subtitle:
                selectedBook.subtitle,

            introduction:
                outline.introduction,

            chapters:
                generatedChapters,

            conclusion:
                outline.conclusion,

            cover

        })

    /*
    ━━━━━━━━━━━━━━━━━━━
    GLOBAL SCORE
    ━━━━━━━━━━━━━━━━━━━
    */

    const overallScore =

        Math.floor(

            (

                publishing.analysis
                    .overallScore * 0.34 +

                qa.overallScore * 0.28 +

                retention
                    .overallRetentionScore * 0.22 +

                coverAnalysis
                    .overallScore * 0.16

            )

        )

    /*
    ━━━━━━━━━━━━━━━━━━━
    RETURN
    ━━━━━━━━━━━━━━━━━━━
    */

    return {

        book: {

            title:
                selectedBook.title,

            subtitle:
                selectedBook.subtitle,

            introduction:
                outline.introduction,

            conclusion:
                outline.conclusion,

            chapters:
                generatedChapters

        },

        publishing,

        qa,

        retention,

        coverAnalysis,

        html,

        analytics: {

            totalChapters:

                generatedChapters.length,

            estimatedPages,

            estimatedWords:
                totalWords,

            overallScore,

            bestsellerPotential:

                publishing
                    .bestsellerPotential,

            premiumReady:

                publishing
                    .premiumReady,

            editorialApproved:

                qa.approved,

            retentionScore:

                retention
                    .overallRetentionScore,

            coverScore:

                coverAnalysis
                    .overallScore

        }

    }

}