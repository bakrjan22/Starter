function len(chaine) {
    let i = 0;
    while(chaine[i] != undefined){
        i++;
    }
    return i;
}
function repeterChaine(chaine, fois) {
    let em = "";
    for(let i = 0;i < fois;i++){
        em = em + chaine;
    }
    return em;
}
console.log(repeterChaine("JS", 3));
