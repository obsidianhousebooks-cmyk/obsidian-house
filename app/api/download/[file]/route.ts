/*
━━━━━━━━━━━━━━━━━━━
DOWNLOAD ROUTE
━━━━━━━━━━━━━━━━━━━

Sistema oficial de download
da Obsidian House.

Responsável por:

- servir exports
- controlar downloads
- proteger filesystem
- retornar headers corretos

━━━━━━━━━━━━━━━━━━━
*/

import fs from "fs/promises"

import path from "path"

import {

    NextResponse

} from "next/server"

/*
━━━━━━━━━━━━━━━━━━━
GET
━━━━━━━━━━━━━━━━━━━
*/

export async function GET(

    request: Request,

    context: {

        params: Promise<{

            file: string

        }>

    }

) {

    try {

        /*
        ━━━━━━━━━━━━━━━━━━━
        PARAMS
        ━━━━━━━━━━━━━━━━━━━
        */

        const params =
            await context.params

        const fileName =
            params.file

        /*
        ━━━━━━━━━━━━━━━━━━━
        VALIDATION
        ━━━━━━━━━━━━━━━━━━━
        */

        if (

            !fileName ||

            fileName.includes("..")

        ) {

            return NextResponse.json(

                {

                    error:
                        "Invalid file."

                },

                {

                    status: 400

                }

            )

        }

        /*
        ━━━━━━━━━━━━━━━━━━━
        FILE PATH
        ━━━━━━━━━━━━━━━━━━━
        */

        const filePath =
            path.join(

                process.cwd(),

                "exports",

                fileName

            )

        /*
        ━━━━━━━━━━━━━━━━━━━
        READ FILE
        ━━━━━━━━━━━━━━━━━━━
        */

        const fileBuffer =
            await fs.readFile(
                filePath
            )

        /*
        ━━━━━━━━━━━━━━━━━━━
        RESPONSE
        ━━━━━━━━━━━━━━━━━━━
        */

        return new NextResponse(

            fileBuffer,

            {

                status: 200,

                headers: {

                    "Content-Type":
                        "text/markdown",

                    "Content-Disposition":
                        `attachment; filename="${fileName}"`

                }

            }

        )

    } catch (error) {

        console.error(

            `
━━━━━━━━━━━━━━━━━━━
DOWNLOAD ERROR
━━━━━━━━━━━━━━━━━━━
`,
            error

        )

        return NextResponse.json(

            {

                error:
                    "Failed to download file."

            },

            {

                status: 500

            }

        )

    }

}