function remplacerElement(tab, ancien, nouveau) {
    let newtab = [];
    for(let i = 0;i < tab.length;i++){
        newtab[i] = tab[i];
        if(tab[i] == ancien){
            newtab[i] = nouveau;
        }
    }
    return newtab;
}
console.log(remplacerElement(["A", "B", "C"], "K", "B"));
