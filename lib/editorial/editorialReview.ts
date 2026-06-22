/*
━━━━━━━━━━━━━━━━━━━
EDITORIAL REVIEW
━━━━━━━━━━━━━━━━━━━

Sistema de revisão literária
da Obsidian House.

Responsável por:

- detectar escrita IA
- analisar compulsão
- avaliar diálogo
- detectar pacing morto
- validar profundidade emocional
- medir atmosfera
- analisar retenção Kindle

━━━━━━━━━━━━━━━━━━━
*/

/*
━━━━━━━━━━━━━━━━━━━
REVIEW ISSUE
━━━━━━━━━━━━━━━━━━━
*/

export interface EditorialIssue {

    type: string

    severity: "low" | "medium" | "high"

    message: string

    suggestion: string

}

/*
━━━━━━━━━━━━━━━━━━━
REVIEW RESULT
━━━━━━━━━━━━━━━━━━━
*/

export interface EditorialReviewResult {

    humanAuthenticity: number

    dialogueQuality: number

    psychologicalDepth: number

    pacingMomentum: number

    atmosphericDensity: number

    kindleRetention: number

    literarySophistication: number

    overallScore: number

    issues: EditorialIssue[]

    strengths: string[]

    recommendations: string[]

}

/*
━━━━━━━━━━━━━━━━━━━
AI PATTERNS
━━━━━━━━━━━━━━━━━━━
*/

const aiPatterns = [

    "she felt that",

    "he felt that",

    "somehow",

    "suddenly",

    "a silence hung",

    "couldn't explain why",

    "for a moment",

    "deep down",

    "in that moment",

    "it felt like",

    "there was something about",

    "waves of emotion",

    "his heart raced",

    "her heart raced",

    "everything changed",

    "little did they know"

]

/*
━━━━━━━━━━━━━━━━━━━
WEAK EMOTION
━━━━━━━━━━━━━━━━━━━
*/

const weakEmotionPatterns = [

    "felt sad",

    "felt angry",

    "felt nervous",

    "felt emotional",

    "felt scared",

    "was overwhelmed",

    "was devastated"

]

/*
━━━━━━━━━━━━━━━━━━━
EXPOSITION SIGNALS
━━━━━━━━━━━━━━━━━━━
*/

const expositionPatterns = [

    "because",

    "explained",

    "realized that",

    "understood that",

    "remembered that",

    "knew that"

]

/*
━━━━━━━━━━━━━━━━━━━
HELPERS
━━━━━━━━━━━━━━━━━━━
*/

function normalize(

    text: string

): string {

    return text.toLowerCase()

}

function countMatches(

    text: string,

    patterns: string[]

): number {

    let total = 0

    for (

        const pattern of
        patterns

    ) {

        if (

            text.includes(
                pattern
            )

        ) {

            total++

        }

    }

    return total

}

/*
━━━━━━━━━━━━━━━━━━━
SCORING
━━━━━━━━━━━━━━━━━━━
*/

function clampScore(

    value: number

): number {

    return Math.max(
        0,
        Math.min(100, value)
    )

}

/*
━━━━━━━━━━━━━━━━━━━
EDITORIAL REVIEW
━━━━━━━━━━━━━━━━━━━
*/

export function editorialReview(

    content: string

): EditorialReviewResult {

    const text =
        normalize(content)

    const issues:
        EditorialIssue[] = []

    const strengths:
        string[] = []

    const recommendations:
        string[] = []

    /*
    ━━━━━━━━━━━━━━━━━━━
    AI DETECTION
    ━━━━━━━━━━━━━━━━━━━
    */

    const aiMatches =
        countMatches(
            text,
            aiPatterns
        )

    let humanAuthenticity =
        100 - (aiMatches * 6)

    if (

        aiMatches > 3

    ) {

        issues.push({

            type:
                "ai-patterns",

            severity:
                "high",

            message:
                "Detected repetitive AI-style prose patterns.",

            suggestion:
                "Increase subtext and reduce generic introspection."

        })

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    WEAK EMOTION
    ━━━━━━━━━━━━━━━━━━━
    */

    const weakEmotion =
        countMatches(
            text,
            weakEmotionPatterns
        )

    let psychologicalDepth =
        100 - (weakEmotion * 7)

    if (

        weakEmotion > 2

    ) {

        issues.push({

            type:
                "weak-emotion",

            severity:
                "medium",

            message:
                "Emotional expression feels generic or overexplained.",

            suggestion:
                "Replace declared emotions with behavioral tension and subtext."

        })

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    EXPOSITION
    ━━━━━━━━━━━━━━━━━━━
    */

    const exposition =
        countMatches(
            text,
            expositionPatterns
        )

    let literarySophistication =
        100 - (exposition * 4)

    if (

        exposition > 5

    ) {

        issues.push({

            type:
                "heavy-exposition",

            severity:
                "medium",

            message:
                "Narrative relies too heavily on explanation.",

            suggestion:
                "Allow readers to infer emotion through behavior and atmosphere."

        })

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    DIALOGUE ANALYSIS
    ━━━━━━━━━━━━━━━━━━━
    */

    const dialogueIndicators = [

        "...",
        "—",
        "\""

    ]

    const dialogueCount =
        countMatches(
            text,
            dialogueIndicators
        )

    let dialogueQuality =
        40 + (dialogueCount * 6)

    if (

        dialogueQuality > 100

    ) {

        dialogueQuality = 100

    }

    if (

        dialogueQuality < 55

    ) {

        issues.push({

            type:
                "dialogue",

            severity:
                "medium",

            message:
                "Dialogue lacks natural interruption and human tension.",

            suggestion:
                "Increase subtext, pauses and emotionally incomplete speech."

        })

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    PACING
    ━━━━━━━━━━━━━━━━━━━
    */

    const pacingIndicators = [

        "but",
        "however",
        "instead",
        "before",
        "then",
        "still"

    ]

    const pacingCount =
        countMatches(
            text,
            pacingIndicators
        )

    let pacingMomentum =
        45 + (pacingCount * 3)

    pacingMomentum =
        clampScore(
            pacingMomentum
        )

    if (

        pacingMomentum < 60

    ) {

        issues.push({

            type:
                "pacing",

            severity:
                "high",

            message:
                "Narrative momentum feels flat.",

            suggestion:
                "Increase emotional escalation and scene progression."

        })

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    ATMOSPHERE
    ━━━━━━━━━━━━━━━━━━━
    */

    const atmosphereIndicators = [

        "rain",
        "light",
        "silence",
        "shadow",
        "window",
        "coffee",
        "glass",
        "night",
        "music"

    ]

    const atmosphereCount =
        countMatches(
            text,
            atmosphereIndicators
        )

    let atmosphericDensity =
        40 + (atmosphereCount * 5)

    atmosphericDensity =
        clampScore(
            atmosphericDensity
        )

    if (

        atmosphericDensity > 75

    ) {

        strengths.push(
            "Strong cinematic atmosphere."
        )

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    KINDLE RETENTION
    ━━━━━━━━━━━━━━━━━━━
    */

    let kindleRetention =
        Math.floor(

            (
                pacingMomentum +
                psychologicalDepth +
                atmosphericDensity
            ) / 3

        )

    kindleRetention =
        clampScore(
            kindleRetention
        )

    if (

        kindleRetention > 78

    ) {

        strengths.push(
            "Strong binge-reading momentum."
        )

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    HUMAN AUTHENTICITY
    ━━━━━━━━━━━━━━━━━━━
    */

    humanAuthenticity =
        clampScore(
            humanAuthenticity
        )

    psychologicalDepth =
        clampScore(
            psychologicalDepth
        )

    literarySophistication =
        clampScore(
            literarySophistication
        )

    /*
    ━━━━━━━━━━━━━━━━━━━
    OVERALL
    ━━━━━━━━━━━━━━━━━━━
    */

    const overallScore =
        Math.floor(

            (
                humanAuthenticity +
                dialogueQuality +
                psychologicalDepth +
                pacingMomentum +
                atmosphericDensity +
                kindleRetention +
                literarySophistication
            ) / 7

        )

    /*
    ━━━━━━━━━━━━━━━━━━━
    RECOMMENDATIONS
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        overallScore < 75

    ) {

        recommendations.push(
            "Increase psychological contradiction and emotional subtext."
        )

    }

    if (

        dialogueQuality < 70

    ) {

        recommendations.push(
            "Improve dialogue realism through interruption and hesitation."
        )

    }

    if (

        literarySophistication < 70

    ) {

        recommendations.push(
            "Reduce exposition and increase behavioral storytelling."
        )

    }

    if (

        atmosphericDensity < 65

    ) {

        recommendations.push(
            "Strengthen cinematic sensory atmosphere."
        )

    }

    if (

        humanAuthenticity > 85

    ) {

        strengths.push(
            "Prose feels emotionally human."
        )

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    RETURN
    ━━━━━━━━━━━━━━━━━━━
    */

    return {

        humanAuthenticity,

        dialogueQuality,

        psychologicalDepth,

        pacingMomentum,

        atmosphericDensity,

        kindleRetention,

        literarySophistication,

        overallScore,

        issues,

        strengths,

        recommendations

    }

}