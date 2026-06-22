/*
━━━━━━━━━━━━━━━━━━━
SCENE ARCHITECTURE
━━━━━━━━━━━━━━━━━━━

Sistema de realidade narrativa
habitada da Obsidian House.

Responsável por:

- geometria emocional humana
- tensão espacial irregular
- realidade procedural
- fricção física
- atmosfera vivida
- silêncio psicológico
- momentum instável
- subtexto comportamental
- banalidade humana
- presença material

━━━━━━━━━━━━━━━━━━━
*/

/*
━━━━━━━━━━━━━━━━━━━
SCENE GEOMETRY
━━━━━━━━━━━━━━━━━━━
*/

export interface SceneGeometry {

    emotionalEntry: string

    emotionalExit: string

    spatialTension: string[]

    symbolicObjects: string[]

    proceduralObjects: string[]

    environmentalPressure: string[]

    physicalInterruptions: string[]

    physicalDistance: string

    silenceType: string

    visualAtmosphere: string[]

    sensoryDetails: string[]

    emotionalMomentum: string[]

    cognitiveDrift: string[]

    socialFriction: string[]

}

/*
━━━━━━━━━━━━━━━━━━━
SPATIAL TENSION
━━━━━━━━━━━━━━━━━━━
*/

const spatialTensionLibrary = [

    "someone avoiding sustained eye contact",

    "conversation repeatedly losing momentum",

    "one person remaining physically still for too long",

    "movement interrupted halfway through",

    "someone standing while the other remains seated",

    "subtle hesitation before entering the room",

    "emotional withdrawal hidden behind ordinary behavior",

    "a delay before answering simple questions",

    "people sharing space without synchronizing emotionally",

    "small physical adjustments replacing direct reaction"

]

/*
━━━━━━━━━━━━━━━━━━━
SYMBOLIC OBJECTS
━━━━━━━━━━━━━━━━━━━
*/

const symbolicObjectsLibrary = [

    "a cracked mirror nobody replaced",

    "a coffee cup gone cold",

    "fingerprints visible on glass",

    "an old photograph slightly bent at the corners",

    "a train ticket left inside a coat pocket",

    "a phone screen lighting up without being checked",

    "a cigarette burning unevenly in the ashtray",

    "a damp jacket hanging near the door"

]

/*
━━━━━━━━━━━━━━━━━━━
PROCEDURAL OBJECTS
━━━━━━━━━━━━━━━━━━━
*/

const proceduralObjectsLibrary = [

    "a charger stretched too tightly across the room",

    "a chair partially blocking movement",

    "an empty plastic bottle near the couch",

    "a towel left drying badly near the window",

    "a cabinet door that never fully closes",

    "background television noise nobody is watching",

    "a receipt folded into the table surface",

    "a refrigerator humming inconsistently",

    "a lamp harsher than necessary",

    "dust collecting near electrical outlets",

    "a spoon forgotten beside the sink",

    "a delivery bag nobody threw away yet"

]

/*
━━━━━━━━━━━━━━━━━━━
ENVIRONMENTAL PRESSURE
━━━━━━━━━━━━━━━━━━━
*/

const environmentalPressureLibrary = [

    "air conditioning slightly too cold",

    "traffic noise leaking through thin windows",

    "stale indoor air",

    "uneven apartment lighting",

    "late-night silence interrupted by plumbing noise",

    "limited space forcing physical proximity",

    "a room retaining old heat",

    "background electrical buzzing",

    "distant elevator movement through the walls",

    "the physical fatigue of remaining awake too long"

]

/*
━━━━━━━━━━━━━━━━━━━
PHYSICAL INTERRUPTIONS
━━━━━━━━━━━━━━━━━━━
*/

const physicalInterruptionsLibrary = [

    "someone adjusting sleeves absentmindedly",

    "dry eyes from lack of sleep",

    "shifting posture to relieve discomfort",

    "a brief pause caused by physical exhaustion",

    "someone rubbing cold hands together",

    "a shoulder stiff from remaining tense too long",

    "checking a phone without emotional intention",

    "moving objects just to create space",

    "leaning against furniture mid-conversation",

    "scratching dry skin automatically"

]

/*
━━━━━━━━━━━━━━━━━━━
SILENCE
━━━━━━━━━━━━━━━━━━━
*/

const silenceLibrary = [

    "silence sustained slightly too long",

    "emotionally avoidant silence",

    "silence broken by procedural conversation",

    "fatigued silence",

    "silence contaminated by unresolved tension",

    "socially uncomfortable silence",

    "silence nobody fully acknowledges"

]

/*
━━━━━━━━━━━━━━━━━━━
VISUAL ATMOSPHERE
━━━━━━━━━━━━━━━━━━━
*/

const visualAtmosphereLibrary = [

    "uneven lighting across the room",

    "reflections appearing accidentally in surfaces",

    "visual stillness interrupted by small movement",

    "overused domestic space",

    "light too harsh in certain corners",

    "objects accumulated without organization",

    "partial darkness caused by neglected bulbs",

    "functional rather than aesthetic framing",

    "subtle environmental clutter"

]

/*
━━━━━━━━━━━━━━━━━━━
SENSORY DETAILS
━━━━━━━━━━━━━━━━━━━
*/

const sensoryLibrary = [

    "fabric sticking slightly to skin",

    "distant traffic blending into background thought",

    "cold air near the floor",

    "lingering smell of stale coffee",

    "air pressure shifting before someone speaks",

    "low refrigerator vibration",

    "dry indoor atmosphere",

    "breathing becoming noticeable during silence",

    "uncomfortable chair pressure",

    "faint detergent smell from recently washed clothes"

]

/*
━━━━━━━━━━━━━━━━━━━
EMOTIONAL MOMENTUM
━━━━━━━━━━━━━━━━━━━
*/

const emotionalMomentumLibrary = [

    "emotional tension repeatedly interrupted",

    "gradual relational fatigue",

    "suppressed vulnerability losing coherence",

    "psychological pressure hidden beneath ordinary behavior",

    "emotional avoidance replacing confrontation",

    "growing interpersonal distance",

    "brief intimacy collapsing back into restraint",

    "moments of connection dissolving into procedural interaction"

]

/*
━━━━━━━━━━━━━━━━━━━
COGNITIVE DRIFT
━━━━━━━━━━━━━━━━━━━
*/

const cognitiveDriftLibrary = [

    "attention briefly shifting toward irrelevant objects",

    "thought interrupted by bodily discomfort",

    "momentary focus on practical tasks",

    "emotional tension fading into procedural awareness",

    "someone noticing meaningless environmental details",

    "conversation mentally drifting without explanation",

    "a brief fixation on sound or lighting",

    "internal attention collapsing from fatigue"

]

/*
━━━━━━━━━━━━━━━━━━━
SOCIAL FRICTION
━━━━━━━━━━━━━━━━━━━
*/

const socialFrictionLibrary = [

    "someone responding slightly too late",

    "a practical comment interrupting emotional momentum",

    "changing subjects without acknowledging it",

    "forced casualness under emotional pressure",

    "speaking more formally than necessary",

    "brief defensive humor",

    "ignoring emotional implications unintentionally",

    "continuing conversation after intimacy has already collapsed"

]

/*
━━━━━━━━━━━━━━━━━━━
RANDOM HELPER
━━━━━━━━━━━━━━━━━━━
*/

function randomItems(

    array: string[],

    amount: number

): string[] {

    return [...array]
        .sort(() => Math.random() - 0.5)
        .slice(0, amount)

}

/*
━━━━━━━━━━━━━━━━━━━
BUILD SCENE
━━━━━━━━━━━━━━━━━━━
*/

export function buildSceneArchitecture(

    input?: {

        emotionalTone?: string

        relationshipState?: string

        psychologicalTension?: string

    }

): SceneGeometry {

    /*
    ━━━━━━━━━━━━━━━━━━━
    ENTRY
    ━━━━━━━━━━━━━━━━━━━
    */

    const emotionalEntry =

        input?.emotionalTone ||

        "controlled behavior covering unstable emotional reality"

    /*
    ━━━━━━━━━━━━━━━━━━━
    EXIT
    ━━━━━━━━━━━━━━━━━━━
    */

    const emotionalExit =

        "emotional uncertainty remaining partially unresolved"

    /*
    ━━━━━━━━━━━━━━━━━━━
    RETURN
    ━━━━━━━━━━━━━━━━━━━
    */

    return {

        emotionalEntry,

        emotionalExit,

        spatialTension:

            randomItems(
                spatialTensionLibrary,
                3
            ),

        symbolicObjects:

            randomItems(
                symbolicObjectsLibrary,
                2
            ),

        proceduralObjects:

            randomItems(
                proceduralObjectsLibrary,
                4
            ),

        environmentalPressure:

            randomItems(
                environmentalPressureLibrary,
                3
            ),

        physicalInterruptions:

            randomItems(
                physicalInterruptionsLibrary,
                3
            ),

        physicalDistance:

            input?.relationshipState ||

            "physical proximity coexisting with emotional restraint",

        silenceType:

            randomItems(
                silenceLibrary,
                1
            )[0],

        visualAtmosphere:

            randomItems(
                visualAtmosphereLibrary,
                3
            ),

        sensoryDetails:

            randomItems(
                sensoryLibrary,
                3
            ),

        emotionalMomentum:

            randomItems(
                emotionalMomentumLibrary,
                3
            ),

        cognitiveDrift:

            randomItems(
                cognitiveDriftLibrary,
                2
            ),

        socialFriction:

            randomItems(
                socialFrictionLibrary,
                2
            )

    }

}

/*
━━━━━━━━━━━━━━━━━━━
SCENE PROMPT
━━━━━━━━━━━━━━━━━━━
*/

export function buildScenePrompt(

    scene: SceneGeometry

): string {

    return `

━━━━━━━━━━━━━━━━━━━
SCENE ARCHITECTURE
━━━━━━━━━━━━━━━━━━━

The objective is NOT cinematic perfection.

The objective is inhabited human reality.

Allow:

- awkward spatial behavior
- procedural interaction
- tonal irregularity
- bodily interruption
- mundane physical existence
- emotionally incomplete reactions
- anti-symbolic objects
- ordinary environmental friction

Do NOT aestheticize every moment.

Do NOT maintain continuous emotional intensity.

Do NOT transform every object into meaning.

Allow reality to remain partially unresolved.

━━━━━━━━━━━━━━━━━━━
EMOTIONAL ENTRY
━━━━━━━━━━━━━━━━━━━

${scene.emotionalEntry}

━━━━━━━━━━━━━━━━━━━
EMOTIONAL EXIT
━━━━━━━━━━━━━━━━━━━

${scene.emotionalExit}

━━━━━━━━━━━━━━━━━━━
SPATIAL TENSION
━━━━━━━━━━━━━━━━━━━

${scene.spatialTension
            .map(item => `- ${item}`)
            .join("\n")}

━━━━━━━━━━━━━━━━━━━
SYMBOLIC OBJECTS
━━━━━━━━━━━━━━━━━━━

Use sparingly.

${scene.symbolicObjects
            .map(item => `- ${item}`)
            .join("\n")}

━━━━━━━━━━━━━━━━━━━
PROCEDURAL OBJECTS
━━━━━━━━━━━━━━━━━━━

${scene.proceduralObjects
            .map(item => `- ${item}`)
            .join("\n")}

━━━━━━━━━━━━━━━━━━━
ENVIRONMENTAL PRESSURE
━━━━━━━━━━━━━━━━━━━

${scene.environmentalPressure
            .map(item => `- ${item}`)
            .join("\n")}

━━━━━━━━━━━━━━━━━━━
PHYSICAL INTERRUPTIONS
━━━━━━━━━━━━━━━━━━━

${scene.physicalInterruptions
            .map(item => `- ${item}`)
            .join("\n")}

━━━━━━━━━━━━━━━━━━━
PHYSICAL DISTANCE
━━━━━━━━━━━━━━━━━━━

${scene.physicalDistance}

━━━━━━━━━━━━━━━━━━━
SILENCE
━━━━━━━━━━━━━━━━━━━

${scene.silenceType}

━━━━━━━━━━━━━━━━━━━
VISUAL ATMOSPHERE
━━━━━━━━━━━━━━━━━━━

${scene.visualAtmosphere
            .map(item => `- ${item}`)
            .join("\n")}

━━━━━━━━━━━━━━━━━━━
SENSORY DETAILS
━━━━━━━━━━━━━━━━━━━

${scene.sensoryDetails
            .map(item => `- ${item}`)
            .join("\n")}

━━━━━━━━━━━━━━━━━━━
EMOTIONAL MOMENTUM
━━━━━━━━━━━━━━━━━━━

${scene.emotionalMomentum
            .map(item => `- ${item}`)
            .join("\n")}

━━━━━━━━━━━━━━━━━━━
COGNITIVE DRIFT
━━━━━━━━━━━━━━━━━━━

${scene.cognitiveDrift
            .map(item => `- ${item}`)
            .join("\n")}

━━━━━━━━━━━━━━━━━━━
SOCIAL FRICTION
━━━━━━━━━━━━━━━━━━━

${scene.socialFriction
            .map(item => `- ${item}`)
            .join("\n")}

`

}