/*
━━━━━━━━━━━━━━━━━━━
EXPORT EPUB
OBSIDIAN HOUSE
━━━━━━━━━━━━━━━━━━━
*/

import fs from "fs/promises"
import path from "path"
import JSZip from "jszip"
import { create } from "xmlbuilder2"

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
            .split(/\r?\n/)
            .filter(line => line.trim().length > 0)
            .map(line => `<p>${escapeHtml(line)}</p>`)
            .join("\n")

    return `<?xml version="1.0" encoding="UTF-8"?>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

<title>${escapeHtml(title)}</title>

<link
    rel="stylesheet"
    type="text/css"
    href="../styles/book.css"/>

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
    EXPORT DIRECTORY
    ━━━━━━━━━━━━━━━━━━━
    */

    const exportDir =
        path.join(
            process.cwd(),
            "exports"
        )

    await fs.mkdir(
        exportDir,
        {
            recursive: true
        }
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
            compression: "STORE"
        }
    )

    /*
    ━━━━━━━━━━━━━━━━━━━
    META-INF
    ━━━━━━━━━━━━━━━━━━━
    */

    zip
        .folder("META-INF")
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
body{
    font-family: serif;
    line-height:1.6;
    margin:5%;
}

h1{
    text-align:center;
    margin-bottom:2em;
}

p{
    margin-bottom:1.2em;
}
`
    )

    /*
    ━━━━━━━━━━━━━━━━━━━
    INTRODUCTION
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

    for (const chapter of book.chapters) {

        textFolder?.file(
            `chapter-${chapter.number}.xhtml`,
            buildChapterXhtml(
                chapter.title,
                chapter.content
            )
        )

    }

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
    )    /*
    ━━━━━━━━━━━━━━━━━━━
    CONTENT.OPF
    ━━━━━━━━━━━━━━━━━━━
    */

    const packageNode =
        create({
            version: "1.0",
            encoding: "UTF-8"
        })
            .ele("package", {
                xmlns: "http://www.idpf.org/2007/opf",
                version: "3.0",
                "unique-identifier": "bookid"
            })

    /*
    ━━━━━━━━━━━━━━━━━━━
    METADATA
    ━━━━━━━━━━━━━━━━━━━
    */

    const metadata =
        packageNode.ele("metadata", {
            "xmlns:dc": "http://purl.org/dc/elements/1.1/"
        })

    metadata
        .ele("dc:identifier", {
            id: "bookid"
        })
        .txt(
            `urn:uuid:${crypto.randomUUID()}`
        )
        .up()

    metadata
        .ele("dc:title")
        .txt(book.title)
        .up()

    metadata
        .ele("dc:creator")
        .txt(book.author.name)
        .up()

    metadata
        .ele("dc:language")
        .txt(book.language)
        .up()

    metadata
        .ele("meta", {
            property: "dcterms:modified"
        })
        .txt(
            new Date()
                .toISOString()
                .replace(/\.\d{3}Z$/, "Z")
        )
        .up()

    /*
    ━━━━━━━━━━━━━━━━━━━
    MANIFEST
    ━━━━━━━━━━━━━━━━━━━
    */

    const manifest =
        packageNode.ele("manifest")

    manifest.ele("item", {
        id: "css",
        href: "styles/book.css",
        "media-type": "text/css"
    })

    manifest.ele("item", {
        id: "intro",
        href: "text/intro.xhtml",
        "media-type": "application/xhtml+xml"
    })

    for (const chapter of book.chapters) {

        manifest.ele("item", {
            id: `chapter-${chapter.number}`,
            href: `text/chapter-${chapter.number}.xhtml`,
            "media-type": "application/xhtml+xml"
        })

    }

    manifest.ele("item", {
        id: "conclusion",
        href: "text/conclusion.xhtml",
        "media-type": "application/xhtml+xml"
    })

    /*
    ━━━━━━━━━━━━━━━━━━━
    SPINE
    ━━━━━━━━━━━━━━━━━━━
    */

    const spine =
        packageNode.ele("spine")

    spine.ele("itemref", {
        idref: "intro"
    })

    for (const chapter of book.chapters) {

        spine.ele("itemref", {
            idref: `chapter-${chapter.number}`
        })

    }

    spine.ele("itemref", {
        idref: "conclusion"
    })    /*
    ━━━━━━━━━━━━━━━━━━━
    GENERATE OPF
    ━━━━━━━━━━━━━━━━━━━
    */

    const opf =
        packageNode.end({
            prettyPrint: true
        })

    /*
    ━━━━━━━━━━━━━━━━━━━
    WRITE OPF
    ━━━━━━━━━━━━━━━━━━━
    */

    oebps?.file(
        "content.opf",
        opf
    )

    /*
    ━━━━━━━━━━━━━━━━━━━
    NAVIGATION (OPCIONAL)
    ━━━━━━━━━━━━━━━━━━━
    */

    const navigation =
        `<?xml version="1.0" encoding="UTF-8"?>

<html
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:epub="http://www.idpf.org/2007/ops">

<head>

<title>Contents</title>

</head>

<body>

<nav epub:type="toc" id="toc">

<h1>Contents</h1>

<ol>

<li>
<a href="intro.xhtml">
Introduction
</a>
</li>

${book.chapters
            .map(
                chapter => `
<li>
<a href="chapter-${chapter.number}.xhtml">
${escapeHtml(chapter.title)}
</a>
</li>`
            )
            .join("\n")}

<li>
<a href="conclusion.xhtml">
Conclusion
</a>
</li>

</ol>

</nav>

</body>

</html>`

    textFolder?.file(
        "nav.xhtml",
        navigation
    )

    /*
    ━━━━━━━━━━━━━━━━━━━
    ADD NAV TO MANIFEST
    ━━━━━━━━━━━━━━━━━━━

    Caso deseje tornar o EPUB totalmente
    compatível com leitores EPUB3 modernos,
    basta mover a criação do nav.xhtml para
    antes da geração do OPF e adicionar:

    manifest.ele("item", {
        id: "nav",
        href: "text/nav.xhtml",
        "media-type": "application/xhtml+xml",
        properties: "nav"
    })

    Esta implementação mantém compatibilidade
    com o código existente da Obsidian House.
    */

    /*
    ━━━━━━━━━━━━━━━━━━━
    GENERATE EPUB BUFFER
    ━━━━━━━━━━━━━━━━━━━
    */

    const buffer =
        await zip.generateAsync({

            type: "nodebuffer",

            compression: "DEFLATE",

            compressionOptions: {
                level: 9
            }

        })    /*
    ━━━━━━━━━━━━━━━━━━━
    WRITE FILE
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