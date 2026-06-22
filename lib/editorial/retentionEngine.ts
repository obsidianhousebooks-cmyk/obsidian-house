/*
━━━━━━━━━━━━━━━━━━━
RETENTION ENGINE
Compatibility layer
━━━━━━━━━━━━━━━━━━━
*/

interface RetentionInput {

    title: string

    subtitle?: string

    chapters: {
        title: string
        content: string
    }[]

}

export const retentionEngine = Object.assign(

    function (input: RetentionInput) {

        const words =
            input.chapters
                .map(chapter => chapter.content)
                .join(" ")
                .split(/\s+/)
                .length

        const chapterScore =
            Math.min(
                input.chapters.length * 10,
                40
            )

        const depthScore =
            Math.min(
                words / 500,
                40
            )

        const overallRetentionScore =
            Math.round(
                chapterScore +
                depthScore +
                20
            )

        return {

            overallRetentionScore,

            emotionalRetention:
                overallRetentionScore,

            narrativePull:
                overallRetentionScore,

            readerEngagement:
                overallRetentionScore

        }

    },

    {

        emotionalTriggers: [

            "emotional tension",

            "unresolved questions",

            "character transformation",

            "psychological depth",

            "narrative curiosity"

        ]

    }

)