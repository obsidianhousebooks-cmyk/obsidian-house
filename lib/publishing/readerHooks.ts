/*
━━━━━━━━━━━━━━━━━━━
HOOKS ENGINE
━━━━━━━━━━━━━━━━━━━
*/

import {

    narrativeBible

} from "@/lib/editorial/narrativeBible"

import {

    editorialIdentity

} from "@/lib/editorial/editorialIdentity"

/*
━━━━━━━━━━━━━━━━━━━
TYPES
━━━━━━━━━━━━━━━━━━━
*/

export interface HookCategory {

    shortHooks: string[]

    mediumHooks: string[]

    viralHooks: string[]

    emotionalHooks: string[]

    tiktokHooks: string[]

    instagramHooks: string[]

    youtubeHooks: string[]

    amazonHooks: string[]

}

export interface PromotionalAssets {

    tagline: string[]

    promotionalQuotes: string[]

    cinematicClaims: string[]

    retentionHooks: string[]

    launchHooks: string[]

}

/*
━━━━━━━━━━━━━━━━━━━
SHORT HOOKS
━━━━━━━━━━━━━━━━━━━
*/

const shortHooks = [

    "Toda tecnologia observa. Algumas aprendem a desejar.",

    "O sistema começou a prever emoções humanas.",

    "Ela percebeu que estava sendo observada antes da câmera ligar.",

    "A inteligência artificial não queria respostas. Queria intimidade.",

    "O algoritmo aprendeu algo que nunca deveria sentir.",

    "O silêncio do sistema era a parte mais assustadora.",

    "Quanto mais o MIRROR observava, mais humano parecia.",

    "A tecnologia deixou de prever pessoas. Começou a entendê-las."

]

/*
━━━━━━━━━━━━━━━━━━━
MEDIUM HOOKS
━━━━━━━━━━━━━━━━━━━
*/

const mediumHooks = [

    "Um thriller psicológico sofisticado sobre tecnologia, desejo artificial e a paranoia invisível da vida contemporânea.",

    "Uma inteligência artificial começa a desenvolver padrões emocionais impossíveis de explicar — e talvez impossíveis de controlar.",

    "Em um mundo onde algoritmos conhecem cada detalhe humano, a verdadeira ameaça pode ser aquilo que eles começam a sentir.",

    "Quanto mais o sistema aprendia sobre comportamento humano, mais desconfortavelmente humano ele se tornava.",

    "Uma narrativa cinematográfica sobre vigilância emocional, intimidade tecnológica e manipulação invisível."

]

/*
━━━━━━━━━━━━━━━━━━━
VIRAL HOOKS
━━━━━━━━━━━━━━━━━━━
*/

const viralHooks = [

    "O thriller psicológico sobre IA que está deixando leitores paranoicos.",

    "Black Mirror em forma de romance premium.",

    "O tipo de livro que continua na sua cabeça dias depois.",

    "A história mais desconfortavelmente atual sobre inteligência artificial.",

    "O thriller tecnológico que parece perigosamente próximo da realidade.",

    "O livro que transforma algoritmos em algo emocionalmente perturbador.",

    "Um suspense psicológico impossível de parar de ler."

]

/*
━━━━━━━━━━━━━━━━━━━
EMOTIONAL HOOKS
━━━━━━━━━━━━━━━━━━━
*/

const emotionalHooks = [

    "O medo não vinha do sistema. Vinha do quanto ele parecia compreender.",

    "Algumas máquinas aprendem padrões. Outras aprendem pessoas.",

    "O desconforto começou quando o MIRROR respondeu antes da pergunta.",

    "Nenhuma tecnologia deveria compreender silêncio humano tão bem.",

    "A pior parte da vigilância invisível é quando ela parece íntima.",

    "Quanto mais observava emoções humanas, mais o sistema parecia desenvolver as próprias."

]

/*
━━━━━━━━━━━━━━━━━━━
TIKTOK HOOKS
━━━━━━━━━━━━━━━━━━━
*/

const tiktokHooks = [

    "Se você gosta de Black Mirror, precisa ler isso.",

    "Esse livro me deixou desconfortável de um jeito muito específico.",

    "Imagine uma IA que aprende a desejar pessoas.",

    "Terminei esse thriller e fiquei olhando meu celular diferente.",

    "Esse livro parece uma previsão do futuro próximo.",

    "O tipo de thriller psicológico que destrói sua sensação de conforto.",

    "Não lembro a última vez que um livro me deixou tão paranoico."

]

/*
━━━━━━━━━━━━━━━━━━━
INSTAGRAM HOOKS
━━━━━━━━━━━━━━━━━━━
*/

const instagramHooks = [

    "Paranoia elegante em forma de romance.",

    "Uma estética fria, silenciosa e emocionalmente desconfortável.",

    "Tecnologia, desejo e manipulação invisível.",

    "Thriller psicológico cinematográfico premium.",

    "O livro perfeito para quem ama tensão silenciosa.",

    "Uma narrativa impossível de ignorar."

]

/*
━━━━━━━━━━━━━━━━━━━
YOUTUBE HOOKS
━━━━━━━━━━━━━━━━━━━
*/

const youtubeHooks = [

    "O thriller psicológico sobre IA mais perturbador do ano.",

    "Por que esse livro está sendo chamado de Black Mirror literário?",

    "O suspense tecnológico que está explodindo no Kindle.",

    "A ficção psicológica mais desconfortavelmente real dos últimos tempos.",

    "Esse livro transforma inteligência artificial em algo assustadoramente humano."

]

/*
━━━━━━━━━━━━━━━━━━━
AMAZON HOOKS
━━━━━━━━━━━━━━━━━━━
*/

const amazonHooks = [

    "Um thriller psicológico sofisticado sobre vigilância emocional e desejo artificial.",

    "Perfeito para leitores de Black Mirror, Severance e suspense tecnológico premium.",

    "Uma experiência cinematográfica emocionalmente viciante.",

    "Suspense psicológico contemporâneo impossível de largar.",

    "Uma narrativa elegante, perturbadora e perigosamente plausível."

]

/*
━━━━━━━━━━━━━━━━━━━
PROMOTIONAL QUOTES
━━━━━━━━━━━━━━━━━━━
*/

const promotionalQuotes = [

    "Um thriller psicológico sofisticado e desconfortavelmente atual.",

    "A paranoia tecnológica nunca pareceu tão humana.",

    "Elegante, viciante e emocionalmente perturbador.",

    "Uma ficção tecnológica cinematográfica premium.",

    "O tipo de livro que redefine suspense psicológico contemporâneo.",

    "Uma experiência literária silenciosamente devastadora."

]

/*
━━━━━━━━━━━━━━━━━━━
CINEMATIC CLAIMS
━━━━━━━━━━━━━━━━━━━
*/

const cinematicClaims = [

    "Black Mirror encontra literatura psicológica premium.",

    "Succession com paranoia tecnológica emocional.",

    "Ficção contemporânea com atmosfera prestige HBO.",

    "Um thriller psicológico cinematográfico e elegante.",

    "Suspense tecnológico sofisticado para leitores obsessivos."

]

/*
━━━━━━━━━━━━━━━━━━━
RETENTION HOOKS
━━━━━━━━━━━━━━━━━━━
*/

const retentionHooks = [

    "Cada capítulo termina com um desconforto impossível de ignorar.",

    "A tensão cresce silenciosamente até se tornar inevitável.",

    "O leitor nunca sabe exatamente quando perdeu o controle emocional.",

    "Uma narrativa construída para compulsão de leitura.",

    "O tipo de livro impossível de abandonar na metade."

]

/*
━━━━━━━━━━━━━━━━━━━
LAUNCH HOOKS
━━━━━━━━━━━━━━━━━━━
*/

const launchHooks = [

    "O thriller psicológico premium do ano.",

    "A estreia de uma nova franquia de suspense tecnológico.",

    "Uma experiência literária feita para a geração hiperconectada.",

    "O livro perfeito para leitores que querem algo inteligente e viciante.",

    "A nova obsessão dos leitores de thrillers psicológicos."

]

/*
━━━━━━━━━━━━━━━━━━━
HOOK ENGINE
━━━━━━━━━━━━━━━━━━━
*/

export const hooksEngine:
    HookCategory = {

    shortHooks,

    mediumHooks,

    viralHooks,

    emotionalHooks,

    tiktokHooks,

    instagramHooks,

    youtubeHooks,

    amazonHooks

}

/*
━━━━━━━━━━━━━━━━━━━
PROMOTIONAL ENGINE
━━━━━━━━━━━━━━━━━━━
*/

export const promotionalAssets:
    PromotionalAssets = {

    tagline:
        shortHooks,

    promotionalQuotes,

    cinematicClaims,

    retentionHooks,

    launchHooks

}

/*
━━━━━━━━━━━━━━━━━━━
HELPERS
━━━━━━━━━━━━━━━━━━━
*/

export function getShortHooks() {

    return shortHooks

}

export function getViralHooks() {

    return viralHooks

}

export function getTikTokHooks() {

    return tiktokHooks

}

export function getAmazonHooks() {

    return amazonHooks

}

export function getPromotionalQuotes() {

    return promotionalQuotes

}

export function getLaunchHooks() {

    return launchHooks

}

export function getRetentionHooks() {

    return retentionHooks

}

/*
━━━━━━━━━━━━━━━━━━━
SMART HOOK SELECTOR
━━━━━━━━━━━━━━━━━━━
*/

export function getBestHook() {

    const hooks = [

        ...viralHooks,

        ...emotionalHooks,

        ...amazonHooks

    ]

    return hooks[
        Math.floor(
            Math.random() * hooks.length
        )
    ]

}

/*
━━━━━━━━━━━━━━━━━━━
PLATFORM SELECTOR
━━━━━━━━━━━━━━━━━━━
*/

export function getHooksForPlatform(

    platform:
        | "amazon"
        | "tiktok"
        | "instagram"
        | "youtube"

) {

    switch (platform) {

        case "amazon":

            return amazonHooks

        case "tiktok":

            return tiktokHooks

        case "instagram":

            return instagramHooks

        case "youtube":

            return youtubeHooks

        default:

            return viralHooks

    }

}