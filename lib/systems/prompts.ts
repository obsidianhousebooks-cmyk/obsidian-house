export function generateTitlesPrompt(theme: string) {

  return `
Você é um copywriter especialista em Amazon KDP.

Crie 10 títulos BESTSELLER EXTREMAMENTE VENDÁVEIS.

TEMA:
${theme}

OBJETIVO:
Gerar títulos com altíssimo potencial de clique e compra.

REGRAS:
- usar gatilhos emocionais
- promessa forte
- benefício claro
- curiosidade
- linguagem poderosa
- parecer livro best seller
- usar números quando possível
- evitar títulos genéricos

Retorne JSON:

{
  "titles": [
    "titulo 1",
    "titulo 2"
  ]
}
`
}