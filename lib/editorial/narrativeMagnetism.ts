/*
━━━━━━━━━━━━━━━━━━━
NARRATIVE MAGNETISM ENGINE
━━━━━━━━━━━━━━━━━━━

Sistema de magnetismo narrativo
da Obsidian House.

Responsável por:

- retenção emocional orgânica
- ritmo humano de leitura
- magnetismo psicológico
- tensão invisível
- breathing rhythm
- compulsão literária natural
- modulação de intensidade

━━━━━━━━━━━━━━━━━━━
*/

/*
━━━━━━━━━━━━━━━━━━━
MAGNETISM PROFILE
━━━━━━━━━━━━━━━━━━━
*/

export interface NarrativeMagnetismProfile {

    openingGravity: string[]

    emotionalGravity: string[]

    suspenseTextures: string[]

    chapterEndings: string[]

    readerMomentum: string[]

    pacingRhythm: string[]

    psychologicalAtmosphere: string[]

    decompressionMoments: string[]

    quietHumanMoments: string[]

}

/*
━━━━━━━━━━━━━━━━━━━
DEFAULT PROFILE
━━━━━━━━━━━━━━━━━━━
*/

export const defaultNarrativeMagnetism:
    NarrativeMagnetismProfile = {

    /*
    ━━━━━━━━━━━━━━━━━━━
    OPENINGS
    ━━━━━━━━━━━━━━━━━━━
    */

    openingGravity: [

        "unresolved emotional tension",

        "subtle psychological discomfort",

        "emotionally unfinished interaction",

        "behavioral contradiction",

        "unspoken relational instability",

        "small emotional disturbance",

        "quiet uncertainty"

    ],

    /*
    ━━━━━━━━━━━━━━━━━━━
    EMOTIONAL
    ━━━━━━━━━━━━━━━━━━━
    */

    emotionalGravity: [

        "fear of vulnerability",

        "desire mixed with shame",

        "nostalgic emotional residue",

        "unresolved attraction",

        "emotional dependency",

        "fear of emotional exposure",

        "suppressed emotional memory",

        "psychological ambiguity"

    ],

    /*
    ━━━━━━━━━━━━━━━━━━━
    SUSPENSE
    ━━━━━━━━━━━━━━━━━━━
    */

    suspenseTextures: [

        "withheld emotional truth",

        "behavioral inconsistency",

        "unanswered relational tension",

        "subtle psychological suspicion",

        "unclear motivation",

        "social instability",

        "emotional unpredictability",

        "quiet discomfort"

    ],

    /*
    ━━━━━━━━━━━━━━━━━━━
    CHAPTER ENDINGS
    ━━━━━━━━━━━━━━━━━━━
    */

    chapterEndings: [

        "quiet emotional uncertainty",

        "small psychological shift",

        "emotionally unresolved silence",

        "subtle relational instability",

        "ambiguous realization",

        "unfinished emotional movement",

        "soft emotional disturbance"

    ],

    /*
    ━━━━━━━━━━━━━━━━━━━
    MOMENTUM
    ━━━━━━━━━━━━━━━━━━━
    */

    readerMomentum: [

        "partial emotional payoff",

        "incomplete emotional resolution",

        "psychological curiosity",

        "relationship instability",

        "emotional contradiction",

        "invisible tension",

        "unresolved intimacy",

        "quiet emotional gravity"

    ],

    /*
    ━━━━━━━━━━━━━━━━━━━
    RHYTHM
    ━━━━━━━━━━━━━━━━━━━
    */

    pacingRhythm: [

        "alternation between tension and silence",

        "breathing emotional rhythm",

        "scene decompression",

        "quiet observation",

        "controlled emotional pacing",

        "human conversational rhythm",

        "low-intensity transitions"

    ],

    /*
    ━━━━━━━━━━━━━━━━━━━
    ATMOSPHERE
    ━━━━━━━━━━━━━━━━━━━
    */

    psychologicalAtmosphere: [

        "fear of emotional exposure",

        "identity uncertainty",

        "obsessive emotional return",

        "social performance fatigue",

        "suppressed desire",

        "subtle paranoia",

        "emotional fragmentation",

        "psychological ambiguity"

    ],

    /*
    ━━━━━━━━━━━━━━━━━━━
    DECOMPRESSION
    ━━━━━━━━━━━━━━━━━━━
    */

    decompressionMoments: [

        "ordinary routines",

        "quiet meals",

        "small physical gestures",

        "simple environmental observation",

        "low-stakes conversation",

        "silent physical movement",

        "emotionally neutral interaction"

    ],

    /*
    ━━━━━━━━━━━━━━━━━━━
    HUMAN MOMENTS
    ━━━━━━━━━━━━━━━━━━━
    */

    quietHumanMoments: [

        "awkward silence",

        "banal observation",

        "physical tiredness",

        "social discomfort",

        "emotionally muted reaction",

        "ordinary distraction",

        "low-energy intimacy",

        "unresolved thought"

    ]

}

/*
━━━━━━━━━━━━━━━━━━━
BUILD MAGNETISM
━━━━━━━━━━━━━━━━━━━
*/

export function buildNarrativeMagnetism(

    input?: {

        emotionalTone?: string[]

        psychologicalThemes?: string[]

        pacingStyle?: string[]

    }

): NarrativeMagnetismProfile {

    return {

        openingGravity: [

            ...defaultNarrativeMagnetism.openingGravity,

            ...(input?.emotionalTone || [])

        ],

        emotionalGravity: [

            ...defaultNarrativeMagnetism.emotionalGravity,

            ...(input?.psychologicalThemes || [])

        ],

        suspenseTextures: [

            ...defaultNarrativeMagnetism.suspenseTextures

        ],

        chapterEndings: [

            ...defaultNarrativeMagnetism.chapterEndings

        ],

        readerMomentum: [

            ...defaultNarrativeMagnetism.readerMomentum

        ],

        pacingRhythm: [

            ...defaultNarrativeMagnetism.pacingRhythm,

            ...(input?.pacingStyle || [])

        ],

        psychologicalAtmosphere: [

            ...defaultNarrativeMagnetism.psychologicalAtmosphere

        ],

        decompressionMoments: [

            ...defaultNarrativeMagnetism.decompressionMoments

        ],

        quietHumanMoments: [

            ...defaultNarrativeMagnetism.quietHumanMoments

        ]

    }

}

/*
━━━━━━━━━━━━━━━━━━━
CHAPTER ENDING
━━━━━━━━━━━━━━━━━━━
*/

export function generateChapterEnding(

    profile: NarrativeMagnetismProfile

): string {

    const ending =
        profile.chapterEndings[
        Math.floor(
            Math.random() *
            profile.chapterEndings.length
        )
        ]

    const suspense =
        profile.suspenseTextures[
        Math.floor(
            Math.random() *
            profile.suspenseTextures.length
        )
        ]

    return `

Create an ending that leaves:

- ${ending}
- ${suspense}

The reader should feel
quiet emotional gravity,
not artificial cliff pressure.

Avoid dramatic manipulation.

Preserve literary restraint.

`

}

/*
━━━━━━━━━━━━━━━━━━━
NARRATIVE MOMENTUM
━━━━━━━━━━━━━━━━━━━
*/

export function generateNarrativeMomentum(

    profile: NarrativeMagnetismProfile

): string {

    return `

Maintain narrative magnetism through:

${profile.readerMomentum
            .map(item => `- ${item}`)
            .join("\n")}

Balance emotional tension with:

${profile.decompressionMoments
            .map(item => `- ${item}`)
            .join("\n")}

Allow breathing rhythm.

Allow low-intensity scenes.

Allow ordinary human existence.

Not every chapter should escalate emotionally.

Readers should feel:

curiosity,
emotional gravity,
and psychological attachment.

Not algorithmic compulsion.

`

}