"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var matchResult_1 = require("./matchResult");
var csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
csvFileReader.read();
console.log(csvFileReader.data);
var muWins = 0;
for (var _i = 0, _a = csvFileReader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === "Man United" && match[5] === matchResult_1.MatchResult.HomeWin) {
        muWins++;
    }
    else if (match[2] === "Man United" && match[5] === matchResult_1.MatchResult.AwayWin) {
        muWins++;
    }
}
console.log("Man United Wins: " + muWins);
