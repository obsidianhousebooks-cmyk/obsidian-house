/*
━━━━━━━━━━━━━━━━━━━
EDITORIAL AUTHOR
━━━━━━━━━━━━━━━━━━━
*/

export interface EditorialAuthor {

    /*
    ━━━━━━━━━━━━━━━━━━━
    IDENTITY
    ━━━━━━━━━━━━━━━━━━━
    */

    id: string

    name: string
    slug?: string

    heroImage?: string

    tagline?: string

    biography?: string

    literaryPositioning?: string

    nationality?: string

    ageRange?: string

    /*
    ━━━━━━━━━━━━━━━━━━━
    NEW HUMAN AUTHOR SYSTEM
    ━━━━━━━━━━━━━━━━━━━
    */

    voice?: string

    marketPosition?: string

    emotionalCore?: string

    existentialCore?: string

    narrativeCompulsion?: string

    themes?: string[]

    emotionalContradictions?: string[]

    humanFlaws?: string[]

    proceduralReality?: string[]

    behavioralPatterns?: string[]

    emotionalBlindSpots?: string[]

    relationshipFailures?: string[]

    psychologicalDistortions?: string[]

    proceduralObjects?: string[]

    physicalReality?: string[]

    intimacyPatterns?: string[]

    socialDynamics?: string[]

    sexualDynamics?: string[]

    readerExperience?: string[]

    emotionalHooks?: string[]

    compulsiveMechanisms?: string[]

    narrativeAddiction?: string[]

    commercialPositioning?: string[]

    cinematicDNA?: string[]

    /*
    ━━━━━━━━━━━━━━━━━━━
    OLD SYSTEM
    ━━━━━━━━━━━━━━━━━━━
    */

    coreWound?: string

    emotionalObsession?: string[]

    fears?: string[]

    desires?: string[]

    worldview?: string[]

    humanPhilosophy?: string[]

    proseStyle?: string[]

    pacingStyle?: string[]

    dialogueStyle?: string[]

    tensionStyle?: string[]

    narrativePatterns?: string[]

    sensoryWorld?: string[]

    recurringImagery?: string[]

    symbolicObjects?: string[]

    environmentStyle?: string[]

    characterArchetypes?: string[]

    emotionalDynamics?: string[]

    relationshipPatterns?: string[]

    psychologicalTraits?: string[]

    readerHooks?: string[]

    chapterEndings?: string[]

    revealStrategy?: string[]

    retentionStyle?: string[]

    bestGenres?: string[]

    audienceProfile?: string[]

    kindleBehavior?: string[]

    inspirations?: string[]
    archetype?: string

    brand?: string

    narrativePrinciples?: string[]

    relationshipDynamics?: string[]

    primaryGenres?: string[]

    targetAudience?: string[]
    /*
    ━━━━━━━━━━━━━━━━━━━
    MASTER PROMPT
    ━━━━━━━━━━━━━━━━━━━
    */

    masterPrompt: string

}