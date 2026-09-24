function trierTableau(tab) {
    let T = 0;
    while (T < tab.length){
        for(let i = 0;i < tab.length;i++){
            if(tab[i] > tab[i+1]){
                let t1 = tab[i];
                let t2 = tab[i+1];
                tab[i] = t2;
                tab[i+1] = t1;
            }
        }
        T++;
    }
    return tab;
}
console.log(trierTableau([5, 3, 8, 1, 2]));

