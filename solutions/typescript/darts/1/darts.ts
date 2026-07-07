export function score(x: number, y: number): number {

  let totalPoints: number = 0
  let distancia: number = 0

  distancia = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))

  if (distancia > 10) {
    totalPoints = 0
  } else if (distancia <= 10 && distancia > 5) {
    totalPoints = 1
  } else if (distancia <= 1) {
    totalPoints = 10
  } else {
    totalPoints = 5
  }
  return totalPoints
}