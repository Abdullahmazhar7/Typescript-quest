const magicianNames: string[] = ["David Copperfield", "Harry Houdini"];

function showMagicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function makeGreat(magicians: string[]): string[] {
    return magicians.map(magician => `${magician} the Great`);
}

const greatMagicians = makeGreat([...magicianNames]);

console.log("Original Magicians:");
showMagicians(magicianNames);

console.log("\nGreat Magicians:");
showMagicians(greatMagicians);

