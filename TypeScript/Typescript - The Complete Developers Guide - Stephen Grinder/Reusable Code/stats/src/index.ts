import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./matchResult";

const csvFileReader = new CsvFileReader("football.csv");
csvFileReader.read();

console.log(csvFileReader.data);

let muWins = 0;
for (let match of csvFileReader.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    muWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    muWins++;
  }
}

console.log(`Man United Wins: ${muWins}`);
