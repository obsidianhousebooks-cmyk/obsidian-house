"use server"

/*
━━━━━━━━━━━━━━━━━━━
GENERATE BOOK ACTION
━━━━━━━━━━━━━━━━━━━

Thin action bridge
da Obsidian House.

Responsável apenas por:

- validar requests
- chamar orchestrator
- retornar resultado

━━━━━━━━━━━━━━━━━━━
*/

import {

    editorialOrchestrator,

    EditorialOrchestratorInput,

    EditorialOrchestratorResult

} from "@/lib/orchestration/editorialOrchestrator"

/*
━━━━━━━━━━━━━━━━━━━
ACTION INPUT
━━━━━━━━━━━━━━━━━━━
*/

export interface GenerateBookActionInput
    extends EditorialOrchestratorInput { }

/*
━━━━━━━━━━━━━━━━━━━
ACTION RESULT
━━━━━━━━━━━━━━━━━━━
*/

export interface GenerateBookActionResult
    extends EditorialOrchestratorResult { }

/*
━━━━━━━━━━━━━━━━━━━
GENERATE BOOK ACTION
━━━━━━━━━━━━━━━━━━━
*/

export async function generateBookAction(

    input: GenerateBookActionInput

): Promise<GenerateBookActionResult> {

    try {

        /*
        ━━━━━━━━━━━━━━━━━━━
        VALIDATION
        ━━━━━━━━━━━━━━━━━━━
        */

        if (

            !input.title ||

            !input.genre

        ) {

            return {

                success: false,

                error:
                    "Title and genre are required."

            }

        }

        /*
        ━━━━━━━━━━━━━━━━━━━
        ORCHESTRATION
        ━━━━━━━━━━━━━━━━━━━
        */

        return await editorialOrchestrator(
            input
        )

    } catch (error) {

        console.error(

            `
━━━━━━━━━━━━━━━━━━━
GENERATE BOOK ACTION ERROR
━━━━━━━━━━━━━━━━━━━
`,
            error

        )

        return {

            success: false,

            error:
                "Failed to execute editorial action."

        }

    }

}