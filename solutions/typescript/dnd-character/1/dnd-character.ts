interface DnDCharacterInterface {
  strength: number
  dexterity: number
  constitution: number
  intelligence: number
  wisdom: number
  charisma: number
}

type Ability = keyof DnDCharacterInterface

const ABILITIES: Ability[] = [
  "strength",
  "dexterity",
  "constitution",
  "intelligence",
  "wisdom",
  "charisma",
]

export class DnDCharacter implements DnDCharacterInterface {
  public strength: number
  public dexterity: number
  public constitution: number
  public intelligence: number
  public wisdom: number
  public charisma: number
  public hitpoints: number

  constructor() {
    this.strength = 0
    this.dexterity = 0
    this.constitution = 0
    this.intelligence = 0
    this.wisdom = 0
    this.charisma = 0
    this.hitpoints = 0

    for (let i = 0; i < ABILITIES.length; i++) {
      const ability = ABILITIES[i]
      const sumOfNumbers = DnDCharacter.generateAbilityScore()

      this.setAbility(ability, sumOfNumbers)
    }

    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)
  }

  setAbility(abilityName: Ability, abilityValue: number) {
    this[abilityName] = abilityValue
  }

  public static generateAbilityScore(): number {
    let numbersRolled: number[] = []

    for (let i = 0; i < 4; i++) {
      numbersRolled.push(Math.floor(Math.random() * 6 + 1))
    }

    numbersRolled.sort((a, b) => a - b)
    numbersRolled.reverse()

    numbersRolled.pop()

    const sumOfNumbers = numbersRolled.reduce((sum, el) => sum + el, 0)

    return sumOfNumbers
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2)
  }
}