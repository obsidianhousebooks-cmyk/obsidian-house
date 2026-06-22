import fs from "fs"

import path from "path"

import puppeteer from "puppeteer"

/*
━━━━━━━━━━━━━━━━━━━
TYPES
━━━━━━━━━━━━━━━━━━━
*/

interface CompilePdfProps {

    html: string

    title: string

    cover?: string | null

}

/*
━━━━━━━━━━━━━━━━━━━
WAIT
━━━━━━━━━━━━━━━━━━━
*/

async function wait(
    ms: number
) {

    return new Promise(resolve =>

        setTimeout(resolve, ms)

    )

}

/*
━━━━━━━━━━━━━━━━━━━
DOWNLOAD COVER
━━━━━━━━━━━━━━━━━━━
*/

async function downloadCover({

    cover,

    safeTitle

}: {

    cover?: string | null

    safeTitle: string

}) {

    try {

        if (!cover) {

            return null

        }

        /*
        ━━━━━━━━━━━━━━━━━━━
        FETCH IMAGE
        ━━━━━━━━━━━━━━━━━━━
        */

        const response =

            await fetch(cover)

        const arrayBuffer =

            await response.arrayBuffer()

        const buffer =

            Buffer.from(arrayBuffer)

        /*
        ━━━━━━━━━━━━━━━━━━━
        OUTPUT
        ━━━━━━━━━━━━━━━━━━━
        */

        const coverFileName =

            `${safeTitle}-cover.jpg`

        const coverOutputPath = path.join(

            process.cwd(),

            "public",

            "exports",

            coverFileName

        )

        fs.writeFileSync(

            coverOutputPath,

            buffer

        )

        return {

            coverUrl:
                `/exports/${coverFileName}`,

            coverFileName

        }

    } catch (error) {

        console.error(

            "COVER DOWNLOAD ERROR",

            error

        )

        return null

    }

}

/*
━━━━━━━━━━━━━━━━━━━
COMPILE PDF
━━━━━━━━━━━━━━━━━━━
*/

export async function compilePdf({

    html,

    title,

    cover = null

}: CompilePdfProps) {

    console.log(`

━━━━━━━━━━━━━━━━━━━
PDF COMPILATION START
━━━━━━━━━━━━━━━━━━━

`)

    /*
    ━━━━━━━━━━━━━━━━━━━
    SAFE TITLE
    ━━━━━━━━━━━━━━━━━━━
    */

    const safeTitle =

        String(title || "book")

            .toLowerCase()

            .replace(/[^a-z0-9]+/gi, "-")

            .replace(/^-+|-+$/g, "")

    /*
    ━━━━━━━━━━━━━━━━━━━
    OUTPUT DIRECTORY
    ━━━━━━━━━━━━━━━━━━━
    */

    const outputDir = path.join(

        process.cwd(),

        "public",

        "exports"

    )

    if (

        !fs.existsSync(outputDir)

    ) {

        fs.mkdirSync(outputDir, {

            recursive: true

        })

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    OUTPUT PDF
    ━━━━━━━━━━━━━━━━━━━
    */

    const pdfFileName =

        `${safeTitle}.pdf`

    const outputPath = path.join(

        outputDir,

        pdfFileName

    )

    /*
    ━━━━━━━━━━━━━━━━━━━
    SAVE COVER
    ━━━━━━━━━━━━━━━━━━━
    */

    const savedCover =

        await downloadCover({

            cover,

            safeTitle

        })

    /*
    ━━━━━━━━━━━━━━━━━━━
    LAUNCH BROWSER
    ━━━━━━━━━━━━━━━━━━━
    */

    const browser =

        await puppeteer.launch({

            headless: true,

            args: [

                "--no-sandbox",

                "--disable-setuid-sandbox",

                "--font-render-hinting=medium",

                "--force-color-profile=srgb",

                "--disable-gpu",

                "--hide-scrollbars"

            ]

        })

    /*
    ━━━━━━━━━━━━━━━━━━━
    PAGE
    ━━━━━━━━━━━━━━━━━━━
    */

    const page =

        await browser.newPage()

    /*
    ━━━━━━━━━━━━━━━━━━━
    PRINT MODE
    ━━━━━━━━━━━━━━━━━━━
    */

    await page.emulateMediaType(

        "print"

    )

    /*
    ━━━━━━━━━━━━━━━━━━━
    VIEWPORT
    ━━━━━━━━━━━━━━━━━━━
    */

    await page.setViewport({

        width: 1400,

        height: 2200,

        deviceScaleFactor: 2

    })

    /*
    ━━━━━━━━━━━━━━━━━━━
    LOAD HTML
    ━━━━━━━━━━━━━━━━━━━
    */

    await page.setContent(

        html,

        {

            waitUntil: [

                "load",

                "domcontentloaded",

                "networkidle0"

            ]

        }

    )

    /*
    ━━━━━━━━━━━━━━━━━━━
    WAIT FONTS
    ━━━━━━━━━━━━━━━━━━━
    */

    await page.evaluate(async () => {

        // @ts-ignore

        if (document.fonts) {

            // @ts-ignore

            await document.fonts.ready

        }

    })

    /*
    ━━━━━━━━━━━━━━━━━━━
    WAIT IMAGES
    ━━━━━━━━━━━━━━━━━━━
    */

    await page.evaluate(async () => {

        const images =

            Array.from(

                document.images

            )

        await Promise.all(

            images.map(image => {

                if (

                    image.complete

                ) {

                    return Promise.resolve()

                }

                return new Promise(resolve => {

                    image.onload = resolve

                    image.onerror = resolve

                })

            })

        )

    })

    /*
    ━━━━━━━━━━━━━━━━━━━
    FORCE REFLOW
    ━━━━━━━━━━━━━━━━━━━
    */

    await page.evaluate(() => {

        document.body.offsetHeight

    })

    /*
    ━━━━━━━━━━━━━━━━━━━
    STABILIZATION
    ━━━━━━━━━━━━━━━━━━━
    */

    await wait(2500)

    /*
    ━━━━━━━━━━━━━━━━━━━
    GENERATE PDF
    ━━━━━━━━━━━━━━━━━━━
    */

    await page.pdf({

        path: outputPath,

        printBackground: true,

        preferCSSPageSize: true,

        displayHeaderFooter: false,

        margin: {

            top: "0",

            right: "0",

            bottom: "0",

            left: "0"

        }

    })

    /*
    ━━━━━━━━━━━━━━━━━━━
    CLOSE
    ━━━━━━━━━━━━━━━━━━━
    */

    await browser.close()

    console.log(`

━━━━━━━━━━━━━━━━━━━
PDF GENERATED
━━━━━━━━━━━━━━━━━━━

${outputPath}

`)

    /*
    ━━━━━━━━━━━━━━━━━━━
    RETURN
    ━━━━━━━━━━━━━━━━━━━
    */

    return {

        pdfUrl:
            `/exports/${pdfFileName}`,

        pdfFileName,

        coverUrl:
            savedCover?.coverUrl || null,

        coverFileName:
            savedCover?.coverFileName || null

    }

}