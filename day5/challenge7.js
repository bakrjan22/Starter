function ajouterALaFin(tab,x){
    tab[tab.length] = x;
    return tab;
}
function filtrerPairs(tab) {
    let newT = [];
    for(let i = 0;i < tab.length;i++){
        if (tab[i] % 2 == 0){
            ajouterALaFin(newT,tab[i]);
        }
    }
    return newT;
}
console.log(filtrerPairs([1, 2, 3, 4, 5, 6]));
