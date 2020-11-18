const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const forecast = {
  date: new Date(),
  weather: "sunny",
};

//Destructuring with Annotations
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(
    `${date}
     ${weather}`
  );
};
