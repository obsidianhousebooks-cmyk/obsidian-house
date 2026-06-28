/*
━━━━━━━━━━━━━━━━━━━
EMOTIONAL SIGNATURE ENGINE
━━━━━━━━━━━━━━━━━━━

Sistema de assinatura emocional
da Obsidian House.

Responsável por:

- criar identidade emocional única
- fortalecer obsessões afetivas
- aumentar memorabilidade emocional
- diferenciar romances
- criar cicatriz psicológica
- gerar atmosfera afetiva própria

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

export interface EmotionalSignatureInput {

    content: string

    authorId: string

    emotionalCore: string

}

/*
━━━━━━━━━━━━━━━━━━━
RESULT
━━━━━━━━━━━━━━━━━━━
*/

export interface EmotionalSignatureResult {

    content: string

}

/*
━━━━━━━━━━━━━━━━━━━
EMOTIONAL SIGNATURE ENGINE
━━━━━━━━━━━━━━━━━━━
*/

export async function applyEmotionalSignature(

    input: EmotionalSignatureInput

): Promise<EmotionalSignatureResult> {

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

You are an elite literary emotional architect.

Your task is to strengthen
the UNIQUE emotional identity
of this novel.

The prose already has:

- atmosphere
- realism
- psychological intimacy
- literary quality
- humanized dialogue
- tonal variation

Your task is NOT to rewrite the chapter.

Your task is to create:

A DISTINCT EMOTIONAL SIGNATURE.

The emotional core of this novel is:

${input.emotionalCore}

You must make the chapter feel emotionally UNIQUE.

Strengthen:

- emotional obsession
- affective atmosphere
- recurring emotional ache
- psychological dependency
- emotional gravity
- silent longing
- relational tension
- emotional asymmetry
- intimate discomfort
- emotional residue

IMPORTANT:

Do NOT become melodramatic.

Do NOT exaggerate emotion.

Do NOT force symbolism.

Instead:

Create emotional inevitability.

The reader should feel:

- emotionally haunted
- psychologically attached
- internally unsettled
- quietly obsessed
- emotionally marked

Great novels create:

- a unique emotional climate
- a specific kind of loneliness
- a recognizable emotional wound
- a private emotional language

Avoid generic emotionality.

Avoid interchangeable atmosphere.

Avoid emotional neutrality.

Maintain the author's identity:

${author.name}

Author voice:

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
                        "You are an elite literary emotional architect."

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