```ts id="pdfrelease01"
import fs from "fs/promises"

import fsSync from "fs"

import path from "path"

import PDFDocument from "pdfkit"

/*
━━━━━━━━━━━━━━━━━━━
INPUT
━━━━━━━━━━━━━━━━━━━
*/

export interface RenderPremiumPDFInput {

    title: string

    subtitle?: string

    author: string

    content: string

    coverImageUrl?: string

}

/*
━━━━━━━━━━━━━━━━━━━
RESULT
━━━━━━━━━━━━━━━━━━━
*/

export interface RenderPremiumPDFResult {

    fileName: string

    filePath: string

    downloadUrl: string

}

/*
━━━━━━━━━━━━━━━━━━━
SANITIZE
━━━━━━━━━━━━━━━━━━━
*/

function sanitizeFileName(

    value: string

): string {

    return value
        .toLowerCase()
        .replace(/[^a-z0-9]+/gi, "-")
        .replace(/^-+|-+$/g, "")

}

/*
━━━━━━━━━━━━━━━━━━━
RENDER PREMIUM PDF
━━━━━━━━━━━━━━━━━━━
*/

export async function renderPremiumPDF({

    title,

    subtitle,

    author,

    content,

    coverImageUrl

}: RenderPremiumPDFInput):

    Promise<RenderPremiumPDFResult> {

    /*
    ━━━━━━━━━━━━━━━━━━━
    FILES
    ━━━━━━━━━━━━━━━━━━━
    */

    const safeTitle =
        sanitizeFileName(
            title
        )

    const fileName =
        `${ safeTitle }.pdf`

    const exportDirectory =
        path.join(

            process.cwd(),

            "exports"

        )

    await fs.mkdir(

        exportDirectory,

        {

            recursive: true

        }

    )

    const filePath =
        path.join(

            exportDirectory,

            fileName

        )

    /*
    ━━━━━━━━━━━━━━━━━━━
    PDF DOCUMENT
    ━━━━━━━━━━━━━━━━━━━
    */

    const doc =
        new PDFDocument({

            size: [432, 648],

            margins: {

                top: 72,

                bottom: 72,

                left: 64,

                right: 64

            }

        })

    /*
    ━━━━━━━━━━━━━━━━━━━
    STREAM
    ━━━━━━━━━━━━━━━━━━━
    */

    const stream =
        fsSync.createWriteStream(
            filePath
        )

    doc.pipe(stream)

    /*
    ━━━━━━━━━━━━━━━━━━━
    METADATA
    ━━━━━━━━━━━━━━━━━━━
    */

    doc.info.Title =
        title

    doc.info.Author =
        author

    doc.info.Subject =
        "Literary Fiction"

    doc.info.Keywords =
        "literary fiction, premium fiction, obsidian house"

    doc.info.Creator =
        "Obsidian House"

    doc.info.Producer =
        "Obsidian House Publishing Pipeline"

    doc.info.CreationDate =
        new Date()

    /*
    ━━━━━━━━━━━━━━━━━━━
    COVER IMAGE
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        coverImageUrl

    ) {

        try {

            doc.image(

                coverImageUrl,

                0,

                0,

                {

                    fit: [432, 648],

                    align: "center",

                    valign: "center"

                }

            )

            doc.addPage()

        } catch (

            error

        ) {

            console.error(

                "Failed to render cover image:",

                error

            )

        }

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    TITLE PAGE
    ━━━━━━━━━━━━━━━━━━━
    */

    doc.moveDown(8)

    doc.fontSize(28)

    doc.font("Times-Bold")

    doc.text(

        title,

        {

            align: "center"

        }

    )

    /*
    ━━━━━━━━━━━━━━━━━━━
    SUBTITLE
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        subtitle

    ) {

        doc.moveDown(1)

        doc.fontSize(16)

        doc.font("Times-Italic")

        doc.text(

            subtitle,

            {

                align: "center"

            }

        )

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    AUTHOR
    ━━━━━━━━━━━━━━━━━━━
    */

    doc.moveDown(2)

    doc.fontSize(14)

    doc.font("Times-Roman")

    doc.text(

        author,

        {

            align: "center"

        }

    )

    /*
    ━━━━━━━━━━━━━━━━━━━
    NEW PAGE
    ━━━━━━━━━━━━━━━━━━━
    */

    doc.addPage()

    /*
    ━━━━━━━━━━━━━━━━━━━
    BODY
    ━━━━━━━━━━━━━━━━━━━
    */

    doc.font("Times-Roman")

    doc.fontSize(12)

    doc.lineGap(6)

    const paragraphs =

        content.split(/\n\s*\n/)

    for (

        const paragraph of
        paragraphs

    ) {

        const trimmed =
            paragraph.trim()

        /*
        ━━━━━━━━━━━━━━━━━━━
        EMPTY
        ━━━━━━━━━━━━━━━━━━━
        */

        if (

            !trimmed

        ) {

            doc.moveDown(1.2)

            continue

        }

        /*
        ━━━━━━━━━━━━━━━━━━━
        CHAPTER DETECTION
        ━━━━━━━━━━━━━━━━━━━
        */

        if (

            /^chapter/i.test(
                trimmed
            )

        ) {

            doc.moveDown(2)

            doc.font("Times-Bold")

            doc.fontSize(20)

            doc.text(

                trimmed,

                {

                    align: "center"

                }

            )

            doc.moveDown(2)

            doc.font("Times-Roman")

            doc.fontSize(12)

            continue

        }

        /*
        ━━━━━━━━━━━━━━━━━━━
        PARAGRAPH
        ━━━━━━━━━━━━━━━━━━━
        */

        doc.text(

            trimmed,

            {

                align: "justify"

            }

        )

        doc.moveDown(1)

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    FINALIZE
    ━━━━━━━━━━━━━━━━━━━
    */

    doc.end()

    /*
    ━━━━━━━━━━━━━━━━━━━
    WAIT
    ━━━━━━━━━━━━━━━━━━━
    */

    await new Promise<void>((resolve) =>

        stream.on(

            "finish",

            () => resolve()

        )

    )

    /*
    ━━━━━━━━━━━━━━━━━━━
    RETURN
    ━━━━━━━━━━━━━━━━━━━
    */

    return {

        fileName,

        filePath:
            path.resolve(
                filePath
            ),

        downloadUrl:
            `/ exports / ${ fileName } `

    }

}
```
