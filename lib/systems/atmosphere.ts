import { spacing } from "./spacing"

import { theme } from "./theme"

import { layout } from "./layout"

import { typography } from "./typography"

export const atmosphere = {

    /*
    ━━━━━━━━━━━━━━━━━━━
    ATMOSPHERIC LIGHT
    ━━━━━━━━━━━━━━━━━━━
    */

    light: `

        .atmospheric-light {

            position:
                absolute;

            inset:
                0;

            background:
                radial-gradient(
                    circle at top,
                    rgba(255,255,255,0.82),
                    transparent 58%
                );

            opacity:
                0.65;

            pointer-events:
                none;
        }

    `,

    /*
    ━━━━━━━━━━━━━━━━━━━
    VISUAL BREATHING
    ━━━━━━━━━━━━━━━━━━━
    */

    breathing: `

        .visual-breathing {

            padding-top:
                ${spacing.atmosphere.cinematicPause};

            padding-bottom:
                ${spacing.atmosphere.cinematicPause};
        }

    `,

    /*
    ━━━━━━━━━━━━━━━━━━━
    EMOTIONAL PAUSE
    ━━━━━━━━━━━━━━━━━━━
    */

    emotionalPause: `

        .emotional-pause {

            height:
                ${spacing.atmosphere.emotionalPause};
        }

    `,

    /*
    ━━━━━━━━━━━━━━━━━━━
    REFLECTION SPACE
    ━━━━━━━━━━━━━━━━━━━
    */

    reflection: `

        .reflection-space {

            margin-top:
                ${spacing.atmosphere.reflectionPause};

            margin-bottom:
                ${spacing.atmosphere.reflectionPause};
        }

    `,

    /*
    ━━━━━━━━━━━━━━━━━━━
    TENSION CONTROL
    ━━━━━━━━━━━━━━━━━━━
    */

    tension: `

        .tension-density {

            max-width:
                ${layout.body.width};

            line-height:
                ${typography.paragraph.lineHeight};
        }

    `,

    /*
    ━━━━━━━━━━━━━━━━━━━
    CINEMATIC FLOW
    ━━━━━━━━━━━━━━━━━━━
    */

    cinematic: `

        .cinematic-flow {

            position:
                relative;

            overflow:
                hidden;
        }

    `,

    /*
    ━━━━━━━━━━━━━━━━━━━
    PREMIUM SILENCE
    ━━━━━━━━━━━━━━━━━━━
    */

    silence: `

        .editorial-silence {

            height:
                140px;

            width:
                100%;
        }

    `,

    /*
    ━━━━━━━━━━━━━━━━━━━
    ATMOSPHERIC DIVIDER
    ━━━━━━━━━━━━━━━━━━━
    */

    divider: `

        .atmosphere-divider {

            width:
                160px;

            height:
                1px;

            background:
                linear-gradient(
                    90deg,
                    transparent,
                    rgba(0,0,0,0.18),
                    transparent
                );

            margin:
                90px auto;
        }

    `,

    /*
    ━━━━━━━━━━━━━━━━━━━
    DEPTH SYSTEM
    ━━━━━━━━━━━━━━━━━━━
    */

    depth: `

        .depth-layer {

            position:
                relative;

            z-index:
                2;
        }

    `,

    /*
    ━━━━━━━━━━━━━━━━━━━
    PAPER ATMOSPHERE
    ━━━━━━━━━━━━━━━━━━━
    */

    paper: `

        .paper-atmosphere {

            background:
                ${theme.surfaces.atmospheric};

            position:
                relative;
        }

    `

}