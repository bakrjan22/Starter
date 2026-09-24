function len(chaine) {
    let i = 0;
    while(chaine[i] != undefined){
        i++;
    }
    return i;
}
function remplacerCaractere(chaine, ancien, nouveau) {
    let new_str = "";
    for(let i = 0;i < len(chaine);i++){
        if(chaine[i] == ancien){
            new_str = new_str + nouveau;
        }else{
            new_str = new_str + chaine[i];

        }
    }
    return new_str;
}
console.log(remplacerCaractere("banana", "a", "o"));
