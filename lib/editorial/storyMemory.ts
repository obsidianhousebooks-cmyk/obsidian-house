/*
━━━━━━━━━━━━━━━━━━━
STORY MEMORY
━━━━━━━━━━━━━━━━━━━

Sistema de memória narrativa
da Obsidian House.

Responsável por:

- continuidade emocional
- callbacks
- símbolos recorrentes
- evolução psicológica
- consistência humana
- retenção emocional

━━━━━━━━━━━━━━━━━━━
*/

/*
━━━━━━━━━━━━━━━━━━━
MEMORY ENTRY
━━━━━━━━━━━━━━━━━━━
*/

export interface MemoryEntry {

    type: string

    content: string

    emotionalWeight: number

}

/*
━━━━━━━━━━━━━━━━━━━
STORY MEMORY
━━━━━━━━━━━━━━━━━━━
*/

export interface StoryMemory {

    memories: string[]

    emotionalStates: string[]

    recurringSymbols: string[]

    relationshipTensions: string[]

    psychologicalPatterns: string[]

    callbackSeeds: string[]

    unresolvedThreads: string[]

}

/*
━━━━━━━━━━━━━━━━━━━
MEMORY HELPERS
━━━━━━━━━━━━━━━━━━━
*/

function extractSentences(

    text: string

): string[] {

    return text
        .split(/[.!?]/)
        .map(item => item.trim())
        .filter(Boolean)

}

/*
━━━━━━━━━━━━━━━━━━━
EMOTIONAL DETECTION
━━━━━━━━━━━━━━━━━━━
*/

const emotionalKeywords = [

    "fear",
    "silence",
    "loneliness",
    "obsession",
    "guilt",
    "regret",
    "desire",
    "betrayal",
    "tension",
    "melancholy",
    "paranoia",
    "vulnerability",
    "anger",
    "shame",
    "love"

]

/*
━━━━━━━━━━━━━━━━━━━
SYMBOLIC OBJECTS
━━━━━━━━━━━━━━━━━━━
*/

const symbolicKeywords = [

    "mirror",
    "glass",
    "photograph",
    "letter",
    "phone",
    "train",
    "window",
    "cigarette",
    "coffee",
    "rain",
    "music",
    "book",
    "door",
    "wine"

]

/*
━━━━━━━━━━━━━━━━━━━
BUILD STORY MEMORY
━━━━━━━━━━━━━━━━━━━
*/

export function buildStoryMemory(

    input?: {

        previousMemory?: StoryMemory

        chapter?: string

    }

): StoryMemory {

    /*
    ━━━━━━━━━━━━━━━━━━━
    INITIAL
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        !input ||

        !input.chapter

    ) {

        return {

            memories: [],

            emotionalStates: [],

            recurringSymbols: [],

            relationshipTensions: [],

            psychologicalPatterns: [],

            callbackSeeds: [],

            unresolvedThreads: []

        }

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    BASE
    ━━━━━━━━━━━━━━━━━━━
    */

    const previous =
        input.previousMemory || {

            memories: [],

            emotionalStates: [],

            recurringSymbols: [],

            relationshipTensions: [],

            psychologicalPatterns: [],

            callbackSeeds: [],

            unresolvedThreads: []

        }

    /*
    ━━━━━━━━━━━━━━━━━━━
    SENTENCES
    ━━━━━━━━━━━━━━━━━━━
    */

    const sentences =
        extractSentences(
            input.chapter
        )

    /*
    ━━━━━━━━━━━━━━━━━━━
    EMOTIONAL STATES
    ━━━━━━━━━━━━━━━━━━━
    */

    const emotionalStates = [

        ...previous.emotionalStates

    ]

    for (

        const keyword of
        emotionalKeywords

    ) {

        const found =
            sentences.some(sentence =>
                sentence
                    .toLowerCase()
                    .includes(keyword)
            )

        if (

            found &&

            !emotionalStates.includes(
                keyword
            )

        ) {

            emotionalStates.push(
                keyword
            )

        }

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    SYMBOLS
    ━━━━━━━━━━━━━━━━━━━
    */

    const recurringSymbols = [

        ...previous.recurringSymbols

    ]

    for (

        const keyword of
        symbolicKeywords

    ) {

        const found =
            sentences.some(sentence =>
                sentence
                    .toLowerCase()
                    .includes(keyword)
            )

        if (

            found &&

            !recurringSymbols.includes(
                keyword
            )

        ) {

            recurringSymbols.push(
                keyword
            )

        }

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    CALLBACK SEEDS
    ━━━━━━━━━━━━━━━━━━━
    */

    const callbackSeeds = [

        ...previous.callbackSeeds

    ]

    const emotionallyCharged =
        sentences.filter(sentence =>

            emotionalKeywords.some(keyword =>

                sentence
                    .toLowerCase()
                    .includes(keyword)

            )

        )

    callbackSeeds.push(

        ...emotionallyCharged
            .slice(0, 5)

    )

    /*
    ━━━━━━━━━━━━━━━━━━━
    RELATIONSHIP TENSION
    ━━━━━━━━━━━━━━━━━━━
    */

    const relationshipTensions = [

        ...previous.relationshipTensions

    ]

    const tensionIndicators = [

        "argument",
        "silence",
        "distance",
        "betrayal",
        "avoidance",
        "touch",
        "hesitation"

    ]

    for (

        const keyword of
        tensionIndicators

    ) {

        const found =
            sentences.some(sentence =>
                sentence
                    .toLowerCase()
                    .includes(keyword)
            )

        if (

            found &&

            !relationshipTensions.includes(
                keyword
            )

        ) {

            relationshipTensions.push(
                keyword
            )

        }

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    PSYCHOLOGICAL PATTERNS
    ━━━━━━━━━━━━━━━━━━━
    */

    const psychologicalPatterns = [

        ...previous.psychologicalPatterns

    ]

    const patternIndicators = [

        "obsession",
        "paranoia",
        "control",
        "withdrawal",
        "avoidance",
        "dependency",
        "manipulation"

    ]

    for (

        const keyword of
        patternIndicators

    ) {

        const found =
            sentences.some(sentence =>
                sentence
                    .toLowerCase()
                    .includes(keyword)
            )

        if (

            found &&

            !psychologicalPatterns.includes(
                keyword
            )

        ) {

            psychologicalPatterns.push(
                keyword
            )

        }

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    UNRESOLVED THREADS
    ━━━━━━━━━━━━━━━━━━━
    */

    const unresolvedThreads = [

        ...previous.unresolvedThreads

    ]

    const unresolvedIndicators = [

        "maybe",
        "unfinished",
        "unknown",
        "hidden",
        "secret",
        "unanswered"

    ]

    for (

        const sentence of
        sentences

    ) {

        const unresolved =
            unresolvedIndicators.some(keyword =>

                sentence
                    .toLowerCase()
                    .includes(keyword)

            )

        if (

            unresolved &&

            unresolvedThreads.length < 20

        ) {

            unresolvedThreads.push(
                sentence.trim()
            )

        }

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    MEMORIES
    ━━━━━━━━━━━━━━━━━━━
    */

    const memories = [

        ...previous.memories,

        ...sentences.slice(0, 15)

    ]

    /*
    ━━━━━━━━━━━━━━━━━━━
    RETURN
    ━━━━━━━━━━━━━━━━━━━
    */

    return {

        memories:
            memories.slice(-120),

        emotionalStates:
            emotionalStates.slice(-30),

        recurringSymbols:
            recurringSymbols.slice(-30),

        relationshipTensions:
            relationshipTensions.slice(-30),

        psychologicalPatterns:
            psychologicalPatterns.slice(-30),

        callbackSeeds:
            callbackSeeds.slice(-40),

        unresolvedThreads:
            unresolvedThreads.slice(-40)

    }

}