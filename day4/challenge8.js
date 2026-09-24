function len(chaine) {
    let i = 0;
    while(chaine[i] != undefined){
        i++;
    }
    return i;
}
function extraireChaine(chaine, debut, fin) {
    let str = "";
    for(let i = debut;i < fin;i++){
        str = str + chaine[i];
    }
    return str;
}
console.log(extraireChaine("JavaScript", 0, 4));
