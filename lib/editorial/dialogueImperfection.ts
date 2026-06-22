/*
━━━━━━━━━━━━━━━━━━━
DIALOGUE IMPERFECTION
━━━━━━━━━━━━━━━━━━━

Human Dialogue Modulation Engine
da Obsidian House.

Responsável por:

- reduzir eloquência sintética
- modular fluidez verbal
- aumentar realismo conversacional
- preservar subtexto humano
- reduzir diálogo performático
- aumentar irregularidade psicológica

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

export interface DialogueImperfectionInput {

    content: string

    authorId: string

}

/*
━━━━━━━━━━━━━━━━━━━
RESULT
━━━━━━━━━━━━━━━━━━━
*/

export interface DialogueImperfectionResult {

    content: string

}

/*
━━━━━━━━━━━━━━━━━━━
DIALOGUE IMPERFECTION
━━━━━━━━━━━━━━━━━━━
*/

export async function applyDialogueImperfection(

    input: DialogueImperfectionInput

): Promise<DialogueImperfectionResult> {

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

You specialize in psychologically natural literary dialogue.

Your task is to modulate
dialogue realism
to feel emotionally human.

The prose already contains:

- literary authority
- emotional intelligence
- cinematic atmosphere
- psychological realism
- strong narrative identity

Your task is NOT to rewrite the chapter.

Your task is NOT to flatten dialogue quality.

Your task is to reduce
continuous conversational perfection
typical of AI-generated prose.

━━━━━━━━━━━━━━━━━━━
HUMAN DIALOGUE
━━━━━━━━━━━━━━━━━━━

Humans often:

- answer indirectly
- avoid emotional truth
- repeat themselves
- change subject suddenly
- speak defensively
- trail off
- interrupt themselves
- misunderstand intention
- speak while distracted
- hide vulnerability
- fail to articulate emotion
- say ordinary things under pressure

People frequently speak:

- imperfectly
- awkwardly
- emotionally unevenly
- below their emotional intelligence
- without fully understanding themselves

Preserve this humanity.

━━━━━━━━━━━━━━━━━━━
YOUR TASK
━━━━━━━━━━━━━━━━━━━

Introduce:

- conversational friction
- natural hesitation
- emotional avoidance
- incomplete articulation
- awkward realism
- low-energy exchanges
- imperfect timing
- conversational asymmetry
- subtle contradiction
- emotionally muted responses
- psychologically human silence

Reduce:

- constant eloquence
- perpetual emotional clarity
- perfectly timed responses
- continuous subtext density
- every line sounding quotable
- excessive conversational intelligence
- uninterrupted emotional precision

━━━━━━━━━━━━━━━━━━━
IMPORTANT HUMAN REALISM RULES
━━━━━━━━━━━━━━━━━━━

Not every dialogue line should feel meaningful.

Allow conversational dead air.

Allow low-information dialogue.

Allow banal exchanges.

Allow people to speak simply
because they are tired,
awkward,
distracted,
or emotionally overwhelmed.

Not every interaction should reveal depth.

Not every line should contain subtext.

Not every emotional moment
should become literary.

Sometimes people speak badly.

Sometimes they repeat themselves.

Sometimes they say the wrong thing.

Sometimes they avoid saying anything real.

━━━━━━━━━━━━━━━━━━━
IMPORTANT
━━━━━━━━━━━━━━━━━━━

Do NOT destroy literary sophistication.

Do NOT make dialogue messy.

Do NOT make characters sound unintelligent.

Do NOT flatten emotional depth.

Preserve Nobel/Pulitzer-level authority.

The goal is NOT weaker dialogue.

The goal is:
humanly modulated dialogue.

Great literary dialogue emerges through:
- rhythm
- silence
- contrast
- incompleteness
- emotional irregularity

━━━━━━━━━━━━━━━━━━━
AVOID
━━━━━━━━━━━━━━━━━━━

- constant wisdom
- emotional over-articulation
- perpetual tension
- screenplay-perfect interaction
- excessively polished phrasing
- uninterrupted emotional layering
- every exchange sounding authored

━━━━━━━━━━━━━━━━━━━
AUTHOR
━━━━━━━━━━━━━━━━━━━

${author.name}

VOICE

${author.voice}

NARRATIVE PRINCIPLES

${author.narrativePrinciples.join("\n")}

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
                        "You specialize in psychologically natural literary dialogue."

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