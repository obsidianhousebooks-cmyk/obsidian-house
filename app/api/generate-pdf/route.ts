import PDFDocument from "pdfkit"
import fs from "fs"
import path from "path"

type TOCItem = {
    title: string
    page: number
}

function isChapterTitle(text: string) {

    return (
        text.startsWith("Capítulo") ||
        text === "Introdução Cinematográfica" ||
        text === "Conclusão"
    )

}

function sanitizeContent(text: string) {

    return text
        .replace(/#{1,6}\s?/g, "")
        .replace(/\*\*/g, "")
        .replace(/\*/g, "")
        .replace(/```/g, "")
        .replace(/\[.*?\]/g, "")
        .replace(/\n{3,}/g, "\n\n")
        .trim()

}

export async function generatePDF(content: string) {

    return new Promise<string>((resolve) => {

        const outputPath = path.join(
            process.cwd(),
            "public",
            `book-${Date.now()}.pdf`
        )

        /*
        ━━━━━━━━━━━━━━━━━━━
        DOCUMENTO
        ━━━━━━━━━━━━━━━━━━━
        */

        const doc = new PDFDocument({

            size: "A4",

            margins: {
                top: 110,
                bottom: 110,
                left: 95,
                right: 95
            },

            bufferPages: true,

            autoFirstPage: false

        })

        const stream =
            fs.createWriteStream(outputPath)

        doc.pipe(stream)

        /*
        ━━━━━━━━━━━━━━━━━━━
        PROCESSAMENTO
        ━━━━━━━━━━━━━━━━━━━
        */

        const lines = sanitizeContent(content)
            .split("\n")
            .map(line => line.trim())
            .filter(Boolean)

        const title =
            lines[0] || "Livro"

        const subtitle =
            lines[1] || ""

        /*
        ━━━━━━━━━━━━━━━━━━━
        TOC
        ━━━━━━━━━━━━━━━━━━━
        */

        const toc: TOCItem[] = []

        /*
        ━━━━━━━━━━━━━━━━━━━
        CAPA
        ━━━━━━━━━━━━━━━━━━━
        */

        doc.addPage()

        doc.rect(
            0,
            0,
            doc.page.width,
            doc.page.height
        )
            .fill("#f8f6f2")

        doc.fillColor("#111111")

        doc.moveDown(7)

        doc.font("Times-Bold")
        doc.fontSize(36)

        doc.text(title, {
            align: "center"
        })

        doc.moveDown(1.5)

        doc.font("Times-Italic")
        doc.fontSize(18)

        doc.fillColor("#666666")

        doc.text(subtitle, {
            align: "center"
        })

        doc.moveDown(14)

        doc.font("Times-Roman")
        doc.fontSize(12)

        doc.fillColor("#888888")

        doc.text(
            "Uma experiência editorial premium contemporânea",
            {
                align: "center"
            }
        )

        /*
        ━━━━━━━━━━━━━━━━━━━
        PÁGINA EM BRANCO
        ━━━━━━━━━━━━━━━━━━━
        */

        doc.addPage()

        /*
        ━━━━━━━━━━━━━━━━━━━
        SUMÁRIO
        ━━━━━━━━━━━━━━━━━━━
        */

        const tocPageIndex =
            doc.bufferedPageRange().count

        doc.addPage()

        /*
        ━━━━━━━━━━━━━━━━━━━
        CONTEÚDO
        ━━━━━━━━━━━━━━━━━━━
        */

        for (const rawLine of lines) {

            const line = rawLine.trim()

            if (!line) continue

            /*
            ━━━━━━━━━━━━━━━━━━━
            CAPÍTULOS
            ━━━━━━━━━━━━━━━━━━━
            */

            if (isChapterTitle(line)) {

                doc.addPage()

                doc.y = 180

                const currentPage =
                    doc.bufferedPageRange().count

                toc.push({
                    title: line,
                    page: currentPage
                })

                /*
                BOOKMARK
                */

                doc.outline.addItem(line)

                /*
                TÍTULO
                */

                doc.font("Times-Bold")

                doc.fontSize(30)

                doc.fillColor("#101010")

                doc.text(
                    line.toUpperCase(),
                    {
                        align: "center"
                    }
                )

                doc.moveDown(2)

                /*
                SUBLINHA ATMOSFÉRICA
                */

                doc.font("Times-Italic")

                doc.fontSize(11)

                doc.fillColor("#8c8c8c")

                doc.text(
                    "Uma experiência editorial premium contemporânea",
                    {
                        align: "center"
                    }
                )

                doc.moveDown(5)

            } else {

                /*
                ━━━━━━━━━━━━━━━━━━━
                TEXTO EDITORIAL
                ━━━━━━━━━━━━━━━━━━━
                */

                doc.font("Times-Roman")

                doc.fontSize(12.8)

                doc.fillColor("#1f1f1f")

                doc.text(line, {

                    width: 410,

                    align: "left",

                    lineGap: 10,

                    paragraphGap: 22,

                    indent: 30

                })

                doc.moveDown(1.2)

            }

        }

        /*
        ━━━━━━━━━━━━━━━━━━━
        SUMÁRIO REAL
        ━━━━━━━━━━━━━━━━━━━
        */

        doc.switchToPage(tocPageIndex)

        doc.y = 160

        doc.font("Times-Bold")

        doc.fontSize(26)

        doc.fillColor("#111111")

        doc.text("SUMÁRIO", {
            align: "center"
        })

        doc.moveDown(3)

        for (const item of toc) {

            const dots =
                ".".repeat(
                    Math.max(
                        10,
                        65 - item.title.length
                    )
                )

            doc.font("Times-Roman")

            doc.fontSize(12.5)

            doc.fillColor("#2b2b2b")

            doc.text(
                `${item.title} ${dots} ${item.page}`,
                {
                    align: "left"
                }
            )

            doc.moveDown(1.2)

        }

        /*
        ━━━━━━━━━━━━━━━━━━━
        PAGINAÇÃO
        ━━━━━━━━━━━━━━━━━━━
        */

        const range =
            doc.bufferedPageRange()

        for (
            let i = 0;
            i < range.count;
            i++
        ) {

            doc.switchToPage(i)

            /*
            Não numerar capa
            */

            if (i === 0) continue

            doc.font("Times-Roman")

            doc.fontSize(9)

            doc.fillColor("#9a9a9a")

            doc.text(

                `— ${i + 1} —`,

                0,

                doc.page.height - 70,

                {
                    align: "center"
                }

            )

        }

        /*
        ━━━━━━━━━━━━━━━━━━━
        FINALIZAÇÃO
        ━━━━━━━━━━━━━━━━━━━
        */

        doc.end()

        stream.on("finish", () => {

            resolve(
                outputPath
                    .replace(process.cwd(), "")
                    .replace(/\\/g, "/")
            )

        })

    })

}