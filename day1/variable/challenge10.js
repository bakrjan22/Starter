function pow(n, p) {
    let I = 1;
    let s = n;
    while (I < p) {
        I++;
        s *= s;
    }
    return s;
}
const prompt = require("prompt-sync")();
let Rayon = prompt("Rayon : ");
let Hauteur = prompt("Hauteur : ");
const PI = 3.14159;
let volume = PI * pow(Rayon,2) * Hauteur;
console.log("Volume : " + volume + " m3");