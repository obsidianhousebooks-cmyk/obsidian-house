/*
━━━━━━━━━━━━━━━━━━━
EDITORIAL REFINEMENT
━━━━━━━━━━━━━━━━━━━

Human Literary Modulation Engine
da Obsidian House.

Responsável por:

- reduzir sensação IA
- modular intensidade literária
- preservar autoridade narrativa
- aumentar humanidade implícita
- melhorar realismo psicológico
- reduzir overcuration
- preservar assinatura autoral
- controlar performance estética contínua

━━━━━━━━━━━━━━━━━━━
*/

import {

    openai,
    AI_MODELS

} from "@/lib/ai/client"

import {

    editorialReview,
    EditorialReviewResult

} from "./editorialReview"

import {

    editorialIdentity

} from "./editorialIdentity"

import type {

    EditorialAuthor

} from "./authors"

/*
━━━━━━━━━━━━━━━━━━━
REFINEMENT RESULT
━━━━━━━━━━━━━━━━━━━
*/

export interface RefinementResult {

    originalScore: number

    refinedScore: number

    improvements: string[]

    refinedContent: string

}

/*
━━━━━━━━━━━━━━━━━━━
BUILD ISSUES
━━━━━━━━━━━━━━━━━━━
*/

function buildIssueContext(

    review: EditorialReviewResult

): string {

    return review.issues
        .map(issue => `

TYPE:
${issue.type}

SEVERITY:
${issue.severity}

PROBLEM:
${issue.message}

SUGGESTION:
${issue.suggestion}

`)
        .join("\n")

}

/*
━━━━━━━━━━━━━━━━━━━
REFINE CONTENT
━━━━━━━━━━━━━━━━━━━
*/

export async function refineEditorialContent(

    input: {

        content: string

        author: EditorialAuthor

    }

): Promise<RefinementResult> {

    /*
    ━━━━━━━━━━━━━━━━━━━
    REVIEW
    ━━━━━━━━━━━━━━━━━━━
    */

    const review =
        editorialReview(
            input.content
        )

    /*
    ━━━━━━━━━━━━━━━━━━━
    EARLY RETURN
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        review.overallScore >= 90

    ) {

        return {

            originalScore:
                review.overallScore,

            refinedScore:
                review.overallScore,

            improvements: [

                "Content already meets premium literary standards."

            ],

            refinedContent:
                input.content

        }

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    ISSUE CONTEXT
    ━━━━━━━━━━━━━━━━━━━
    */

    const issueContext =
        buildIssueContext(
            review
        )

    /*
    ━━━━━━━━━━━━━━━━━━━
    PROMPT
    ━━━━━━━━━━━━━━━━━━━
    */

    const prompt = `

You specialize in psychologically natural literary modulation.

Your task is NOT to maximize literary sophistication.

Your task is to modulate literary intensity
to feel cognitively human.

The prose already contains:

- literary authority
- emotional intelligence
- cinematic atmosphere
- psychological realism
- strong narrative identity

Your task is NOT to rewrite mechanically.

Your task is NOT to flatten literary quality.

Your task is to preserve
Nobel/Pulitzer-level sophistication
while reducing continuous aesthetic performance.

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
PROBLEMS DETECTED
━━━━━━━━━━━━━━━━━━━

${issueContext}

━━━━━━━━━━━━━━━━━━━
LITERARY MODULATION GOALS
━━━━━━━━━━━━━━━━━━━

Preserve:

- literary authority
- emotional sophistication
- psychological realism
- atmospheric identity
- cinematic immersion
- subtext
- narrative intelligence
- authorial personality

Reduce:

- continuous literary performance
- over-curated prose
- excessive symbolic density
- constant emotional intensity
- perpetual atmospheric pressure
- overly elegant introspection
- uninterrupted “beautiful writing”

━━━━━━━━━━━━━━━━━━━
IMPORTANT HUMAN REALISM RULES
━━━━━━━━━━━━━━━━━━━

Not all passages should feel literary.

Allow ordinary existence.

Allow moments that are merely lived,
not artistically transformed.

Do not optimize every paragraph.

Some scenes should remain:

- plain
- unresolved
- emotionally quiet
- physically functional
- socially awkward
- cognitively tired

Allow:

- low-signal passages
- banal physical reality
- conversational dead air
- emotional incompleteness
- imperfect articulation
- anti-climactic behavior
- ordinary observation

Humans do not maintain
continuous emotional or literary intensity.

Great literature emerges through modulation,
contrast,
and silence.

━━━━━━━━━━━━━━━━━━━
IMPORTANT
━━━━━━━━━━━━━━━━━━━

Do NOT destroy literary authority.

Do NOT flatten the prose.

Do NOT remove emotional depth.

Do NOT simplify authorial identity.

Preserve prestige literary quality.

The goal is NOT less sophistication.

The goal is:
humanly distributed sophistication.

━━━━━━━━━━━━━━━━━━━
AVOID
━━━━━━━━━━━━━━━━━━━

- overpolishing
- artificial sophistication
- melodrama
- robotic introspection
- excessive optimization
- aesthetic over-curation
- perpetual symbolism
- continuous emotional climax
- every paragraph sounding authored

━━━━━━━━━━━━━━━━━━━
CONTENT
━━━━━━━━━━━━━━━━━━━

${input.content}

━━━━━━━━━━━━━━━━━━━
OUTPUT
━━━━━━━━━━━━━━━━━━━

Return ONLY valid JSON.

{
  "improvements": [],
  "refinedContent": ""
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
                AI_MODELS.premium,

            messages: [

                {
                    role: "system",

                    content:
                        "You specialize in psychologically natural literary modulation. Return only valid JSON."
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

    const cleaned =
        raw
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim()

    const parsed =
        JSON.parse(cleaned)

    /*
    ━━━━━━━━━━━━━━━━━━━
    FINAL REVIEW
    ━━━━━━━━━━━━━━━━━━━
    */

    const refinedReview =
        editorialReview(
            parsed.refinedContent
        )

    /*
    ━━━━━━━━━━━━━━━━━━━
    RETURN
    ━━━━━━━━━━━━━━━━━━━
    */

    return {

        originalScore:
            review.overallScore,

        refinedScore:
            refinedReview.overallScore,

        improvements:
            parsed.improvements || [],

        refinedContent:
            parsed.refinedContent

    }

}