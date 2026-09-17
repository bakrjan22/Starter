let prompt = require("prompt-sync")();
const controle_continue_coef = 2;
const projet_coef = 3;
const Examen_coef = 5;
let cc = prompt("controle continue : ");
let projet = prompt("projet : ");
let examen = prompt("examen : ");
let note_final = (cc * controle_continue_coef + projet * projet_coef + examen * Examen_coef) / (controle_continue_coef + projet_coef + Examen_coef);