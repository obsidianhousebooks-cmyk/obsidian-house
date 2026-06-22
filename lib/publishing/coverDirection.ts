import { openai } from "@/lib/ai/client"

import {

    editorialIdentity

} from "@/lib/editorial/editorialIdentity"

import {

    narrativeBible

} from "@/lib/editorial/narrativeBible"

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

/*
━━━━━━━━━━━━━━━━━━━
COVER DIRECTION RESULT
━━━━━━━━━━━━━━━━━━━
*/

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

Você é o departamento de direção visual
premium da Obsidian House.

Especialistas em:

- capas cinematográficas
- publishing premium
- thriller psicológico
- literary suspense
- prestige fiction
- direção de arte editorial
- composição visual sofisticada

━━━━━━━━━━━━━━━━━━━
EDITORIAL IDENTITY
━━━━━━━━━━━━━━━━━━━

Nome:
${editorialIdentity.name}

Estilo:
${editorialIdentity.style}

Posicionamento:
${editorialIdentity.positioning}

━━━━━━━━━━━━━━━━━━━
NARRATIVE DNA
━━━━━━━━━━━━━━━━━━━

Gênero:
${narrativeBible.genre}

Tom:

${narrativeBible.tone
            .map(item => `- ${item}`)
            .join("\n")}

Temas:

${narrativeBible.recurringThemes
            .map(item => `- ${item}`)
            .join("\n")}

━━━━━━━━━━━━━━━━━━━
OBJETIVO
━━━━━━━━━━━━━━━━━━━

Criar direção visual cinematográfica
para uma capa premium.

━━━━━━━━━━━━━━━━━━━
A DIREÇÃO DEVE:
━━━━━━━━━━━━━━━━━━━

- parecer publicada por editora real
- transmitir sofisticação
- transmitir tensão emocional
- funcionar como thumbnail Amazon
- parecer cinematográfica
- evitar estética genérica de IA
- possuir identidade visual forte
- gerar curiosidade
- reforçar o emotional core

━━━━━━━━━━━━━━━━━━━
TÍTULO
━━━━━━━━━━━━━━━━━━━

${title}

━━━━━━━━━━━━━━━━━━━
GÊNERO
━━━━━━━━━━━━━━━━━━━

${genre}

━━━━━━━━━━━━━━━━━━━
EMOTIONAL CORE
━━━━━━━━━━━━━━━━━━━

${emotionalCore}

━━━━━━━━━━━━━━━━━━━
ATMOSPHERE
━━━━━━━━━━━━━━━━━━━

${atmosphere}

━━━━━━━━━━━━━━━━━━━
IDIOMA
━━━━━━━━━━━━━━━━━━━

${language}

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

            model:
                "gpt-4.1",

            temperature:
                0.92,

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