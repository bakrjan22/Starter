function len(chaine) {
    let i = 0;
    while(chaine[i] != undefined){
        i++;
    }
    return i;
}
function inverserChaine(chaine) {
    let str = "";
    let k = 0;
    for(let i = len(chaine) - 1; i > -1;i--){
        str = str + chaine[i];
        k++;
    }
    return str;
}
console.log(inverserChaine("hello"));
