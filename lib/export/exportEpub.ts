```ts id="epubexp01"
/*
━━━━━━━━━━━━━━━━━━━
EXPORT EPUB
OBSIDIAN HOUSE
━━━━━━━━━━━━━━━━━━━
*/

import fs from "fs/promises"

import path from "path"

import JSZip from "jszip"

import {

    create

} from "xmlbuilder2"

import type {

    GeneratedBook

} from "@/lib/books/types"

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
HTML ESCAPE
━━━━━━━━━━━━━━━━━━━
*/

function escapeHtml(

    value: string

): string {

    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")

}

/*
━━━━━━━━━━━━━━━━━━━
CHAPTER XHTML
━━━━━━━━━━━━━━━━━━━
*/

function buildChapterXhtml(

    title: string,

    content: string

): string {

    const paragraphs =
        content
            .split("\n")
            .filter(Boolean)
            .map(line =>

                `< p > ${ escapeHtml(line) } </p>`

            )
            .join("\n")

return `<?xml version="1.0" encoding="UTF-8"?>

<html xmlns="http://www.w3.org/1999/xhtml">

<head>

<title>${escapeHtml(title)}</title>

<link rel="stylesheet" type="text/css" href="../styles/book.css"/>

</head>

<body>

<h1>${escapeHtml(title)}</h1>

${paragraphs}

</body>

</html>`

}

/*
━━━━━━━━━━━━━━━━━━━
EXPORT EPUB
━━━━━━━━━━━━━━━━━━━
*/

export async function exportEpub(

    book: GeneratedBook

): Promise<string> {

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
        `${sanitizeFileName(book.title)}.epub`

    const filePath =
        path.join(
            exportDir,
            fileName
        )

    /*
    ━━━━━━━━━━━━━━━━━━━
    ZIP
    ━━━━━━━━━━━━━━━━━━━
    */

    const zip =
        new JSZip()

    /*
    ━━━━━━━━━━━━━━━━━━━
    MIMETYPE
    ━━━━━━━━━━━━━━━━━━━
    */

    zip.file(

        "mimetype",

        "application/epub+zip",

        {
            compression:
                "STORE"
        }

    )

    /*
    ━━━━━━━━━━━━━━━━━━━
    CONTAINER
    ━━━━━━━━━━━━━━━━━━━
    */

    zip.folder("META-INF")
        ?.file(

            "container.xml",

            `<?xml version="1.0" encoding="UTF-8"?>

<container
    version="1.0"
    xmlns="urn:oasis:names:tc:opendocument:xmlns:container">

<rootfiles>

<rootfile
    full-path="OEBPS/content.opf"
    media-type="application/oebps-package+xml"/>

</rootfiles>

</container>`

        )

    /*
    ━━━━━━━━━━━━━━━━━━━
    OEBPS
    ━━━━━━━━━━━━━━━━━━━
    */

    const oebps =
        zip.folder("OEBPS")

    const textFolder =
        oebps?.folder("text")

    const styleFolder =
        oebps?.folder("styles")

    /*
    ━━━━━━━━━━━━━━━━━━━
    CSS
    ━━━━━━━━━━━━━━━━━━━
    */

    styleFolder?.file(

        "book.css",

        `
body {
    font-family: serif;
    line-height: 1.6;
    margin: 5%;
}

h1 {
    text-align: center;
    margin-bottom: 2em;
}

p {
    margin-bottom: 1.2em;
}
`

    )

    /*
    ━━━━━━━━━━━━━━━━━━━
    INTRO
    ━━━━━━━━━━━━━━━━━━━
    */

    textFolder?.file(

        "intro.xhtml",

        buildChapterXhtml(
            "Introduction",
            book.introduction
        )

    )

    /*
    ━━━━━━━━━━━━━━━━━━━
    CHAPTERS
    ━━━━━━━━━━━━━━━━━━━
    */

    book.chapters.forEach(

        chapter => {

            textFolder?.file(

                `chapter-${chapter.number}.xhtml`,

                buildChapterXhtml(
                    chapter.title,
                    chapter.content
                )

            )

        }

    )

    /*
    ━━━━━━━━━━━━━━━━━━━
    CONCLUSION
    ━━━━━━━━━━━━━━━━━━━
    */

    textFolder?.file(

        "conclusion.xhtml",

        buildChapterXhtml(
            "Conclusion",
            book.conclusion
        )

    )

    /*
    ━━━━━━━━━━━━━━━━━━━
    OPF
    ━━━━━━━━━━━━━━━━━━━
    */

    const manifestItems = [

        `<item id="css" href="styles/book.css" media-type="text/css"/>`,

        `<item id="intro" href="text/intro.xhtml" media-type="application/xhtml+xml"/>`,

        ...book.chapters.map(chapter =>

            `<item id="chapter-${chapter.number}" href="text/chapter-${chapter.number}.xhtml" media-type="application/xhtml+xml"/>`

        ),

        `<item id="conclusion" href="text/conclusion.xhtml" media-type="application/xhtml+xml"/>`

    ].join("\n")

    const spineItems = [

        `<itemref idref="intro"/>`,

        ...book.chapters.map(chapter =>

            `<itemref idref="chapter-${chapter.number}"/>`

        ),

        `<itemref idref="conclusion"/>`

    ].join("\n")

    const opf =
        create({

            version: "1.0",

            encoding: "UTF-8"

        })

            .ele("package", {

                xmlns:
                    "http://www.idpf.org/2007/opf",

                version:
                    "3.0",

                "unique-identifier":
                    "bookid"

            })

            .ele("metadata", {

                "xmlns:dc":
                    "http://purl.org/dc/elements/1.1/"

            })

            .ele("dc:title")
            .txt(book.title)
            .up()

            .ele("dc:creator")
            .txt(book.author.name)
            .up()

            .ele("dc:language")
            .txt(book.language)
            .up()

            .up()

            .ele("manifest")
            .raw(manifestItems)
            .up()

            .ele("spine")
            .raw(spineItems)
            .up()

            .end({

                prettyPrint: true

            })

    oebps?.file(

        "content.opf",

        opf

    )

    /*
    ━━━━━━━━━━━━━━━━━━━
    GENERATE
    ━━━━━━━━━━━━━━━━━━━
    */

    const buffer =
        await zip.generateAsync({

            type: "nodebuffer"

        })

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
```
