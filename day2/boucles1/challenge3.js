const prompt = require("prompt-sync")()
let n = prompt("N = ") - 0;

let i = 0;
let tt = 0;

while (i<n){
    tt = tt + i + 1;    
    i++
}
console.log(tt);
