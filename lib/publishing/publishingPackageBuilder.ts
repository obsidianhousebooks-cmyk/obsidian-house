import { openai } from "@/lib/ai/client"

import {

    editorialIdentity

} from "@/lib/editorial/editorialIdentity"



/*
━━━━━━━━━━━━━━━━━━━
TYPES
━━━━━━━━━━━━━━━━━━━
*/

export interface PublishingPackage {

    title: string

    subtitle: string

    amazonDescription: string

    seoKeywords: string[]

    kdpCategories: string[]

    tagline: string

    editorialPitch: string

    tiktokHook: string

    promotionalQuote: string

}

/*
━━━━━━━━━━━━━━━━━━━
GENERATE PACKAGE
━━━━━━━━━━━━━━━━━━━
*/

export async function generatePublishingPackage(

    topic: string,

    language: string

): Promise<PublishingPackage> {

    const prompt = `

Você é uma equipe editorial premium especializada em:

- Amazon KDP
- Kindle best sellers
- marketing editorial
- posicionamento comercial
- psicologia de clique
- retenção de leitura
- publishing premium

━━━━━━━━━━━━━━━━━━━
EDITORIAL IDENTITY
━━━━━━━━━━━━━━━━━━━

Nome:
${editorialIdentity.name}

Filosofia Editorial:

${editorialIdentity.philosophy
            .map(item => `- ${item}`)
            .join("\n")}

Posicionamento:
${editorialIdentity.positioning}

━━━━━━━━━━━━━━━━━━━
━━━━━━━━━━━━━━━━━━━
NARRATIVE DNA
━━━━━━━━━━━━━━━━━━━

Valores Narrativos:

${editorialIdentity.narrativeValues
            .map(item => `- ${item}`)
            .join("\n")}

Experiência Emocional:

${editorialIdentity.emotionalExperience
            .map(item => `- ${item}`)
            .join("\n")}

Atmosfera:

${editorialIdentity.atmosphere
            .map(item => `- ${item}`)
            .join("\n")}

━━━━━━━━━━━━━━━━━━━
OBJETIVO
━━━━━━━━━━━━━━━━━━━

Criar um pacote editorial
completo para lançamento
de um best seller premium.

━━━━━━━━━━━━━━━━━━━
O PACOTE DEVE GERAR:
━━━━━━━━━━━━━━━━━━━

1. TÍTULO
- memorável
- cinematicamente forte
- comercial
- premium
- alta taxa de clique

2. SUBTÍTULO
- aumentar curiosidade
- melhorar conversão
- reforçar tensão psicológica

3. DESCRIÇÃO AMAZON
- extremamente viciante
- emocional
- elegante
- impossível de ignorar

4. SEO KEYWORDS
- palavras buscáveis
- compatíveis com Amazon
- orientadas para thriller psicológico

5. KDP CATEGORIES
- categorias reais da Amazon
- posicionamento estratégico

6. TAGLINE
- curta
- forte
- compartilhável

7. PITCH EDITORIAL
- parecer editora premium real

8. HOOK TIKTOK/REELS
- extremamente viralizável

9. QUOTE PROMOCIONAL
- parecer crítica editorial real

━━━━━━━━━━━━━━━━━━━
IMPORTANTE
━━━━━━━━━━━━━━━━━━━

Tudo deve parecer:

- humano
- premium
- publicado por editora real
- comercialmente sofisticado

━━━━━━━━━━━━━━━━━━━
TEMA
━━━━━━━━━━━━━━━━━━━

${topic}

━━━━━━━━━━━━━━━━━━━
IDIOMA
━━━━━━━━━━━━━━━━━━━

${language}

━━━━━━━━━━━━━━━━━━━
FORMATO
━━━━━━━━━━━━━━━━━━━

Retorne APENAS JSON válido.

{
  "title": "",
  "subtitle": "",
  "amazonDescription": "",
  "seoKeywords": [],
  "kdpCategories": [],
  "tagline": "",
  "editorialPitch": "",
  "tiktokHook": "",
  "promotionalQuote": ""
}

`

    const response =
        await openai.chat.completions.create({

            model:
                "gpt-4.1",

            temperature:
                0.9,

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

        title:
            parsed.title || "",

        subtitle:
            parsed.subtitle || "",

        amazonDescription:
            parsed.amazonDescription || "",

        seoKeywords:
            parsed.seoKeywords || [],

        kdpCategories:
            parsed.kdpCategories || [],

        tagline:
            parsed.tagline || "",

        editorialPitch:
            parsed.editorialPitch || "",

        tiktokHook:
            parsed.tiktokHook || "",

        promotionalQuote:
            parsed.promotionalQuote || ""

    }

}