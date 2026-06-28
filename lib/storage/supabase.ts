import {

    createClient

} from "@supabase/supabase-js"

/*
━━━━━━━━━━━━━━━━━━━
ENV
━━━━━━━━━━━━━━━━━━━
*/

const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL || ""

const supabaseKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

/*
━━━━━━━━━━━━━━━━━━━
VALIDATION
━━━━━━━━━━━━━━━━━━━
*/

if (

    !supabaseUrl ||

    !supabaseKey

) {

    console.warn(`

━━━━━━━━━━━━━━━━━━━
SUPABASE NOT CONFIGURED
━━━━━━━━━━━━━━━━━━━

`)

}

/*
━━━━━━━━━━━━━━━━━━━
CLIENT
━━━━━━━━━━━━━━━━━━━
*/

export const supabase =
    createClient(

        supabaseUrl,

        supabaseKey

    )

/*
━━━━━━━━━━━━━━━━━━━
STORAGE BUCKETS
━━━━━━━━━━━━━━━━━━━
*/

export const STORAGE_BUCKETS = {

    books:
        "books",

    covers:
        "covers",

    manuscripts:
        "manuscripts",

    exports:
        "exports",

    memory:
        "memory"

}