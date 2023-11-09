
const magicianNames: string[] = ["David Copperfield", "Harry Houdini"];

function showMagicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
showMagicians(magicianNames);
