import { spacing } from "./spacing"

import { theme } from "./theme"

export const kindle = {

    /*
    ━━━━━━━━━━━━━━━━━━━
    READING OPTIMIZATION
    ━━━━━━━━━━━━━━━━━━━
    */

    reading: `

        .kindle-reading {

            max-width:
                680px;

            margin:
                0 auto;

            line-height:
                2.15rem;

            letter-spacing:
                -0.01em;

            text-rendering:
                optimizeLegibility;

            -webkit-font-smoothing:
                antialiased;
        }

    `,

    /*
    ━━━━━━━━━━━━━━━━━━━
    EYE FLOW
    ━━━━━━━━━━━━━━━━━━━
    */

    eyeFlow: `

        .eye-flow {

            max-width:
                68ch;
        }

    `,

    /*
    ━━━━━━━━━━━━━━━━━━━
    PARAGRAPH RHYTHM
    ━━━━━━━━━━━━━━━━━━━
    */

    paragraph: `

        .kindle-paragraph {

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
    FATIGUE REDUCTION
    ━━━━━━━━━━━━━━━━━━━
    */

    fatigue: `

        .low-fatigue {

            color:
                ${theme.colors.inkSoft};

            font-weight:
                400;

            line-height:
                2.2rem;
        }

    `,

    /*
    ━━━━━━━━━━━━━━━━━━━
    IMMERSIVE READING
    ━━━━━━━━━━━━━━━━━━━
    */

    immersive: `

        .immersive-reading {

            position:
                relative;

            isolation:
                isolate;
        }

    `,

    /*
    ━━━━━━━━━━━━━━━━━━━
    VISUAL COMFORT
    ━━━━━━━━━━━━━━━━━━━
    */

    comfort: `

        .visual-comfort {

            padding-top:
                ${spacing.kindle.breathingRoom};

            padding-bottom:
                ${spacing.kindle.breathingRoom};
        }

    `,

    /*
    ━━━━━━━━━━━━━━━━━━━
    PAGE CONTINUITY
    ━━━━━━━━━━━━━━━━━━━
    */

    continuity: `

        .page-continuity {

            break-inside:
                avoid;

            page-break-inside:
                avoid;
        }

    `,

    /*
    ━━━━━━━━━━━━━━━━━━━
    KINDLE ATMOSPHERE
    ━━━━━━━━━━━━━━━━━━━
    */

    atmosphere: `

        .kindle-atmosphere {

            background:
                ${theme.colors.paper};

            color:
                ${theme.colors.ink};

            position:
                relative;
        }

    `,

    /*
    ━━━━━━━━━━━━━━━━━━━
    READING CADENCE
    ━━━━━━━━━━━━━━━━━━━
    */

    cadence: `

        .reading-cadence {

            display:
                flex;

            flex-direction:
                column;

            gap:
                ${spacing.body.paragraphSpacing};
        }

    `,

    /*
    ━━━━━━━━━━━━━━━━━━━
    PREMIUM KINDLE FLOW
    ━━━━━━━━━━━━━━━━━━━
    */

    premiumFlow: `

        .premium-kindle-flow {

            overflow-wrap:
                break-word;

            hyphens:
                auto;

            word-break:
                normal;
        }

    `

}