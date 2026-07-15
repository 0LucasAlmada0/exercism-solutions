const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

export class Robot {

  private robotName: string = ""
  public static usedRobotNames = new Set<string>()

  constructor() {
    this.resetName()
  }

  public get name(): string {
    return this.robotName
  }

  public generateName(): string {
    let name: string = ""
    let count = 0
    while (count < 2) {
      const randomNumber = Math.floor(Math.random() * letters.length);
      name += letters[randomNumber]
      count++
    }

    count = 0

    while (count < 3) {
      name += (Math.floor(Math.random() * 10))
      count++
    }

    return name
  }

  public setName(name: string): void {
    Robot.usedRobotNames.add(name)
    this.robotName = name
  }

  public resetName(): void {

    let newName = this.generateName()

    while (Robot.usedRobotNames.has(newName)) {
      newName = this.generateName()
    }

    this.setName(newName)
  }

  public static releaseNames(): void {
    this.usedRobotNames.clear()
  }
}