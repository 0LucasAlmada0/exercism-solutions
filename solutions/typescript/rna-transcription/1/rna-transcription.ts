export function toRna(dnaSequence: string): string {

  // Declaração das variaveis
  let rnaString: string = ""
  let dnaLetter: string = ""

  // Verificacao se começa com outra letra invalida
  if (!dnaSequence.startsWith('C') && !dnaSequence.startsWith("G") && !dnaSequence.startsWith("T") && !dnaSequence.startsWith("A")) {
    throw Error("Invalid input DNA.")
  }
  
  // Transformação das letras do DNA em RNA
  for (let i = 0; dnaSequence.length > i; i++) {
    dnaLetter = dnaSequence[i]

    if (dnaLetter == 'G') rnaString += 'C'
    else if (dnaLetter == 'C') rnaString += 'G'
    else if (dnaLetter == 'T') rnaString += 'A'
    else if (dnaLetter == 'A') rnaString += 'U'
    else {
      throw Error("Invalid input DNA.")
    }
  }
  
  return rnaString
}