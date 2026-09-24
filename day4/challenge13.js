function obtenirInitiales(nomComplet) {
    return nomComplet[0].toUpperCase() + "." + nomComplet[nomComplet.indexOf(" ") + 1].toUpperCase();
}
console.log(obtenirInitiales("bakr jannane"));
