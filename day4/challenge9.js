function len(chaine) {
    let i = 0;
    while(chaine[i] != undefined){
        i++;
    }
    return i;
}
function nettoyerEspaces(chaine) {
    let str = "";
    let from = 0;
    let to = 0;

    let start_state = true;
    let end_state = true;

    for(let i = 0;i < len(chaine);i++){
        let start = i;
        let end = len(chaine) - 1 - i;
        if (chaine[start] == " " && start_state == true){
            from++;
        }else{
            start_state = false;
        }

        if (chaine[end] == " " && end_state == true){
            to = end;
        }
        else{
            end_state = false;
        }

    }
    console.log("from :" + from + " to " + to);
    for(let i = from;i < to;i++){
        str = str + chaine[i];
    }
    return str;
}
console.log("."+nettoyerEspaces("   hello world   ")+".");
