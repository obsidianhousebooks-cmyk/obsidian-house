/*
━━━━━━━━━━━━━━━━━━━
EXPORT DOCX
OBSIDIAN HOUSE
━━━━━━━━━━━━━━━━━━━
*/

import fs from "fs/promises"

import path from "path"

import {

    Document,
    Packer,
    Paragraph,
    TextRun,
    HeadingLevel

} from "docx"

import type { GeneratedBook } from "@/lib/types/book"

function sanitizeFileName(

    value: string

): string {

    return value
        .toLowerCase()
        .replace(/[^a-z0-9]+/gi, "-")
        .replace(/^-+|-+$/g, "")

}

export async function exportDocx(

    book: GeneratedBook

): Promise<string> {

    /*
    ━━━━━━━━━━━━━━━━━━━
    PARAGRAPHS
    ━━━━━━━━━━━━━━━━━━━
    */

    const children: Paragraph[] = []

    /*
    ━━━━━━━━━━━━━━━━━━━
    TITLE
    ━━━━━━━━━━━━━━━━━━━
    */

    children.push(

        new Paragraph({

            heading: HeadingLevel.TITLE,

            children: [

                new TextRun({
                    text: book.title,
                    bold: true
                })

            ]

        })

    )

    /*
    ━━━━━━━━━━━━━━━━━━━
    SUBTITLE
    ━━━━━━━━━━━━━━━━━━━
    */

    if (book.subtitle) {

        children.push(

            new Paragraph({

                children: [

                    new TextRun({
                        text: book.subtitle,
                        italics: true
                    })

                ]

            })

        )

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    AUTHOR
    ━━━━━━━━━━━━━━━━━━━
    */

    children.push(

        new Paragraph({

            children: [

                new TextRun({
                    text: `by ${book.author.name} `
                })

            ]

        })

    )

    /*
    ━━━━━━━━━━━━━━━━━━━
    INTRODUCTION
    ━━━━━━━━━━━━━━━━━━━
    */

    children.push(

        new Paragraph({
            heading: HeadingLevel.HEADING_1,
            children: [
                new TextRun("Introduction")
            ]
        })

    )

    children.push(

        new Paragraph({

            children: [

                new TextRun(
                    book.introduction
                )

            ]

        })

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

        children.push(

            new Paragraph({

                heading:
                    HeadingLevel.HEADING_1,

                children: [

                    new TextRun({

                        text:
                            `Chapter ${chapter.number} `,

                        bold: true

                    })

                ]

            })

        )

        children.push(

            new Paragraph({

                heading:
                    HeadingLevel.HEADING_2,

                children: [

                    new TextRun({

                        text:
                            chapter.title

                    })

                ]

            })

        )

        children.push(

            new Paragraph({

                children: [

                    new TextRun({

                        text:
                            chapter.content

                    })

                ]

            })

        )

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    CONCLUSION
    ━━━━━━━━━━━━━━━━━━━
    */

    children.push(

        new Paragraph({

            heading:
                HeadingLevel.HEADING_1,

            children: [

                new TextRun({

                    text:
                        "Conclusion",

                    bold: true

                })

            ]

        })

    )

    children.push(

        new Paragraph({

            children: [

                new TextRun({

                    text:
                        book.conclusion

                })

            ]

        })

    )

    /*
    ━━━━━━━━━━━━━━━━━━━
    DOC
    ━━━━━━━━━━━━━━━━━━━
    */

    const doc =
        new Document({

            sections: [

                {

                    children

                }

            ]

        })

    /*
    ━━━━━━━━━━━━━━━━━━━
    BUFFER
    ━━━━━━━━━━━━━━━━━━━
    */

    const buffer =
        await Packer.toBuffer(doc)

    /*
    ━━━━━━━━━━━━━━━━━━━
    EXPORT DIR
    ━━━━━━━━━━━━━━━━━━━
    */

    const exportDir =
        path.join(
            process.cwd(),
            "exports"
        )

    await fs.mkdir(
        exportDir,
        { recursive: true }
    )

    /*
    ━━━━━━━━━━━━━━━━━━━
    FILE
    ━━━━━━━━━━━━━━━━━━━
    */

    const fileName =
        `${sanitizeFileName(book.title)}.docx`

    const filePath =
        path.join(
            exportDir,
            fileName
        )

    /*
    ━━━━━━━━━━━━━━━━━━━
    WRITE
    ━━━━━━━━━━━━━━━━━━━
    */

    await fs.writeFile(

        filePath,

        buffer

    )

    /*
    ━━━━━━━━━━━━━━━━━━━
    RETURN
    ━━━━━━━━━━━━━━━━━━━
    */

    return filePath

}

