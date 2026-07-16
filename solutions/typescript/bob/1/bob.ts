export function hey(message: string): string {

  let isYelling: boolean = false
  let isQuestion: boolean = false
  let hasLetters: boolean = false

  // Verifica se são só letras
  if (message.toLowerCase() !== message.toUpperCase()) hasLetters = true

  // Verifica se é uma pergunta
  if (message.trim().endsWith('?')) isQuestion = true

  // Verifica se é um grito
  if (message === message.toUpperCase()) isYelling = true

  // Verifica se é uma pergunta com grito. Se não for, cai no fallback de "Whatever"
  if (isQuestion && isYelling && hasLetters) {
    return "Calm down, I know what I'm doing!"
  } else if (isQuestion) {
    return "Sure."
  } else if (message.trim() === "") {
    return "Fine. Be that way!"
  } else if (isYelling && hasLetters) {
    return "Whoa, chill out!"
  } else {
    return "Whatever."
  }
}