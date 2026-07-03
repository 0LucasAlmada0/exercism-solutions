export function format(name: string, positionNumber: number): string {
  const numberAsString = positionNumber.toString();
  const lastNumber = numberAsString[numberAsString.length - 1]
  let finalPosition: string = "th"

  if (lastNumber === "1") finalPosition = "st"
  if (lastNumber === "2") finalPosition = "nd"
  if (lastNumber === "3") finalPosition = "rd"
  if (numberAsString.endsWith("11") || numberAsString.endsWith("12") || numberAsString.endsWith("13")) {
    finalPosition = "th"
  }
  return `${name}, you are the ${positionNumber}${finalPosition} customer we serve today. Thank you!`
}