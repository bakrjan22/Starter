let prompt = require("prompt-sync")();
let code = prompt("Code : ") - 0;
let slot = [];
function inc(code) {
    let groupe = code;
    let got = code % 10;
    groupe = groupe / 10;
    groupe = parseInt(groupe);
   // console.log("code : " + got + " groupe : " + groupe);
   slot.push(got);
    if (groupe == 0){
        return 0;
    }
    inc(groupe);
}
inc(code);
for(let i = slot.length - 1; i > -1;i--){
    console.log("Got : " + slot[i]);
}
