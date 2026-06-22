/*
━━━━━━━━━━━━━━━━━━━
EDITORIAL AUTHORS
━━━━━━━━━━━━━━━━━━━

Centralização oficial
dos autores da
Obsidian House.

━━━━━━━━━━━━━━━━━━━
*/

/*
━━━━━━━━━━━━━━━━━━━
TYPES
━━━━━━━━━━━━━━━━━━━
*/

export * from "./types"

/*
━━━━━━━━━━━━━━━━━━━
SELECTOR
━━━━━━━━━━━━━━━━━━━
*/

export * from "./selector"

/*
━━━━━━━━━━━━━━━━━━━
AUTHORS
━━━━━━━━━━━━━━━━━━━
*/

export {

    lenaVoss

} from "./lena-voss"

export {

    eliasMoreau

} from "./elias-moreau"

export {

    claraVale

} from "./clara-vale"

export {

    adrianVeil

} from "./adrian-veil"

export {

    noaArden

} from "./noa-arden"
/*
━━━━━━━━━━━━━━━━━━━
EDITORIAL AUTHORS
━━━━━━━━━━━━━━━━━━━
*/

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
REGISTRY
━━━━━━━━━━━━━━━━━━━
*/

export const editorialAuthors = [

    lenaVoss,

    eliasMoreau,

    claraVale,

    adrianVeil,

    noaArden

]

/*
━━━━━━━━━━━━━━━━━━━
GET AUTHOR
━━━━━━━━━━━━━━━━━━━
*/

export function getAuthorById(

    id: string

) {

    const author =
        editorialAuthors.find(

            author =>
                author.id === id

        )

    if (!author) {

        throw new Error(

            `Author not found: ${id}`

        )

    }

    return author

}