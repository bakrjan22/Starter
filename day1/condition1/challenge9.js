let prompt = require("prompt-sync")();
let num = prompt("1 .. 5 : ");

switch (num) {
    case '1':
    console.log("Transport : Bus");
    console.log("Prix : 5 DH");
    break;
    case '2':
    console.log("Transport : Train");
    console.log("Prix : 20 DH");
    break;
    case '3':
    console.log("Transport : Tramway");
    console.log("Prix : 6 DH");
    break;
    case '4':
    console.log("Transport : Taxi");
    console.log("Prix : 15 DH");
    break;
    case '5':
    console.log("Transport : Velo");
    console.log("Prix : 10 DH");
    break;
    default:
    console.log("Transport invalide.");
    
}