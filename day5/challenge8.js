function ajouterALaFin(tab,x){
    tab[tab.length] = x;
    return tab;
}
function supprimerDoublons(tab){
    let seen = [];
    for(let i = 0;i < tab.length;i++){
        for(let k = 0;k < tab.length;k++){
            if (!seen.includes(tab[k])){
                ajouterALaFin(seen,tab[k]);
            }
        }
    }
    return seen;
}
console.log(supprimerDoublons([1, 2, 2, 3, 4, 4, 1]));
