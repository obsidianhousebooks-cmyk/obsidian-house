import { NextResponse } from "next/server"

import {

    generateTitles

} from "@/lib/ai/generateTitles"

/*
━━━━━━━━━━━━━━━━━━━
POST
━━━━━━━━━━━━━━━━━━━
*/

export async function POST(
    request: Request
) {

    try {

        /*
        ━━━━━━━━━━━━━━━━━━━
        BODY
        ━━━━━━━━━━━━━━━━━━━
        */

        const body =
            await request.json()

        /*
        ━━━━━━━━━━━━━━━━━━━
        NORMALIZATION
        ━━━━━━━━━━━━━━━━━━━
        */

        const theme =

            body.theme ||

            body.topic ||

            body.title ||

            ""

        const language =

            body.language ||

            "Português"

        /*
        ━━━━━━━━━━━━━━━━━━━
        VALIDATION
        ━━━━━━━━━━━━━━━━━━━
        */

        if (!theme.trim()) {

            return NextResponse.json({

                success: false,

                error:
                    "Tema editorial não informado"

            })

        }

        /*
        ━━━━━━━━━━━━━━━━━━━
        GENERATE
        ━━━━━━━━━━━━━━━━━━━
        */

        const books =
            await generateTitles({

                theme,
                language

            })

        /*
        ━━━━━━━━━━━━━━━━━━━
        RESPONSE
        ━━━━━━━━━━━━━━━━━━━
        */

        return NextResponse.json({

            success: true,

            books

        })

    } catch (error) {

        console.error(`

━━━━━━━━━━━━━━━━━━━
GENERATE TITLES ERROR
━━━━━━━━━━━━━━━━━━━

`, error)

        return NextResponse.json({

            success: false,

            error:
                "Erro ao gerar títulos"

        })

    }

}