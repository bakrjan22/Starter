function len(chaine) {
    let i = 0;
    while(chaine[i] != undefined){
        i++;
    }
    return i;
}

function compterLettre(chaine, lettre) {
    let count = 0;
    for(let i = 0;i< len(chaine);i++){
        if (chaine[i] === lettre){
            count++;
        }
    }
    return count;
}
console.log(compterLettre("javascriptaa", "a"));
