function obtenirProduitsEnPromo(produits) {
    let promoProducteOnly = [];
    let l = 0;
    for(let i = 0;i < produits.length;i++){
        if(produits[i].enPromo == true){
            promoProducteOnly.push(produits[i].nom);
            l++;
        }
    }
    return promoProducteOnly;
}
console.log(obtenirProduitsEnPromo([{nom: "PC", enPromo: true}, {nom: "Souris", enPromo: false}]));
