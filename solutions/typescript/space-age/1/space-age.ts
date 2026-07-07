// the input comes in seconds, so i have to divide by 60 to get in minutes
// then i have to divide by 60 again to get it in hours
// then i have to divide by 24 to get in days
// finally, divide by 365.25 to get in years

type Planet = {
  planet: string;
  orbitalPeriod: number;
};

const planetData: Planet[] = [
  { planet: "mercury", orbitalPeriod: 0.2408467 },
  { planet: "venus", orbitalPeriod: 0.61519726 },
  { planet: "earth", orbitalPeriod: 1.0 },
  { planet: "mars", orbitalPeriod: 1.8808158 },
  { planet: "jupiter", orbitalPeriod: 11.862615 },
  { planet: "saturn", orbitalPeriod: 29.447498 },
  { planet: "uranus", orbitalPeriod: 84.016846 },
  { planet: "neptune", orbitalPeriod: 164.79132 },
];

export function age(planet: string, seconds: number): number {
  const timeInEarth = seconds / 60 / 60 / 24 / 365.25;

  for (let i = 0; planetData.length > i; i++) {
    if (planet == planetData[i].planet){
      return Number((timeInEarth / planetData[i].orbitalPeriod).toFixed(2));
    }
  }

  throw new Error("Invalid Planet");
}