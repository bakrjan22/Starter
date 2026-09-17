let total = 0;
let parti = 4;
let prompt = require("prompt-sync")();
for (let i = 0; i < parti; i++) {
    let score = prompt("Score partie ");
    total += +score;
}
console.log("Score total : " + total);
console.log("Score moyen : " + (total / 4));