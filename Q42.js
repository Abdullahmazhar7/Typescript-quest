var magicianNames = ["David Copperfield", "Harry Houdini"];
function showMagicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function makeGreat(magicians) {
    return magicians.map(function (magician) { return "".concat(magician, " the Great"); });
}
var greatMagicians = makeGreat(magicianNames);
showMagicians(greatMagicians);
