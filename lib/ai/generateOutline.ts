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

/*
━━━━━━━━━━━━━━━━━━━
TYPES
━━━━━━━━━━━━━━━━━━━
*/

export interface OutlineCharacter {

    name: string

    role: string

    psychologicalWound: string

    contradiction: string

    emotionalNeed: string

    behavioralPattern: string

    symbolicObject: string

}

export interface OutlineChapter {

    number: number

    title: string

    emotionalGoal: string

    dramaticShift: string

    psychologicalProgression: string

    tensionEscalation: string

    readerHook: string

    callbackSeed: string

}

export interface BookOutline {

    introduction: string

    emotionalPremise: string

    atmosphere: string[]

    recurringThemes: string[]

    symbolicElements: string[]

    characters: OutlineCharacter[]

    chapters: OutlineChapter[]

    climax: string

    ending: string

}

/*
━━━━━━━━━━━━━━━━━━━
SAFE PARSE
━━━━━━━━━━━━━━━━━━━
*/

function safeJsonParse(

    content: string

) {

    try {

        return JSON.parse(content)

    } catch {

        try {

            const cleaned =
                content
                    .replace(/```json/g, "")
                    .replace(/```/g, "")
                    .trim()

            return JSON.parse(cleaned)

        } catch {

            return null

        }

    }

}

/*
━━━━━━━━━━━━━━━━━━━
GENERATE OUTLINE
━━━━━━━━━━━━━━━━━━━
*/

export async function generateOutline(

    input: {

        title: string

        subtitle?: string

        author: EditorialAuthor

        narrativeBible: NarrativeBible

    }

): Promise<BookOutline> {

    try {

        console.log(`

━━━━━━━━━━━━━━━━━━━
GENERATING OUTLINE
━━━━━━━━━━━━━━━━━━━

${input.title}

Author:
${input.author.name}

`)

        /*
        ━━━━━━━━━━━━━━━━━━━
        EDITORIAL CONTEXT
        ━━━━━━━━━━━━━━━━━━━
        */

        const editorialContext = `

━━━━━━━━━━━━━━━━━━━
OBSIDIAN HOUSE
━━━━━━━━━━━━━━━━━━━

POSITIONING

${editorialIdentity.positioning}

MISSION

${editorialIdentity.mission}

━━━━━━━━━━━━━━━━━━━
EDITORIAL PHILOSOPHY
━━━━━━━━━━━━━━━━━━━

${editorialIdentity.philosophy
                .map(item => `- ${item}`)
                .join("\n")}

━━━━━━━━━━━━━━━━━━━
LITERARY STANDARDS
━━━━━━━━━━━━━━━━━━━

${editorialIdentity.literaryStandards
                .map(item => `- ${item}`)
                .join("\n")}

━━━━━━━━━━━━━━━━━━━
NARRATIVE VALUES
━━━━━━━━━━━━━━━━━━━

${editorialIdentity.narrativeValues
                .map(item => `- ${item}`)
                .join("\n")}

`

        /*
        ━━━━━━━━━━━━━━━━━━━
        AUTHOR CONTEXT
        ━━━━━━━━━━━━━━━━━━━
        */

        const authorContext = `

━━━━━━━━━━━━━━━━━━━
AUTHOR
━━━━━━━━━━━━━━━━━━━

${input.author.name}

POSITIONING

${input.author.literaryPositioning}

━━━━━━━━━━━━━━━━━━━
CORE WOUND
━━━━━━━━━━━━━━━━━━━

${input.author.coreWound}

━━━━━━━━━━━━━━━━━━━
EMOTIONAL OBSESSIONS
━━━━━━━━━━━━━━━━━━━

${(input.author.emotionalObsession ?? [])
                .map(item => `- ${item}`)
                .join("\n")}

━━━━━━━━━━━━━━━━━━━
NARRATIVE STYLE
━━━━━━━━━━━━━━━━━━━

PROSE

${(input.author.proseStyle ?? [])
                .map(item => `- ${item}`)
                .join("\n")
            }

PACING

${(input.author.pacingStyle ?? [])
                .map(item => `- ${item}`)
                .join("\n")
            }

    TENSION

${(input.author.tensionStyle ?? [])
                .map(item => `- ${item}`)
                .join("\n")
            }

━━━━━━━━━━━━━━━━━━━
READER COMPULSION
━━━━━━━━━━━━━━━━━━━

${(input.author.readerHooks ?? [])
                .map(item => `- ${item}`)
                .join("\n")
            }

━━━━━━━━━━━━━━━━━━━
━━━━━━━━━━━━━━━━━━━
MASTER PROMPT
━━━━━━━━━━━━━━━━━━━

${input.author.masterPrompt ?? ""}
`

        /*
        ━━━━━━━━━━━━━━━━━━━
        NARRATIVE BIBLE
        ━━━━━━━━━━━━━━━━━━━
        */

        const bibleContext = `

━━━━━━━━━━━━━━━━━━━
NARRATIVE BIBLE
━━━━━━━━━━━━━━━━━━━

    TITLE

${input.narrativeBible.title}

    GENRE

${input.narrativeBible.genre}

━━━━━━━━━━━━━━━━━━━
    PREMISE
━━━━━━━━━━━━━━━━━━━

${input.narrativeBible.premise}

━━━━━━━━━━━━━━━━━━━
NARRATIVE QUESTION
━━━━━━━━━━━━━━━━━━━

${input.narrativeBible.narrativeQuestion}

━━━━━━━━━━━━━━━━━━━
EMOTIONAL CORE
━━━━━━━━━━━━━━━━━━━

${input.narrativeBible.emotionalCore}

━━━━━━━━━━━━━━━━━━━
PSYCHOLOGICAL TENSION
━━━━━━━━━━━━━━━━━━━

${input.narrativeBible.psychologicalTension}

━━━━━━━━━━━━━━━━━━━
THEMATIC CORE
━━━━━━━━━━━━━━━━━━━

${input.narrativeBible.thematicCore
                .map(item => `- ${item}`)
                .join("\n")
            }

━━━━━━━━━━━━━━━━━━━
READER COMPULSION
━━━━━━━━━━━━━━━━━━━

${input.narrativeBible.readerCompulsion.hooks
                .map(item => `- ${item}`)
                .join("\n")
            }

    `

        /*
        ━━━━━━━━━━━━━━━━━━━
        OUTLINE ENGINE
        ━━━━━━━━━━━━━━━━━━━
        */

        const outlineEngine = `

━━━━━━━━━━━━━━━━━━━
OUTLINE ENGINE
━━━━━━━━━━━━━━━━━━━

The outline MUST:

    - escalate emotional tension
        - progressively destabilize characters
            - create binge - reading momentum
                - increase psychological pressure
                    - deepen emotional contradictions
                        - generate emotional consequences
                            - create invisible reader addiction

━━━━━━━━━━━━━━━━━━━
CHAPTER DESIGN
━━━━━━━━━━━━━━━━━━━

Each chapter MUST:

    - introduce emotional movement
        - create relational pressure
            - reveal psychological instability
                - increase narrative urgency
                    - generate emotional suspense
                        - evolve character psychology
                            - end with unresolved tension

━━━━━━━━━━━━━━━━━━━
    IMPORTANT
━━━━━━━━━━━━━━━━━━━

    Avoid:

    - generic plot progression
        - repetitive emotional beats
            - atmosphere without progression
                - static character dynamics
                    - filler scenes
                        - predictable twists
                            - empty sophistication

━━━━━━━━━━━━━━━━━━━
KINDLE RETENTION
━━━━━━━━━━━━━━━━━━━

Readers must constantly feel:

    "just one more chapter"

        `

        /*
        ━━━━━━━━━━━━━━━━━━━
        PROMPT
        ━━━━━━━━━━━━━━━━━━━
        */

        const prompt = `

You are an elite literary showrunner specialized in premium contemporary fiction and Kindle bestsellers.

Create a psychologically addictive and emotionally sophisticated book outline.

━━━━━━━━━━━━━━━━━━━
EDITORIAL CONTEXT
━━━━━━━━━━━━━━━━━━━

${editorialContext}

━━━━━━━━━━━━━━━━━━━
AUTHOR CONTEXT
━━━━━━━━━━━━━━━━━━━

${authorContext}

━━━━━━━━━━━━━━━━━━━
NARRATIVE BIBLE
━━━━━━━━━━━━━━━━━━━

${bibleContext}

━━━━━━━━━━━━━━━━━━━
OUTLINE ENGINE
━━━━━━━━━━━━━━━━━━━

${outlineEngine}

━━━━━━━━━━━━━━━━━━━
    BOOK
━━━━━━━━━━━━━━━━━━━

    TITLE:
${input.title}

    SUBTITLE:
${input.subtitle || ""}

━━━━━━━━━━━━━━━━━━━
    STRUCTURE
━━━━━━━━━━━━━━━━━━━

    Create:

    - emotionally powerful introduction
        - 12 addictive chapters
            - progressive psychological escalation
                - emotional deterioration
                    - relational instability
                        - sophisticated reveals
                            - cinematic pacing
                                - emotionally unforgettable climax
                                    - haunting emotional ending

━━━━━━━━━━━━━━━━━━━
    FORMAT
━━━━━━━━━━━━━━━━━━━

Return ONLY valid JSON.

{
        "introduction": "",
            "emotionalPremise": "",
                "atmosphere": [],
                    "recurringThemes": [],
                        "symbolicElements": [],

                            "characters": [
                                {
                                    "name": "",
                                    "role": "",
                                    "psychologicalWound": "",
                                    "contradiction": "",
                                    "emotionalNeed": "",
                                    "behavioralPattern": "",
                                    "symbolicObject": ""
                                }
                            ],

                                "chapters": [
                                    {
                                        "number": 1,
                                        "title": "",
                                        "emotionalGoal": "",
                                        "dramaticShift": "",
                                        "psychologicalProgression": "",
                                        "tensionEscalation": "",
                                        "readerHook": "",
                                        "callbackSeed": ""
                                    }
                                ],

                                    "climax": "",
                                        "ending": ""
    }

    `

        /*
        ━━━━━━━━━━━━━━━━━━━
        COMPLETION
        ━━━━━━━━━━━━━━━━━━━
        */

        const completion =
            await openai.chat.completions.create({

                model:
                    AI_MODELS.fast,

                messages: [

                    {
                        role: "system",

                        content:
                            "You return only valid JSON."
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
        RESPONSE
        ━━━━━━━━━━━━━━━━━━━
        */

        const raw =
            completion.choices[0]
                .message.content || ""

        const parsed =
            safeJsonParse(raw)

        if (

            !parsed ||

            !Array.isArray(parsed.chapters)

        ) {

            throw new Error(
                "Invalid outline structure."
            )

        }

        /*
        ━━━━━━━━━━━━━━━━━━━
        SUCCESS
        ━━━━━━━━━━━━━━━━━━━
        */

        console.log(`

━━━━━━━━━━━━━━━━━━━
OUTLINE GENERATED
━━━━━━━━━━━━━━━━━━━

${parsed.chapters.length} chapters created

        `)

        return parsed

    } catch (error) {

        console.log(`

━━━━━━━━━━━━━━━━━━━
OUTLINE ERROR
━━━━━━━━━━━━━━━━━━━

    `)

        console.error(error)

        throw error

    }

}