import { typography } from "@/lib/render/typography"

/*
━━━━━━━━━━━━━━━━━━━
TYPES
━━━━━━━━━━━━━━━━━━━
*/

interface Chapter {

    title: string

    content: string

}

interface RenderBookProps {

    title: string

    subtitle?: string

    author?: string

    synopsis?: string

    chapters: Chapter[]

    cover?: string | null

}

/*
━━━━━━━━━━━━━━━━━━━
RENDER BOOK
━━━━━━━━━━━━━━━━━━━
*/

export function renderBook({

    title,

    subtitle = "",

    author = "",

    synopsis = "",

    chapters = [],

    cover = null

}: RenderBookProps) {

    /*
    ━━━━━━━━━━━━━━━━━━━
    TYPOGRAPHY
    ━━━━━━━━━━━━━━━━━━━
    */

    const display =
        typography.display

    const body =
        typography.body

    const chapterStyle =
        typography.chapter

    const label =
        typography.label

    /*
    ━━━━━━━━━━━━━━━━━━━
    PARAGRAPHS
    ━━━━━━━━━━━━━━━━━━━
    */

    function paragraphize(
        text: string
    ) {

        return text

            .split(/\n\s*\n/)

            .filter(Boolean)

            .map(paragraph => `

<p>

${paragraph
                    .replace(/\n/g, " ")
                    .trim()}

</p>

`)

            .join("")

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    PAGE NUMBER
    ━━━━━━━━━━━━━━━━━━━
    */

    let page = 1

    /*
    ━━━━━━━━━━━━━━━━━━━
    HTML
    ━━━━━━━━━━━━━━━━━━━
    */

    return `

<!DOCTYPE html>

<html lang="pt">

<head>

<meta charset="UTF-8" />

<style>

/*
━━━━━━━━━━━━━━━━━━━
RESET
━━━━━━━━━━━━━━━━━━━
*/

* {

    box-sizing:
        border-box;

}

html,
body {

    margin:
        0;

    padding:
        0;

    background:
        #f4f0ea;

    color:
        #111111;

}

/*
━━━━━━━━━━━━━━━━━━━
BODY
━━━━━━━━━━━━━━━━━━━
*/

body {

    font-family:
        ${body.fontFamily};

    -webkit-font-smoothing:
        antialiased;

    text-rendering:
        geometricPrecision;

    print-color-adjust:
        exact;

    -webkit-print-color-adjust:
        exact;

}

/*
━━━━━━━━━━━━━━━━━━━
PAGE
━━━━━━━━━━━━━━━━━━━
*/

.page {

    width:
        6in;

    height:
        9in;

    position:
        relative;

    overflow:
        hidden;

    page-break-after:
        always;

    background:
        #f4f0ea;

}

/*
━━━━━━━━━━━━━━━━━━━
INNER
━━━━━━━━━━━━━━━━━━━
*/

.inner {

    width:
        100%;

    height:
        100%;

    padding-top:
        1.15in;

    padding-bottom:
        1in;

    padding-left:
        0.95in;

    padding-right:
        0.95in;

}

/*
━━━━━━━━━━━━━━━━━━━
COVER
━━━━━━━━━━━━━━━━━━━
*/

.cover {

    width:
        100%;

    height:
        100%;

    object-fit:
        cover;

    display:
        block;

}

/*
━━━━━━━━━━━━━━━━━━━
TITLE PAGE
━━━━━━━━━━━━━━━━━━━
*/

.title-page {

    display:
        flex;

    align-items:
        center;

}

.title-wrap {

    max-width:
        4.6in;

}

.book-title {

    font-family:
        ${display.fontFamily};

    font-size:
        2.9rem;

    line-height:
        0.95;

    letter-spacing:
        ${display.letterSpacing};

    font-weight:
        ${display.fontWeight};

    color:
        #111111;

    margin:
        0;

}

.book-subtitle {

    margin-top:
        0.36in;

    font-size:
        1rem;

    line-height:
        1.9;

    color:
        #5f5951;

}

.book-author {

    margin-top:
        1in;

    font-size:
        0.72rem;

    text-transform:
        uppercase;

    letter-spacing:
        0.22em;

    color:
        #7a7368;

}

/*
━━━━━━━━━━━━━━━━━━━
SYNOPSIS
━━━━━━━━━━━━━━━━━━━
*/

.synopsis {

    max-width:
        31em;

}

.synopsis p {

    font-size:
        1rem;

    line-height:
        1.95;

    margin:
        0 0 1.5em 0;

}

/*
━━━━━━━━━━━━━━━━━━━
CHAPTER
━━━━━━━━━━━━━━━━━━━
*/

.chapter-label {

    font-family:
        ${label.fontFamily};

    font-size:
        0.66rem;

    letter-spacing:
        0.22em;

    text-transform:
        uppercase;

    color:
        #7d766d;

    margin-bottom:
        0.24in;

}

.chapter-title {

    max-width:
        4.5in;

    font-family:
        ${chapterStyle.fontFamily};

    font-size:
        2.1rem;

    line-height:
        1.02;

    letter-spacing:
        ${chapterStyle.letterSpacing};

    font-weight:
        ${chapterStyle.fontWeight};

    margin:
        0 0 0.8in 0;

}

/*
━━━━━━━━━━━━━━━━━━━
CONTENT
━━━━━━━━━━━━━━━━━━━
*/

.content {

    max-width:
        31em;

}

.content p {

    margin:
        0 0 1.55em 0;

    font-size:
        1rem;

    line-height:
        1.95;

    letter-spacing:
        -0.01em;

    color:
        #202020;

    text-align:
        left;

    hyphens:
        none !important;

    word-break:
        normal !important;

    overflow-wrap:
        normal !important;

    widows:
        3;

    orphans:
        3;

}

/*
━━━━━━━━━━━━━━━━━━━
PAGE NUMBER
━━━━━━━━━━━━━━━━━━━
*/

.page-number {

    position:
        absolute;

    bottom:
        0.48in;

    left:
        0;

    right:
        0;

    text-align:
        center;

    font-size:
        0.62rem;

    letter-spacing:
        0.18em;

    color:
        #8b8479;

}

/*
━━━━━━━━━━━━━━━━━━━
PRINT
━━━━━━━━━━━━━━━━━━━
*/

@page {

    size:
        6in 9in;

    margin:
        0;

}

</style>

</head>

<body>

${cover ? `

<section class="page">

<img
    src="${cover}"
    class="cover"
/>

</section>

` : ""}

<section class="page title-page">

<div class="inner">

<div class="title-wrap">

<h1 class="book-title">

${title}

</h1>

${subtitle ? `

<div class="book-subtitle">

${subtitle}

</div>

` : ""}

${author ? `

<div class="book-author">

${author}

</div>

` : ""}

</div>

</div>

</section>

${synopsis ? `

<section class="page">

<div class="inner">

<div class="chapter-label">

Sinopse

</div>

<div class="synopsis">

${paragraphize(synopsis)}

</div>

</div>

<div class="page-number">

${page++}

</div>

</section>

` : ""}

${chapters.map((chapter, index) => `

<section class="page">

<div class="inner">

<div class="chapter-label">

Capítulo ${(index + 1)
            .toString()
            .padStart(2, "0")}

</div>

<h2 class="chapter-title">

${chapter.title}

</h2>

<div class="content">

${paragraphize(chapter.content)}

</div>

</div>

<div class="page-number">

${page++}

</div>

</section>

`).join("")}

</body>

</html>

`

}