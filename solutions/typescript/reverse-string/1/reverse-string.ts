export function reverse(text: string): string {

  let textArray = []

  for (let i = 0; i < text.length; i++) {
    textArray.push(text.charAt(i))
  }

  return textArray.reverse().join("")
}