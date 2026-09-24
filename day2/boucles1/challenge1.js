const prompt = require("prompt-sync")()
let prt = prompt("Nombre de participants : ") - 0;
for(let i = 1; i < prt + 1;i++){
    console.log("Participant " + i);
}