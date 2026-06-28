import { openai } from "@/lib/ai/client"

import {
    editorialIdentity
} from "@/lib/editorial/editorialIdentity"

/*
━━━━━━━━━━━━━━━━━━━
COVER DIRECTION
━━━━━━━━━━━━━━━━━━━
*/

export interface CoverDirection {

    visualConcept: string

    cinematicMood: string

    symbolism: string[]

    composition: string

    colorPalette: string[]

    typographyDirection: string

    lightingDirection: string

    emotionalAtmosphere: string

    visualReferences: string[]

    coverPrompt: string

}

export interface CoverDirectionResult {

    direction: CoverDirection

}

/*
━━━━━━━━━━━━━━━━━━━
GENERATE COVER DIRECTION
━━━━━━━━━━━━━━━━━━━
*/

export async function generateCoverDirection(

    title: string,
    genre: string,
    emotionalCore: string,
    atmosphere: string,
    language: string

): Promise<CoverDirectionResult> {

    const prompt = `

Você é o departamento de direção visual premium da Obsidian House.

━━━━━━━━━━━━━━━━━━━
EDITORIAL IDENTITY
━━━━━━━━━━━━━━━━━━━

Nome:
${editorialIdentity.name}

Posicionamento:
${editorialIdentity.positioning}

Missão:
${editorialIdentity.mission}

━━━━━━━━━━━━━━━━━━━
BOOK DATA
━━━━━━━━━━━━━━━━━━━

Título:
${title}

Gênero:
${genre}

Emotional Core:
${emotionalCore}

Atmosphere:
${atmosphere}

Idioma:
${language}

━━━━━━━━━━━━━━━━━━━
OBJETIVO
━━━━━━━━━━━━━━━━━━━

Criar direção visual cinematográfica
para uma capa premium.

━━━━━━━━━━━━━━━━━━━
FORMATO
━━━━━━━━━━━━━━━━━━━

Retorne APENAS JSON válido.

{
  "direction": {
    "visualConcept": "",
    "cinematicMood": "",
    "symbolism": [],
    "composition": "",
    "colorPalette": [],
    "typographyDirection": "",
    "lightingDirection": "",
    "emotionalAtmosphere": "",
    "visualReferences": [],
    "coverPrompt": ""
  }
}

`

    const response =
        await openai.chat.completions.create({

            model: "gpt-4.1",

            temperature: 0.92,

            response_format: {
                type: "json_object"
            },

            messages: [

                {
                    role: "system",
                    content:
                        "Você responde apenas JSON válido."
                },

                {
                    role: "user",
                    content:
                        prompt
                }

            ]

        })

    const raw =
        response.choices[0]
            .message.content || "{}"

    const parsed =
        JSON.parse(raw)

    return {

        direction:
            parsed.direction

    }

}

