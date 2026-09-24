function len(chaine) {
    let i = 0;
    while(chaine[i] != undefined){
        i++;
    }
    return i;
}
function estPalindrome(chaine) {
    for(let i = 0;i < len(chaine) / 2;i++){
        let first = i;
        let end = len(chaine) - 1 - i;
        if(chaine[first] != chaine[end]){
            return false;
        }
    }
    return true;
}
console.log(estPalindrome("kayak"));
