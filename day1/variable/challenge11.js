let promp = require("prompt-sync")();
let Longeur = promp("Longeur : ");
let Largeur = promp("Largeur : ");

console.log("Surface : " + (Longeur * Largeur) + " m2");
console.log("Perimetre : " + (2 * (+Longeur + +Largeur)) + " m");