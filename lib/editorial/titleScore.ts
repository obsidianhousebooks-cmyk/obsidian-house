function normalize(
    text: string
) {

    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")

}

export function calculateTitleScore(
    title: string
) {

    const normalized =
        normalize(title)

    let score = 72

    /*
    ━━━━━━━━━━━━━━━━━━━
    PREMIUM SIGNALS
    ━━━━━━━━━━━━━━━━━━━
    */

    const premiumSignals = [

        "inteligencia artificial",
        "algoritmo",
        "digital",
        "futuro",
        "codigo",
        "economia",
        "transformacao",
        "capital",
        "elite",
        "poder",
        "nova era",
        "riqueza",
        "automacao",
        "sistema",
        "mercado",
        "invisivel",
        "neural"

    ]

    premiumSignals.forEach(word => {

        if (
            normalized.includes(word)
        ) {
            score += 2.5
        }

    })

    /*
    ━━━━━━━━━━━━━━━━━━━
    SOPHISTICATION
    ━━━━━━━━━━━━━━━━━━━
    */

    if (
        title.length >= 35 &&
        title.length <= 72
    ) {

        score += 6

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    ATMOSPHERE
    ━━━━━━━━━━━━━━━━━━━
    */

    const atmosphereSignals = [

        "silenciosa",
        "oculto",
        "invisivel",
        "nova",
        "ascensao",
        "transformacao",
        "codigo",
        "arquitetura",
        "expansao"

    ]

    atmosphereSignals.forEach(word => {

        if (
            normalized.includes(word)
        ) {

            score += 3

        }

    })

    /*
    ━━━━━━━━━━━━━━━━━━━
    PENALTIES
    ━━━━━━━━━━━━━━━━━━━
    */

    const cheapWords = [

        "explosivo",
        "milionario",
        "secreto",
        "proibido",
        "viral",
        "passo a passo",
        "100%",
        "facil",
        "rapido",
        "guru",
        "milhoes"

    ]

    cheapWords.forEach(word => {

        if (
            normalized.includes(word)
        ) {

            score -= 8

        }

    })

    /*
    ━━━━━━━━━━━━━━━━━━━
    OVER-HYPE PENALTY
    ━━━━━━━━━━━━━━━━━━━
    */

    const exclamationCount =
        (title.match(/!/g) || []).length

    if (exclamationCount > 0) {

        score -= 10

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    ALL CAPS PENALTY
    ━━━━━━━━━━━━━━━━━━━
    */

    if (
        title === title.toUpperCase()
    ) {

        score -= 12

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    PHONETIC FLOW
    ━━━━━━━━━━━━━━━━━━━
    */

    const words =
        title.split(" ")

    if (
        words.length >= 4 &&
        words.length <= 9
    ) {

        score += 4

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    PREMIUM CAP
    ━━━━━━━━━━━━━━━━━━━
    */

    if (score > 98) score = 98

    if (score < 52) score = 52

    return Math.round(score)

}