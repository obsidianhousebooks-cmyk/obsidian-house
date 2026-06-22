"use client"

import { useState } from "react"

import { motion } from "framer-motion"

import { supabase } from "@/lib/supabase"

export default function LoginPage() {

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const [loading, setLoading] = useState(false)

    async function signUp() {

        try {

            setLoading(true)

            await supabase.auth.signUp({
                email,
                password
            })

            alert("Conta criada com sucesso.")

        } catch (error) {

            console.log(error)

        } finally {

            setLoading(false)

        }

    }

    async function signIn() {

        try {

            setLoading(true)

            await supabase.auth.signInWithPassword({
                email,
                password
            })

            alert("Login realizado.")

            window.location.href = "/dashboard"

        } catch (error) {

            console.log(error)

        } finally {

            setLoading(false)

        }

    }

    return (

        <main className="
            min-h-screen
            bg-black
            text-white
            flex
            items-center
            justify-center
            px-6
            relative
            overflow-hidden
        ">

            <div className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_top,#3b2f0a,transparent_40%)]
                opacity-40
            " />

            <motion.div
                initial={{
                    opacity: 0,
                    y: 40
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 0.8
                }}
                className="
                    relative
                    z-10
                    w-full
                    max-w-lg
                    bg-white/5
                    border
                    border-white/10
                    rounded-[40px]
                    p-10
                    backdrop-blur-2xl
                "
            >

                <h1 className="
                    text-5xl
                    font-black
                    leading-tight
                ">

                    Entre na
                    <span className="text-yellow-400">
                        {" "}elite IA
                    </span>

                </h1>

                <p className="
                    text-zinc-400
                    mt-6
                    leading-relaxed
                ">

                    Acesse sua biblioteca de livros,
                    capas premium e projetos salvos.

                </p>

                <div className="mt-10">

                    <input
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        placeholder="Seu email"
                        className="
                            w-full
                            bg-black/40
                            border
                            border-zinc-800
                            rounded-2xl
                            px-6
                            py-5
                            outline-none
                            focus:border-yellow-400
                            transition-all
                        "
                    />

                    <input
                        type="password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        placeholder="Sua senha"
                        className="
                            w-full
                            bg-black/40
                            border
                            border-zinc-800
                            rounded-2xl
                            px-6
                            py-5
                            outline-none
                            focus:border-yellow-400
                            transition-all
                            mt-5
                        "
                    />

                    <button
                        onClick={signIn}
                        disabled={loading}
                        className="
                            w-full
                            mt-8
                            bg-yellow-400
                            hover:bg-yellow-300
                            text-black
                            font-black
                            py-5
                            rounded-2xl
                            transition-all
                        "
                    >

                        Entrar

                    </button>

                    <button
                        onClick={signUp}
                        disabled={loading}
                        className="
                            w-full
                            mt-4
                            border
                            border-zinc-700
                            hover:border-zinc-500
                            py-5
                            rounded-2xl
                            transition-all
                        "
                    >

                        Criar Conta

                    </button>

                </div>

            </motion.div>

        </main>

    )

}