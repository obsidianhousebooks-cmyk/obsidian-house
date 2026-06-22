/*
━━━━━━━━━━━━━━━━━━━
BOOK TYPES
OBSIDIAN HOUSE
━━━━━━━━━━━━━━━━━━━
*/

import type {

    EditorialAuthor

} from "@/lib/editorial/authors/types"

/*
━━━━━━━━━━━━━━━━━━━
CHAPTER
━━━━━━━━━━━━━━━━━━━
*/

export interface GeneratedChapter {

    number: number

    title: string

    summary?: string

    emotionalBeat?: string

    content: string

    score: number

    wordCount: number

}

/*
━━━━━━━━━━━━━━━━━━━
BOOK
━━━━━━━━━━━━━━━━━━━
*/

export interface GeneratedBook {

    /*
    ━━━━━━━━━━━━━━━━━━━
    IDENTITY
    ━━━━━━━━━━━━━━━━━━━
    */

    title: string

    subtitle?: string

    genre: string

    atmosphere: string

    emotionalCore: string

    language: string

    /*
    ━━━━━━━━━━━━━━━━━━━
    EDITORIAL
    ━━━━━━━━━━━━━━━━━━━
    */

    author: EditorialAuthor

    averageScore: number

    /*
    ━━━━━━━━━━━━━━━━━━━
    VISUAL
    ━━━━━━━━━━━━━━━━━━━
    */

    cover?: string

    /*
    ━━━━━━━━━━━━━━━━━━━
    CONTENT
    ━━━━━━━━━━━━━━━━━━━
    */

    introduction: string

    chapters: GeneratedChapter[]

    conclusion: string

}