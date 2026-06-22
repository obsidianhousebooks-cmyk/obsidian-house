import OpenAI from "openai"

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

type BookOption = {
    title: string
    subtitle: string
}

export async function POST(req: Request) {

    try {

        const body = await req.json()

        const { books, theme, language } = body

        if (!books || !Array.isArray(books)) {

            return Response.json({
                error: true,
                message: "books array is required"
            })

        }

        /*
        ━━━━━━━━━━━━━━━━━━━
        PROMPT
        ━━━━━━━━━━━━━━━━━━━
        */

        const prompt = `
Você é uma diretora editorial premium especializada em:

- Amazon KDP
- branding editorial
- percepção premium
- best sellers contemporâneos
- inteligência artificial
- negócios digitais
- transformação financeira

Sua missão:
avaliar títulos e subtítulos de livros
com mentalidade de editora premium contemporânea.

━━━━━━━━━━━━━━━━━━━
IDENTIDADE EDITORIAL
━━━━━━━━━━━━━━━━━━━

Estamos construindo livros que devem parecer:

✅ publicados por grandes editoras
✅ sofisticados
✅ contemporâneos
✅ inteligentes
✅ ambiciosos
✅ modernos
✅ relevantes
✅ premium
✅ vendidos internacionalmente

━━━━━━━━━━━━━━━━━━━
O QUE AVALIAR
━━━━━━━━━━━━━━━━━━━

Analise cada opção considerando:

1. percepção premium
2. força comercial
3. memorabilidade
4. sofisticação
5. clareza
6. atmosfera contemporânea
7. potencial Kindle/KDP
8. força emocional
9. elegância editorial
10. originalidade

━━━━━━━━━━━━━━━━━━━
PENALIZE FORTEMENTE
━━━━━━━━━━━━━━━━━━━

❌ títulos genéricos
❌ marketing barato
❌ clickbait
❌ excesso de buzzwords
❌ “ganhe dinheiro rápido”
❌ títulos caricatos
❌ excesso de “milionário”
❌ excesso de “segredo”
❌ excesso de “método”
❌ aparência de ebook amador
❌ excesso de hype
❌ baixa sofisticação

━━━━━━━━━━━━━━━━━━━
TEMA
━━━━━━━━━━━━━━━━━━━

${theme}

━━━━━━━━━━━━━━━━━━━
IDIOMA
━━━━━━━━━━━━━━━━━━━

${language}

━━━━━━━━━━━━━━━━━━━
OPÇÕES
━━━━━━━━━━━━━━━━━━━

${JSON.stringify(books, null, 2)}

━━━━━━━━━━━━━━━━━━━
RETORNO
━━━━━━━━━━━━━━━━━━━

Retorne SOMENTE JSON válido.

Formato:

{
  "ranked": [
    {
      "title": "Título",
      "subtitle": "Subtítulo",
      "score": 97,
      "strengths": [
        "forte percepção premium",
        "excelente atmosfera contemporânea"
      ],
      "weaknesses": [
        "subtítulo levemente genérico"
      ],
      "editorialPositioning": "business premium contemporâneo"
    }
  ],
  "winner": {
    "title": "Título vencedor",
    "subtitle": "Subtítulo vencedor",
    "score": 99,
    "reason": "explicação editorial detalhada"
  }
}
`

        /*
        ━━━━━━━━━━━━━━━━━━━
        OPENAI
        ━━━━━━━━━━━━━━━━━━━
        */

        const completion =
            await openai.chat.completions.create({

                model: "gpt-4.1",

                temperature: 0.4,

                response_format: {
                    type: "json_object"
                },

                messages: [
                    {
                        role: "user",
                        content: prompt
                    }
                ]

            })

        /*
        ━━━━━━━━━━━━━━━━━━━
        RESULTADO
        ━━━━━━━━━━━━━━━━━━━
        */

        const content =
            completion.choices[0].message.content || "{}"

        const parsed =
            JSON.parse(content)

        /*
        ━━━━━━━━━━━━━━━━━━━
        RESPOSTA
        ━━━━━━━━━━━━━━━━━━━
        */

        return Response.json(parsed)

    } catch (error) {

        console.error(error)

        return Response.json({

            error: true,
            message: "failed_to_score_titles"

        })

    }

}