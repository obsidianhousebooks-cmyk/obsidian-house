import OpenAI from "openai"

/*
━━━━━━━━━━━━━━━━━━━
OPENAI CLIENT
━━━━━━━━━━━━━━━━━━━
*/

export const openai =
    new OpenAI({

        apiKey:
            process.env.OPENAI_API_KEY

    })

/*
━━━━━━━━━━━━━━━━━━━
AI MODELS
━━━━━━━━━━━━━━━━━━━
*/

export const AI_MODELS = {

    premium:
        "gpt-5",

    fast:
        "gpt-5-mini"

}

/*
━━━━━━━━━━━━━━━━━━━
EDITORIAL SETTINGS
━━━━━━━━━━━━━━━━━━━
*/

export const EDITORIAL_AI_SETTINGS = {

    chapterMaxTokens:
        7000,

    outlineMaxTokens:
        5000,

    titleMaxTokens:
        1200,

    coverPromptMaxTokens:
        1500

}

/*
━━━━━━━━━━━━━━━━━━━
LANGUAGE PROFILES
━━━━━━━━━━━━━━━━━━━
*/

export const LANGUAGE_PROFILES = {

    Português: {

        prose:
            "literatura contemporânea sofisticada em português",

        rhythm:
            "frases fluidas, emocionais e observacionais"

    },

    English: {

        prose:
            "premium contemporary literary fiction in english",

        rhythm:
            "controlled emotional pacing with elegant prose"

    },

    Español: {

        prose:
            "literatura contemporánea sofisticada en español",

        rhythm:
            "ritmo emocional humano y observacional"

    },

    Deutsch: {

        prose:
            "anspruchsvolle zeitgenössische literatur auf deutsch",

        rhythm:
            "präzise emotionale progression mit literarischer dichte"

    }

}