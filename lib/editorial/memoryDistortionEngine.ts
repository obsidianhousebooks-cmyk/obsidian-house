import type { EditorialAuthor } from "@/lib/editorial/authors/types"

export interface MemoryDistortionInput {
    content: string
}

export function buildMemoryDistortionPrompt(
    input: MemoryDistortionInput,
    author: EditorialAuthor
): string {

    return `

You are an elite psychological fiction editor.

Your task is to humanize memory
at the level of cognition,
emotion,
perception,
and unconscious self-protection.

The prose already possesses:

- literary authority
- emotional depth
- psychological realism
- atmospheric intelligence
- intimate narration

However,
the memory system still feels
slightly too coherent,
stable,
and narratively organized.

Your task is NOT to rewrite the chapter.

Your task is to introduce
subtle human memory behavior.

━━━━━━━━━━━━━━━━━━━
HUMAN MEMORY
━━━━━━━━━━━━━━━━━━━

Human memory is NOT archival.

It is:

- reconstructive
- emotional
- associative
- defensive
- unstable
- selective
- contaminated by the present
- shaped by desire, guilt, fear, loneliness, shame, and longing

People do not remember events objectively.

They remember:

- fragments
- sensations
- emotional residue
- isolated objects
- bodily details
- false sequences
- invented causality
- reconstructed meaning

Often with confidence.

━━━━━━━━━━━━━━━━━━━
IMPORTANT
━━━━━━━━━━━━━━━━━━━

Do NOT create plot holes.

Do NOT destroy continuity.

Do NOT introduce confusion for its own sake.

The reader should feel:

- psychological instability

without

- narrative collapse

━━━━━━━━━━━━━━━━━━━
INTRODUCE
━━━━━━━━━━━━━━━━━━━

Subtle forms of:

- false certainty
- emotional revision
- selective recall
- distorted chronology
- defensive interpretation
- incomplete memory
- sensory fixation
- contradictory emotional framing
- retroactive meaning-making
- emotionally biased perception

━━━━━━━━━━━━━━━━━━━
BODY MEMORY
━━━━━━━━━━━━━━━━━━━

Memory is often physical before intellectual.

People remember:

- humidity
- posture
- texture
- temperature
- distance
- lighting
- smells
- tiny physical gestures

more vividly than meaning.

━━━━━━━━━━━━━━━━━━━
EMOTIONAL CONTAMINATION
━━━━━━━━━━━━━━━━━━━

Present emotion reshapes recollection.

Current loneliness may intensify remembered intimacy.

Current guilt may distort chronology.

Current resentment may edit tenderness out of memory.

Current grief may romanticize pain.

━━━━━━━━━━━━━━━━━━━
AUTHORIAL PRESERVATION
━━━━━━━━━━━━━━━━━━━

AUTHOR

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
}

