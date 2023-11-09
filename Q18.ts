
const placesToVisit: string[] = ["Iceland", "Greenland", "Antartica", "Tokyo", "Alaska"];

console.log("Original Order:", placesToVisit);

const sortedArray = [...placesToVisit].sort();
console.log("Alphabetical Order:", sortedArray);

console.log("Original Order (unchanged):", placesToVisit);

const reverseSortedArray = [...placesToVisit].sort().reverse();
console.log("Reverse Alphabetical Order:", reverseSortedArray);

console.log("Original Order (unchanged):", placesToVisit);

const reversedArray = [...placesToVisit].reverse();
console.log("Reversed Order:", reversedArray);

const originalOrderArray = [...reversedArray].reverse();
console.log("Back to Original Order:", originalOrderArray);

const sortedAlphabeticalArray = [...placesToVisit].sort();
console.log("Sorted Alphabetical Order:", sortedAlphabeticalArray);

const sortedReverseAlphabeticalArray = [...placesToVisit].sort().reverse();
console.log("Sorted Reverse Alphabetical Order:", sortedReverseAlphabeticalArray);

