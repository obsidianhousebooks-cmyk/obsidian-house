export const editorialMotion = {

    /*
    ━━━━━━━━━━━━━━━━━━━
    TRANSITIONS
    ━━━━━━━━━━━━━━━━━━━
    */

    transitions: {

        instant:
            "120ms ease",

        fast:
            "220ms cubic-bezier(0.22,1,0.36,1)",

        medium:
            "420ms cubic-bezier(0.22,1,0.36,1)",

        slow:
            "820ms cubic-bezier(0.22,1,0.36,1)"

    },

    /*
    ━━━━━━━━━━━━━━━━━━━
    HOVER
    ━━━━━━━━━━━━━━━━━━━
    */

    hover: {

        lift:
            "translateY(-2px)",

        softLift:
            "translateY(-4px)",

        scale:
            "scale(1.01)",

        subtleScale:
            "scale(1.005)"

    },

    /*
    ━━━━━━━━━━━━━━━━━━━
    OPACITY
    ━━━━━━━━━━━━━━━━━━━
    */

    opacity: {

        hidden:
            0,

        muted:
            0.64,

        soft:
            0.82,

        visible:
            1

    },

    /*
    ━━━━━━━━━━━━━━━━━━━
    BLUR
    ━━━━━━━━━━━━━━━━━━━
    */

    blur: {

        soft:
            "blur(8px)",

        medium:
            "blur(18px)",

        atmospheric:
            "blur(40px)"

    },

    /*
    ━━━━━━━━━━━━━━━━━━━
    SHADOW MOTION
    ━━━━━━━━━━━━━━━━━━━
    */

    shadows: {

        resting:
            "0 12px 40px rgba(0,0,0,0.04)",

        hover:
            "0 24px 80px rgba(0,0,0,0.08)",

        hero:
            "0 40px 140px rgba(0,0,0,0.12)"

    },

    /*
    ━━━━━━━━━━━━━━━━━━━
    FADE SYSTEMS
    ━━━━━━━━━━━━━━━━━━━
    */

    fades: {

        softIn:
        {

            opacity: [0, 1],

            transform: [

                "translateY(8px)",

                "translateY(0px)"

            ]

        },

        editorialReveal:
        {

            opacity: [0, 1],

            transform: [

                "translateY(18px)",

                "translateY(0px)"

            ]

        },

        heroReveal:
        {

            opacity: [0, 1],

            transform: [

                "translateY(32px)",

                "translateY(0px)"

            ]

        }

    },

    /*
    ━━━━━━━━━━━━━━━━━━━
    CARD BEHAVIOR
    ━━━━━━━━━━━━━━━━━━━
    */

    cards: {

        transition:
            "420ms cubic-bezier(0.22,1,0.36,1)",

        hoverTransform:
            "translateY(-4px)",

        hoverShadow:
            "0 24px 80px rgba(0,0,0,0.08)",

        restingShadow:
            "0 10px 40px rgba(0,0,0,0.04)"

    },

    /*
    ━━━━━━━━━━━━━━━━━━━
    BUTTONS
    ━━━━━━━━━━━━━━━━━━━
    */

    buttons: {

        transition:
            "220ms cubic-bezier(0.22,1,0.36,1)",

        hoverTransform:
            "translateY(-1px)",

        activeTransform:
            "translateY(1px)"

    },

    /*
    ━━━━━━━━━━━━━━━━━━━
    MODALS
    ━━━━━━━━━━━━━━━━━━━
    */

    modals: {

        backdrop:
            "rgba(0,0,0,0.18)",

        backdropBlur:
            "blur(18px)",

        transition:
            "420ms cubic-bezier(0.22,1,0.36,1)"

    },

    /*
    ━━━━━━━━━━━━━━━━━━━
    ATMOSPHERIC RULES
    ━━━━━━━━━━━━━━━━━━━
    */

    atmosphere: {

        rules: [

            "avoid flashy movement",

            "avoid aggressive transitions",

            "prioritize subtle elegance",

            "motion should feel expensive",

            "movement must preserve silence",

            "animations should never dominate content"

        ]

    }

}