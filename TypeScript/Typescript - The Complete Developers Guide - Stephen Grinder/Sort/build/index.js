"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection_1 = require("./CharactersCollection");
var NumbersCollection_1 = require("./NumbersCollection");
var LinkedList_1 = require("./LinkedList");
//Arrays
var numbersCollection = new NumbersCollection_1.NumbersCollection([1, 2, -5, 8, 7, 9]);
numbersCollection.sort();
console.log(numbersCollection.data);
//Strings
var charactersCollection = new CharactersCollection_1.CharactersCollection("Xaaygahs");
charactersCollection.sort();
console.log(charactersCollection.data);
//Linkded List
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(5);
linkedList.add(50);
linkedList.add(70);
linkedList.add(-100);
linkedList.sort();
linkedList.print();
