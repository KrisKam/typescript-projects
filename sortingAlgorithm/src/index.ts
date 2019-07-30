import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";


const numbersCollection = new NumbersCollection([50, 3, -5, -100, 5]);
numbersCollection.sort();
console.log(numbersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();

// const charactersCollection = new CharactersCollection("Xaaayb");
// charactersCollection.sort();
// console.log(charactersCollection.data);