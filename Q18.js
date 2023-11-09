var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Iceland", "Greenland", "Antartica", "Tokyo", "Alaska"];
console.log("Original Order:", placesToVisit);
var sortedArray = __spreadArray([], placesToVisit, true).sort();
console.log("Alphabetical Order:", sortedArray);
console.log("Original Order (unchanged):", placesToVisit);
var reverseSortedArray = __spreadArray([], placesToVisit, true).sort().reverse();
console.log("Reverse Alphabetical Order:", reverseSortedArray);
console.log("Original Order (unchanged):", placesToVisit);
var reversedArray = __spreadArray([], placesToVisit, true).reverse();
console.log("Reversed Order:", reversedArray);
var originalOrderArray = __spreadArray([], reversedArray, true).reverse();
console.log("Back to Original Order:", originalOrderArray);
var sortedAlphabeticalArray = __spreadArray([], placesToVisit, true).sort();
console.log("Sorted Alphabetical Order:", sortedAlphabeticalArray);
var sortedReverseAlphabeticalArray = __spreadArray([], placesToVisit, true).sort().reverse();
console.log("Sorted Reverse Alphabetical Order:", sortedReverseAlphabeticalArray);
