const prompt = require("prompt-sync")();
let U = prompt("Tension : ");
let I = prompt("Intensité : ");
let T = prompt("Temps : ");
console.log("Energie : " + (U * I * T) + " Wh");