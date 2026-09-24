const prompt = require("prompt-sync")();

let note = prompt("Entrez votre note : ");
if(note < 10) {
    console.log("Echec");
}else if(note >= 10 && note <= 11.99) {
    console.log("Passable");
}else if(note >= 12 && note <= 13.99) {
    console.log("Assez bien");
}else if(note >= 14 && note <= 15.99) {
    console.log("Bien");
}else if(note >= 16 && note <= 17.99) {
    console.log("Tres bien");
}else if(note >= 18 && note <= 20) {
    console.log("Excellent");
}else {
    console.log("Note invalide");
}