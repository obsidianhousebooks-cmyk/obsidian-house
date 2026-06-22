```ts id="validatepkg02"
import fs from "fs/promises"

/*
━━━━━━━━━━━━━━━━━━━
INPUT
━━━━━━━━━━━━━━━━━━━
*/

export interface ValidateBookPackageInput {

    title: string

    txtPath?: string

    markdownPath?: string

    docxPath?: string

    pdfPath?: string

    epubPath?: string

    coverPath?: string

}

/*
━━━━━━━━━━━━━━━━━━━
VALIDATION ITEM
━━━━━━━━━━━━━━━━━━━
*/

export interface ValidationItem {

    label: string

    path?: string

    exists: boolean

    size: number

    valid: boolean

}

/*
━━━━━━━━━━━━━━━━━━━
RESULT
━━━━━━━━━━━━━━━━━━━
*/

export interface ValidateBookPackageResult {

    title: string

    success: boolean

    validations: ValidationItem[]

    missing: string[]

}

/*
━━━━━━━━━━━━━━━━━━━
MINIMUM SIZE
━━━━━━━━━━━━━━━━━━━
*/

const MINIMUM_FILE_SIZE = 100

/*
━━━━━━━━━━━━━━━━━━━
VALIDATE FILE
━━━━━━━━━━━━━━━━━━━
*/

async function validateFile(

    label: string,

    filePath?: string

): Promise<ValidationItem> {

    /*
    ━━━━━━━━━━━━━━━━━━━
    MISSING
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        !filePath

    ) {

        return {

            label,

            path: undefined,

            exists: false,

            size: 0,

            valid: false

        }

    }

    try {

        /*
        ━━━━━━━━━━━━━━━━━━━
        STATS
        ━━━━━━━━━━━━━━━━━━━
        */

        const stats =
            await fs.stat(
                filePath
            )

        /*
        ━━━━━━━━━━━━━━━━━━━
        VALID
        ━━━━━━━━━━━━━━━━━━━
        */

        const valid =
            stats.size >=
            MINIMUM_FILE_SIZE

        /*
        ━━━━━━━━━━━━━━━━━━━
        RETURN
        ━━━━━━━━━━━━━━━━━━━
        */

        return {

            label,

            path: filePath,

            exists: true,

            size: stats.size,

            valid

        }

    } catch {

        /*
        ━━━━━━━━━━━━━━━━━━━
        INVALID
        ━━━━━━━━━━━━━━━━━━━
        */

        return {

            label,

            path: filePath,

            exists: false,

            size: 0,

            valid: false

        }

    }

}

/*
━━━━━━━━━━━━━━━━━━━
VALIDATE BOOK PACKAGE
━━━━━━━━━━━━━━━━━━━
*/

export async function validateBookPackage({

    title,

    txtPath,

    markdownPath,

    docxPath,

    pdfPath,

    epubPath,

    coverPath

}: ValidateBookPackageInput):

    Promise<ValidateBookPackageResult> {

    /*
    ━━━━━━━━━━━━━━━━━━━
    VALIDATIONS
    ━━━━━━━━━━━━━━━━━━━
    */

    const validations =
        await Promise.all([

            validateFile(
                "TXT",
                txtPath
            ),

            validateFile(
                "MARKDOWN",
                markdownPath
            ),

            validateFile(
                "DOCX",
                docxPath
            ),

            validateFile(
                "PDF",
                pdfPath
            ),

            validateFile(
                "EPUB",
                epubPath
            ),

            validateFile(
                "COVER",
                coverPath
            )

        ])

    /*
    ━━━━━━━━━━━━━━━━━━━
    MISSING
    ━━━━━━━━━━━━━━━━━━━
    */

    const missing =
        validations

            .filter(item =>

                !item.valid

            )

            .map(item =>

                item.label

            )

    /*
    ━━━━━━━━━━━━━━━━━━━
    SUCCESS
    ━━━━━━━━━━━━━━━━━━━
    */

    const success =
        missing.length === 0

    /*
    ━━━━━━━━━━━━━━━━━━━
    RETURN
    ━━━━━━━━━━━━━━━━━━━
    */

    return {

        title,

        success,

        validations,

        missing

    }

}
```
