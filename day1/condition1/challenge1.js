const prompt = require("prompt-sync")();
let userinput = prompt("age : ");

if (userinput >= 18) {
    console.log("Acces autorise");
}else {
    console.log("Acces refuse");
}