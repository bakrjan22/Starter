function formaterChaine(tab) {
    tab.pop();
    tab.shift();
    return tab.join("-");
}
console.log(formaterChaine(["Début", "JS", "PHP", "Fin"]));
