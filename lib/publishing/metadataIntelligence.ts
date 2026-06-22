/*
━━━━━━━━━━━━━━━━━━━
METADATA SCORING ENGINE
━━━━━━━━━━━━━━━━━━━
*/

import {

    seoEngine,

    calculateSEOScore

} from "./seoEngine"

import {

    marketPositioning

} from "./marketPositioning"

import {

    hooksEngine

} from "./hooks"

/*
━━━━━━━━━━━━━━━━━━━
TYPES
━━━━━━━━━━━━━━━━━━━
*/

export interface MetadataAnalysis {

    overallScore: number

    titleScore: number

    subtitleScore: number

    seoScore: number

    emotionalScore: number

    commercialScore: number

    thumbnailScore: number

    retentionScore: number

    strengths: string[]

    weaknesses: string[]

    recommendations: string[]

}

export interface BookMetadata {

    title: string

    subtitle: string

    description?: string

    keywords?: string[]

    categories?: string[]

}

/*
━━━━━━━━━━━━━━━━━━━
WEIGHTS
━━━━━━━━━━━━━━━━━━━
*/

const WEIGHTS = {

    title:
        0.24,

    subtitle:
        0.16,

    seo:
        0.18,

    emotional:
        0.14,

    commercial:
        0.12,

    thumbnail:
        0.08,

    retention:
        0.08

}

/*
━━━━━━━━━━━━━━━━━━━
TITLE SCORING
━━━━━━━━━━━━━━━━━━━
*/

function scoreTitle(
    title: string
) {

    let score = 0

    const lower =
        title.toLowerCase()

    /*
    ━━━━━━━━━━━━━━━━━━━
    IDEAL LENGTH
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        title.length >= 12 &&
        title.length <= 32

    ) {

        score += 25

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    CINEMATIC FEEL
    ━━━━━━━━━━━━━━━━━━━
    */

    const cinematicWords = [

        "protocolo",

        "espelho",

        "mirror",

        "ruído",

        "silêncio",

        "vidro",

        "código",

        "observador",

        "ausência",

        "reflexo"

    ]

    cinematicWords.forEach(word => {

        if (

            lower.includes(word)

        ) {

            score += 10

        }

    })

    /*
    ━━━━━━━━━━━━━━━━━━━
    MEMORY RETENTION
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        title.split(" ").length <= 4

    ) {

        score += 20

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    NO GENERIC TERMS
    ━━━━━━━━━━━━━━━━━━━
    */

    const genericTerms = [

        "segredo",

        "verdade",

        "mentalidade",

        "sucesso",

        "poder",

        "hábitos"

    ]

    genericTerms.forEach(term => {

        if (

            lower.includes(term)

        ) {

            score -= 15

        }

    })

    /*
    ━━━━━━━━━━━━━━━━━━━
    PREMIUM PERCEPTION
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        title.match(/[A-ZÀ-Ú]/g)?.length

    ) {

        score += 10

    }

    return Math.max(
        0,
        Math.min(score, 100)
    )

}

/*
━━━━━━━━━━━━━━━━━━━
SUBTITLE SCORING
━━━━━━━━━━━━━━━━━━━
*/

function scoreSubtitle(
    subtitle: string
) {

    let score = 0

    const lower =
        subtitle.toLowerCase()

    /*
    ━━━━━━━━━━━━━━━━━━━
    IDEAL LENGTH
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        subtitle.length >= 45 &&
        subtitle.length <= 140

    ) {

        score += 25

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    EMOTIONAL TENSION
    ━━━━━━━━━━━━━━━━━━━
    */

    const emotionalTriggers = [

        "desejo",

        "observa",

        "silêncio",

        "controle",

        "consciência",

        "tecnologia",

        "emoções",

        "paranoia",

        "vigilância",

        "humano"

    ]

    emotionalTriggers.forEach(trigger => {

        if (

            lower.includes(trigger)

        ) {

            score += 8

        }

    })

    /*
    ━━━━━━━━━━━━━━━━━━━
    CONVERSION LANGUAGE
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        lower.includes("como") ||
        lower.includes("quando") ||
        lower.includes("algumas")

    ) {

        score += 10

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    TOO ABSTRACT PENALTY
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        subtitle.split(" ").length > 22

    ) {

        score -= 15

    }

    return Math.max(
        0,
        Math.min(score, 100)
    )

}

/*
━━━━━━━━━━━━━━━━━━━
EMOTIONAL SCORING
━━━━━━━━━━━━━━━━━━━
*/

function scoreEmotionalImpact(
    text: string
) {

    let score = 0

    const emotionalWords = [

        "paranoia",

        "desejo",

        "silêncio",

        "controle",

        "medo",

        "vigilância",

        "obsessão",

        "desconforto",

        "intimidade",

        "humano"

    ]

    emotionalWords.forEach(word => {

        if (

            text.toLowerCase()
                .includes(word)

        ) {

            score += 10

        }

    })

    return Math.min(score, 100)

}

/*
━━━━━━━━━━━━━━━━━━━
COMMERCIAL SCORING
━━━━━━━━━━━━━━━━━━━
*/

function scoreCommercialPotential(
    metadata: BookMetadata
) {

    let score = 50

    /*
    ━━━━━━━━━━━━━━━━━━━
    TITLE CLICKABILITY
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        metadata.title.length <= 28

    ) {

        score += 15

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    SUBTITLE CLARITY
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        metadata.subtitle.length >= 50

    ) {

        score += 15

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    SEO KEYWORDS
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        metadata.keywords &&
        metadata.keywords.length >= 7

    ) {

        score += 10

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    CATEGORY OPTIMIZATION
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        metadata.categories &&
        metadata.categories.length >= 2

    ) {

        score += 10

    }

    return Math.min(score, 100)

}

/*
━━━━━━━━━━━━━━━━━━━
THUMBNAIL SCORING
━━━━━━━━━━━━━━━━━━━
*/

function scoreThumbnailReadability(
    title: string
) {

    let score = 100

    /*
    ━━━━━━━━━━━━━━━━━━━
    TOO LONG PENALTY
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        title.length > 32

    ) {

        score -= 30

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    WORD COUNT
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        title.split(" ").length > 5

    ) {

        score -= 25

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    VISUAL IMPACT
    ━━━━━━━━━━━━━━━━━━━
    */

    const impactfulWords = [

        "vidro",

        "mirror",

        "ruído",

        "protocolo",

        "observador"

    ]

    impactfulWords.forEach(word => {

        if (

            title.toLowerCase()
                .includes(word)

        ) {

            score += 8

        }

    })

    return Math.max(
        0,
        Math.min(score, 100)
    )

}

/*
━━━━━━━━━━━━━━━━━━━
RETENTION SCORING
━━━━━━━━━━━━━━━━━━━
*/

function scoreRetentionPotential(
    description?: string
) {

    if (!description)
        return 50

    let score = 0

    const retentionTriggers = [

        "impossível",

        "segredo",

        "descoberta",

        "silêncio",

        "paranoia",

        "obsessão",

        "controle",

        "sistema",

        "emocional",

        "mistério"

    ]

    retentionTriggers.forEach(trigger => {

        if (

            description
                .toLowerCase()
                .includes(trigger)

        ) {

            score += 10

        }

    })

    return Math.min(score, 100)

}

/*
━━━━━━━━━━━━━━━━━━━
MAIN ANALYZER
━━━━━━━━━━━━━━━━━━━
*/

export function analyzeMetadata(

    metadata: BookMetadata

): MetadataAnalysis {

    const titleScore =
        scoreTitle(metadata.title)

    const subtitleScore =
        scoreSubtitle(metadata.subtitle)

    const seoScore =
        calculateSEOScore(

            `
${metadata.title}
${metadata.subtitle}
${metadata.description || ""}
`

        )

    const emotionalScore =
        scoreEmotionalImpact(

            `
${metadata.title}
${metadata.subtitle}
`

        )

    const commercialScore =
        scoreCommercialPotential(metadata)

    const thumbnailScore =
        scoreThumbnailReadability(
            metadata.title
        )

    const retentionScore =
        scoreRetentionPotential(
            metadata.description
        )

    /*
    ━━━━━━━━━━━━━━━━━━━
    FINAL SCORE
    ━━━━━━━━━━━━━━━━━━━
    */

    const overallScore = Math.floor(

        (
            titleScore * WEIGHTS.title +

            subtitleScore * WEIGHTS.subtitle +

            seoScore * WEIGHTS.seo +

            emotionalScore * WEIGHTS.emotional +

            commercialScore * WEIGHTS.commercial +

            thumbnailScore * WEIGHTS.thumbnail +

            retentionScore * WEIGHTS.retention
        )

    )

    /*
    ━━━━━━━━━━━━━━━━━━━
    STRENGTHS
    ━━━━━━━━━━━━━━━━━━━
    */

    const strengths: string[] = []

    if (titleScore >= 80) {

        strengths.push(
            "Título cinematicamente forte"
        )

    }

    if (seoScore >= 80) {

        strengths.push(
            "Excelente potencial SEO Amazon"
        )

    }

    if (thumbnailScore >= 80) {

        strengths.push(
            "Alta legibilidade em thumbnail"
        )

    }

    if (emotionalScore >= 80) {

        strengths.push(
            "Forte impacto emocional"
        )

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    WEAKNESSES
    ━━━━━━━━━━━━━━━━━━━
    */

    const weaknesses: string[] = []

    if (titleScore < 60) {

        weaknesses.push(
            "Título pouco memorável"
        )

    }

    if (subtitleScore < 60) {

        weaknesses.push(
            "Subtítulo pouco conversivo"
        )

    }

    if (thumbnailScore < 60) {

        weaknesses.push(
            "Baixa legibilidade em thumbnail"
        )

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    RECOMMENDATIONS
    ━━━━━━━━━━━━━━━━━━━
    */

    const recommendations: string[] = []

    if (

        metadata.title.length > 32

    ) {

        recommendations.push(
            "Reduzir tamanho do título"
        )

    }

    if (

        metadata.subtitle.length < 50

    ) {

        recommendations.push(
            "Expandir tensão emocional no subtítulo"
        )

    }

    if (

        !metadata.keywords ||
        metadata.keywords.length < 7

    ) {

        recommendations.push(
            "Adicionar mais keywords SEO"
        )

    }

    return {

        overallScore,

        titleScore,

        subtitleScore,

        seoScore,

        emotionalScore,

        commercialScore,

        thumbnailScore,

        retentionScore,

        strengths,

        weaknesses,

        recommendations

    }

}

/*
━━━━━━━━━━━━━━━━━━━
BESTSELLER THRESHOLD
━━━━━━━━━━━━━━━━━━━
*/

export function isBestsellerPotential(

    analysis: MetadataAnalysis

) {

    return analysis.overallScore >= 82

}

/*
━━━━━━━━━━━━━━━━━━━
PREMIUM THRESHOLD
━━━━━━━━━━━━━━━━━━━
*/

export function isPremiumPublishingReady(

    analysis: MetadataAnalysis

) {

    return (

        analysis.titleScore >= 80 &&
        analysis.thumbnailScore >= 80 &&
        analysis.emotionalScore >= 75

    )

}