function calculerSomme(tab) {
    let t = 0;
    for(let i = 0;i< tab.length;i++){
        t += tab[i];
    }
    return t;
}
console.log(calculerSomme([5, 10, 15]));
