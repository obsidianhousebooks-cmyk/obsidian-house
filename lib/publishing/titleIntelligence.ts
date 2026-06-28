import { openai } from "@/lib/ai/client"

import {

    editorialIdentity

} from "@/lib/editorial/editorialIdentity"

import type {

    NarrativeBible

} from "@/lib/editorial/narrativeBible"

/*
━━━━━━━━━━━━━━━━━━━
TITLE OPTION
━━━━━━━━━━━━━━━━━━━
*/

export interface TitleOption {

    title: string

    subtitle: string

    emotionalScore: number

    commercialScore: number

    cinematicScore: number

    memorabilityScore: number

    premiumScore: number

    overallScore: number

    reasoning: string

}

/*
━━━━━━━━━━━━━━━━━━━
TITLE INTELLIGENCE RESULT
━━━━━━━━━━━━━━━━━━━
*/

export interface TitleIntelligenceResult {

    bestTitle: TitleOption

    alternatives: TitleOption[]

}

/*
━━━━━━━━━━━━━━━━━━━
GENERATE TITLE INTELLIGENCE
━━━━━━━━━━━━━━━━━━━
*/

export async function generateTitleIntelligence(

    topic: string,

    genre: string,

    emotionalCore: string,

    language: string

): Promise<TitleIntelligenceResult> {

    const prompt = `

Você é o departamento editorial
premium da Obsidian House.

Especialistas em:

- psychological thrillers
- literary suspense
- prestige fiction
- Amazon best sellers
- cinematic storytelling
- emotional resonance
- premium publishing

━━━━━━━━━━━━━━━━━━━
EDITORIAL IDENTITY
━━━━━━━━━━━━━━━━━━━

Nome:
${editorialIdentity.name}

Missão:
${editorialIdentity.mission}

Posicionamento:
${editorialIdentity.positioning}

━━━━━━━━━━━━━━━━━━━
NARRATIVE DNA
━━━━━━━━━━━━━━━━━━━

Gênero:
${genre}

Núcleo Emocional:

${emotionalCore}

━━━━━━━━━━━━━━━━━━━
OBJETIVO
━━━━━━━━━━━━━━━━━━━

Criar títulos premium
para romances sofisticados.

━━━━━━━━━━━━━━━━━━━
OS TÍTULOS DEVEM:
━━━━━━━━━━━━━━━━━━━

- parecer publicados por editora real
- ter força cinematográfica
- soar sofisticados
- possuir tensão emocional
- gerar curiosidade
- funcionar na Amazon
- funcionar como thumbnail
- ser memoráveis
- evitar clichês genéricos
- soar humanos

━━━━━━━━━━━━━━━━━━━
TEMA
━━━━━━━━━━━━━━━━━━━

${topic}

━━━━━━━━━━━━━━━━━━━
GÊNERO
━━━━━━━━━━━━━━━━━━━

${genre}

━━━━━━━━━━━━━━━━━━━
EMOTIONAL CORE
━━━━━━━━━━━━━━━━━━━

${emotionalCore}

━━━━━━━━━━━━━━━━━━━
IDIOMA
━━━━━━━━━━━━━━━━━━━

${language}

━━━━━━━━━━━━━━━━━━━
FORMATO
━━━━━━━━━━━━━━━━━━━

Retorne APENAS JSON válido.

{
  "bestTitle": {
    "title": "",
    "subtitle": "",
    "emotionalScore": 0,
    "commercialScore": 0,
    "cinematicScore": 0,
    "memorabilityScore": 0,
    "premiumScore": 0,
    "overallScore": 0,
    "reasoning": ""
  },
  "alternatives": [
    {
      "title": "",
      "subtitle": "",
      "emotionalScore": 0,
      "commercialScore": 0,
      "cinematicScore": 0,
      "memorabilityScore": 0,
      "premiumScore": 0,
      "overallScore": 0,
      "reasoning": ""
    }
  ]
}

`

    const response =
        await openai.chat.completions.create({

            model:
                "gpt-4.1",

            temperature:
                0.95,

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

        bestTitle:
            parsed.bestTitle,

        alternatives:
            parsed.alternatives || []

    }

}