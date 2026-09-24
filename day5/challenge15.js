function calculerTotalPanier(panier) {
    let totale = 0;
    for(index in panier){
        totale += panier[index].prix * panier[index].quantite;
    }
    return totale;
}
console.log(calculerTotalPanier([{prix: 10, quantite: 2}, {prix: 5, quantite: 1}]));
