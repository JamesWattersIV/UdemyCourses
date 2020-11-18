const carMakers = ["ford", "toyota", "chevy"];

const dates = [new Date(), new Date()];

const carsByMakes = [["f150"], ["corolla"], ["camaro"]];

const car = carMakers[0];

carMakers.map((car: string): string => {
  return car.toLowerCase();
});

//Flexible Types
const nbDates: (Date | string)[] = [new Date(), "2030-10-11"];
