```ts id="dlcover01"
import fs from "fs/promises"

import path from "path"

/*
━━━━━━━━━━━━━━━━━━━
INPUT
━━━━━━━━━━━━━━━━━━━
*/

export interface DownloadCoverImageInput {

    imageUrl?: string

    base64?: string

    title: string

}

/*
━━━━━━━━━━━━━━━━━━━
RESULT
━━━━━━━━━━━━━━━━━━━
*/

export interface DownloadCoverImageResult {

    fileName: string

    filePath: string

    publicPath: string

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
DOWNLOAD BUFFER
━━━━━━━━━━━━━━━━━━━
*/

async function downloadImageBuffer(

    imageUrl: string

): Promise<Buffer> {

    const response =
        await fetch(imageUrl)

    if (

        !response.ok

    ) {

        throw new Error(

            `Failed to download image: ${ response.status } `

        )

    }

    const arrayBuffer =
        await response.arrayBuffer()

    return Buffer.from(
        arrayBuffer
    )

}

/*
━━━━━━━━━━━━━━━━━━━
BASE64 BUFFER
━━━━━━━━━━━━━━━━━━━
*/

function base64ToBuffer(

    base64: string

): Buffer {

    return Buffer.from(

        base64,

        "base64"

    )

}

/*
━━━━━━━━━━━━━━━━━━━
DOWNLOAD COVER IMAGE
━━━━━━━━━━━━━━━━━━━
*/

export async function downloadCoverImage({

    imageUrl,

    base64,

    title

}: DownloadCoverImageInput):

    Promise<DownloadCoverImageResult> {

    /*
    ━━━━━━━━━━━━━━━━━━━
    VALIDATION
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        !imageUrl &&
        !base64

    ) {

        throw new Error(

            "No image source provided."

        )

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    EXPORT DIRECTORY
    ━━━━━━━━━━━━━━━━━━━
    */

    const exportDirectory =
        path.join(

            process.cwd(),

            "exports",

            "covers"

        )

    await fs.mkdir(

        exportDirectory,

        {

            recursive: true

        }

    )

    /*
    ━━━━━━━━━━━━━━━━━━━
    FILE
    ━━━━━━━━━━━━━━━━━━━
    */

    const safeTitle =
        sanitizeFileName(
            title
        )

    const fileName =
        `${ safeTitle }.png`

    const filePath =
        path.join(

            exportDirectory,

            fileName

        )

    /*
    ━━━━━━━━━━━━━━━━━━━
    BUFFER
    ━━━━━━━━━━━━━━━━━━━
    */

    let buffer:
        Buffer

    /*
    ━━━━━━━━━━━━━━━━━━━
    BASE64
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        base64

    ) {

        buffer =
            base64ToBuffer(
                base64
            )

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    URL DOWNLOAD
    ━━━━━━━━━━━━━━━━━━━
    */

    else {

        buffer =
            await downloadImageBuffer(
                imageUrl!
            )

    }

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

    return {

        fileName,

        filePath:
            path.resolve(
                filePath
            ),

        publicPath:
            `/ exports / covers / ${ fileName } `

    }

}
```
