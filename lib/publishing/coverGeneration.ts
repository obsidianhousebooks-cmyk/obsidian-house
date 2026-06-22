import {

    CoverDirection

} from "@/lib/publishing/coverDirection"

/*
━━━━━━━━━━━━━━━━━━━
COVER GENERATION INPUT
━━━━━━━━━━━━━━━━━━━
*/

export interface CoverGenerationInput {

    title: string

    subtitle: string

    author?: string

    direction: CoverDirection

}

/*
━━━━━━━━━━━━━━━━━━━
COVER GENERATION RESULT
━━━━━━━━━━━━━━━━━━━
*/

export interface CoverGenerationResult {

    imagePrompt: string

    thumbnailPrompt: string

    typographyOverlay: string

    cinematicDirection: string

}

/*
━━━━━━━━━━━━━━━━━━━
GENERATE COVER PROMPT
━━━━━━━━━━━━━━━━━━━
*/

export async function generateCoverPrompt({

    title,

    subtitle,

    author,

    direction

}: CoverGenerationInput):

    Promise<CoverGenerationResult> {

    /*
    ━━━━━━━━━━━━━━━━━━━
    MAIN PROMPT
    ━━━━━━━━━━━━━━━━━━━
    */

    const imagePrompt = `

Premium cinematic book cover.

TITLE:
${title}

SUBTITLE:
${subtitle}

AUTHOR:
${author || "Obsidian House"}

VISUAL CONCEPT:
${direction.visualConcept}

CINEMATIC MOOD:
${direction.cinematicMood}

EMOTIONAL ATMOSPHERE:
${direction.emotionalAtmosphere}

SYMBOLISM:
${direction.symbolism.join(", ")}

COMPOSITION:
${direction.composition}

LIGHTING:
${direction.lightingDirection}

TYPOGRAPHY:
${direction.typographyDirection}

COLOR PALETTE:
${direction.colorPalette.join(", ")}

VISUAL REFERENCES:
${direction.visualReferences.join(", ")}

STYLE REQUIREMENTS:

- cinematic
- luxury publishing
- premium thriller aesthetic
- sophisticated typography
- atmospheric lighting
- emotionally immersive
- subtle symbolism
- realistic composition
- elegant negative space
- Amazon best seller quality
- not generic AI art
- not cartoon
- not fantasy illustration
- editorial sophistication
- prestige fiction aesthetic

`

    /*
    ━━━━━━━━━━━━━━━━━━━
    THUMBNAIL PROMPT
    ━━━━━━━━━━━━━━━━━━━
    */

    const thumbnailPrompt = `

Ensure thumbnail readability.

Requirements:

- strong focal point
- readable title
- high mobile visibility
- simplified silhouette
- clean typography hierarchy
- premium contrast
- Amazon thumbnail optimized

`

    /*
    ━━━━━━━━━━━━━━━━━━━
    TYPOGRAPHY OVERLAY
    ━━━━━━━━━━━━━━━━━━━
    */

    const typographyOverlay = `

Typography Direction:

${direction.typographyDirection}

Title should dominate hierarchy.
Subtitle should remain elegant and subtle.

Avoid clutter.
Preserve cinematic negative space.

`

    /*
    ━━━━━━━━━━━━━━━━━━━
    CINEMATIC DIRECTION
    ━━━━━━━━━━━━━━━━━━━
    */

    const cinematicDirection = `

Mood:
${direction.cinematicMood}

Atmosphere:
${direction.emotionalAtmosphere}

Visual Identity:
Prestige psychological thriller.

`

    /*
    ━━━━━━━━━━━━━━━━━━━
    RETURN
    ━━━━━━━━━━━━━━━━━━━
    */

    return {

        imagePrompt,

        thumbnailPrompt,

        typographyOverlay,

        cinematicDirection

    }

}