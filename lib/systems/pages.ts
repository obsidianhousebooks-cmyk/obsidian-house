import { layout } from "./layout"

import { spacing } from "./spacing"

import { typography } from "./typography"

import { theme } from "./theme"

export const pages = {

    /*
    ━━━━━━━━━━━━━━━━━━━
    BASE
    ━━━━━━━━━━━━━━━━━━━
    */

    base: `

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

            width:
                100%;

            background:
                ${theme.colors.paper};

            color:
                ${theme.colors.ink};

        }

        body {

            font-family:
                ${typography.body.fontFamily};

            font-size:
                ${typography.body.fontSize};

            line-height:
                ${typography.body.lineHeight};

            letter-spacing:
                ${typography.body.letterSpacing};

            font-weight:
                ${typography.body.fontWeight};

            text-align:
                left;

            hyphens:
                none !important;

            -webkit-hyphens:
                none !important;

            word-break:
                normal !important;

            overflow-wrap:
                normal !important;

            -webkit-font-smoothing:
                antialiased;

            text-rendering:
                geometricPrecision;

        }

        .page {

            width:
                100%;

            max-width:
                ${layout.page.maxWidth};

            margin:
                0 auto;

            position:
                relative;

            break-after:
                page;

        }

    `,

    /*
    ━━━━━━━━━━━━━━━━━━━
    COVER PAGE
    ━━━━━━━━━━━━━━━━━━━
    */

    cover: `

        .cover-page {

            width:
                100%;

            padding-top:
                ${spacing.cover.titleTop};

            padding-bottom:
                ${spacing.cover.authorBottom};

            padding-left:
                ${spacing.page.paddingHorizontal};

            padding-right:
                ${spacing.page.paddingHorizontal};

        }

        .cover-image {

            width:
                100%;

            height:
                auto;

            display:
                block;

        }

    `,

    /*
    ━━━━━━━━━━━━━━━━━━━
    TITLE PAGE
    ━━━━━━━━━━━━━━━━━━━
    */

    titlePage: `

        .title-page {

            padding-top:
                ${spacing.titlePage.titleTop};

            padding-bottom:
                ${spacing.titlePage.spacingBottom};

            padding-left:
                ${spacing.page.paddingHorizontal};

            padding-right:
                ${spacing.page.paddingHorizontal};

        }

    `,

    /*
    ━━━━━━━━━━━━━━━━━━━
    CHAPTER PAGE
    ━━━━━━━━━━━━━━━━━━━
    */

    content: `

        .content-page {

            padding-top:
                ${spacing.chapter.openerTop};

            padding-bottom:
                ${spacing.page.paddingBottom};

            padding-left:
                ${spacing.page.paddingHorizontal};

            padding-right:
                ${spacing.page.paddingHorizontal};

        }

        .chapter-title {

            max-width:
                ${layout.chapter.titleWidth};

            margin-bottom:
                ${spacing.chapter.titleBottom};

        }

        .chapter-content {

            width:
                ${layout.body.width};

            max-width:
                ${layout.body.optimalCharacters};

        }

        .chapter-content p {

            margin-bottom:
                ${spacing.body.paragraphSpacing};

            orphans:
                3;

            widows:
                3;

        }

    `,

    /*
    ━━━━━━━━━━━━━━━━━━━
    FOOTER
    ━━━━━━━━━━━━━━━━━━━
    */

    footer: `

        .editorial-footer {

            width:
                100%;

            text-align:
                ${layout.footer.alignment};

            font-family:
                ${typography.footer.fontFamily};

            font-size:
                ${typography.footer.fontSize};

            line-height:
                ${typography.footer.lineHeight};

            letter-spacing:
                ${typography.footer.letterSpacing};

            font-weight:
                ${typography.footer.fontWeight};

            opacity:
                ${layout.footer.opacity};

        }

    `

}