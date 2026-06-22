import {

    openai,
    AI_MODELS

} from "@/lib/ai/client"

import {

    NarrativeBible

} from "@/lib/editorial/narrativeBible"

import {

    editorialIdentity

} from "@/lib/editorial/editorialIdentity"

import type {

    EditorialAuthor

} from "@/lib/editorial/authors"

import type {

    BookOutline,
    OutlineChapter

} from "./generateOutline"

import {

    buildSceneArchitecture,
    buildScenePrompt

} from "@/lib/editorial/sceneArchitecture"

import {

    editorialReview

} from "@/lib/editorial/editorialReview"

import {

    refineEditorialContent

} from "@/lib/editorial/editorialRefinement"

/*
━━━━━━━━━━━━━━━━━━━
CHAPTER RESULT
━━━━━━━━━━━━━━━━━━━
*/

export interface GeneratedChapter {

    title: string

    content: string

    emotionalShift: string

    psychologicalProgression: string

    callbackUsage: string[]

    review?: {

        score: number

        strengths: string[]

        issues: number

    }

}

/*
━━━━━━━━━━━━━━━━━━━
GENERATE CHAPTER
━━━━━━━━━━━━━━━━━━━
*/

export async function generateChapter(

    input: {

        author: EditorialAuthor

        narrativeBible: NarrativeBible

        outline: BookOutline

        chapter: OutlineChapter

        previousChapter?: string

        storyMemory?: string[]

    }

): Promise<GeneratedChapter> {

    /*
    ━━━━━━━━━━━━━━━━━━━
    SCENE ARCHITECTURE
    ━━━━━━━━━━━━━━━━━━━
    */

    const scene =
        buildSceneArchitecture({

            emotionalTone:

                input.chapter
                    .emotionalGoal,

            relationshipState:

                input.chapter
                    .dramaticShift,

            psychologicalTension:

                input.chapter
                    .tensionEscalation

        })

    const scenePrompt =
        buildScenePrompt(scene)

    /*
    ━━━━━━━━━━━━━━━━━━━
    MEMORY CONTEXT
    ━━━━━━━━━━━━━━━━━━━
    */

    const memoryContext =

        input.storyMemory?.length

            ? input.storyMemory
                .slice(-12)
                .join("\n")

            : "No previous memory."

    /*
    ━━━━━━━━━━━━━━━━━━━
    PREVIOUS CHAPTER
    ━━━━━━━━━━━━━━━━━━━
    */

    const previousChapterContext =

        input.previousChapter

            ? input.previousChapter
                .slice(-4000)

            : "No previous chapter."

    /*
    ━━━━━━━━━━━━━━━━━━━
    PROMPT
    ━━━━━━━━━━━━━━━━━━━
    */

    const prompt = `

You are writing a premium literary novel chapter for Obsidian House.

━━━━━━━━━━━━━━━━━━━
EDITORIAL IDENTITY
━━━━━━━━━━━━━━━━━━━

MISSION

${editorialIdentity.mission}

PHILOSOPHY

${editorialIdentity.philosophy
            .map(item => `- ${item}`)
            .join("\n")}

━━━━━━━━━━━━━━━━━━━
AUTHOR
━━━━━━━━━━━━━━━━━━━

${input.author.name}

MASTER PROMPT

${input.author.masterPrompt}

━━━━━━━━━━━━━━━━━━━
NARRATIVE BIBLE
━━━━━━━━━━━━━━━━━━━

PREMISE

${input.narrativeBible.premise}

EMOTIONAL CORE

${input.narrativeBible.emotionalCore}

PSYCHOLOGICAL TENSION

${input.narrativeBible.psychologicalTension}

━━━━━━━━━━━━━━━━━━━
PREVIOUS CHAPTER
━━━━━━━━━━━━━━━━━━━

${previousChapterContext}

━━━━━━━━━━━━━━━━━━━
STORY MEMORY
━━━━━━━━━━━━━━━━━━━

${memoryContext}

━━━━━━━━━━━━━━━━━━━
CHAPTER
━━━━━━━━━━━━━━━━━━━

TITLE

${input.chapter.title}

EMOTIONAL GOAL

${input.chapter.emotionalGoal}

DRAMATIC SHIFT

${input.chapter.dramaticShift}

PSYCHOLOGICAL PROGRESSION

${input.chapter.psychologicalProgression}

━━━━━━━━━━━━━━━━━━━
SCENE ARCHITECTURE
━━━━━━━━━━━━━━━━━━━

${scenePrompt}

━━━━━━━━━━━━━━━━━━━
IMPORTANT
━━━━━━━━━━━━━━━━━━━

The prose must:

- feel emotionally human
- contain silence
- contain contradiction
- contain procedural reality
- contain physical texture
- avoid over-literary performance
- avoid repetitive introspection
- avoid AI-style emotional looping
- avoid exposition-heavy dialogue
- allow banal moments
- allow awkwardness
- allow emotional inconsistency

The chapter should feel:

- psychologically immersive
- physically inhabited
- emotionally unstable
- narratively addictive
- behaviorally human

━━━━━━━━━━━━━━━━━━━
OUTPUT
━━━━━━━━━━━━━━━━━━━

Return ONLY valid JSON.

{
  "title": "",
  "content": "",
  "emotionalShift": "",
  "psychologicalProgression": "",
  "callbackUsage": []
}

`

    /*
    ━━━━━━━━━━━━━━━━━━━
    GENERATION
    ━━━━━━━━━━━━━━━━━━━
    */

    const completion =
        await openai.chat.completions.create({

            model:
                AI_MODELS.premium,

            response_format: {

                type: "json_object"

            },

            messages: [

                {

                    role: "system",

                    content:
                        "You are an elite literary novelist. Return only valid JSON."

                },

                {

                    role: "user",

                    content:
                        prompt

                }

            ]

        })

    /*
    ━━━━━━━━━━━━━━━━━━━
    PARSE
    ━━━━━━━━━━━━━━━━━━━
    */

    const raw =
        completion
            .choices?.[0]
            ?.message
            ?.content
            ?.trim()

        || "{}"

    const parsed =
        JSON.parse(raw)

    /*
    ━━━━━━━━━━━━━━━━━━━
    REVIEW
    ━━━━━━━━━━━━━━━━━━━
    */

    const review =
        editorialReview(
            parsed.content || ""
        )

    /*
    ━━━━━━━━━━━━━━━━━━━
    REFINEMENT
    ━━━━━━━━━━━━━━━━━━━
    */

    const refinement =
        await refineEditorialContent({

            content:
                parsed.content || "",

            author:
                input.author

        })

    /*
    ━━━━━━━━━━━━━━━━━━━
    RETURN
    ━━━━━━━━━━━━━━━━━━━
    */

    return {

        title:
            parsed.title ||

            input.chapter.title,

        content:
            refinement.refinedContent,

        emotionalShift:
            parsed.emotionalShift ||

            input.chapter.emotionalGoal,

        psychologicalProgression:
            parsed.psychologicalProgression ||

            input.chapter
                .psychologicalProgression,

        callbackUsage:
            parsed.callbackUsage || [],

        review: {

            score:
                refinement.refinedScore,

            strengths:
                review.strengths,

            issues:
                review.issues.length

        }

    }

}