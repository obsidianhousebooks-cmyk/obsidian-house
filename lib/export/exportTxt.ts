```ts
/*
━━━━━━━━━━━━━━━━━━━
EXPORT TXT
OBSIDIAN HOUSE
━━━━━━━━━━━━━━━━━━━
*/

import fs from "fs/promises"

import path from "path"

import type {

    GeneratedBook

} from "@/lib/books/types"

function sanitizeFileName(

    value: string

): string {

    return value
        .toLowerCase()
        .replace(/[^a-z0-9]+/gi, "-")
        .replace(/^-+|-+$/g, "")

}

export async function exportTxt(

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
    CONTENT
    ━━━━━━━━━━━━━━━━━━━
    */

    const content = `

${ book.title }

${ book.subtitle || "" }

by ${ book.author.name }

━━━━━━━━━━━━━━━━━━━

INTRODUCTION

${ book.introduction }

━━━━━━━━━━━━━━━━━━━

${
    book.chapters.map(chapter => `

CHAPTER ${chapter.number}

${chapter.title}

${chapter.content}

`).join("\n\n")
}

━━━━━━━━━━━━━━━━━━━

CONCLUSION

${ book.conclusion }

`

    /*
    ━━━━━━━━━━━━━━━━━━━
    FILE
    ━━━━━━━━━━━━━━━━━━━
    */

    const fileName =
        `${ sanitizeFileName(book.title) }.txt`

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

        content,

        "utf-8"

    )

    /*
    ━━━━━━━━━━━━━━━━━━━
    RETURN
    ━━━━━━━━━━━━━━━━━━━
    */

    return filePath

}
```
