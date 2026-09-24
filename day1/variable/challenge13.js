let promp = require("prompt-sync")();
let latest = promp("Nombre : ") - 0;

let binary_output = [];
while(latest !== 0){
    latest = latest / 2;
    if (latest === parseInt(latest)){
        binary_output.push("0")
    }else{
        binary_output.push("1")
    }
    latest = parseInt(latest);
}
let reversed = [];
for(let i = binary_output.length - 1; i > -1; i--){
    reversed.push(binary_output[i]);
}
console.log("Binaire :",reversed.join(""));
