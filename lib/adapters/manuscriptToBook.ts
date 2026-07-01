/*
━━━━━━━━━━━━━━━━━━━
MANUSCRIPT → BOOK
OBSIDIAN HOUSE V2.0
━━━━━━━━━━━━━━━━━━━
*/

import type {
    GeneratedManuscript
} from "@/lib/ai/generateBook"

import type {
    GeneratedBook
} from "@/lib/types/book"

export function manuscriptToBook(

    manuscript: GeneratedManuscript

): GeneratedBook {

    const averageScore =

        manuscript.chapters.length > 0

            ? Math.floor(

                manuscript.chapters.reduce(

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

                manuscript.chapters.length

            )

            : 0

    return {

        title:
            manuscript.title,

        subtitle:
            manuscript.subtitle,

        genre:
            manuscript.genre,

        atmosphere:
            "Literary Fiction",

        emotionalCore:
            "Human Vulnerability",

        language:
            "English",

        author: {

            id: "editorial-author",

            name: manuscript.author,

            masterPrompt: ""

        },

        averageScore,

        introduction:
            "",

        chapters:

            manuscript.chapters.map(

                (
                    chapter,
                    index
                ) => ({

                    number:
                        index + 1,

                    title:
                        chapter.title,

                    summary:
                        "",

                    emotionalBeat:
                        chapter.emotionalShift,

                    content:
                        chapter.content,

                    score:
                        chapter.review?.score || 0,

                    wordCount:

                        chapter.content
                            .split(/\s+/)
                            .filter(Boolean)
                            .length

                })

            ),

        conclusion:
            ""

    }

}