/*
━━━━━━━━━━━━━━━━━━━
KDP CATEGORIES ENGINE
━━━━━━━━━━━━━━━━━━━
*/

import {

    narrativeBible

} from "@/lib/editorial/narrativeBible"

import {

    marketPositioning

} from "./marketPositioning"

/*
━━━━━━━━━━━━━━━━━━━
TYPES
━━━━━━━━━━━━━━━━━━━
*/

export interface KDPCategory {

    name: string

    path: string

    competition: "low" | "medium" | "high"

    discoverability: number

    bestsellerPotential: number

    relevance: number

    strategy: string

}

export interface KDPPublishingStrategy {

    primaryCategories: KDPCategory[]

    secondaryCategories: KDPCategory[]

    nicheCategories: KDPCategory[]

    expansionCategories: KDPCategory[]

}

/*
━━━━━━━━━━━━━━━━━━━
PRIMARY CATEGORIES
━━━━━━━━━━━━━━━━━━━
*/

const primaryCategories:
    KDPCategory[] = [

        {

            name:
                "Psychological Thrillers",

            path:
                "Kindle eBooks > Mystery, Thriller & Suspense > Psychological Thrillers",

            competition:
                "high",

            discoverability:
                92,

            bestsellerPotential:
                96,

            relevance:
                100,

            strategy:
                "categoria principal de conversão emocional"

        },

        {

            name:
                "Psychological Fiction",

            path:
                "Kindle eBooks > Literature & Fiction > Psychological Fiction",

            competition:
                "medium",

            discoverability:
                84,

            bestsellerPotential:
                88,

            relevance:
                98,

            strategy:
                "fortalece percepção literária premium"

        },

        {

            name:
                "Technological Fiction",

            path:
                "Kindle eBooks > Science Fiction & Fantasy > Technological",

            competition:
                "medium",

            discoverability:
                86,

            bestsellerPotential:
                91,

            relevance:
                94,

            strategy:
                "captura audiência IA e tecnologia"

        }

    ]

/*
━━━━━━━━━━━━━━━━━━━
SECONDARY CATEGORIES
━━━━━━━━━━━━━━━━━━━
*/

const secondaryCategories:
    KDPCategory[] = [

        {

            name:
                "Suspense",

            path:
                "Kindle eBooks > Mystery, Thriller & Suspense > Suspense",

            competition:
                "high",

            discoverability:
                95,

            bestsellerPotential:
                98,

            relevance:
                82,

            strategy:
                "alto tráfego Kindle"

        },

        {

            name:
                "Contemporary Fiction",

            path:
                "Kindle eBooks > Literature & Fiction > Contemporary Fiction",

            competition:
                "high",

            discoverability:
                88,

            bestsellerPotential:
                90,

            relevance:
                78,

            strategy:
                "expansão para leitores mainstream"

        },

        {

            name:
                "Science Fiction AI",

            path:
                "Kindle eBooks > Science Fiction > Artificial Intelligence",

            competition:
                "medium",

            discoverability:
                80,

            bestsellerPotential:
                92,

            relevance:
                93,

            strategy:
                "captura tendência IA"

        }

    ]

/*
━━━━━━━━━━━━━━━━━━━
NICHE CATEGORIES
━━━━━━━━━━━━━━━━━━━
*/

const nicheCategories:
    KDPCategory[] = [

        {

            name:
                "Cyber Thrillers",

            path:
                "Kindle eBooks > Mystery, Thriller & Suspense > Technothrillers",

            competition:
                "low",

            discoverability:
                70,

            bestsellerPotential:
                84,

            relevance:
                90,

            strategy:
                "facilidade de rankeamento"

        },

        {

            name:
                "Literary Thrillers",

            path:
                "Kindle eBooks > Literature & Fiction > Literary Fiction > Thrillers",

            competition:
                "medium",

            discoverability:
                74,

            bestsellerPotential:
                86,

            relevance:
                96,

            strategy:
                "posicionamento premium sofisticado"

        },

        {

            name:
                "Dystopian Psychological Fiction",

            path:
                "Kindle eBooks > Science Fiction & Fantasy > Dystopian",

            competition:
                "medium",

            discoverability:
                82,

            bestsellerPotential:
                87,

            relevance:
                80,

            strategy:
                "captura leitores Black Mirror"

        }

    ]

/*
━━━━━━━━━━━━━━━━━━━
EXPANSION CATEGORIES
━━━━━━━━━━━━━━━━━━━
*/

const expansionCategories:
    KDPCategory[] = [

        {

            name:
                "Noir Fiction",

            path:
                "Kindle eBooks > Mystery, Thriller & Suspense > Noir",

            competition:
                "low",

            discoverability:
                66,

            bestsellerPotential:
                75,

            relevance:
                72,

            strategy:
                "expansão atmosférica"

        },

        {

            name:
                "Corporate Thrillers",

            path:
                "Kindle eBooks > Mystery, Thriller & Suspense > Crime > Corporate",

            competition:
                "low",

            discoverability:
                60,

            bestsellerPotential:
                72,

            relevance:
                81,

            strategy:
                "diferenciação temática"

        },

        {

            name:
                "Literary Science Fiction",

            path:
                "Kindle eBooks > Science Fiction & Fantasy > Literary",

            competition:
                "medium",

            discoverability:
                78,

            bestsellerPotential:
                82,

            relevance:
                89,

            strategy:
                "elevação de percepção crítica"

        }

    ]

/*
━━━━━━━━━━━━━━━━━━━
KDP ENGINE
━━━━━━━━━━━━━━━━━━━
*/

export const kdpPublishingStrategy:
    KDPPublishingStrategy = {

    primaryCategories,

    secondaryCategories,

    nicheCategories,

    expansionCategories

}

/*
━━━━━━━━━━━━━━━━━━━
SMART CATEGORY SELECTOR
━━━━━━━━━━━━━━━━━━━
*/

export function getBestKDPCategories(

    limit: number = 3

): KDPCategory[] {

    const all = [

        ...primaryCategories,

        ...secondaryCategories,

        ...nicheCategories

    ]

    return all

        .sort((a, b) => {

            const scoreA =

                a.relevance +
                a.discoverability +
                a.bestsellerPotential

            const scoreB =

                b.relevance +
                b.discoverability +
                b.bestsellerPotential

            return scoreB - scoreA

        })

        .slice(0, limit)

}

/*
━━━━━━━━━━━━━━━━━━━
LOW COMPETITION
━━━━━━━━━━━━━━━━━━━
*/

export function getLowCompetitionCategories() {

    return [

        ...primaryCategories,

        ...secondaryCategories,

        ...nicheCategories,

        ...expansionCategories

    ].filter(

        category =>

            category.competition ===
            "low"

    )

}

/*
━━━━━━━━━━━━━━━━━━━
HIGH CONVERSION
━━━━━━━━━━━━━━━━━━━
*/

export function getHighConversionCategories() {

    return [

        ...primaryCategories,

        ...secondaryCategories

    ]

        .filter(category =>

            category.bestsellerPotential >= 90

        )

        .sort((a, b) =>

            b.bestsellerPotential -
            a.bestsellerPotential

        )

}

/*
━━━━━━━━━━━━━━━━━━━
PREMIUM POSITIONING
━━━━━━━━━━━━━━━━━━━
*/

export function getPremiumCategories() {

    return [

        ...primaryCategories,

        ...nicheCategories,

        ...expansionCategories

    ]

        .filter(category =>

            category.relevance >= 88

        )

        .sort((a, b) =>

            b.relevance -
            a.relevance

        )

}

/*
━━━━━━━━━━━━━━━━━━━
BLACK MIRROR AUDIENCE
━━━━━━━━━━━━━━━━━━━
*/

export function getTechPsychologyCategories() {

    return [

        ...primaryCategories,

        ...secondaryCategories,

        ...nicheCategories

    ]

        .filter(category =>

            category.path
                .toLowerCase()
                .includes("science") ||

            category.path
                .toLowerCase()
                .includes("techn") ||

            category.path
                .toLowerCase()
                .includes("psychological")

        )

}

/*
━━━━━━━━━━━━━━━━━━━
BESTSELLER SCORE
━━━━━━━━━━━━━━━━━━━
*/

export function calculateCategoryScore(

    category: KDPCategory

) {

    return Math.floor(

        (
            category.discoverability +
            category.bestsellerPotential +
            category.relevance
        ) / 3

    )

}

/*
━━━━━━━━━━━━━━━━━━━
HELPERS
━━━━━━━━━━━━━━━━━━━
*/

export function getAllKDPCategories() {

    return [

        ...primaryCategories,

        ...secondaryCategories,

        ...nicheCategories,

        ...expansionCategories

    ]

}

export function getPrimaryKDPCategories() {

    return primaryCategories

}

export function getNicheKDPCategories() {

    return nicheCategories

}