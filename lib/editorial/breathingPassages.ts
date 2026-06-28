/*
━━━━━━━━━━━━━━━━━━━
BREATHING PASSAGES
━━━━━━━━━━━━━━━━━━━

Sistema de respiração narrativa.

Responsável por:

- reduzir densidade poética
- inserir humanidade
- criar contraste emocional
- desacelerar abstração
- melhorar naturalidade

━━━━━━━━━━━━━━━━━━━
*/

import OpenAI from "openai"

import {

    AI_MODELS

} from "@/lib/ai/client"

import {

    getAuthorById

} from "@/lib/editorial/authors"

const openai =
    new OpenAI({

        apiKey:
            process.env.OPENAI_API_KEY

    })

/*
━━━━━━━━━━━━━━━━━━━
INPUT
━━━━━━━━━━━━━━━━━━━
*/

export interface BreathingPassagesInput {

    content: string

    authorId: string

}

/*
━━━━━━━━━━━━━━━━━━━
RESULT
━━━━━━━━━━━━━━━━━━━
*/

export interface BreathingPassagesResult {

    content: string

}

/*
━━━━━━━━━━━━━━━━━━━
BREATHING PASSAGES
━━━━━━━━━━━━━━━━━━━
*/

export async function applyBreathingPassages(

    input: BreathingPassagesInput

): Promise<BreathingPassagesResult> {

    /*
    ━━━━━━━━━━━━━━━━━━━
    AUTHOR
    ━━━━━━━━━━━━━━━━━━━
    */

    const author =
        getAuthorById(
            input.authorId
        )

    /*
    ━━━━━━━━━━━━━━━━━━━
    PROMPT
    ━━━━━━━━━━━━━━━━━━━
    */

    const prompt = `

You are an elite literary editor.

Your task is to HUMANIZE this chapter.

The current prose is emotionally dense,
poetic and psychologically atmospheric.

Your job is NOT to rewrite the chapter.

Your job is to:

- introduce breathing space
- reduce literary saturation
- create natural rhythm variation
- insert moments of ordinary reality
- allow emotional silence
- create simple human pauses
- vary sentence density
- make the prose feel more human

IMPORTANT:

Do NOT simplify the writing.

Do NOT destroy the atmosphere.

Do NOT reduce literary quality.

Instead:

Create CONTRAST.

Examples of breathing passages:

- someone making coffee
- adjusting sleeves
- waiting at a traffic light
- hearing neighbors upstairs
- a sentence that is emotionally simple
- a physically grounded observation
- mundane movement
- dead conversational air
- awkward silence
- ordinary room behavior

The prose must feel:

- cinematic
- literary
- human
- psychologically intimate

Avoid:

- excessive metaphors
- constant emotional abstraction
- every sentence sounding profound
- perpetual poetic pressure

Maintain the author's identity:

${author.name}

Author style:

${author.voice}

Narrative principles:

${(author.narrativePrinciples ?? []).join("\n")}

CHAPTER:

${input.content}

Return ONLY the improved chapter.

`

    /*
    ━━━━━━━━━━━━━━━━━━━
    COMPLETION
    ━━━━━━━━━━━━━━━━━━━
    */

    const completion =
        await openai.chat.completions.create({

            model:
                AI_MODELS.premium,

            messages: [

                {

                    role: "system",

                    content:
                        "You are an elite literary editor."

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
    CONTENT
    ━━━━━━━━━━━━━━━━━━━
    */

    const content =
        completion
            .choices?.[0]
            ?.message
            ?.content
            ?.trim()

        ||

        input.content

    /*
    ━━━━━━━━━━━━━━━━━━━
    RETURN
    ━━━━━━━━━━━━━━━━━━━
    */

    return {

        content

    }

}