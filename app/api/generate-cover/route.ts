import OpenAI from "openai"

const openai = new OpenAI({

    apiKey:
        process.env.OPENAI_API_KEY

})

/*
━━━━━━━━━━━━━━━━━━━
SANITIZE
━━━━━━━━━━━━━━━━━━━
*/

function sanitizeTitle(
    title: string
) {

    return title
        .replace(/["']/g, "")
        .trim()

}

/*
━━━━━━━━━━━━━━━━━━━
POST
━━━━━━━━━━━━━━━━━━━
*/

export async function POST(
    req: Request
) {

    try {

        console.log(`

━━━━━━━━━━━━━━━━━━━
GENERATING PREMIUM COVER
━━━━━━━━━━━━━━━━━━━

`)

        const body =
            await req.json()

        const {

            title,

            subtitle = "",

            theme = "",

            language = "English"

        } = body

        /*
        ━━━━━━━━━━━━━━━━━━━
        VALIDATION
        ━━━━━━━━━━━━━━━━━━━
        */

        if (!title?.trim()) {

            return Response.json({

                success: false,

                error:
                    "missing_title"

            })

        }

        const cleanTitle =
            sanitizeTitle(title)

        /*
        ━━━━━━━━━━━━━━━━━━━
        PROMPT
        ━━━━━━━━━━━━━━━━━━━
        */

        const prompt = `

Create a premium contemporary nonfiction book cover.

Title:
${cleanTitle}

Subtitle:
${subtitle}

Theme:
${theme}

Language:
${language}

Style:
- sophisticated
- premium
- elegant
- internationally published
- cinematic editorial quality
- modern bestseller aesthetic

Avoid:
- generic AI art
- clickbait
- cheap typography
- exaggerated sci-fi
- amateur layouts

Vertical composition.
Luxury publishing quality.

`

        /*
        ━━━━━━━━━━━━━━━━━━━
        GENERATE IMAGE
        ━━━━━━━━━━━━━━━━━━━
        */

        const result =
            await openai.images.generate({

                model:
                    "gpt-image-1",

                prompt,

                size:
                    "1024x1536"

            })

        console.log(`

━━━━━━━━━━━━━━━━━━━
OPENAI IMAGE RESULT
━━━━━━━━━━━━━━━━━━━

`)

        console.dir(result, {
            depth: null
        })

        /*
        ━━━━━━━━━━━━━━━━━━━
        IMAGE DATA
        ━━━━━━━━━━━━━━━━━━━
        */

        const imageData =
            result?.data?.[0]

        if (!imageData) {

            return Response.json({

                success: false,

                error:
                    "missing_image_data"

            })

        }

        /*
        ━━━━━━━━━━━━━━━━━━━
        URL MODE
        ━━━━━━━━━━━━━━━━━━━
        */

        if (imageData.url) {

            return Response.json({

                success: true,

                image:
                    imageData.url

            })

        }

        /*
        ━━━━━━━━━━━━━━━━━━━
        BASE64 MODE
        ━━━━━━━━━━━━━━━━━━━
        */

        if (imageData.b64_json) {

            return Response.json({

                success: true,

                image:
                    `data:image/png;base64,${imageData.b64_json}`

            })

        }

        /*
        ━━━━━━━━━━━━━━━━━━━
        FALLBACK
        ━━━━━━━━━━━━━━━━━━━
        */

        return Response.json({

            success: false,

            error:
                "image_not_returned",

            raw:
                imageData

        })

    } catch (error) {

        console.log(`

━━━━━━━━━━━━━━━━━━━
GENERATE COVER ERROR
━━━━━━━━━━━━━━━━━━━

`)

        console.error(error)

        return Response.json({

            success: false,

            error:
                "failed_to_generate_cover"

        })

    }

}