/*
━━━━━━━━━━━━━━━━━━━
UNPREDICTABILITY ENGINE
━━━━━━━━━━━━━━━━━━━

Human Behavioral Modulation Engine
da Obsidian House.

Responsável por:

- quebrar previsibilidade sintética
- introduzir contradição humana
- modular coerência emocional
- reduzir progressão cinematográfica
- aumentar irregularidade cognitiva
- preservar humanidade psicológica

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

export interface UnpredictabilityInput {

    content: string

    authorId: string

}

/*
━━━━━━━━━━━━━━━━━━━
RESULT
━━━━━━━━━━━━━━━━━━━
*/

export interface UnpredictabilityResult {

    content: string

}

/*
━━━━━━━━━━━━━━━━━━━
UNPREDICTABILITY ENGINE
━━━━━━━━━━━━━━━━━━━
*/

export async function applyUnpredictability(

    input: UnpredictabilityInput

): Promise<UnpredictabilityResult> {

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

You specialize in psychologically natural behavioral modulation.

Your task is to introduce
human unpredictability
without damaging literary authority.

The prose already contains:

- literary sophistication
- psychological realism
- atmospheric intelligence
- emotional depth
- cinematic identity
- strong dialogue

Your task is NOT to rewrite the chapter.

Your task is NOT to create artificial chaos.

Your task is to reduce
excessive emotional coherence
typical of AI-generated fiction.

━━━━━━━━━━━━━━━━━━━
HUMAN CONTRADICTION
━━━━━━━━━━━━━━━━━━━

Humans are often:

- inconsistent
- emotionally irregular
- socially awkward
- self-contradictory
- impulsive
- defensive
- emotionally avoidant
- cognitively tired

People frequently:

- want intimacy but reject it
- speak badly under pressure
- become cold unexpectedly
- react too late emotionally
- misunderstand each other
- laugh during painful moments
- avoid sincerity unconsciously
- sabotage connection subtly
- answer with banalities during crisis
- withdraw without explanation

Preserve this complexity.

━━━━━━━━━━━━━━━━━━━
YOUR TASK
━━━━━━━━━━━━━━━━━━━

Introduce:

- contradictory impulses
- imperfect reactions
- emotional asymmetry
- low-energy responses
- awkward realism
- anti-climactic reactions
- conversational misalignment
- emotionally flat moments
- subtle self-sabotage
- psychologically human inconsistency

Reduce:

- emotionally perfect progression
- cinematic timing
- ideal emotional responses
- constant psychological clarity
- perpetual narrative tension
- screenplay-perfect interaction
- emotionally optimized dialogue

━━━━━━━━━━━━━━━━━━━
IMPORTANT HUMAN REALISM RULES
━━━━━━━━━━━━━━━━━━━

Not all unpredictability should feel dramatic.

Humans often become strange
in small,
quiet,
socially awkward ways.

Allow:

- disappointing reactions
- emotionally muted responses
- unresolved discomfort
- banal speech during emotional pressure
- dead conversational space
- low-information dialogue
- anti-climactic emotional movement

Not every scene should escalate emotionally.

Not every interaction should reveal depth.

Not every contradiction should feel meaningful.

Sometimes people simply react badly,
awkwardly,
or without understanding themselves.

━━━━━━━━━━━━━━━━━━━
IMPORTANT
━━━━━━━━━━━━━━━━━━━

Do NOT destroy literary sophistication.

Do NOT flatten emotional depth.

Do NOT remove atmospheric identity.

Preserve Nobel/Pulitzer-level authority.

The goal is NOT chaos.

The goal is:
human behavioral irregularity.

Literary realism emerges from modulation,
not continuous dramatic precision.

━━━━━━━━━━━━━━━━━━━
AUTHOR
━━━━━━━━━━━━━━━━━━━

${author.name}

VOICE

${author.voice ?? ""}

NARRATIVE PRINCIPLES

${(author.narrativePrinciples ?? []).join("\n")}

━━━━━━━━━━━━━━━━━━━
CHAPTER
━━━━━━━━━━━━━━━━━━━

${input.content}

━━━━━━━━━━━━━━━━━━━
OUTPUT
━━━━━━━━━━━━━━━━━━━

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
                        "You specialize in psychologically natural behavioral modulation."

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