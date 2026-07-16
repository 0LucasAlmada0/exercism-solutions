export function isPangram(text: string): boolean {

    const letters = "abcdefghijklmnopqrstuvwxyz"
    let isThisTextPangram: boolean = false
    
    const lowerText = text.toLowerCase()
  
    for (let letter of letters) {
        if (!lowerText.includes(letter)) {
            
            isThisTextPangram = false
            return false

        } else {
            isThisTextPangram = true
        }
    }
    return isThisTextPangram
}