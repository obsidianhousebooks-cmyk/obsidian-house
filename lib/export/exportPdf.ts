/*
━━━━━━━━━━━━━━━━━━━
EXPORT PREMIUM PDF
OBSIDIAN HOUSE
━━━━━━━━━━━━━━━━━━━
*/

import fs from "fs/promises"
import fsSync from "fs"
import path from "path"

import PDFDocument from "pdfkit"

import type {

    GeneratedBook

} from "@/lib/types/book"

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
EXPORT
━━━━━━━━━━━━━━━━━━━
*/

export async function exportPdf(

    book: GeneratedBook

): Promise<string> {

    const exportDir =
        path.join(
            process.cwd(),
            "exports"
        )

    await fs.mkdir(
        exportDir,
        { recursive: true }
    )

    const fileName =
        `${sanitizeFileName(book.title)}.pdf`

    const filePath =
        path.join(
            exportDir,
            fileName
        )

    /*
    ━━━━━━━━━━━━━━━━━━━
    PDF
    ━━━━━━━━━━━━━━━━━━━
    */

    const doc =
        new PDFDocument({

            size: [432, 648],

            margins: {

                top: 72,
                bottom: 72,
                left: 68,
                right: 68

            }

        })

    const stream =
        fsSync.createWriteStream(
            filePath
        )

    doc.pipe(stream)

    /*
    ━━━━━━━━━━━━━━━━━━━
    FONTS
    ━━━━━━━━━━━━━━━━━━━
    */

    const fonts =
        path.join(
            process.cwd(),
            "public",
            "fonts"
        )

    doc.registerFont(
        "Display",
        path.join(
            fonts,
            "CormorantGaramond-SemiBold.ttf"
        )
    )

    doc.registerFont(
        "Body",
        path.join(
            fonts,
            "SourceSerif4-Regular.ttf"
        )
    )

    doc.registerFont(
        "Label",
        path.join(
            fonts,
            "Inter-Regular.ttf"
        )
    )

    /*
    ━━━━━━━━━━━━━━━━━━━
    METADATA
    ━━━━━━━━━━━━━━━━━━━
    */

    doc.info.Title =
        book.title

    doc.info.Author =
        book.author.name

    /*
    ━━━━━━━━━━━━━━━━━━━
    COVER
    ━━━━━━━━━━━━━━━━━━━
    */

    doc.moveDown(7)

    doc
        .font("Display")
        .fontSize(30)
        .fillColor("#111111")
        .text(
            book.title,
            {
                align: "center"
            }
        )

    if (book.subtitle) {

        doc.moveDown(1)

        doc
            .font("Body")
            .fontSize(14)
            .fillColor("#5f5951")
            .text(
                book.subtitle,
                {
                    align: "center"
                }
            )

    }

    doc.moveDown(3)

    doc
        .font("Label")
        .fontSize(10)
        .fillColor("#7a7368")
        .text(
            book.author.name.toUpperCase(),
            {
                align: "center"
            }
        )

    /*
    ━━━━━━━━━━━━━━━━━━━
    INTRO
    ━━━━━━━━━━━━━━━━━━━
    */

    doc.addPage()

    renderText(
        doc,
        book.introduction
    )

    /*
    ━━━━━━━━━━━━━━━━━━━
    CHAPTERS
    ━━━━━━━━━━━━━━━━━━━
    */

    for (
        const chapter of
        book.chapters
    ) {

        doc.addPage()

        doc
            .font("Label")
            .fontSize(10)
            .fillColor("#8b8479")
            .text(
                `CHAPTER ${chapter.number}`,
                {
                    align: "left"
                }
            )

        doc.moveDown(0.7)

        doc
            .font("Display")
            .fontSize(24)
            .fillColor("#111111")
            .text(
                chapter.title,
                {
                    align: "left"
                }
            )

        doc.moveDown(2)

        renderText(
            doc,
            chapter.content
        )

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    FINALIZE
    ━━━━━━━━━━━━━━━━━━━
    */

    doc.end()

    await new Promise<void>((resolve) =>

        stream.on(
            "finish",
            () => resolve()
        )

    )

    return filePath

}

/*
━━━━━━━━━━━━━━━━━━━
RENDER TEXT
━━━━━━━━━━━━━━━━━━━
*/

function renderText(

    doc: any,

    text: string

) {

    const paragraphs =
        text
            .split(/\n\s*\n/)
            .map(p => p.trim())
            .filter(Boolean)

    for (
        const paragraph of
        paragraphs
    ) {

        /*
        ━━━━━━━━━━━━━━━━━━━
        MICRO SILENCE
        ━━━━━━━━━━━━━━━━━━━
        */

        const isShort =
            paragraph.length < 140

        doc
            .font("Body")
            .fontSize(12.5)
            .fillColor("#202020")
            .text(
                paragraph,
                {
                    width: 296,
                    align: "left",
                    lineGap: 6
                }
            )

        doc.moveDown(
            isShort
                ? 1.45
                : 1.1
        )

    }

}