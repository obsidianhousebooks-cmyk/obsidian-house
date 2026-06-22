/*
━━━━━━━━━━━━━━━━━━━
EDITORIAL SELECTOR
━━━━━━━━━━━━━━━━━━━

Motor editorial central
da Obsidian House.

Seleciona autores
com base em:

- gênero
- atmosfera
- emoção
- mercado
- compulsão
- comportamento Kindle

━━━━━━━━━━━━━━━━━━━
*/

import {

    EditorialAuthor

} from "./types"

import {

    lenaVoss

} from "./lena-voss"

import {

    eliasMoreau

} from "./elias-moreau"

import {

    claraVale

} from "./clara-vale"

import {

    adrianVeil

} from "./adrian-veil"

import {

    noaArden

} from "./noa-arden"

/*
━━━━━━━━━━━━━━━━━━━
EDITORIAL AUTHORS
━━━━━━━━━━━━━━━━━━━
*/

export const editorialAuthors: EditorialAuthor[] = [

    lenaVoss,

    eliasMoreau,

    claraVale,

    adrianVeil,

    noaArden

]

/*
━━━━━━━━━━━━━━━━━━━
EDITORIAL INPUT
━━━━━━━━━━━━━━━━━━━
*/

export interface EditorialSelectionInput {

    genre?: string

    tone?: string

    mood?: string

    market?: string

    pacing?: string

    atmosphere?: string

    audience?: string

}

/*
━━━━━━━━━━━━━━━━━━━
HELPERS
━━━━━━━━━━━━━━━━━━━
*/

function normalize(

    value?: string

): string {

    return (
        value || ""
    ).toLowerCase()

}

/*
━━━━━━━━━━━━━━━━━━━
AUTHOR SELECTOR
━━━━━━━━━━━━━━━━━━━
*/

export function selectEditorialAuthor(

    input: EditorialSelectionInput

): EditorialAuthor {

    const genre =
        normalize(input.genre)

    const tone =
        normalize(input.tone)

    const mood =
        normalize(input.mood)

    const market =
        normalize(input.market)

    const pacing =
        normalize(input.pacing)

    const atmosphere =
        normalize(input.atmosphere)

    /*
    ━━━━━━━━━━━━━━━━━━━
    TECHNO THRILLER
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        genre.includes("tech") ||

        genre.includes("cyber") ||

        genre.includes("sci-fi") ||

        genre.includes("ia") ||

        genre.includes("futur") ||

        atmosphere.includes("neon") ||

        mood.includes("paranoia")

    ) {

        return eliasMoreau

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    DOMESTIC SUSPENSE
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        genre.includes("domestic") ||

        genre.includes("marriage") ||

        genre.includes("psychological suspense") ||

        mood.includes("manipulation") ||

        mood.includes("betrayal") ||

        tone.includes("toxic")

    ) {

        return adrianVeil

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    EMOTIONAL ROMANCE
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        genre.includes("romance") ||

        genre.includes("relationship") ||

        mood.includes("longing") ||

        mood.includes("nostalgia") ||

        tone.includes("emotional")

    ) {

        return claraVale

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    EXISTENTIAL LITERARY
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        genre.includes("literary") ||

        genre.includes("existential") ||

        mood.includes("melancholy") ||

        atmosphere.includes("contemplative") ||

        tone.includes("minimalist")

    ) {

        return noaArden

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    PSYCHOLOGICAL THRILLER
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        genre.includes("thriller") ||

        genre.includes("suspense") ||

        genre.includes("psychological") ||

        mood.includes("tension") ||

        mood.includes("obsession")

    ) {

        return lenaVoss

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    KINDLE COMMERCIAL
    ━━━━━━━━━━━━━━━━━━━
    */

    if (

        market.includes("kindle") ||

        market.includes("ku") ||

        pacing.includes("fast")

    ) {

        return adrianVeil

    }

    /*
    ━━━━━━━━━━━━━━━━━━━
    DEFAULT
    ━━━━━━━━━━━━━━━━━━━
    */

    return lenaVoss

}