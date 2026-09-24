const prompt = require("prompt-sync")()
let N = prompt("Depart : ") - 0;
while(N >= 0){
    console.log(N);
    N--
}
console.log("Decolage !");
