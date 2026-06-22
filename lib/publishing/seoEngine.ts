/*
━━━━━━━━━━━━━━━━━━━
SEO ENGINE
━━━━━━━━━━━━━━━━━━━

Clean SEO architecture
for Obsidian House.

Focused on:

- Kindle discoverability
- premium positioning
- emotional search behavior
- psychological suspense market

━━━━━━━━━━━━━━━━━━━
*/

import {

    marketPositioning

} from "./marketPositioning"

/*
━━━━━━━━━━━━━━━━━━━
TYPES
━━━━━━━━━━━━━━━━━━━
*/

export interface SEOKeywordGroup {

    primary: string[]

    secondary: string[]

    longTail: string[]

    emotional: string[]

}

export interface AmazonSEOData {

    searchableKeywords: string[]

    categoryKeywords: string[]

    thumbnailKeywords: string[]

}

/*
━━━━━━━━━━━━━━━━━━━
PRIMARY KEYWORDS
━━━━━━━━━━━━━━━━━━━
*/

const primaryKeywords = [

    "psychological thriller",

    "psychological suspense",

    "domestic suspense",

    "emotional thriller",

    "contemporary suspense",

    "literary suspense",

    "relationship thriller",

    "premium psychological fiction"

]

/*
━━━━━━━━━━━━━━━━━━━
SECONDARY KEYWORDS
━━━━━━━━━━━━━━━━━━━
*/

const secondaryKeywords = [

    "obsession",

    "emotional manipulation",

    "attachment anxiety",

    "domestic paranoia",

    "psychological tension",

    "relationship deterioration",

    "emotional dependency",

    "contemporary literary thriller"

]

/*
━━━━━━━━━━━━━━━━━━━
LONG TAIL KEYWORDS
━━━━━━━━━━━━━━━━━━━
*/

const longTailKeywords = [

    "psychological thriller kindle unlimited",

    "emotionally addictive suspense novel",

    "premium domestic suspense novel",

    "psychological suspense with relationship tension",

    "slow burn emotional thriller",

    "literary psychological suspense",

    "obsessive relationship thriller",

    "psychological thriller impossible to stop reading"

]

/*
━━━━━━━━━━━━━━━━━━━
EMOTIONAL KEYWORDS
━━━━━━━━━━━━━━━━━━━
*/

const emotionalKeywords = [

    "obsession",

    "resentment",

    "fear",

    "dependency",

    "paranoia",

    "emotional instability",

    "emotional tension",

    "psychological discomfort"

]

/*
━━━━━━━━━━━━━━━━━━━
CATEGORY KEYWORDS
━━━━━━━━━━━━━━━━━━━
*/

const categoryKeywords = [

    "Psychological Thrillers",

    "Domestic Thrillers",

    "Psychological Fiction",

    "Suspense",

    "Contemporary Fiction",

    "Literary Fiction"

]

/*
━━━━━━━━━━━━━━━━━━━
THUMBNAIL KEYWORDS
━━━━━━━━━━━━━━━━━━━
*/

const thumbnailKeywords = [

    "minimalist cover",

    "premium typography",

    "high contrast",

    "cinematic suspense",

    "clean thriller branding",

    "emotionally intriguing cover"

]

/*
━━━━━━━━━━━━━━━━━━━
SEO ENGINE
━━━━━━━━━━━━━━━━━━━
*/

export const seoEngine = {

    keywordGroups: {

        primary:
            primaryKeywords,

        secondary:
            secondaryKeywords,

        longTail:
            longTailKeywords,

        emotional:
            emotionalKeywords

    } as SEOKeywordGroup,

    amazonSEO: {

        searchableKeywords: [

            ...primaryKeywords,

            ...secondaryKeywords,

            ...longTailKeywords

        ],

        categoryKeywords,

        thumbnailKeywords

    } as AmazonSEOData

}

/*
━━━━━━━━━━━━━━━━━━━
HELPERS
━━━━━━━━━━━━━━━━━━━
*/

export function getPrimaryKeywords() {

    return primaryKeywords

}

export function getSecondaryKeywords() {

    return secondaryKeywords

}

export function getLongTailKeywords(

    input?: string

): string[] {

    if (!input) {

        return longTailKeywords

    }

    const normalized =
        input.toLowerCase()

    return [

        `${normalized} kindle unlimited`,

        `${normalized} psychological suspense`,

        `${normalized} emotional thriller`,

        `${normalized} premium fiction`,

        ...longTailKeywords

    ]

}

export function getEmotionalKeywords() {

    return emotionalKeywords

}

export function getAmazonSEOData() {

    return seoEngine.amazonSEO

}

/*
━━━━━━━━━━━━━━━━━━━
SEO SCORING
━━━━━━━━━━━━━━━━━━━
*/

export function calculateSEOScore(

    text: string

): number {

    const lower =
        text.toLowerCase()

    let score = 0

    const allKeywords = [

        ...primaryKeywords,

        ...secondaryKeywords,

        ...longTailKeywords,

        ...emotionalKeywords

    ]

    allKeywords.forEach(keyword => {

        if (

            lower.includes(
                keyword.toLowerCase()
            )

        ) {

            score += 8

        }

    })

    /*
    ━━━━━━━━━━━━━━━━━━━
    LENGTH BONUS
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        text.length >= 50 &&
        text.length <= 180

    ) {

        score += 20

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    EMOTIONAL BONUS
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        lower.includes("psychological") ||
        lower.includes("obsession") ||
        lower.includes("suspense")

    ) {

        score += 20

    }

    return score

}

/*
━━━━━━━━━━━━━━━━━━━
KDP CATEGORY MATCHER
━━━━━━━━━━━━━━━━━━━
*/

export function suggestKDPCategories(

    genre?: string

): string[] {

    if (

        genre?.toLowerCase()
            .includes("thriller")

    ) {

        return [

            "Psychological Thrillers",

            "Domestic Thrillers",

            "Psychological Fiction",

            "Suspense"

        ]

    }

    return marketPositioning.amazonCategories

}