let prompt = require("prompt-sync")();
let premier_num = prompt("Premier nombre : ");
let operateur = prompt("Operateur : ");
let deuxieme_num = prompt("Deuxieme nombre : ");

switch (operateur) {
    case '+':
        console.log("Resultat : " + (+premier_num + +deuxieme_num) );
        break;
    case '-':
        console.log("Resultat : " + (-premier_num - -deuxieme_num) );
        break;
    case '*':
        console.log("Resultat : " + (+premier_num * +deuxieme_num) );
     break;
     case '/':
        if (deuxieme_num == 0) {
            console.log("Division par 0 impossible");
            break;
        }
        console.log("Resultat : " + (+premier_num / +deuxieme_num) );
     break;
     default:
        console.log("Operateur invalide");
}