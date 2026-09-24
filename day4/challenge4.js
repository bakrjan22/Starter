function len(chaine) {
    let i = 0;
    while(chaine[i] != undefined){
        i++;
    }
    return i;
}
function compterVoyelles(chaine) {
    let check_in = ["a","e","i","o","u","y"];
    let count = 0;
    for(let i = 0;i< len(check_in);i++){
        for(let k = 0;k < len(chaine);k++){
            if (chaine[k] === check_in[i]){
                console.log("found : ",check_in[i]);
                
                count++;
            }
        }
    }
    return count;
}
console.log(compterVoyelles("developpeur"));
