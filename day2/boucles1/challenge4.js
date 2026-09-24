const prompt = require("prompt-sync")()
let n = prompt("Nombre : ") - 0;

for(let i = 0;i <= 10;i++){
    console.log(n + " x " + i + " = " + n * i);
}