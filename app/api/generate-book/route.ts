import {

    NextResponse

} from "next/server"

import {

    generateBook

} from "@/lib/ai/generateBook"

import {

    generateCover

} from "@/lib/ai/generateCover"

import {

    renderBook

} from "@/lib/render/renderBook"

import {

    compilePdf

} from "@/lib/render/compilePdf"

/*
━━━━━━━━━━━━━━━━━━━
POST
━━━━━━━━━━━━━━━━━━━
*/

export async function POST(

    req: Request

) {

    try {

        /*
        ━━━━━━━━━━━━━━━━━━━
        BODY
        ━━━━━━━━━━━━━━━━━━━
        */

        const body =
            await req.json()

        const {

            title,

            subtitle = "",

            genre = "Psychological Thriller",

            tone = "cinematic",

            mood = "psychological tension",

            pacing = "slow burn",

            atmosphere = "urban emotional decay",

            market = "kindle",

            language = "English",

            premise = "",

            emotionalCore =

            "Fear of emotional vulnerability."

        } = body

        /*
        ━━━━━━━━━━━━━━━━━━━
        VALIDATION
        ━━━━━━━━━━━━━━━━━━━
        */

        if (

            !title ||

            !title.trim()

        ) {

            return NextResponse.json(

                {

                    success: false,

                    error:
                        "missing_title"

                },

                {

                    status: 400

                }

            )

        }

        console.log(`

━━━━━━━━━━━━━━━━━━━
GENERATE BOOK START
━━━━━━━━━━━━━━━━━━━

${title}

`)

        /*
        ━━━━━━━━━━━━━━━━━━━
        BOOK
        ━━━━━━━━━━━━━━━━━━━
        */

        const book =
            await generateBook({

                title,

                subtitle,

                genre,

                tone,

                mood,

                pacing,

                atmosphere,

                market,

                language,

                premise,

                emotionalCore

            })

        /*
        ━━━━━━━━━━━━━━━━━━━
        COVER
        ━━━━━━━━━━━━━━━━━━━
        */

        const cover =
            await generateCover({

                title,

                subtitle,

                narrativeBible:
                    book.narrativeBible

            })

        /*
        ━━━━━━━━━━━━━━━━━━━
        HTML
        ━━━━━━━━━━━━━━━━━━━
        */

        const html =
            renderBook({


                title:
                    book.title,

                subtitle:
                    book.subtitle,

                author:
                    book.author,

                synopsis:
                    book.outline.introduction,

                cover,

                chapters: [

                    ...book.chapters.map(
                        chapter => ({

                            title:
                                chapter.title,

                            content:
                                chapter.content

                        })
                    ),

                    {

                        title:
                            "Conclusão",

                        content:
                            book.outline.ending

                    }

                ]

            })



        /*
        ━━━━━━━━━━━━━━━━━━━
        PDF
        ━━━━━━━━━━━━━━━━━━━
        */

        const pdfUrl =
            await compilePdf({

                html,

                title

            })

        console.log(`

━━━━━━━━━━━━━━━━━━━
BOOK GENERATED
━━━━━━━━━━━━━━━━━━━

${title}

PDF:
${pdfUrl}

`)

        /*
        ━━━━━━━━━━━━━━━━━━━
        RESPONSE
        ━━━━━━━━━━━━━━━━━━━
        */

        return NextResponse.json({

            success: true,

            book,

            cover,

            pdfUrl

        })

    } catch (error) {

        console.error(`

━━━━━━━━━━━━━━━━━━━
GENERATE BOOK ERROR
━━━━━━━━━━━━━━━━━━━

`)

        console.error(error)

        return NextResponse.json(

            {

                success: false,

                error:
                    "failed_to_generate_book"

            },

            {

                status: 500

            }

        )

    }

}