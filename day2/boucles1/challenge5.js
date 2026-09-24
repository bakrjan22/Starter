const prompt = require("prompt-sync")()
let N = prompt("N : ") - 0;
let X = prompt("X : ") - 0;

for(let i = 0;i < N; i++){
    let O = X * i;
    console.log(O);
    if (O==N){break;}
}