import {

    selectEditorialAuthor

} from "@/lib/editorial/authors"

import {

    createNarrativeBible,
    NarrativeBible

} from "@/lib/editorial/narrativeBible"

import {

    buildStoryMemory,
    StoryMemory

} from "@/lib/editorial/storyMemory"

import {

    generateOutline,
    BookOutline

} from "./generateOutline"

import {

    generateChapter,
    GeneratedChapter

} from "./generateChapter"

/*
━━━━━━━━━━━━━━━━━━━
GENERATED BOOK
━━━━━━━━━━━━━━━━━━━
*/

export interface GeneratedManuscript {

    title: string

    subtitle?: string

    author: string

    genre: string

    narrativeBible: NarrativeBible

    outline: BookOutline

    chapters: GeneratedChapter[]

    storyMemory: StoryMemory

    fullText: string

}

/*
━━━━━━━━━━━━━━━━━━━
GENERATE BOOK
━━━━━━━━━━━━━━━━━━━
*/

export async function generateBook(

    input: {

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

): Promise<GeneratedManuscript> {

    console.log(`

━━━━━━━━━━━━━━━━━━━
OBSIDIAN HOUSE
BOOK GENERATION
━━━━━━━━━━━━━━━━━━━

${input.title}

`)

    /*
    ━━━━━━━━━━━━━━━━━━━
    AUTHOR
    ━━━━━━━━━━━━━━━━━━━
    */

    const author =
        selectEditorialAuthor({

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
                input.market

        })

    /*
    ━━━━━━━━━━━━━━━━━━━
    NARRATIVE BIBLE
    ━━━━━━━━━━━━━━━━━━━
    */

    const narrativeBible =
        createNarrativeBible({

            title:
                input.title,

            genre:
                input.genre,

            language:
                input.language || "English",

            premise:
                input.premise ||
                "Emotionally fractured people confronting psychological instability.",

            emotionalCore:
                input.emotionalCore ||
                "Fear of emotional vulnerability.",

            author

        })

    /*
    ━━━━━━━━━━━━━━━━━━━
    OUTLINE
    ━━━━━━━━━━━━━━━━━━━
    */

    const outline =
        await generateOutline({

            title:
                input.title,

            subtitle:
                input.subtitle,

            author,

            narrativeBible

        })

    /*
    ━━━━━━━━━━━━━━━━━━━
    STORY MEMORY
    ━━━━━━━━━━━━━━━━━━━
    */

    let storyMemory =
        buildStoryMemory()

    /*
    ━━━━━━━━━━━━━━━━━━━
    CHAPTERS
    ━━━━━━━━━━━━━━━━━━━
    */

    const chapters:
        GeneratedChapter[] = []

    /*
    ━━━━━━━━━━━━━━━━━━━
    GENERATION LOOP
    ━━━━━━━━━━━━━━━━━━━
    */

    for (

        const chapter of
        outline.chapters

    ) {

        console.log(`

━━━━━━━━━━━━━━━━━━━
GENERATING CHAPTER
━━━━━━━━━━━━━━━━━━━

${chapter.title}

`)

        /*
        ━━━━━━━━━━━━━━━━━━━
        PREVIOUS CHAPTER
        ━━━━━━━━━━━━━━━━━━━
        */

        const previousChapter =
            chapters.length > 0

                ? chapters[
                    chapters.length - 1
                ].content

                : undefined

        /*
        ━━━━━━━━━━━━━━━━━━━
        CHAPTER GENERATION
        ━━━━━━━━━━━━━━━━━━━
        */

        const generated =
            await generateChapter({

                author,

                narrativeBible,

                outline,

                chapter,

                previousChapter,

                storyMemory:
                    storyMemory.memories

            })

        /*
        ━━━━━━━━━━━━━━━━━━━
        PUSH
        ━━━━━━━━━━━━━━━━━━━
        */

        chapters.push(
            generated
        )

        /*
        ━━━━━━━━━━━━━━━━━━━
        STORY MEMORY UPDATE
        ━━━━━━━━━━━━━━━━━━━
        */

        storyMemory =
            buildStoryMemory({

                previousMemory:
                    storyMemory,

                chapter:
                    generated.content

            })

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    FULL TEXT
    ━━━━━━━━━━━━━━━━━━━
    */

    const fullText =
        chapters
            .map(chapter => `

# ${chapter.title}

${chapter.content}

`)
            .join("\n")

    /*
    ━━━━━━━━━━━━━━━━━━━
    COMPLETE
    ━━━━━━━━━━━━━━━━━━━
    */

    console.log(`

━━━━━━━━━━━━━━━━━━━
BOOK COMPLETE
━━━━━━━━━━━━━━━━━━━

${input.title}

Author:
${author.name}

Chapters:
${chapters.length}

`)

    /*
    ━━━━━━━━━━━━━━━━━━━
    RETURN
    ━━━━━━━━━━━━━━━━━━━
    */

    return {

        title:
            input.title,

        subtitle:
            input.subtitle,

        author:
            author.name,

        genre:
            input.genre,

        narrativeBible,

        outline,

        chapters,

        storyMemory,

        fullText

    }

}