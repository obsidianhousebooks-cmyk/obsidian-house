import {

    generateCoverDirection

} from "@/lib/publishing/coverDirection"

import {

    generateCoverPrompt

} from "@/lib/publishing/coverGeneration"

import {

    coverIntelligence

} from "@/lib/publishing/coverIntelligence"

import {

    generateCoverImage

} from "@/lib/render/generateCoverImage"

/*
━━━━━━━━━━━━━━━━━━━
INPUT
━━━━━━━━━━━━━━━━━━━
*/

export interface CoverPipelineInput {

    title: string

    subtitle: string

    genre: string

    emotionalCore: string

    atmosphere: string

    language: string

    author?: string

}

/*
━━━━━━━━━━━━━━━━━━━
RESULT
━━━━━━━━━━━━━━━━━━━
*/

export interface CoverPipelineResult {

    imageUrl: string

    revisedPrompt?: string

    direction: any

    generation: any

    analysis: any

}

/*
━━━━━━━━━━━━━━━━━━━
COVER PIPELINE
━━━━━━━━━━━━━━━━━━━
*/

export async function coverPipeline({

    title,

    subtitle,

    genre,

    emotionalCore,

    atmosphere,

    language,

    author

}: CoverPipelineInput):

    Promise<CoverPipelineResult> {

    /*
    ━━━━━━━━━━━━━━━━━━━
    COVER DIRECTION
    ━━━━━━━━━━━━━━━━━━━
    */

    const direction =
        await generateCoverDirection(

            title,

            genre,

            emotionalCore,

            atmosphere,

            language

        )

    /*
    ━━━━━━━━━━━━━━━━━━━
    COVER GENERATION
    ━━━━━━━━━━━━━━━━━━━
    */

    const generation =
        await generateCoverPrompt({

            title,

            subtitle,

            author,

            direction:
                direction.direction

        })

    /*
    ━━━━━━━━━━━━━━━━━━━
    IMAGE RENDER
    ━━━━━━━━━━━━━━━━━━━
    */

    const rendered =
        await generateCoverImage({

            generation

        })

    /*
    ━━━━━━━━━━━━━━━━━━━
    COVER ANALYSIS
    ━━━━━━━━━━━━━━━━━━━
    */

    const analysis =
        await coverIntelligence({

            title,

            subtitle,

            genre,

            coverStyle:
                direction.direction.cinematicMood,

            image:
                rendered.imageUrl,

            language

        })

    /*
    ━━━━━━━━━━━━━━━━━━━
    RETURN
    ━━━━━━━━━━━━━━━━━━━
    */

    return {

        imageUrl:
            rendered.imageUrl,

        revisedPrompt:
            rendered.revisedPrompt,

        direction:
            direction.direction,

        generation,

        analysis

    }

}