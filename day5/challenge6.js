function ajouterALaFin(tab,x){
    tab[tab.length] = x;
    return tab;
}
function inverserTableau(tab){
    let newT = [];
    for(let i = tab.length - 1;i >= 0;i--){
        ajouterALaFin(newT,tab[i]);
    }
    return newT;
}

console.log(inverserTableau([1, 2, 3, 4]));
