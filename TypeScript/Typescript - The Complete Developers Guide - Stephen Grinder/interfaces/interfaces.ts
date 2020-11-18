interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary() {
    return `My Name is ${this.name}`;
  },
};

const printVeh = (veh: Vehicle): void => {
  console.log(
    `Name: ${veh.name}
     Year: ${veh.year}
     Borken: ${veh.broken}`
  );
  console.log(veh.summary());
};

printVeh(oldCivic);
