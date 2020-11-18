import { Sorter } from "./Sorter";
import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";
import { LinkedList } from "./LinkedList";

//Arrays
const numbersCollection = new NumbersCollection([1, 2, -5, 8, 7, 9]);
numbersCollection.sort();
console.log(numbersCollection.data);

//Strings
const charactersCollection = new CharactersCollection("Xaaygahs");

charactersCollection.sort();
console.log(charactersCollection.data);

//Linkded List
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(5);
linkedList.add(50);
linkedList.add(70);
linkedList.add(-100);

linkedList.sort();
linkedList.print();
