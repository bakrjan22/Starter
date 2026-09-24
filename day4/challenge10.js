function len(chaine) {
    let i = 0;
    while(chaine[i] != undefined){
        i++;
    }
    return i;
}
function separerMots(chaine) {
    let temp_str = "";
    let tab = [];
    let pos = 0;
    for(let i = 0;i < len(chaine);i++){
        if(chaine[i] != " " &&  chaine[i] != undefined){
            temp_str = temp_str + chaine[i];
        }else{
            tab[pos] = temp_str;
            temp_str = "";
            console.log(pos);
            
            pos++;
        }
    }
    return tab;
}
console.log(separerMots("Apprendre le JavaScript "));
 