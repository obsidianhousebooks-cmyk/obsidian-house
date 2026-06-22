import {

    openai,

    AI_MODELS

} from "@/lib/ai/client"

import {

    narrativeBible

} from "@/lib/editorial/narrativeBible"

import {

    editorialIdentity

} from "@/lib/editorial/editorialIdentity"

/*
━━━━━━━━━━━━━━━━━━━
TYPES
━━━━━━━━━━━━━━━━━━━
*/

export type GenerateChapterInput = {

    bookTitle: string

    bookSubtitle: string

    chapterTitle: string

    chapterDescription: string

    previousChapterSummary?: string

    emotionalProgression?: string

    callbackSeed?: string

}

/*
━━━━━━━━━━━━━━━━━━━
SANITIZE
━━━━━━━━━━━━━━━━━━━
*/

function sanitizeContent(
    content: string
) {

    return content

        .replace(/#{1,6}\s?/g, "")

        .replace(/\*\*/g, "")

        .replace(/\*/g, "")

        .replace(/```/g, "")

        .replace(/\[.*?\]/g, "")

        .replace(/\n{3,}/g, "\n\n")

        .trim()

}

/*
━━━━━━━━━━━━━━━━━━━
GENERATE CHAPTER
━━━━━━━━━━━━━━━━━━━
*/

export async function generateChapter({

    bookTitle,

    bookSubtitle,

    chapterTitle,

    chapterDescription,

    previousChapterSummary = "",

    emotionalProgression = "",

    callbackSeed = ""

}: GenerateChapterInput) {

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
EDITORIAL PHILOSOPHY
━━━━━━━━━━━━━━━━━━━

${editorialIdentity.philosophy
                .map(item => `- ${item}`)
                .join("\n")}

━━━━━━━━━━━━━━━━━━━
NARRATIVE STYLE
━━━━━━━━━━━━━━━━━━━

Prosa:

${editorialIdentity.narrativeStyle.prose
                .map(item => `- ${item}`)
                .join("\n")}

Pacing:

${editorialIdentity.narrativeStyle.pacing
                .map(item => `- ${item}`)
                .join("\n")}

Diálogos:

${editorialIdentity.narrativeStyle.dialogue
                .map(item => `- ${item}`)
                .join("\n")}

━━━━━━━━━━━━━━━━━━━
QUALITY STANDARDS
━━━━━━━━━━━━━━━━━━━

${editorialIdentity.qualityStandards
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

${narrativeBible.tone
                .map(item => `- ${item}`)
                .join("\n")}

━━━━━━━━━━━━━━━━━━━
ATMOSPHERE
━━━━━━━━━━━━━━━━━━━

${narrativeBible.atmosphere.environments
                .slice(0, 8)
                .map(item => `- ${item}`)
                .join("\n")}

━━━━━━━━━━━━━━━━━━━
SENSORY DETAILS
━━━━━━━━━━━━━━━━━━━

${narrativeBible.atmosphere.sensoryDetails
                .slice(0, 8)
                .map(item => `- ${item}`)
                .join("\n")}

━━━━━━━━━━━━━━━━━━━
RECURRING THEMES
━━━━━━━━━━━━━━━━━━━

${narrativeBible.recurringThemes
                .map(item => `- ${item}`)
                .join("\n")}

━━━━━━━━━━━━━━━━━━━
SYMBOLIC ELEMENTS
━━━━━━━━━━━━━━━━━━━

${narrativeBible.symbolicElements
                .map(item => `- ${item}`)
                .join("\n")}

━━━━━━━━━━━━━━━━━━━
MAIN CHARACTERS
━━━━━━━━━━━━━━━━━━━

${narrativeBible.characters.map(character => `

Nome:
${character.name}

Função:
${character.role}

Traços:
${character.psychologicalTraits.join(", ")}

Medo:
${character.recurringFear}

Contradição:
${character.contradiction}

Ferida emocional:
${character.emotionalWound}

Padrões comportamentais:
${character.behavioralPatterns.join(", ")}

Gesto recorrente:
${character.recurringGesture}

Objeto simbólico:
${character.symbolicObject}

`).join("\n")}

━━━━━━━━━━━━━━━━━━━
MIRROR SYSTEM
━━━━━━━━━━━━━━━━━━━

Nome:
${narrativeBible.mirrorSystem.name}

Natureza:
${narrativeBible.mirrorSystem.nature}

Ambiguidade:
${narrativeBible.mirrorSystem.ambiguity}

`

        /*
        ━━━━━━━━━━━━━━━━━━━
        PROMPT
        ━━━━━━━━━━━━━━━━━━━
        */

        const prompt = `

Você é um romancista premium especializado em thrillers psicológicos cinematográficos.

━━━━━━━━━━━━━━━━━━━
OBJETIVO
━━━━━━━━━━━━━━━━━━━

Escrever um capítulo sofisticado,
emocionalmente humano,
cinematográfico
e impossível de abandonar.

━━━━━━━━━━━━━━━━━━━
IMPORTANTE
━━━━━━━━━━━━━━━━━━━

A narrativa deve parecer:

- escrita por humano real
- emocionalmente imperfeita
- psicologicamente observacional
- visualmente cinematográfica
- atmosfericamente consistente

━━━━━━━━━━━━━━━━━━━
EDITORIAL CONTEXT
━━━━━━━━━━━━━━━━━━━

${editorialContext}

━━━━━━━━━━━━━━━━━━━
STORY CONTEXT
━━━━━━━━━━━━━━━━━━━

${storyContext}

━━━━━━━━━━━━━━━━━━━
BOOK
━━━━━━━━━━━━━━━━━━━

Título:
${bookTitle}

Subtítulo:
${bookSubtitle}

━━━━━━━━━━━━━━━━━━━
CHAPTER
━━━━━━━━━━━━━━━━━━━

${chapterTitle}

━━━━━━━━━━━━━━━━━━━
NARRATIVE DIRECTION
━━━━━━━━━━━━━━━━━━━

${chapterDescription}

━━━━━━━━━━━━━━━━━━━
CONTINUITY
━━━━━━━━━━━━━━━━━━━

Resumo anterior:
${previousChapterSummary}

Progressão emocional:
${emotionalProgression}

Callback:
${callbackSeed}

━━━━━━━━━━━━━━━━━━━
SCENE EXECUTION
━━━━━━━━━━━━━━━━━━━

As emoções devem surgir através de:

- silêncio
- comportamento
- hesitação
- desconforto físico
- tensão espacial
- micro ações
- ambiente emocional
- diálogo imperfeito
- observação humana

━━━━━━━━━━━━━━━━━━━
DIALOGUES
━━━━━━━━━━━━━━━━━━━

Os diálogos devem:

- possuir subtexto
- soar naturais
- conter interrupções
- evitar excesso filosófico
- parecer emocionalmente reais

━━━━━━━━━━━━━━━━━━━
IMPORTANT
━━━━━━━━━━━━━━━━━━━

Evitar:

- linguagem robótica
- frases genéricas
- intensidade contínua
- monólogos excessivos
- abstração artificial
- aparência de IA

━━━━━━━━━━━━━━━━━━━
STRUCTURE
━━━━━━━━━━━━━━━━━━━

O capítulo deve possuir:

1. abertura orgânica

2. progressão emocional

3. desenvolvimento psicológico

4. tensão crescente

5. callbacks sutis

6. consequências emocionais

7. transformação gradual

8. encerramento forte

━━━━━━━━━━━━━━━━━━━
LENGTH
━━━━━━━━━━━━━━━━━━━

Escreva entre 1800 e 2600 palavras.

━━━━━━━━━━━━━━━━━━━
FINAL INSTRUCTION
━━━━━━━━━━━━━━━━━━━

Retorne SOMENTE o texto completo do capítulo.

`

        /*
        ━━━━━━━━━━━━━━━━━━━
        COMPLETION
        ━━━━━━━━━━━━━━━━━━━
        */

        const completion =
            await openai.chat.completions.create({

                model:
                    AI_MODELS.premium,

                temperature:
                    0.92,

                max_tokens:
                    7000,

                messages: [
                    {
                        role: "system",
                        content:
                            "Você escreve literatura premium contemporânea."
                    },
                    {
                        role: "user",
                        content: prompt
                    }
                ]

            })

        /*
        ━━━━━━━━━━━━━━━━━━━
        RESPONSE
        ━━━━━━━━━━━━━━━━━━━
        */

        const raw =
            completion.choices[0]
                .message.content || ""

        console.log(`

━━━━━━━━━━━━━━━━━━━
CHAPTER RAW RESPONSE
━━━━━━━━━━━━━━━━━━━

`)

        console.log(raw)

        if (

            !raw ||

            raw.trim().length < 500

        ) {

            throw new Error(
                "Capítulo vazio ou inválido."
            )

        }

        return sanitizeContent(raw)

    } catch (error) {

        console.log(`

━━━━━━━━━━━━━━━━━━━
GENERATE CHAPTER ERROR
━━━━━━━━━━━━━━━━━━━

`)

        console.error(error)

        return ""

    }

}