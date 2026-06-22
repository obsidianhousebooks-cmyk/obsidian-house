import OpenAI from "openai"

import {

    editorialIdentity

} from "@/lib/editorial/editorialIdentity"

import {

    languageSystem

} from "@/lib/editorial/languageSystem"

import {

    narrativeBible

} from "@/lib/editorial/narrativeBible"

import {

    retentionEngine

} from "@/lib/editorial/retentionEngine"

import {

    calculateTitleScore

} from "@/lib/calculateTitleScore"

const openai = new OpenAI({

    apiKey:
        process.env.OPENAI_API_KEY

})
/*
━━━━━━━━━━━━━━━━━━━
TYPES
━━━━━━━━━━━━━━━━━━━
*/

type GenerateTitlesInput = {

    theme: string

    language: string

}

type GeneratedTitle = {

    title: string

    subtitle: string

    scores: {

        emotional: number
        commercial: number
        memorability: number
        retention: number
        bestseller: number

    }

}

/*
━━━━━━━━━━━━━━━━━━━
SUPPORTED LANGUAGES
━━━━━━━━━━━━━━━━━━━
*/

const supportedLanguages: Record<string, string> = {

    "Português": "pt-BR",

    "Inglês": "en-US",

    "Espanhol": "es-ES",

    "Alemão": "de-DE"

}

/*
━━━━━━━━━━━━━━━━━━━
NORMALIZE ARRAY
━━━━━━━━━━━━━━━━━━━
*/

function normalizeArray(
    value: unknown
): string[] {

    if (!value)
        return []

    if (Array.isArray(value))
        return value.map(String)

    if (typeof value === "string") {

        return value
            .split(",")
            .map(item => item.trim())
            .filter(Boolean)

    }

    return [String(value)]

}

/*
━━━━━━━━━━━━━━━━━━━
GENERATE TITLES
━━━━━━━━━━━━━━━━━━━
*/

export async function generateTitles({

    theme,

    language

}: GenerateTitlesInput): Promise<GeneratedTitle[]> {

    /*
    ━━━━━━━━━━━━━━━━━━━
    VALIDATION
    ━━━━━━━━━━━━━━━━━━━
    */

    if (!theme?.trim()) {

        throw new Error(
            "Tema editorial não informado"
        )

    }

    const locale =
        supportedLanguages[language]

    if (!locale) {

        throw new Error(
            `Idioma não suportado: ${language}`
        )

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    LANGUAGE PROFILE
    ━━━━━━━━━━━━━━━━━━━
    */

    const languageProfile =
        languageSystem?.[language]

    /*
    ━━━━━━━━━━━━━━━━━━━
    NARRATIVE SYSTEM
    ━━━━━━━━━━━━━━━━━━━
    */

    const atmosphere =
        normalizeArray(
            narrativeBible?.atmosphere
        )

    const themes =
        normalizeArray(
            narrativeBible?.themes
        )

    const symbols =
        normalizeArray(
            narrativeBible?.symbols
        )

    const emotionalTriggers =
        normalizeArray(
            retentionEngine?.emotionalTriggers
        )

    /*
    ━━━━━━━━━━━━━━━━━━━
    PROMPT
    ━━━━━━━━━━━━━━━━━━━
    */

    const prompt = `

Você é uma editora premium especializada
em obras contemporâneas sofisticadas.

━━━━━━━━━━━━━━━━━━━
EDITORIAL IDENTITY
━━━━━━━━━━━━━━━━━━━

${editorialIdentity}

━━━━━━━━━━━━━━━━━━━
LANGUAGE SYSTEM
━━━━━━━━━━━━━━━━━━━

${JSON.stringify(languageProfile, null, 2)}

━━━━━━━━━━━━━━━━━━━
ATMOSPHERE
━━━━━━━━━━━━━━━━━━━

${atmosphere.join(", ")}

━━━━━━━━━━━━━━━━━━━
THEMES
━━━━━━━━━━━━━━━━━━━

${themes.join(", ")}

━━━━━━━━━━━━━━━━━━━
SYMBOLS
━━━━━━━━━━━━━━━━━━━

${symbols.join(", ")}

━━━━━━━━━━━━━━━━━━━
EMOTIONAL TRIGGERS
━━━━━━━━━━━━━━━━━━━

${emotionalTriggers.join(", ")}

━━━━━━━━━━━━━━━━━━━
EDITORIAL THEME
━━━━━━━━━━━━━━━━━━━

${theme}

━━━━━━━━━━━━━━━━━━━
OBJECTIVE
━━━━━━━━━━━━━━━━━━━

Generate 4 premium bestselling book concepts.

Each title must feel:

- emotionally strong
- commercially viable
- literary
- sophisticated
- memorable
- publishable
- premium

━━━━━━━━━━━━━━━━━━━
FORMAT
━━━━━━━━━━━━━━━━━━━

Return ONLY valid JSON.

[
  {
    "title": "",
    "subtitle": ""
  }
]

`

    /*
    ━━━━━━━━━━━━━━━━━━━
    OPENAI
    ━━━━━━━━━━━━━━━━━━━
    */

    const completion =
        await openai.chat.completions.create({

            model: "gpt-4.1",

            temperature: 1,

            messages: [

                {

                    role: "system",

                    content:
                        "You are a premium literary publisher."

                },

                {

                    role: "user",

                    content: prompt

                }

            ]

        })

    /*
    ━━━━━━━━━━━━━━━━━━━
    RAW
    ━━━━━━━━━━━━━━━━━━━
    */

    const raw =
        completion.choices?.[0]
            ?.message
            ?.content || "[]"

    /*
    ━━━━━━━━━━━━━━━━━━━
    CLEAN
    ━━━━━━━━━━━━━━━━━━━
    */

    const cleaned =
        raw
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim()

    /*
    ━━━━━━━━━━━━━━━━━━━
    PARSE
    ━━━━━━━━━━━━━━━━━━━
    */

    let parsed: any[] = []

    try {

        parsed =
            JSON.parse(cleaned)

    } catch {

        throw new Error(
            "Erro ao interpretar os títulos"
        )

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    FORMAT
    ━━━━━━━━━━━━━━━━━━━
    */

    const formatted: GeneratedTitle[] =
        parsed.map((item) => {

            const title =
                String(item.title || "").trim()

            const subtitle =
                String(item.subtitle || "").trim()

            const scores =
                calculateTitleScore({

                    title,
                    subtitle,
                    theme

                })

            return {

                title,

                subtitle,

                scores

            }

        })

    /*
    ━━━━━━━━━━━━━━━━━━━
    SORT
    ━━━━━━━━━━━━━━━━━━━
    */

    formatted.sort(

        (a, b) =>

            b.scores.bestseller -
            a.scores.bestseller

    )

    return formatted

}