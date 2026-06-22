/*
━━━━━━━━━━━━━━━━━━━
COVER INTELLIGENCE
━━━━━━━━━━━━━━━━━━━
*/

interface CoverIntelligenceInput {

    title: string

    subtitle: string

    genre: string

    coverStyle: string

    image?: string

    language?: string

}

interface CoverWarning {

    type: string

    severity: number

    message: string

}

interface CoverRecommendation {

    category: string

    recommendation: string

}

interface CoverIntelligenceResult {

    overallScore: number

    ctrScore: number

    thumbnailReadability: number

    premiumPerception: number

    genreFit: number

    typographyHierarchy: number

    mobileVisibility: number

    amazonCompetitiveness: number

    strengths: string[]

    weaknesses: string[]

    warnings: CoverWarning[]

    recommendations:
    CoverRecommendation[]

    verdict: string

}

/*
━━━━━━━━━━━━━━━━━━━
UTILS
━━━━━━━━━━━━━━━━━━━
*/

function wordCount(
    text: string
) {

    return text

        .split(/\s+/)

        .filter(Boolean)

        .length

}

/*
━━━━━━━━━━━━━━━━━━━
TITLE ANALYSIS
━━━━━━━━━━━━━━━━━━━
*/

function analyzeTitleImpact(

    title: string

) {

    let score = 50

    /*
    ━━━━━━━━━━━━━━━━━━━
    LENGTH
    ━━━━━━━━━━━━━━━━━━━
    */

    const words =
        wordCount(title)

    if (

        words >= 2 &&
        words <= 5

    ) {

        score += 18

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    PREMIUM WORDS
    ━━━━━━━━━━━━━━━━━━━
    */

    const premiumWords = [

        "protocolo",

        "código",

        "segredo",

        "espelho",

        "algoritmo",

        "silêncio",

        "sistema",

        "obsidiana",

        "atlas",

        "vidro",

        "neural",

        "máquina",

        "controle",

        "paradoxo"

    ]

    premiumWords.forEach(word => {

        if (

            title
                .toLowerCase()
                .includes(word)

        ) {

            score += 6

        }

    })

    /*
    ━━━━━━━━━━━━━━━━━━━
    VISUAL POWER
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        title.length <= 24

    ) {

        score += 14

    }

    return Math.min(score, 100)

}

/*
━━━━━━━━━━━━━━━━━━━
SUBTITLE ANALYSIS
━━━━━━━━━━━━━━━━━━━
*/

function analyzeSubtitleConversion(

    subtitle: string

) {

    let score = 45

    const emotionalTriggers = [

        "medo",

        "controle",

        "desejo",

        "segredo",

        "obsessão",

        "consciência",

        "manipulação",

        "humanidade",

        "verdade",

        "inteligência artificial"

    ]

    emotionalTriggers.forEach(trigger => {

        if (

            subtitle
                .toLowerCase()
                .includes(trigger)

        ) {

            score += 5

        }

    })

    /*
    ━━━━━━━━━━━━━━━━━━━
    LENGTH
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        subtitle.length >= 40 &&
        subtitle.length <= 110

    ) {

        score += 15

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    CURIOSITY
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        subtitle.includes(".") ||

        subtitle.includes(":")
    ) {

        score += 8

    }

    return Math.min(score, 100)

}

/*
━━━━━━━━━━━━━━━━━━━
THUMBNAIL ANALYSIS
━━━━━━━━━━━━━━━━━━━
*/

function analyzeThumbnailReadability(

    title: string,

    subtitle: string

) {

    let score = 100

    /*
    ━━━━━━━━━━━━━━━━━━━
    TITLE LENGTH
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        title.length > 28

    ) {

        score -= 20

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    SUBTITLE LENGTH
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        subtitle.length > 120

    ) {

        score -= 18

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    VISUAL CLARITY
    ━━━━━━━━━━━━━━━━━━━
    */

    const titleWords =
        wordCount(title)

    if (

        titleWords > 6

    ) {

        score -= 12

    }

    return Math.max(
        0,
        score
    )

}

/*
━━━━━━━━━━━━━━━━━━━
PREMIUM ANALYSIS
━━━━━━━━━━━━━━━━━━━
*/

function analyzePremiumPerception(

    title: string,

    genre: string,

    coverStyle: string

) {

    let score = 60

    /*
    ━━━━━━━━━━━━━━━━━━━
    SOPHISTICATION
    ━━━━━━━━━━━━━━━━━━━
    */

    const sophisticatedPatterns = [

        "protocolo",

        "obsidiana",

        "paradoxo",

        "espelho",

        "atlas",

        "arquivo",

        "sistema",

        "silêncio"

    ]

    sophisticatedPatterns.forEach(pattern => {

        if (

            title
                .toLowerCase()
                .includes(pattern)

        ) {

            score += 5

        }

    })

    /*
    ━━━━━━━━━━━━━━━━━━━
    STYLE
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        coverStyle
            .toLowerCase()
            .includes("premium")

    ) {

        score += 10

    }

    if (

        coverStyle
            .toLowerCase()
            .includes("luxo")

    ) {

        score += 8

    }

    return Math.min(score, 100)

}

/*
━━━━━━━━━━━━━━━━━━━
GENRE FIT
━━━━━━━━━━━━━━━━━━━
*/

function analyzeGenreFit(

    title: string,

    genre: string

) {

    let score = 50

    /*
    ━━━━━━━━━━━━━━━━━━━
    THRILLER
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        genre
            .toLowerCase()
            .includes("thriller")

    ) {

        const thrillerSignals = [

            "protocolo",

            "controle",

            "sistema",

            "espelho",

            "erro",

            "silêncio",

            "máquina"

        ]

        thrillerSignals.forEach(signal => {

            if (

                title
                    .toLowerCase()
                    .includes(signal)

            ) {

                score += 7

            }

        })

    }

    return Math.min(score, 100)

}

/*
━━━━━━━━━━━━━━━━━━━
TYPOGRAPHY HIERARCHY
━━━━━━━━━━━━━━━━━━━
*/

function analyzeTypographyHierarchy(

    title: string,

    subtitle: string

) {

    let score = 100

    if (

        title.length > 32

    ) {

        score -= 25

    }

    if (

        subtitle.length > 140

    ) {

        score -= 18

    }

    if (

        title ===
        title.toUpperCase()

    ) {

        score -= 10

    }

    return Math.max(
        0,
        score
    )

}

/*
━━━━━━━━━━━━━━━━━━━
MOBILE VISIBILITY
━━━━━━━━━━━━━━━━━━━
*/

function analyzeMobileVisibility(

    title: string

) {

    let score = 100

    if (

        title.length > 24

    ) {

        score -= 22

    }

    if (

        wordCount(title) > 5

    ) {

        score -= 15

    }

    return Math.max(
        0,
        score
    )

}

/*
━━━━━━━━━━━━━━━━━━━
MARKET COMPETITIVENESS
━━━━━━━━━━━━━━━━━━━
*/

function analyzeCompetitiveness(

    title: string,

    subtitle: string

) {

    let score = 50

    const marketPatterns = [

        "sistema",

        "algoritmo",

        "psicológico",

        "protocolo",

        "segredo",

        "inteligência",

        "consciência"

    ]

    marketPatterns.forEach(pattern => {

        if (

            (
                title +
                subtitle
            )

                .toLowerCase()

                .includes(pattern)

        ) {

            score += 6

        }

    })

    /*
    ━━━━━━━━━━━━━━━━━━━
    CLICKABILITY
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        title.length <= 22

    ) {

        score += 10

    }

    return Math.min(score, 100)

}

/*
━━━━━━━━━━━━━━━━━━━
MAIN ENGINE
━━━━━━━━━━━━━━━━━━━
*/

export async function coverIntelligence({

    title,

    subtitle,

    genre,

    coverStyle,

    image,

    language

}: CoverIntelligenceInput):

    Promise<CoverIntelligenceResult> {

    /*
    ━━━━━━━━━━━━━━━━━━━
    SCORES
    ━━━━━━━━━━━━━━━━━━━
    */

    const ctrScore =

        Math.floor(

            (

                analyzeTitleImpact(title) *

                0.55 +

                analyzeSubtitleConversion(
                    subtitle
                ) *

                0.45

            )

        )

    const thumbnailReadability =

        analyzeThumbnailReadability(

            title,

            subtitle

        )

    const premiumPerception =

        analyzePremiumPerception(

            title,

            genre,

            coverStyle

        )

    const genreFit =

        analyzeGenreFit(

            title,

            genre

        )

    const typographyHierarchy =

        analyzeTypographyHierarchy(

            title,

            subtitle

        )

    const mobileVisibility =

        analyzeMobileVisibility(
            title
        )

    const amazonCompetitiveness =

        analyzeCompetitiveness(

            title,

            subtitle

        )

    /*
    ━━━━━━━━━━━━━━━━━━━
    GLOBAL SCORE
    ━━━━━━━━━━━━━━━━━━━
    */

    const overallScore =

        Math.floor(

            (

                ctrScore * 0.24 +

                thumbnailReadability * 0.18 +

                premiumPerception * 0.18 +

                genreFit * 0.14 +

                typographyHierarchy * 0.10 +

                mobileVisibility * 0.08 +

                amazonCompetitiveness * 0.08

            )

        )

    /*
    ━━━━━━━━━━━━━━━━━━━
    STRENGTHS
    ━━━━━━━━━━━━━━━━━━━
    */

    const strengths:
        string[] = []

    if (

        ctrScore >= 80

    ) {

        strengths.push(

            "Alto potencial de clique"

        )

    }

    if (

        premiumPerception >= 80

    ) {

        strengths.push(

            "Forte percepção premium"

        )

    }

    if (

        thumbnailReadability >= 80

    ) {

        strengths.push(

            "Boa legibilidade em thumbnail"

        )

    }

    if (

        genreFit >= 80

    ) {

        strengths.push(

            "Excelente alinhamento de gênero"

        )

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    WEAKNESSES
    ━━━━━━━━━━━━━━━━━━━
    */

    const weaknesses:
        string[] = []

    if (

        mobileVisibility < 70

    ) {

        weaknesses.push(

            "Baixa visibilidade mobile"

        )

    }

    if (

        typographyHierarchy < 70

    ) {

        weaknesses.push(

            "Hierarquia tipográfica fraca"

        )

    }

    if (

        ctrScore < 70

    ) {

        weaknesses.push(

            "CTR abaixo do ideal"

        )

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    WARNINGS
    ━━━━━━━━━━━━━━━━━━━
    */

    const warnings:
        CoverWarning[] = []

    if (

        title.length > 30

    ) {

        warnings.push({

            type:
                "title-length",

            severity: 7,

            message:
                "Título excessivamente longo para thumbnail"

        })

    }

    if (

        subtitle.length > 140

    ) {

        warnings.push({

            type:
                "subtitle-length",

            severity: 6,

            message:
                "Subtítulo pode perder legibilidade"

        })

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    RECOMMENDATIONS
    ━━━━━━━━━━━━━━━━━━━
    */

    const recommendations:
        CoverRecommendation[] = []

    if (

        mobileVisibility < 80

    ) {

        recommendations.push({

            category:
                "mobile",

            recommendation:
                "Reduzir tamanho visual do título"

        })

    }

    if (

        ctrScore < 80

    ) {

        recommendations.push({

            category:
                "ctr",

            recommendation:
                "Adicionar mais curiosidade emocional"

        })

    }

    if (

        premiumPerception < 80

    ) {

        recommendations.push({

            category:
                "premium",

            recommendation:
                "Elevar sofisticação visual e semântica"

        })

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    VERDICT
    ━━━━━━━━━━━━━━━━━━━
    */

    let verdict =

        "Competitivo"

    if (

        overallScore >= 90

    ) {

        verdict =
            "Potencial best seller premium"

    } else if (

        overallScore >= 80

    ) {

        verdict =
            "Muito competitivo"

    } else if (

        overallScore < 65

    ) {

        verdict =
            "Necessita refinamento comercial"

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    RETURN
    ━━━━━━━━━━━━━━━━━━━
    */

    return {

        overallScore,

        ctrScore,

        thumbnailReadability,

        premiumPerception,

        genreFit,

        typographyHierarchy,

        mobileVisibility,

        amazonCompetitiveness,

        strengths,

        weaknesses,

        warnings,

        recommendations,

        verdict

    }

}