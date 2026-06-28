import {

    openai

} from "./client"

import type {
    NarrativeBible
} from "@/lib/editorial/narrativeBible"

import {

    editorialIdentity

} from "@/lib/editorial/editorialIdentity"

/*
━━━━━━━━━━━━━━━━━━━
TYPES
━━━━━━━━━━━━━━━━━━━
*/

interface GenerateCoverInput {

    title: string

    subtitle: string

    narrativeBible: NarrativeBible

}

/*
━━━━━━━━━━━━━━━━━━━
GENERATE COVER
━━━━━━━━━━━━━━━━━━━
*/

export async function generateCover({

    title,
    subtitle,
    narrativeBible

}: GenerateCoverInput) {

    try {

        /*
        ━━━━━━━━━━━━━━━━━━━
        EDITORIAL CONTEXT
        ━━━━━━━━━━━━━━━━━━━
        */

        const editorialContext = `

━━━━━━━━━━━━━━━━━━━
EDITORIAL IDENTITY
━━━━━━━━━━━━━━━━━━━

Editora:
${editorialIdentity.name}

Posicionamento:
${editorialIdentity.positioning}

━━━━━━━━━━━━━━━━━━━
VISUAL LANGUAGE
━━━━━━━━━━━━━━━━━━━

${editorialIdentity.visualIdentity.aesthetics
                .map(item => `- ${item}`)
                .join("\n")}

━━━━━━━━━━━━━━━━━━━
VISUAL REFERENCES
━━━━━━━━━━━━━━━━━━━

${editorialIdentity.visualIdentity.inspirations
                .map(item => `- ${item}`)
                .join("\n")}

`

        /*
        ━━━━━━━━━━━━━━━━━━━
        STORY CONTEXT
        ━━━━━━━━━━━━━━━━━━━
        */

        const storyContext = `

━━━━━━━━━━━━━━━━━━━
STORY BIBLE
━━━━━━━━━━━━━━━━━━━

Título:
${narrativeBible.title}

Subtítulo:
${narrativeBible.subtitle}

Gênero:
${narrativeBible.genre}

━━━━━━━━━━━━━━━━━━━
EMOTIONAL TONE
━━━━━━━━━━━━━━━━━━━

${narrativeBible.atmosphere.emotional
                .map(item => `- ${item}`)
                .join("\n")}

━━━━━━━━━━━━━━━━━━━
ATMOSPHERE
━━━━━━━━━━━━━━━━━━━

${narrativeBible.atmosphere.environmental
                .slice(0, 8)
                .map(item => `- ${item}`)
                .join("\n")}

━━━━━━━━━━━━━━━━━━━
SYMBOLIC ELEMENTS
━━━━━━━━━━━━━━━━━━━

${narrativeBible.symbolicObjects
                .slice(0, 8)
                .map(item => `- ${item}`)
                .join("\n")}

━━━━━━━━━━━━━━━━━━━
THEMES
━━━━━━━━━━━━━━━━━━━

${narrativeBible.thematicCore
                .map(item => `- ${item}`)
                .join("\n")}

`

        /*
        ━━━━━━━━━━━━━━━━━━━
        COVER PROMPT
        ━━━━━━━━━━━━━━━━━━━
        */

        const prompt = `

Create a premium cinematic book cover.

━━━━━━━━━━━━━━━━━━━
EDITORIAL STYLE
━━━━━━━━━━━━━━━━━━━

${editorialContext}

━━━━━━━━━━━━━━━━━━━
NARRATIVE ATMOSPHERE
━━━━━━━━━━━━━━━━━━━

${storyContext}

━━━━━━━━━━━━━━━━━━━
BOOK
━━━━━━━━━━━━━━━━━━━

Title:
${title}

Subtitle:
${subtitle}

━━━━━━━━━━━━━━━━━━━
CREATIVE DIRECTION
━━━━━━━━━━━━━━━━━━━

The cover must feel like:

- a premium streaming thriller
- psychological techno noir
- sophisticated contemporary fiction
- cinematic and atmospheric
- emotionally intelligent
- minimalist but emotionally disturbing

━━━━━━━━━━━━━━━━━━━
VISUAL ELEMENTS
━━━━━━━━━━━━━━━━━━━

Use visual language inspired by:

- glass reflections
- cold white lighting
- elegant darkness
- modern architecture
- emotional isolation
- corporate silence
- technological intimacy
- subtle paranoia

━━━━━━━━━━━━━━━━━━━
STYLE
━━━━━━━━━━━━━━━━━━━

- premium typography
- minimalist composition
- elegant spacing
- atmospheric lighting
- realistic cinematic texture
- contemporary publishing aesthetic
- no generic AI art
- no fantasy art
- no cheap sci-fi aesthetic

━━━━━━━━━━━━━━━━━━━
IMPORTANT
━━━━━━━━━━━━━━━━━━━

The image must look like
a real premium published novel cover.

`

        /*
        ━━━━━━━━━━━━━━━━━━━
        IMAGE GENERATION
        ━━━━━━━━━━━━━━━━━━━
        */

        const response =
            await openai.images.generate({

                model:
                    "gpt-image-1",

                size:
                    "1536x1024",

                quality:
                    "high",

                prompt

            })

        /*
        ━━━━━━━━━━━━━━━━━━━
        IMAGE URL
        ━━━━━━━━━━━━━━━━━━━
        */

        const image =
            response.data?.[0]

        if (

            !image ||

            !image.b64_json

        ) {

            throw new Error(
                "Imagem não gerada."
            )

        }

        /*
        ━━━━━━━━━━━━━━━━━━━
        BASE64
        ━━━━━━━━━━━━━━━━━━━
        */

        return `data:image/png;base64,${image.b64_json}`

    } catch (error) {

        console.log(`

━━━━━━━━━━━━━━━━━━━
GENERATE COVER ERROR
━━━━━━━━━━━━━━━━━━━

`)

        console.error(error)

        return ""

    }

}