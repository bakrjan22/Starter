const prompt = require("prompt-sync")()
let some = 0;
let nb_saisie = 0;
while(true){
    let N = prompt("Saisie : ") - 0;
    if (N === 0){
        console.log("Nombre de valeurs : " + nb_saisie);
        console.log("Somme : " + some);
        break;
    }
    nb_saisie++;
    some = some + N;
}