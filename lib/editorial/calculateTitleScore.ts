type CalculateTitleScoreInput = {

    title: unknown

    subtitle?: unknown

    theme?: unknown

}

/*
━━━━━━━━━━━━━━━━━━━
NORMALIZE
━━━━━━━━━━━━━━━━━━━
*/

function normalizeText(
    value: unknown
): string {

    if (!value)
        return ""

    if (typeof value === "string")
        return value.trim()

    if (typeof value === "number")
        return String(value)

    if (Array.isArray(value))
        return value.join(" ")

    if (typeof value === "object") {

        try {

            return JSON.stringify(value)

        } catch {

            return ""

        }

    }

    return String(value)

}

/*
━━━━━━━━━━━━━━━━━━━
CALCULATE TITLE SCORE
━━━━━━━━━━━━━━━━━━━
*/

export function calculateTitleScore({

    title,

    subtitle,

    theme

}: CalculateTitleScoreInput) {

    /*
    ━━━━━━━━━━━━━━━━━━━
    NORMALIZATION
    ━━━━━━━━━━━━━━━━━━━
    */

    const normalizedTitle =
        normalizeText(title)

    const normalizedSubtitle =
        normalizeText(subtitle)

    const normalizedTheme =
        normalizeText(theme)

    /*
    ━━━━━━━━━━━━━━━━━━━
    LOWERCASE
    ━━━━━━━━━━━━━━━━━━━
    */

    const lower = `

${normalizedTitle}
${normalizedSubtitle}
${normalizedTheme}

    `.toLowerCase()

    /*
    ━━━━━━━━━━━━━━━━━━━
    BASE
    ━━━━━━━━━━━━━━━━━━━
    */

    let emotional = 50
    let commercial = 50
    let memorability = 50
    let retention = 50

    /*
    ━━━━━━━━━━━━━━━━━━━
    POWER WORDS
    ━━━━━━━━━━━━━━━━━━━
    */

    const powerWords = [

        "segredo",
        "silêncio",
        "sombra",
        "protocolo",
        "alma",
        "desejo",
        "destino",
        "verdade",
        "horizonte",
        "memória",
        "controle",
        "eterno",
        "obsessão",
        "shadow",
        "memory",
        "protocol",
        "desire",
        "identity"

    ]

    /*
    ━━━━━━━━━━━━━━━━━━━
    ANALYSIS
    ━━━━━━━━━━━━━━━━━━━
    */

    powerWords.forEach(word => {

        if (lower.includes(word)) {

            emotional += 4
            commercial += 3
            retention += 4

        }

    })

    /*
    ━━━━━━━━━━━━━━━━━━━
    TITLE LENGTH
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        normalizedTitle.length >= 16 &&
        normalizedTitle.length <= 42

    ) {

        memorability += 10

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    SUBTITLE BONUS
    ━━━━━━━━━━━━━━━━━━━
    */

    if (
        normalizedSubtitle.length > 24
    ) {

        commercial += 8
        retention += 6

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    THEMATIC DEPTH
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        lower.includes("consciência") ||
        lower.includes("technology") ||
        lower.includes("future") ||
        lower.includes("identity") ||
        lower.includes("human")

    ) {

        emotional += 6
        retention += 6

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    LIMITS
    ━━━━━━━━━━━━━━━━━━━
    */

    emotional =
        Math.min(emotional, 100)

    commercial =
        Math.min(commercial, 100)

    memorability =
        Math.min(memorability, 100)

    retention =
        Math.min(retention, 100)

    /*
    ━━━━━━━━━━━━━━━━━━━
    FINAL
    ━━━━━━━━━━━━━━━━━━━
    */

    const bestseller = Math.round(

        (
            emotional +
            commercial +
            memorability +
            retention
        ) / 4

    )

    return {

        emotional,
        commercial,
        memorability,
        retention,
        bestseller

    }

}