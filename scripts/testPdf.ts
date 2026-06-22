import { exportPdf } from "@/lib/export/exportPdf"

import {
    everythingTenderEventuallyBreaks
} from "@/lib/books/lena/everythingTenderEventuallyBreaks"

async function run() {


    const book = {

        title:
            everythingTenderEventuallyBreaks.title,

        subtitle:
            "A Novel",

        genre:
            everythingTenderEventuallyBreaks.genre,

        atmosphere:
            everythingTenderEventuallyBreaks.atmosphere.join(", "),

        emotionalCore:
            everythingTenderEventuallyBreaks.emotionalCore.join(", "),

        language:
            "en",

        author: {

            name:
                "Lena Voss"

        },

        averageScore:
            9.8,

        introduction:
            everythingTenderEventuallyBreaks.openingParagraph,

        conclusion:
            "Some silences remain inside us long after the people disappear.",

        chapters:

            everythingTenderEventuallyBreaks.chapters.map(

                (chapter: any, index: number) => ({

                    number:
                        index + 1,

                    title:
                        chapter.title,

                    content:

                        chapter.opening ||

                        chapter.scenes
                            ?.map((scene: any) => {

                                if (!scene) {

                                    console.log("BROKEN SCENE")

                                    return ""

                                }

                                return scene.text || ""

                            })
                            .join("\n\n") ||

                        "",

                    score:
                        9.7,

                    wordCount:
                        3200

                })

            )

    }

    const result =
        await exportPdf(book as any)

    console.log("━━━━━━━━━━━━━━━━━━━")
    console.log("PDF GENERATED")
    console.log(result)
    console.log("━━━━━━━━━━━━━━━━━━━")


}

run()
