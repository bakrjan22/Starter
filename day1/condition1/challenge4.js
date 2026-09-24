const prompt = require("prompt-sync")();

let montant = prompt("Montant de la commande : ");

if(montant >= 500) {
    console.log("Livraison gratuite");
    console.log("Total à payer : " + montant);
}else {
    console.log("Livraison : 40DH");
    console.log("Total à payer : " + (+montant +  + 40));
}