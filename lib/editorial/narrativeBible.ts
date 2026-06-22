/*
━━━━━━━━━━━━━━━━━━━
NARRATIVE BIBLE
━━━━━━━━━━━━━━━━━━━

O cérebro emocional
de cada obra.

Este arquivo NÃO define
apenas plot.

Ele controla:

- atmosfera
- tensão psicológica
- obsessão emocional
- progressão humana
- retenção Kindle
- transformação emocional
- identidade narrativa

━━━━━━━━━━━━━━━━━━━
*/

import {

    EditorialAuthor

} from "./authors"

/*
━━━━━━━━━━━━━━━━━━━
NARRATIVE BIBLE
━━━━━━━━━━━━━━━━━━━
*/

export interface NarrativeBible {

    /*
    ━━━━━━━━━━━━━━━━━━━
    CORE
    ━━━━━━━━━━━━━━━━━━━
    */

    title: string

    subtitle?: string

    genre: string

    language: string

    targetAudience: string[]

    author: EditorialAuthor

    /*
    ━━━━━━━━━━━━━━━━━━━
    PREMISE
    ━━━━━━━━━━━━━━━━━━━
    */

    premise: string

    narrativeQuestion: string

    emotionalCore: string

    psychologicalTension: string

    thematicCore: string[]

    /*
    ━━━━━━━━━━━━━━━━━━━
    EMOTIONAL EXPERIENCE
    ━━━━━━━━━━━━━━━━━━━
    */

    emotionalJourney: {

        beginning: string

        middle: string

        climax: string

        ending: string

    }

    emotionalTriggers: string[]

    emotionalPromises: string[]

    readerExperience: string[]

    /*
    ━━━━━━━━━━━━━━━━━━━
    ATMOSPHERE
    ━━━━━━━━━━━━━━━━━━━
    */

    atmosphere: {

        emotional: string[]

        visual: string[]

        sensory: string[]

        environmental: string[]

    }

    recurringSymbols: string[]

    recurringMotifs: string[]

    symbolicObjects: string[]

    /*
    ━━━━━━━━━━━━━━━━━━━
    CHARACTERS
    ━━━━━━━━━━━━━━━━━━━
    */

    protagonist: {

        name: string

        age?: number

        wound: string

        desire: string

        fear: string

        contradiction: string

        transformation: string

    }

    antagonist?: {

        name: string

        psychologicalThreat: string

        emotionalFunction: string

    }

    relationshipDynamics: string[]

    psychologicalDynamics: string[]

    /*
    ━━━━━━━━━━━━━━━━━━━
    STORY ENGINE
    ━━━━━━━━━━━━━━━━━━━
    */

    narrativeEngine: {

        tensionType: string[]

        suspenseMethod: string[]

        revealStrategy: string[]

        pacingStyle: string[]

        chapterMomentum: string[]

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    KINDLE RETENTION
    ━━━━━━━━━━━━━━━━━━━
    */

    readerCompulsion: {

        hooks: string[]

        emotionalHooks: string[]

        cliffhangerStyle: string[]

        bingeTriggers: string[]

        retentionStyle: string[]

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    STRUCTURE
    ━━━━━━━━━━━━━━━━━━━
    */

    structure: {

        openingEnergy: string

        midpointShift: string

        climaxStyle: string

        endingImpact: string

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    EDITORIAL POSITIONING
    ━━━━━━━━━━━━━━━━━━━
    */

    positioning: {

        marketCategory: string[]

        comparableTitles: string[]

        prestigeLevel: string

        commercialAppeal: string

    }

}

/*
━━━━━━━━━━━━━━━━━━━
CREATE NARRATIVE BIBLE
━━━━━━━━━━━━━━━━━━━
*/

export function createNarrativeBible(

    input: {

        title: string

        genre: string

        language: string

        premise: string

        emotionalCore: string

        author: EditorialAuthor

    }

): NarrativeBible {

    return {

        /*
        ━━━━━━━━━━━━━━━━━━━
        CORE
        ━━━━━━━━━━━━━━━━━━━
        */

        title:
            input.title,

        genre:
            input.genre,

        language:
            input.language,

        targetAudience: [

            ...input.author.audienceProfile

        ],

        author:
            input.author,

        /*
        ━━━━━━━━━━━━━━━━━━━
        PREMISE
        ━━━━━━━━━━━━━━━━━━━
        */

        premise:
            input.premise,

        narrativeQuestion:
            "Can emotionally damaged people survive their own psychological contradictions?",

        emotionalCore:
            input.emotionalCore,

        psychologicalTension:
            input.author.tensionStyle.join(", "),

        thematicCore: [

            ...input.author.emotionalObsession,

            ...input.author.humanPhilosophy

        ],

        /*
        ━━━━━━━━━━━━━━━━━━━
        EMOTIONAL EXPERIENCE
        ━━━━━━━━━━━━━━━━━━━
        */

        emotionalJourney: {

            beginning:
                "psychological curiosity and emotional intrigue",

            middle:
                "escalating emotional instability and attachment",

            climax:
                "psychological confrontation and emotional rupture",

            ending:
                "lingering emotional resonance"

        },

        emotionalTriggers: [

            "emotional silence",

            "fear of abandonment",

            "hidden desire",

            "psychological instability",

            "unresolved intimacy"

        ],

        emotionalPromises: [

            "deep emotional immersion",

            "psychological realism",

            "cinematic atmosphere",

            "emotionally addictive pacing"

        ],

        readerExperience: [

            "late-night binge reading",

            "psychological immersion",

            "emotional obsession",

            "quiet emotional devastation"

        ],

        /*
        ━━━━━━━━━━━━━━━━━━━
        ATMOSPHERE
        ━━━━━━━━━━━━━━━━━━━
        */

        atmosphere: {

            emotional: [

                ...input.author.retentionStyle

            ],

            visual: [

                ...input.author.recurringImagery

            ],

            sensory: [

                ...input.author.sensoryWorld

            ],

            environmental: [

                ...input.author.environmentStyle

            ]

        },

        recurringSymbols: [

            ...input.author.recurringImagery

        ],

        recurringMotifs: [

            ...input.author.emotionalObsession

        ],

        symbolicObjects: [

            ...input.author.symbolicObjects

        ],

        /*
        ━━━━━━━━━━━━━━━━━━━
        CHARACTERS
        ━━━━━━━━━━━━━━━━━━━
        */

        protagonist: {

            name:
                "Undefined",

            wound:
                input.author.coreWound,

            desire:
                input.author.desires[0],

            fear:
                input.author.fears[0],

            contradiction:
                "wants intimacy but fears vulnerability",

            transformation:
                "learns to confront emotional truth"

        },

        relationshipDynamics: [

            ...input.author.relationshipPatterns

        ],

        psychologicalDynamics: [

            ...input.author.psychologicalTraits

        ],

        /*
        ━━━━━━━━━━━━━━━━━━━
        STORY ENGINE
        ━━━━━━━━━━━━━━━━━━━
        */

        narrativeEngine: {

            tensionType: [

                ...input.author.tensionStyle

            ],

            suspenseMethod: [

                ...input.author.readerHooks

            ],

            revealStrategy: [

                ...input.author.revealStrategy

            ],

            pacingStyle: [

                ...input.author.pacingStyle

            ],

            chapterMomentum: [

                ...input.author.chapterEndings

            ]

        },

        /*
        ━━━━━━━━━━━━━━━━━━━
        KINDLE RETENTION
        ━━━━━━━━━━━━━━━━━━━
        */

        readerCompulsion: {

            hooks: [

                ...input.author.readerHooks

            ],

            emotionalHooks: [

                ...input.author.emotionalObsession

            ],

            cliffhangerStyle: [

                ...input.author.chapterEndings

            ],

            bingeTriggers: [

                "unresolved emotional tension",

                "psychological instability",

                "relationship suspense",

                "hidden emotional truth"

            ],

            retentionStyle: [

                ...input.author.retentionStyle

            ]

        },

        /*
        ━━━━━━━━━━━━━━━━━━━
        STRUCTURE
        ━━━━━━━━━━━━━━━━━━━
        */

        structure: {

            openingEnergy:
                "immediate emotional intrigue",

            midpointShift:
                "psychological destabilization",

            climaxStyle:
                "emotionally explosive confrontation",

            endingImpact:
                "lingering emotional obsession"

        },

        /*
        ━━━━━━━━━━━━━━━━━━━
        EDITORIAL POSITIONING
        ━━━━━━━━━━━━━━━━━━━
        */

        positioning: {

            marketCategory: [

                ...input.author.bestGenres

            ],

            comparableTitles: [

                ...input.author.inspirations

            ],

            prestigeLevel:
                "premium contemporary literary fiction",

            commercialAppeal:
                "high Kindle Unlimited retention potential"

        }

    }

}