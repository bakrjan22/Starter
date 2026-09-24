const prompt = require("prompt-sync")()
let N = prompt("Nombre de missions : ") - 0;
for(let i = 1;i<=N;i++){
    console.log("Mission " + i + "->" + " Score : " + i * 100);
}